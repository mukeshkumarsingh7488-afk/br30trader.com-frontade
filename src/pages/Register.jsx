import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const timerRef = useRef(null);

  const apiBase = window.API_BASE_URL || import.meta.env.VITE_API_BASE_URL || "https://my-backend-1-avpd.onrender.com";

  const [step, setStep] = useState("register");
  const [showPass, setShowPass] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [regLoading, setRegLoading] = useState(false);
  const [verifyLoading, setVerifyLoading] = useState(false);

  const validateInput = (fullName, userEmail, pass) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if (fullName.length < 3) return "Name too short!";
    if (!emailRegex.test(userEmail)) return "Invalid Email!";
    if (!passRegex.test(pass)) return "Use 8+ chars with 1 Special Character!";
    return null;
  };

  const startTimer = () => {
    let timeLeft = 30;
    setTimer(30);
    setCanResend(false);
    clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      if (timeLeft <= 0) {
        clearInterval(timerRef.current);
        setCanResend(true);
      } else {
        setTimer(timeLeft);
      }
      timeLeft--;
    }, 1000);
  };

  const handleRegister = async (e) => {
    if (e) e.preventDefault();

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const error = validateInput(cleanName, cleanEmail, password);

    if (error) {
      alert(error);
      return;
    }

    setRegLoading(true);

    try {
      const res = await fetch(`${apiBase}/api/auth/me`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: cleanName, email: cleanEmail, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("OTP Sent!");
        setStep("otp");
        startTimer();
      } else {
        alert(data.msg || "Registration Failed!");
      }
    } catch (err) {
      alert("Server Error!");
    } finally {
      setRegLoading(false);
    }
  };

  const handleVerify = async (e) => {
    if (e) e.preventDefault();

    const cleanOtp = otp.trim();
    const cleanEmail = email.trim();

    if (cleanOtp.length < 6) {
      alert("Enter 6-digit OTP!");
      return;
    }

    setVerifyLoading(true);

    try {
      const res = await fetch(`${apiBase}/api/auth/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: cleanEmail, otp: cleanOtp }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Account Verified Successfully!");
        setTimeout(() => {
          navigate("/login", { replace: true });
        }, 100);
      } else {
        alert("❌ " + (data.msg || "Verification Failed!"));
      }
    } catch (err) {
      console.error("Fetch Error:", err);
      alert("❌ Server Error! Please check your connection.");
    } finally {
      setVerifyLoading(false);
    }
  };

  const resendOTP = () => {
    handleRegister();
  };

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <section className="register-page">
      <div className="register-container">
        <h2 className="register-heading">Register</h2>

        {step === "register" && (
          <form onSubmit={handleRegister}>
            <label>Full Name</label>
            <div className="input-box">
              <input value={name} name="username" placeholder="Only letters allowed" required onChange={(e) => setName(e.target.value.replace(/[^a-zA-Z\s]/g, ""))} />
            </div>

            <label>Email Address</label>
            <div className="input-box">
              <input value={email} name="email" type="email" placeholder="example@mail.com" autoComplete="email" required onChange={(e) => setEmail(e.target.value)} />
            </div>

            <label>Password</label>
            <div className="input-box">
              <input value={password} name="password" type={showPass ? "text" : "password"} placeholder="8+ chars, 1 Special (@#$%^&*)" autoComplete="new-password" required onChange={(e) => setPassword(e.target.value)} />
              <span className="toggle-btn" onClick={() => setShowPass(!showPass)}>
                {showPass ? "🙈" : "👁️"}
              </span>
            </div>

            <button type="submit" disabled={regLoading}>
              {regLoading ? "Sending OTP... ⏳" : "Send OTP"}
            </button>
          </form>
        )}

        {step === "otp" && (
          <form onSubmit={handleVerify}>
            <p className="otp-info">Verification code sent to email.</p>

            <label>Enter 6-Digit OTP</label>
            <div className="input-box">
              <input value={otp} type="number" placeholder="Ex: 123456" required onChange={(e) => setOtp(e.target.value)} />
            </div>

            <button type="submit" disabled={verifyLoading}>
              {verifyLoading ? "Verifying... ⏳" : "Verify & Register"}
            </button>

            <div className="resend-area">
              {!canResend ? (
                <p className="timer-text">
                  Resend in <span>{timer}</span>s
                </p>
              ) : (
                <button type="button" className="resend-btn" onClick={resendOTP} disabled={regLoading}>
                  Resend OTP
                </button>
              )}
            </div>
          </form>
        )}

        <div className="links">
          <Link to="/login">Already have an account? Login</Link>
        </div>
      </div>

      <style>{`
.register-page{min-height:calc(100vh - 120px);display:flex;justify-content:center;align-items:center;background:#050505;padding:40px 20px;font-family:Poppins,sans-serif;box-sizing:border-box}
.register-container{width:100%;max-width:380px;background:#1e293b;padding:30px;border-radius:20px;border:1px solid #334155;box-shadow:0 10px 30px rgba(0,0,0,.4)}
.register-heading{text-align:center;margin-bottom:25px;color:#fff;font-weight:600}
.register-container label{font-size:13px;font-weight:500;color:#cbd5e1;margin-bottom:6px;display:block}
.input-box{display:flex;align-items:center;background:#050505;border:1px solid #334155;border-radius:10px;padding:5px 12px;margin-bottom:15px;position:relative;transition:.3s}
.input-box:focus-within{border-color:#a020f0;box-shadow:0 0 8px rgba(160,32,240,.2)}
.input-box input{background:transparent;border:none;outline:none;color:#fff;flex:1;padding:10px 5px;font-size:15px;min-width:0}
.toggle-btn{cursor:pointer;color:#94a3b8;font-size:18px;user-select:none}
.register-container button{width:100%;padding:12px;border:none;border-radius:10px;background:#a020f0;color:#fff;font-size:16px;cursor:pointer;transition:.3s ease;font-weight:600;margin-top:10px}
.register-container button:hover:not(:disabled){background:#8219c4;transform:translateY(-2px);box-shadow:0 5px 15px rgba(160,32,240,.3)}
.register-container button:disabled{opacity:.7;cursor:not-allowed}
.links{display:flex;justify-content:center;margin-top:20px}
.links a{text-decoration:none;color:#a020f0;font-size:14px;font-weight:500;padding:10px}
.links a:hover{text-decoration:underline}
.otp-info{text-align:center;font-size:13px;color:#94a3b8;margin-bottom:15px}
.resend-area{text-align:center;margin-top:15px}
.timer-text{font-size:12px;color:#94a3b8}
.resend-btn{background:none!important;color:#3b82f6!important;border:none!important;cursor:pointer!important;text-decoration:underline;font-size:13px!important;margin-top:0!important;padding:0!important;transform:none!important;box-shadow:none!important}
@media(max-width:480px){.register-page{min-height:auto;padding:120px 16px 40px}.register-container{padding:20px}.register-heading{font-size:20px}}
`}</style>
    </section>
  );
}

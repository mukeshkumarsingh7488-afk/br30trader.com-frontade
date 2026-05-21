import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const timerRef = useRef(null);

  const apiBase = window.API_BASE_URL || import.meta.env.VITE_API_BASE_URL || "https://my-backend-1-avpd.onrender.com";

  const [step, setStep] = useState("request");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);

  const [reqLoading, setReqLoading] = useState(false);
  const [resetLoading, setResetLoading] = useState(false);

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

  const handleRequestOTP = async (e) => {
    if (e) e.preventDefault();

    const cleanEmail = email.trim();

    if (!cleanEmail.includes("@")) {
      alert("Please enter valid email!");
      return;
    }

    setReqLoading(true);

    try {
      const res = await fetch(`${apiBase}/api/auth/forgot-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: cleanEmail }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("OTP Sent Successfully✅ !");
        setStep("reset");
        startTimer();
      } else {
        alert(data.msg || "Error sending OTP!");
      }
    } catch (err) {
      alert("Server connection failed❌!");
    } finally {
      setReqLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    if (e) e.preventDefault();

    const passRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

    if (!passRegex.test(newPassword)) {
      alert("Use 8+ chars & Special Char.");
      return;
    }

    if (otp.length < 6) {
      alert("Enter 6-digit OTP!");
      return;
    }

    setResetLoading(true);

    try {
      const res = await fetch(`${apiBase}/api/auth/reset-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          otp,
          newPassword,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Password Changed Successfully! 🚀");

        setTimeout(() => {
          navigate("/login");
        }, 800);
      } else {
        alert(data.msg || "Wrong OTP or Session Expired!");
      }
    } catch (err) {
      alert("Server Connection Error!");
    } finally {
      setResetLoading(false);
    }
  };

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <section className="forgot-page">
      <div className="forgot-container">
        <h2>Reset Password</h2>

        {step === "request" && (
          <form onSubmit={handleRequestOTP}>
            <p className="info-text">Enter email to receive reset code.</p>

            <label>Email Address</label>

            <div className="input-box">
              <input type="email" placeholder="example@mail.com" autoComplete="username" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <button type="submit" disabled={reqLoading}>
              {reqLoading ? "Sending..." : "Send Reset OTP"}
            </button>
          </form>
        )}

        {step === "reset" && (
          <form onSubmit={handleResetPassword}>
            <label>6-Digit OTP</label>

            <div className="input-box">
              <input type="number" placeholder="Ex: 123456" required value={otp} onChange={(e) => setOtp(e.target.value)} />
            </div>

            <label>New Password</label>

            <div className="input-box">
              <input type={showPass ? "text" : "password"} placeholder="8+ chars, 1 Special" autoComplete="new-password" required value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />

              <span className="toggle-btn" onClick={() => setShowPass(!showPass)}>
                {showPass ? "🙈" : "👁️"}
              </span>
            </div>

            <button type="submit" disabled={resetLoading}>
              {resetLoading ? "Updating..." : "Update Password"}
            </button>

            <div className="resend-area">
              {!canResend ? (
                <p className="timer-text">
                  Resend in <span>{timer}</span>s
                </p>
              ) : (
                <button type="button" className="resend-btn" onClick={handleRequestOTP}>
                  Resend OTP
                </button>
              )}
            </div>
          </form>
        )}

        <div className="links">
          <Link to="/login">Back to Login</Link>
        </div>
      </div>

      <style>{`
.forgot-page{min-height:calc(100vh - 120px);display:flex;justify-content:center;align-items:center;background:#050505;padding:40px 20px;font-family:Poppins,sans-serif;box-sizing:border-box}
.forgot-container{width:100%;max-width:360px;background:#1e293b;padding:30px;border-radius:20px;border:1px solid #334155;box-shadow:0 10px 30px rgba(0,0,0,.4)}
.forgot-container h2{text-align:center;color:#fff;margin-bottom:25px;font-weight:600}
.forgot-container label{font-size:14px;color:#cbd5e1;font-weight:500;display:block;margin-bottom:8px}
.info-text{text-align:center;font-size:13px;color:#94a3b8;margin-bottom:15px}
.input-box{position:relative;width:100%;margin-bottom:15px}
.input-box input{width:100%;padding:12px 15px;border-radius:10px;border:1px solid #334155;background:#050505;color:#fff;outline:none;transition:.3s}
.input-box input:focus{border-color:#a020f0;box-shadow:0 0 8px rgba(160,32,240,.2)}
.toggle-btn{position:absolute;right:15px;top:12px;cursor:pointer;color:#94a3b8;font-size:18px;user-select:none}
.forgot-container button{width:100%;padding:12px;border:none;border-radius:10px;background:#a020f0;color:#fff;cursor:pointer;transition:.3s ease;font-weight:600;font-size:16px}
.forgot-container button:hover:not(:disabled){background:#8b1ad4;transform:translateY(-2px);box-shadow:0 5px 15px rgba(160,32,240,.3)}
.forgot-container button:disabled{opacity:.7;cursor:not-allowed}
.links{display:flex;justify-content:center;margin-top:20px}
.links a{text-decoration:none;color:#a020f0;font-size:14px;font-weight:500}
.links a:hover{text-decoration:underline}
.resend-area{text-align:center;margin-top:15px}
.timer-text{font-size:12px;color:#94a3b8}
.resend-btn{background:none!important;color:#3b82f6!important;border:none!important;cursor:pointer!important;text-decoration:underline!important;font-size:13px!important;padding:0!important;margin-top:0!important;transform:none!important;box-shadow:none!important}
@media(max-width:480px){.forgot-page{min-height:auto;padding:120px 16px 40px}.forgot-container{padding:20px}.forgot-container h2{font-size:20px}}
`}</style>
    </section>
  );
}

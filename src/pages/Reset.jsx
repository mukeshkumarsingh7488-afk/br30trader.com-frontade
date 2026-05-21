import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://my-backend-1-avpd.onrender.com";

export default function Reset() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = "Reset Password | BR30 Trader";
  }, []);

  const resetPassword = async (event) => {
    event.preventDefault();

    if (!email.trim() || !token.trim() || !newPassword) {
      alert("Bhai, please enter all details!");
      return;
    }

    const passRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

    if (!passRegex.test(newPassword)) {
      alert("Password weak hai! Use 8+ chars & Special Character.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/reset-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          token: token.trim(),
          newPassword,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Password updated successfully! 🚀");

        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        alert(data.msg || data.message || "Invalid OTP or Email!");
      }
    } catch (err) {
      alert("Server Connection Error!");
    } finally {
      setLoading(false);
    }
  };

  const styles = `.reset-page{min-height:calc(100vh - 120px);display:flex;justify-content:center;align-items:center;background-color:#050505;padding:40px 20px;font-family:"Poppins",sans-serif;box-sizing:border-box}.reset-container{width:100%;max-width:360px;background:#1e293b;padding:30px;border-radius:20px;border:1px solid #334155;box-shadow:0 10px 30px rgba(0,0,0,.4);text-align:center}.login-heading{color:#ffffff;margin-bottom:25px;font-weight:600}.reset-label{display:block;color:#cbd5e1;text-align:left;margin-bottom:7px;font-size:14px;font-weight:500}.reset-input{width:100%;padding:12px 15px;margin-bottom:15px;border-radius:10px;border:1px solid #334155;background:#050505;color:white;outline:none;transition:.3s;font-size:14px;box-sizing:border-box}.reset-input:focus{border-color:#a020f0;box-shadow:0 0 8px rgba(160,32,240,.2)}.reset-btn{width:100%;padding:12px;border:none;border-radius:10px;background:#a020f0;color:white;cursor:pointer;transition:.3s ease;font-weight:600;font-size:16px;margin-top:5px}.reset-btn:hover{background:#8219c4;transform:translateY(-2px);box-shadow:0 5px 15px rgba(160,32,240,.3)}.reset-btn:disabled{opacity:.7;cursor:not-allowed;transform:none}.links{margin-top:20px}.links a{text-decoration:none;color:#a020f0;font-size:14px;font-weight:500}.links a:hover{text-decoration:underline}@media(max-width:480px){.reset-page{min-height:auto;padding:120px 16px 40px}.reset-container{padding:25px 20px}.login-heading{font-size:20px}}`;

  return (
    <>
      <style>{styles}</style>

      <main className="reset-page">
        <div className="reset-container">
          <h2 className="login-heading">Reset Password</h2>

          <form onSubmit={resetPassword}>
            <label className="reset-label">Registered Email</label>
            <input className="reset-input" type="email" placeholder="example@mail.com" autoComplete="username" required value={email} onChange={(e) => setEmail(e.target.value)} />

            <label className="reset-label">Reset OTP/Token</label>
            <input className="reset-input" type="text" placeholder="Enter 6-digit OTP" required value={token} onChange={(e) => setToken(e.target.value)} />

            <label className="reset-label">New Password</label>
            <input className="reset-input" type="password" placeholder="8+ chars, 1 Special" autoComplete="new-password" required value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />

            <button type="submit" className="reset-btn" disabled={loading}>
              {loading ? "Updating..." : "Update Password"}
            </button>
          </form>

          <div className="links">
            <Link to="/login">Back to Login</Link>
          </div>
        </div>
      </main>
    </>
  );
}

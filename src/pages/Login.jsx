import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const apiBase = import.meta.env.VITE_API_URL || "https://my-backend-1-avpd.onrender.com";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateEmail = (value) =>
    String(value)
      .toLowerCase()
      .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

  const handleLogin = async (e) => {
    e.preventDefault();
    const cleanEmail = email.trim();
    if (!cleanEmail || !validateEmail(cleanEmail)) {
      alert("Invalid Email!");
      return;
    }
    if (!password) {
      alert("Password Required!");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`${apiBase}/api/auth/login`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email: cleanEmail, password }) });
      const data = await res.json();
      if (res.ok && data.token && data.user) {
        const userRole = data.user.role || "user";

        localStorage.clear();

        localStorage.setItem("token", data.token);
        localStorage.setItem("role", userRole);
        localStorage.setItem("username", data.user.name || "User");
        localStorage.setItem("userData", JSON.stringify(data.user));
        localStorage.setItem("br30_token", data.token);
        localStorage.setItem("br30_user", JSON.stringify(data.user));

        if (userRole === "admin") {
          alert("👑 Welcome Mukesh - Master Admin 🚀");
          navigate("/dashboard/admin", { replace: true });
        } else {
          alert("Login Success! 🚀");
          navigate("/dashboard", { replace: true });
        }

        return;
      }
      alert(data.msg || data.message || "Login Failed!");
      setLoading(false);
    } catch (err) {
      console.error(err);
      alert("Server Connection Error!");
      setLoading(false);
    }
  };

  return (
    <section className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label>Email Address</label>
          <div className="input-box">
            <input type="email" placeholder="example@mail.com" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <label>Password</label>
          <div className="input-box">
            <input type={showPass ? "text" : "password"} placeholder="Enter your password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <span className="toggle-btn" onClick={() => setShowPass(!showPass)}>
              {showPass ? "🙈" : "👁️"}
            </span>
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Processing..." : "Login to Account"}
          </button>
        </form>
        <div className="links">
          <Link to="/register">Create Account</Link>
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
      </div>
      <style>{`.login-page{min-height:calc(100vh - 120px);display:flex;justify-content:center;align-items:center;background:#050505;padding:40px 20px;font-family:Poppins,sans-serif;box-sizing:border-box}.login-container{width:100%;max-width:360px;background:#1e293b;padding:30px;border-radius:20px;border:1px solid #334155;box-shadow:0 10px 30px rgba(0,0,0,.4)}.login-container h2{text-align:center;margin-bottom:25px;color:#fff;font-weight:600}.login-container label{font-size:14px;color:#cbd5e1;font-weight:500;display:block;margin-bottom:8px}.input-box{display:flex;align-items:center;background:#050505;border:1px solid #334155;border-radius:10px;padding:5px 12px;margin-bottom:20px;position:relative;transition:.3s}.input-box:focus-within{border-color:#a020f0;box-shadow:0 0 8px rgba(160,32,240,.2)}.input-box input{background:transparent;border:none;outline:none;color:#fff;flex:1;padding:10px 5px;font-size:15px;min-width:0}.toggle-btn{cursor:pointer;color:#94a3b8;font-size:18px;user-select:none}.login-container button{width:100%;padding:12px;border:none;border-radius:10px;background:#a020f0;color:#fff;font-size:16px;cursor:pointer;transition:.3s ease;font-weight:600;margin-top:5px}.login-container button:hover:not(:disabled){background:#8219c4;transform:translateY(-2px);box-shadow:0 5px 15px rgba(160,32,240,.3)}.login-container button:disabled{opacity:.7;cursor:not-allowed}.links{display:flex;justify-content:space-between;margin-top:20px;gap:12px}.links a{text-decoration:none;color:#a020f0;font-size:14px;font-weight:500}.links a:hover{text-decoration:underline}@media(max-width:480px){.login-page{min-height:auto;padding:120px 16px 40px}.login-container{padding:20px}.links{flex-direction:column;text-align:center;gap:10px}}`}</style>
    </section>
  );
}

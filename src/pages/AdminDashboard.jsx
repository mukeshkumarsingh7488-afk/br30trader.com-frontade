import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const API = import.meta.env.VITE_API_URL;

  const [stats, setStats] = useState({
    totalUsers: 0,
    vipCount: 0,
    normalCount: 0,
    adminFee: 1680,
  });

  const [target, setTarget] = useState("all");
  const [subject, setSubject] = useState("");
  const [htmlContent, setHtmlContent] = useState("");
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token") || localStorage.getItem("br30_token");
  const storedUser = localStorage.getItem("br30_user");
  const user = storedUser ? JSON.parse(storedUser) : null;
  const role = localStorage.getItem("role") || user?.role;
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    if (!token || role !== "admin") {
      Swal.fire("Access Denied", "Bhai, ye sirf Admin ke liye hai!", "warning");
      navigate("/login");
      return;
    }
    loadStats();
  }, [token, role, navigate]);

  const loadStats = async () => {
    try {
      const token = localStorage.getItem("token") || localStorage.getItem("br30_token");

      const query = startDate && endDate ? `?startDate=${startDate}&endDate=${endDate}` : "";

      const res = await fetch(`${API}/api/auth/user-stats${query}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      console.log("ADMIN STATS RESPONSE:", data);

      if (res.ok && data.success) {
        setStats({
          totalUsers: data.totalUsers || 0,
          vipCount: data.vipCount || 0,
          normalCount: data.normalCount || 0,
          adminFee: data.adminFee || 1680,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const sendBulkMail = async () => {
    if (!subject || !htmlContent) {
      return Swal.fire({
        title: "⚠️ Missing Field",
        text: "Subject aur Message likho bhai",
        icon: "warning",
        background: "#0f172a",
        color: "#fff",
        confirmButtonColor: "#f59e0b",
      });
    }

    setLoading(true);

    try {
      const res = await fetch(`${API}/api/auth/send-offers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          target,
          subject,
          htmlContent,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        Swal.fire({
          title: "🚀 Coupon Launch Success",
          text: data.message || "New Coupon Successfully Activated!",
          icon: "success",
          background: "#0f172a",
          color: "#fff",
          confirmButtonColor: "#a020f0",
        });

        setSubject("");
        setHtmlContent("");
      } else {
        Swal.fire({
          title: "❌ Error",
          text: data.message || "Something went wrong!",
          icon: "error",
          background: "#0f172a",
          color: "#fff",
          confirmButtonColor: "#ef4444",
        });
      }
    } catch (err) {
      Swal.fire({
        title: "🔥 Server Error",
        text: "Backend connection failed",
        icon: "error",
        background: "#0f172a",
        color: "#fff",
        confirmButtonColor: "#ef4444",
      });
    } finally {
      setLoading(false);
    }
  };

  const cancelActiveCoupon = async () => {
    const confirm = await Swal.fire({
      title: "Cancel Active Coupon?",
      text: "Current coupon band karna hai?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    });

    if (!confirm.isConfirmed) return;

    try {
      const res = await fetch(`${API}/api/auth/cancel-coupon`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (data.success) {
        Swal.fire("Done", data.msg || "Coupon Cancelled", "success");
      } else {
        Swal.fire("Error", data.msg || "Failed", "error");
      }
    } catch (err) {
      Swal.fire("Server Error", "Backend error", "error");
    }
  };

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <style>{`.admin-page{min-height:100vh;background:#000;color:#fff;display:flex;font-family:"Segoe UI",sans-serif}.admin-sidebar{width:250px;background:#050505;border-right:1px solid #222;padding:20px;position:fixed;height:100vh;overflow-y:auto}.admin-logo{font-size:22px;font-weight:700;color:#00ffcc;margin-bottom:40px;display:flex;align-items:center;gap:10px}.admin-side-btn{width:100%;display:flex;align-items:center;gap:12px;padding:12px 15px;margin-bottom:8px;background:transparent;border:none;border-radius:8px;color:#bbb;font-size:14px;text-decoration:none;cursor:pointer;transition:.3s}.admin-side-btn:hover,.admin-side-btn.active{background:#111;color:#00ffcc;border-left:4px solid #00ffcc}.admin-home-btn{color:#ffca28!important;animation:blinkBtn 1s linear infinite!important}@keyframes blinkBtn{0%{opacity:1}50%{opacity:.2}100%{opacity:1}}.admin-main{flex:1;margin-left:290px;padding:30px}.admin-header{display:flex;justify-content:space-between;align-items:center;gap:20px;margin-bottom:30px;flex-wrap:wrap}.admin-header h2{margin:0;font-size:22px}.admin-filter{display:flex;align-items:center;gap:10px;flex-wrap:wrap}.admin-date{background:#111;border:1px solid #333;color:#00ffcc;padding:10px 12px;border-radius:8px;outline:none}.admin-date::-webkit-calendar-picker-indicator{filter:invert(1);cursor:pointer}.admin-btn{padding:10px 16px;border:none;border-radius:8px;font-size:13px;font-weight:700;cursor:pointer;transition:.3s}.admin-btn-blue{background:#007bff;color:#fff}.admin-btn-blue:hover{background:#0056b3}.admin-btn-dark{background:#222;color:#fff}.admin-btn-dark:hover{background:#333}.admin-btn-green{background:#10b981;color:#fff}.admin-btn-red{background:#dc2626;color:#fff}.admin-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-bottom:30px}.admin-card{background:#111;border:1px solid #222;padding:20px;border-radius:12px}.admin-card h3{margin:0;font-size:12px;letter-spacing:1px;color:#777}.admin-card p{margin-top:14px;font-size:24px;font-weight:700}.admin-blue p{color:#007bff}.admin-green p{color:#10b981}.admin-yellow p{color:#ffca28}.admin-red p{color:#ff4d4d}.admin-marketing{background:#0f172a;border:1px solid #334155;padding:25px;border-radius:20px;display:flex;flex-direction:column;gap:15px}.admin-marketing h4{margin:0;font-size:14px;letter-spacing:1px;color:#94a3b8}.admin-input{width:100%;background:#000;border:1px solid #334155;color:#fff;padding:15px;border-radius:12px;outline:none;font-size:14px;box-sizing:border-box}.admin-textarea{height:140px;resize:none}.admin-send-btn{width:100%;padding:16px;background:#a020f0;color:#fff;border:none;border-radius:14px;font-size:16px;font-weight:700;cursor:pointer;transition:.3s}.admin-send-btn:hover{opacity:.8}.admin-send-btn:disabled{opacity:.5;cursor:not-allowed}.admin-coupon{border-top:1px solid #334155;padding-top:20px}.admin-cancel-btn{width:100%;padding:15px;background:transparent;border:1.5px solid #f87171;color:#f87171;border-radius:14px;font-weight:700;cursor:pointer}.admin-coupon p{text-align:center;font-size:12px;color:#94a3b8;margin-top:10px}@media(max-width:900px){.admin-page{display:block}.admin-sidebar{position:relative;width:auto;height:auto}.admin-main{margin-left:0;padding:20px}.admin-stats{grid-template-columns:repeat(2,1fr)}}@media(max-width:600px){.admin-stats{grid-template-columns:1fr}.admin-header{flex-direction:column;align-items:flex-start}.admin-filter{width:100%}.admin-btn,.admin-date{width:100%}}`}</style>

      <div className="admin-page">
        <aside className="admin-sidebar">
          <div className="admin-logo">
            <i className="fas fa-rocket"></i>
            BR30 ANALYTICS
          </div>

          <nav>
            <button className="admin-side-btn active">
              <i className="fas fa-th-large"></i>
              Overview
            </button>

            <Link className="admin-side-btn" to="/admin/users">
              <i className="fas fa-users"></i>
              User Management
            </Link>

            <Link className="admin-side-btn" to="/admin/reviews">
              <i className="fas fa-history"></i>
              Review Management
            </Link>

            <Link className="admin-side-btn" to="/admin/course-edit">
              <i className="fas fa-pen"></i>
              Course Edit
            </Link>

            <Link className="admin-side-btn" to="/admin/load-course">
              <i className="fas fa-book"></i>
              Load Course
            </Link>

            <Link className="admin-side-btn" to="/admin/bell-notification">
              <i className="fas fa-bell"></i>
              Admin Alert
            </Link>

            <Link className="admin-side-btn" to="/admin/announcement">
              <i className="fas fa-bullhorn"></i>
              Announcement
            </Link>

            <button className="admin-side-btn" onClick={logout}>
              <i className="fas fa-right-from-bracket"></i>
              Logout
            </button>

            <hr style={{ border: "0.5px solid #222", margin: "20px 0" }} />

            <Link className="admin-side-btn admin-home-btn" to="/" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-arrow-alt-circle-left"></i>
              Back to Home
            </Link>
          </nav>
        </aside>

        <main className="admin-main">
          <div className="admin-header">
            <h2>👑 Master Admin Dashboard</h2>

            <div className="admin-filter">
              <input type="date" className="admin-date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />

              <input type="date" className="admin-date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />

              <button className="admin-btn admin-btn-blue" onClick={loadStats}>
                Apply
              </button>

              <button className="admin-btn admin-btn-dark">
                <i className="fas fa-sync-alt"></i>
              </button>

              <button className="admin-btn admin-btn-red">PDF</button>

              <button className="admin-btn admin-btn-green">CSV</button>
            </div>
          </div>

          <div className="admin-stats">
            <div className="admin-card admin-blue">
              <h3>TOTAL USERS</h3>
              <p>{stats.totalUsers}</p>
            </div>

            <div className="admin-card admin-green">
              <h3>VIP USERS</h3>
              <p>{stats.vipCount}</p>
            </div>

            <div className="admin-card admin-yellow">
              <h3>NORMAL USERS</h3>
              <p>{stats.normalCount}</p>
            </div>

            <div className="admin-card admin-red">
              <h3>PLATFORM FEE</h3>
              <p>₹{stats.adminFee}</p>
            </div>
          </div>

          <section className="admin-marketing">
            <h4>
              <i className="fas fa-bullhorn"></i> BULK MARKETING
            </h4>

            <select className="admin-input" value={target} onChange={(e) => setTarget(e.target.value)}>
              <option value="all">Target: All Users</option>
              <option value="vip">Target: VIP Users</option>
              <option value="normal">Target: Normal Users</option>
            </select>

            <input type="text" className="admin-input" placeholder="Offer Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />

            <textarea className="admin-input admin-textarea" placeholder="HTML Message" value={htmlContent} onChange={(e) => setHtmlContent(e.target.value)}></textarea>

            <button className="admin-send-btn" onClick={sendBulkMail} disabled={loading}>
              {loading ? "Sending..." : "🚀 Send Blast Now"}
            </button>

            <div className="admin-coupon">
              <button className="admin-cancel-btn" onClick={cancelActiveCoupon}>
                🚫 Cancel Active Coupon
              </button>

              <p>(Stop current website discount instantly)</p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

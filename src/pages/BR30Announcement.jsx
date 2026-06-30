import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function BR30Announcement() {
  const navigate = useNavigate();
  const API = import.meta.env.VITE_API_URL;

  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendBulkMail = async (e) => {
    e.preventDefault();

    const authToken = localStorage.getItem("token");

    if (!subject || !message) {
      return Swal.fire("Missing Field", "Subject aur Message dono likhna zaroori hai! ⚠️", "warning");
    }

    if (!authToken) {
      Swal.fire("Token Missing", "Pehle login karo 🔑", "error");
      navigate("/");
      return;
    }

    setLoading(true);

    setStatus("Database se users nikaal kar mail bhej raha hoon...");

    try {
      const response = await fetch(`${API}/api/admin/email/send-all-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": authToken,
        },
        body: JSON.stringify({
          subject,
          message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus(`✅ ${data.msg}`);

        Swal.fire("Success", data.msg, "success");

        setSubject("");
        setMessage("");

        setTimeout(() => {
          setStatus("");
        }, 4000);
      } else {
        setStatus(`❌ ${data.msg || "Server Issue"}`);

        Swal.fire("Error", data.msg || "Server Issue", "error");
      }
    } catch (err) {
      console.log(err);

      setStatus("❌ Server se connect nahi ho paya!");

      Swal.fire("Server Error", "Backend ya CORS issue", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`body{margin:0}.email-page{font-family:Georgia,"Times New Roman",Times,serif;background:#050505;color:#e0e0e0;display:flex;justify-content:center;align-items:center;min-height:100vh;padding:20px;box-sizing:border-box}.email-card{background:#1e293b;padding:40px;border-radius:15px;box-shadow:0 10px 40px rgba(0,0,0,.7);width:100%;max-width:550px;border:1px solid #333}.email-card h2{text-align:center;color:#a020f0;margin-bottom:25px;letter-spacing:1px}.email-group{margin-bottom:20px}.email-group label{display:block;margin-bottom:8px;color:#a020f0;font-size:13px;font-weight:700;text-transform:uppercase}.email-input,.email-textarea{width:100%;padding:14px;border-radius:8px;border:1px solid #444;background:#262626;color:#fff;box-sizing:border-box;font-size:16px;outline:none;transition:.3s}.email-input:focus,.email-textarea:focus{border-color:#a020f0;box-shadow:0 0 8px rgba(160,32,240,.3)}.email-textarea{height:150px;resize:none;line-height:1.5}.email-btn{width:100%;padding:15px;background:#a020f0;border:none;border-radius:8px;color:#000;font-weight:800;cursor:pointer;font-size:17px;transition:.4s;margin-top:15px;text-transform:uppercase}.email-btn:hover{background:#b026ff;transform:translateY(-2px);box-shadow:0 5px 15px rgba(160,32,240,.4)}.email-btn:disabled{background:#444;color:#888;cursor:not-allowed;transform:none}.status-msg{text-align:center;margin-top:20px;font-size:15px;font-weight:500;min-height:20px;color:#00ff88}.dashboard-link{display:inline-block;background:#2563eb;color:#fff;padding:8px 14px;border-radius:8px;font-size:12px;font-weight:700;text-decoration:none;transition:.2s}.dashboard-link:hover{background:#1d4ed8;transform:scale(1.05);box-shadow:0 6px 15px rgba(0,0,0,.2)}@media(max-width:600px){.email-card{padding:25px}.email-btn{font-size:15px}}`}</style>

      <div className="email-page">
        <div className="email-card">
          <h2>Admin Bulk Email 📧</h2>

          <form onSubmit={sendBulkMail}>
            <div className="email-group">
              <label>Subject</label>

              <input
                type="text"
                className="email-input"
                placeholder="Eg: Live Market Update 🚀"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    document.getElementById("email-message-box").focus();
                  }
                }}
              />
            </div>

            <div className="email-group">
              <label>Aapka Message</label>

              <textarea id="email-message-box" className="email-textarea" placeholder="Sabhi users ko kya bhejna hai?" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>

            <button type="submit" className="email-btn" disabled={loading}>
              {loading ? "⏳ BHEJ RAHA HOON..." : "SABKO MAIL BHEJO 🚀"}
            </button>
          </form>

          <div className="status-msg">{status}</div>

          <div style={{ marginTop: "15px" }}>
            <Link to="/dashboard/admin" className="dashboard-link">
              BACK TO DASHBOARD
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function Br30BellNotification() {
  const API = import.meta.env.VITE_API_URL;
  const [title, setTitle] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendAlert = async () => {
    if (!title.trim() || !msg.trim()) return Swal.fire("Missing Field", "Title aur Message dono likho bhai!", "warning");
    setLoading(true);
    setSuccess(false);
    try {
      await fetch(`${API}/api/notifications/add`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ message: msg.trim(), senderName: "Admin" }) });
      const pushResponse = await fetch(`${API}/api/admin/send-all`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ title: title.trim(), message: msg.trim() }) });
      if (pushResponse.ok) {
        setSuccess(true);
        setTitle("");
        setMsg("");
        Swal.fire("Success", "✅ Alert & Push Sent Successfully!", "success");
        setTimeout(() => setSuccess(false), 4000);
      } else {
        Swal.fire("Server Error", "Server error aaya bhai.", "error");
      }
    } catch (err) {
      console.error("Error:", err);
      Swal.fire("Connection Error", "Server se connect nahi ho raha!", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`.alert-page{background:#050505;color:#fff;font-family:"Poppins",sans-serif;display:flex;justify-content:center;align-items:center;min-height:100vh;margin:0;padding:20px;box-sizing:border-box}.alert-admin-card{background:#1e293b;padding:40px;border-radius:20px;border:1px solid #a020f0;width:100%;max-width:400px;box-shadow:0 0 30px rgba(160,32,240,.2);text-align:center}.alert-admin-card h2{color:#a020f0;margin-bottom:20px;text-transform:uppercase}.alert-admin-card h2 span{color:#fff}.alert-input,.alert-textarea{width:100%;background:#050505;border:1px solid rgba(160,32,240,.5);border-radius:10px;color:#fff;padding:15px;outline:none;margin-bottom:15px;box-sizing:border-box;font-size:14px}.alert-input:focus,.alert-textarea:focus{border-color:#a020f0;box-shadow:0 0 10px rgba(160,32,240,.25)}.alert-textarea{height:100px;resize:none}.alert-btn{width:100%;padding:12px;background:#a020f0;color:#fff;border:none;border-radius:10px;font-weight:bold;cursor:pointer;transition:.3s}.alert-btn:hover{background:#fff;color:#a020f0;box-shadow:0 0 20px #a020f0}.alert-btn:disabled{opacity:.6;cursor:not-allowed}.alert-status{margin-top:15px;font-size:.8rem;color:#22c55e}.alert-back-wrap{margin-top:15px}.alert-back-btn{display:inline-block;background:#2563eb;color:#fff;padding:8px 14px;border-radius:8px;font-size:12px;font-weight:bold;text-decoration:none;transition:.2s}.alert-back-btn:hover{background:#1d4ed8;transform:scale(1.05);box-shadow:0 6px 15px rgba(0,0,0,.2)}@media(max-width:480px){.alert-admin-card{padding:25px}}`}</style>
      <div className="alert-page">
        <div className="alert-admin-card">
          <h2>
            Post <span>Live Alert</span> 🔔
          </h2>
          <input
            className="alert-input"
            type="text"
            placeholder="Alert Title (e.g. MARKET UPDATE)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                document.getElementById("alert-message-box")?.focus();
              }
            }}
          />
          <textarea
            id="alert-message-box"
            className="alert-textarea"
            placeholder="Type Market Alert (e.g. NIFTY Bullish Move!)"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                sendAlert();
              }
            }}
          ></textarea>
          <button className="alert-btn" onClick={sendAlert} disabled={loading}>
            {loading ? "Sending... ⏳" : "BROADCAST ALERT 🚀"}
          </button>
          {success && <p className="alert-status">✅ Alert & Push Sent Successfully!</p>}
          <div className="alert-back-wrap">
            <Link to="/dashboard/admin" className="alert-back-btn">
              BACK TO DASHBOARD
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

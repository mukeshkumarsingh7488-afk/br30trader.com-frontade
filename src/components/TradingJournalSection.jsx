import React, { useEffect, useMemo, useState } from "react";

export default function TradingJournalSection() {
  const [tradeName, setTradeName] = useState("");
  const [tradeType, setTradeType] = useState("Buy");
  const [status, setStatus] = useState("Profit");
  const [pnl, setPnl] = useState("");
  const [note, setNote] = useState("");
  const [trades, setTrades] = useState([]);
  const [filterDate, setFilterDate] = useState("");

  const apiBase = window.API_BASE_URL || import.meta.env.VITE_API_BASE_URL || "https://my-backend-1-avpd.onrender.com";

  const filteredTrades = useMemo(() => {
    if (!filterDate) return trades;
    return trades.filter((t) => {
      const d = new Date(t.createdAt || t.date).toISOString().slice(0, 10);
      return d === filterDate;
    });
  }, [trades, filterDate]);

  const analytics = useMemo(() => {
    const gross = filteredTrades.reduce((sum, t) => sum + (t.status === "Loss" ? -Number(t.pnl || 0) : Number(t.pnl || 0)), 0);
    const brokerage = filteredTrades.reduce((sum, t) => sum + Number(t.brokerage || 45), 0);
    return { gross, brokerage, net: gross - brokerage };
  }, [filteredTrades]);

  const fetchUserTrades = async () => {
    const token = localStorage.getItem("token");
    if (!token || !apiBase) return;

    try {
      const res = await fetch(`${apiBase}/api/trades/my-trades`, { headers: { "x-auth-token": token } });
      const data = await res.json();
      if (res.ok && Array.isArray(data)) setTrades(data);
    } catch (err) {
      console.error("Fetch Error:", err);
    }
  };

  useEffect(() => {
    fetchUserTrades();
  }, []);

  const saveTrade = async (e) => {
    e.preventDefault();
    console.log("🔥 SAVE BUTTON CLICKED");

    const token = localStorage.getItem("br30_token") || localStorage.getItem("token");
    const amount = Number(pnl);

    if (!token) return alert("⚠️ Please login first to save trades!");
    if (!apiBase) return alert("❌ API URL missing!");
    if (!tradeName.trim() || !amount || amount <= 0) return alert("⚠️ Please enter a valid name and amount.");

    try {
      const res = await fetch(`${apiBase}/api/trades/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          tradeName: tradeName.trim(),
          name: tradeName.trim(),
          action: tradeType,
          type: tradeType,
          result: status,
          status,
          amount,
          pnl: amount,
          lesson: note.trim(),
          note: note.trim(),
          brokerage: 45,
        }),
      });

      const raw = await res.text();

      let data = {};
      try {
        data = raw ? JSON.parse(raw) : {};
      } catch {
        data = { msg: raw };
      }

      console.log("SAVE TRADE STATUS:", res.status);
      console.log("SAVE TRADE RESPONSE:", data);

      if (res.ok) {
        alert(`✅ Saved: ${tradeName}`);
        setTradeName("");
        setTradeType("Buy");
        setStatus("Profit");
        setPnl("");
        setNote("");
        fetchUserTrades();
      } else {
        alert("❌ Error: " + (data.msg || data.message || data.error || "Trade not saved"));
      }
    } catch (err) {
      console.error("Backend Connection Error:", err);
      alert("❌ Backend connection error");
    }
  };

  const deleteTrade = async (id) => {
    const token = localStorage.getItem("token");

    if (!window.confirm("Delete this trade?")) return;

    try {
      const res = await fetch(`${apiBase}/api/trades/${id}`, {
        method: "DELETE",
        headers: {
          "x-auth-token": token,
        },
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Trade deleted");
        fetchUserTrades();
      } else {
        alert(data.msg || "Delete failed");
      }
    } catch (err) {
      console.error(err);
      alert("❌ Backend connection error");
    }
  };

  return (
    <section className="journal-section">
      <h2 className="journal-title">Trading Journal 📓</h2>
      <p className="journal-subtitle">Analyze your trades like a professional.</p>

      <div className="analytics-row">
        <div className="stat-card">
          <small>Total Gross P&L</small>
          <h3>₹{analytics.gross.toLocaleString("en-IN")}</h3>
        </div>
        <div className="stat-card">
          <small>Total Brokerage (Est.)</small>
          <h3>₹{analytics.brokerage.toLocaleString("en-IN")}</h3>
        </div>
        <div className="stat-card">
          <small>Net P&L (After Tax)</small>
          <h3>₹{analytics.net.toLocaleString("en-IN")}</h3>
        </div>
      </div>

      <div className="journal-container">
        <form className="journal-form" onSubmit={saveTrade}>
          <label>Trade Name</label>
          <input type="text" placeholder="BTC / ETH/etc." value={tradeName} onChange={(e) => setTradeName(e.target.value)} />

          <label>Action</label>
          <select value={tradeType} onChange={(e) => setTradeType(e.target.value)}>
            <option value="Buy">BUY 🟢</option>
            <option value="Sell">SELL 🔴</option>
          </select>

          <label>Result Status</label>
          <div className="pnl-toggle">
            <button type="button" className={`pnl-btn ${status === "Profit" ? "active-prof" : ""}`} onClick={() => setStatus("Profit")}>
              Profit 💰
            </button>
            <button type="button" className={`pnl-btn ${status === "Loss" ? "active-loss" : ""}`} onClick={() => setStatus("Loss")}>
              Loss 📉
            </button>
          </div>

          <label>Amount (₹)</label>
          <input type="number" placeholder="Enter P&L Amount" value={pnl} onChange={(e) => setPnl(e.target.value)} />

          <label>Trade Lesson</label>
          <textarea placeholder="What did you learn Today?" value={note} onChange={(e) => setNote(e.target.value)} />

          <button className="save-btn" type="submit" onClick={() => console.log("🟢 BUTTON CLICK")}>
            Save Trade 💾
          </button>
        </form>

        <div className="journal-history">
          <div className="history-top-bar">
            <h3>Recent History 🕒</h3>
            <div className="date-filter-group">
              <input type="date" value={filterDate} onChange={(e) => setFilterDate(e.target.value)} />
              <button type="button" onClick={() => setFilterDate("")}>
                ↻
              </button>
            </div>
          </div>

          <div className="trade-list">
            {filteredTrades.length === 0 ? (
              <p className="empty-history">No trade history found.</p>
            ) : (
              filteredTrades.map((t, i) => (
                <div className="trade-item" key={t._id || i}>
                  <div>
                    <b>{t.name}</b>
                    <span>
                      {t.type} • {t.status}
                    </span>
                  </div>
                  <strong className={t.status === "Loss" ? "loss" : "profit"}>
                    {t.status === "Loss" ? "-" : "+"}₹{Number(t.pnl || 0).toLocaleString("en-IN")}
                  </strong>
                  <button className="delete-btn" onClick={() => deleteTrade(t._id)}>
                    🗑️
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <style>{`
.journal-section{width:100%;padding:80px 5%;background:radial-gradient(circle at top,#04150f,#000);font-family:Arial,sans-serif}
.journal-title{text-align:center;color:#00ff95;font-size:42px;margin:0 0 10px;font-weight:800}
.journal-subtitle{text-align:center;color:#9ca3af;font-size:16px;margin:0 0 38px}
.analytics-row{max-width:1100px;margin:0 auto 18px;display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.stat-card{background:#aeb7c9;border:1px solid #00ff95;border-radius:10px;text-align:center;padding:14px;color:#000}
.stat-card small{font-weight:800}.stat-card h3{margin:8px 0 0;font-size:20px}
.journal-container{max-width:1100px;margin:auto;display:grid;grid-template-columns:440px 1fr;gap:24px}
.journal-form,.journal-history{background:#050505;border:1px solid rgba(160,32,240,.35);border-radius:18px;padding:24px}
.journal-form label{display:block;color:#d4d4d8;font-size:13px;font-weight:800;margin:0 0 7px;text-transform:uppercase;letter-spacing:.5px}
.journal-form input,.journal-form select,.journal-form textarea,.date-filter-group input{width:100%;height:40px;background:#020403;border:1px solid #00ff95;border-radius:8px;color:#fff;padding:0 12px;font-size:15px;outline:none}
.journal-form textarea{height:70px;padding:12px;resize:vertical}
.pnl-toggle{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px}
.pnl-btn{height:44px;border:1px solid #1e293b;border-radius:9px;background:#050505;color:#9ca3af;font-size:15px;cursor:pointer}
.active-prof{background:#22c55e;color:#000;border-color:#22c55e}.active-loss{background:#ef4444;color:#fff;border-color:#ef4444}
.save-btn{width:100%;height:48px;margin-top:14px;border:2px solid #00ff95;border-radius:10px;background:transparent;color:#00ff95;font-size:16px;font-weight:800;cursor:pointer}
.save-btn:hover{background:#00ff95;color:#000}
.history-top-bar{display:flex;align-items:center;justify-content:space-between;gap:12px}
.history-top-bar h3{color:#d4d4d8;margin:0;font-size:18px}
.date-filter-group{display:flex;gap:8px}.date-filter-group input{height:32px}.date-filter-group button{height:32px;width:36px;border:1px solid #00ff95;background:#050505;color:#00ff95;border-radius:8px;cursor:pointer}
.trade-list{margin-top:22px;max-height:330px;overflow:auto}
.empty-history{color:#9ca3af;text-align:center;margin-top:60px}
.trade-item{display:flex;align-items:center;justify-content:space-between;gap:12px;background:#07110e;border:1px solid rgba(0,255,149,.2);border-radius:10px;padding:12px;margin-bottom:10px}
.trade-item b{color:#fff;display:block}.trade-item span{color:#9ca3af;font-size:12px}.profit{color:#00ff95}.loss{color:#ef4444}
.date-filter-group input::-webkit-calendar-picker-indicator{filter:invert(1) brightness(3) drop-shadow(0 0 2px #00ff95);cursor:pointer;}
@media(max-width:1000px){.journal-container{grid-template-columns:1fr}.analytics-row{grid-template-columns:1fr}}
@media(max-width:600px){.journal-section{padding:60px 18px}.journal-title{font-size:32px}.journal-form,.journal-history{padding:18px}.history-top-bar{flex-direction:column;align-items:flex-start}.date-filter-group{width:100%}}
.delete-btn{background:#ef4444;border:none;color:#fff;width:34px;height:34px;border-radius:8px;cursor:pointer;font-size:14px;font-weight:700}
.delete-btn:hover{opacity:.85}
      `}</style>
    </section>
  );
}

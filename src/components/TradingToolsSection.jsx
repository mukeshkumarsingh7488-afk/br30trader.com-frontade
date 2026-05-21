import React, { useState } from "react";

export default function TradingToolsSection() {
  const [checkedItems, setCheckedItems] = useState({});
  const [successMsg, setSuccessMsg] = useState(false);
  const [btnText, setBtnText] = useState("Submit Daily Report 📝");
  const [capital, setCapital] = useState("");
  const [riskPercent, setRiskPercent] = useState("");
  const [entry, setEntry] = useState("");
  const [sl, setSl] = useState("");
  const [qty, setQty] = useState(0);
  const [riskAmt, setRiskAmt] = useState("₹0");

  const checklist = ["Followed my Trading Plan? 📋", "Stop-Loss placed in system? 🛡️", "Proper Position Sizing? ⚖️", "No Overtrading today? 🚫", "Waited for my Setup? 🎯", "Risk-Reward is 1:2 or more? 📊", "Controlled my Emotions? 🧠", "Exit based on Logic, not Fear? 🚪"];

  const submitDailyCheck = () => {
    const isAnyChecked = Object.values(checkedItems).some(Boolean);
    if (!isAnyChecked) {
      alert("Please select at least one discipline to proceed.! 🛑");
      return;
    }

    setBtnText("Reporting...");
    setTimeout(() => {
      setBtnText("Submitted ✅");
      setSuccessMsg(true);
      setTimeout(() => {
        setBtnText("Submit Daily Report 📝");
        setSuccessMsg(false);
        setCheckedItems({});
      }, 3000);
    }, 1000);
  };

  const calculateRisk = () => {
    const cap = Number(capital);
    const risk = Number(riskPercent);
    const ent = Number(entry);
    const stop = Number(sl);

    if (!cap || !risk || !ent || !stop || cap <= 0 || risk <= 0 || ent <= 0 || stop <= 0) {
      alert("Please enter valid numbers in all fields!");
      return;
    }

    const riskPerUnit = Math.abs(ent - stop);

    if (riskPerUnit === 0) {
      alert("Entry and SL cannot be same!");
      return;
    }

    const totalRisk = cap * (risk / 100);
    const quantity = Math.floor(totalRisk / riskPerUnit);

    setQty(quantity);
    setRiskAmt("₹" + totalRisk.toLocaleString("en-IN"));
  };

  return (
    <section className="trading-tools-wrapper">
      <div className="tool-card">
        <h2 className="tool-title">
          Daily <span>Discipline</span>
        </h2>
        <p className="tool-subtitle">Trading is 10% Strategy & 90% Psychology.</p>

        <div className="checklist-container">
          {checklist.map((item, index) => (
            <label className="check-item" key={item}>
              <input type="checkbox" checked={!!checkedItems[index]} onChange={(e) => setCheckedItems({ ...checkedItems, [index]: e.target.checked })} />
              <span className="custom-check"></span>
              <p>{item}</p>
            </label>
          ))}
        </div>

        <div className="discipline-footer">
          <button type="button" className="submit-discipline-btn" onClick={submitDailyCheck}>
            {btnText}
          </button>
          {successMsg && <p className="success-msg">✅ Report Saved! Great Job, Trader!</p>}
        </div>
      </div>

      <div className="tool-card featured-tool">
        <h2 className="tool-title">
          Market <span>Sentiment</span>
        </h2>
        <p className="tool-subtitle">Real-time fear and greed level.</p>

        <div className="gauge-container">
          <div className="gauge-base">
            <div className="gauge-needle"></div>
            <span className="label-fear">FEAR</span>
            <span className="label-neutral">NEUTRAL</span>
            <span className="label-greed">GREED</span>
          </div>

          <div className="sentiment-value">
            Mood: <span>Moderate Greed 📈</span>
          </div>

          <div className="market-status-box">
            <div className="status-row">
              <span className="status-pill bullish">Very Bullish 📈</span>
              <span className="status-pill neutral">Neutral ↔️</span>
              <span className="status-pill bearish">Very Bearish 📉</span>
            </div>
            <div className="status-info-text">
              Current Bias: <span>Waiting for Breakout</span>
            </div>
          </div>
        </div>
      </div>

      <div className="tool-card">
        <h2 className="tool-title">
          Risk <span>Calculator</span>
        </h2>
        <p className="tool-subtitle">Manage your capital like a pro.</p>

        <div className="calc-box">
          <div className="input-group">
            <label>Capital (₹)</label>
            <input type="number" placeholder="100000" value={capital} onChange={(e) => setCapital(e.target.value)} />
          </div>
          <div className="input-group">
            <label>Risk (%)</label>
            <input type="number" placeholder="2" value={riskPercent} onChange={(e) => setRiskPercent(e.target.value)} />
          </div>
          <div className="input-group">
            <label>Entry (₹)</label>
            <input type="number" placeholder="450" value={entry} onChange={(e) => setEntry(e.target.value)} />
          </div>
          <div className="input-group">
            <label>SL (₹)</label>
            <input type="number" placeholder="440" value={sl} onChange={(e) => setSl(e.target.value)} />
          </div>
          <button type="button" className="calc-btn" onClick={calculateRisk}>
            Calculate
          </button>
          <div className="result-display">
            <p>
              Qty: <span>{qty}</span>
            </p>
            <p>
              Risk: <span>{riskAmt}</span>
            </p>
          </div>
        </div>
      </div>

      <style>{`
.trading-tools-wrapper{width:100%;padding:55px 5%;display:grid;grid-template-columns:repeat(3,1fr);gap:32px;background:radial-gradient(circle at top,#04150f,#000);align-items:stretch;font-family:Arial,sans-serif}
.tool-card{height:620px;background:#050505;border:1px solid rgba(0,255,170,.35);border-radius:24px;padding:28px 30px;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 0 25px rgba(0,255,170,.08)}
.featured-tool{border-color:#00ff95}
.tool-title{font-size:36px;line-height:1.12;font-weight:800;color:#fff;text-align:center;margin:0 0 10px;font-family:Arial,sans-serif}
.tool-title span{color:#00ff95}
.tool-subtitle{text-align:center;color:#a1a1aa;font-size:14px;margin:0 0 26px;line-height:1.5;font-weight:600}
.checklist-container{display:flex;flex-direction:column;gap:13px}
.check-item{display:flex;align-items:center;gap:12px;cursor:pointer}
.check-item input{display:none}
.custom-check{width:22px;height:22px;border-radius:6px;border:2px solid #00ffae;position:relative;flex-shrink:0}
.custom-check:after{content:"✓";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:#000;font-size:13px;font-weight:900;opacity:0}
.check-item input:checked + .custom-check{background:#00ff95;box-shadow:0 0 12px #00ff95}
.check-item input:checked + .custom-check:after{opacity:1}
.check-item p{color:#d4d4d8;font-size:14px;line-height:1.35;margin:0;font-weight:500}
.discipline-footer{margin-top:auto;border-top:1px solid rgba(255,255,255,.08);padding-top:18px}
.submit-discipline-btn{width:100%;padding:14px;border:2px solid #00ff95;border-radius:12px;background:transparent;color:#00ff95;font-size:14px;font-weight:800;cursor:pointer;text-transform:uppercase;letter-spacing:1px}
.submit-discipline-btn:hover{background:#00ff95;color:#000}
.success-msg{color:#22c55e;font-size:13px;margin:10px 0 0;text-align:center;font-weight:700}
.gauge-container{height:100%;display:flex;flex-direction:column;align-items:center}
.gauge-base{width:260px;height:135px;border-top-left-radius:260px;border-top-right-radius:260px;overflow:hidden;position:relative;background:linear-gradient(90deg,#ff4d4d 0%,#ffbf00 50%,#38d938 100%);margin-top:18px}
.gauge-base:after{content:"";position:absolute;width:200px;height:100px;background:#050505;bottom:0;left:50%;transform:translateX(-50%);border-top-left-radius:200px;border-top-right-radius:200px;z-index:2}
.gauge-needle{position:absolute;width:5px;height:98px;background:#e5e7eb;bottom:0;left:68%;transform-origin:bottom center;transform:rotate(45deg);z-index:5;border-radius:10px;box-shadow:0 0 12px #fff}
.label-fear,.label-neutral,.label-greed{position:absolute;bottom:18px;font-size:11px;font-weight:800;z-index:6;text-shadow:0 1px 4px #000}
.label-fear{left:16px;color:#ffb0b0}
.label-neutral{left:50%;transform:translateX(-50%);color:#ffe600}
.label-greed{right:16px;color:#b7ffbd}
.sentiment-value{margin-top:12px;color:#d4d4d8;font-size:16px;font-weight:700}
.sentiment-value span{color:#00ff95}
.market-status-box{width:100%;margin-top:auto;border-top:1px solid rgba(255,255,255,.08);padding-top:18px}
.status-row{display:flex;gap:10px;justify-content:center;flex-wrap:wrap}
.status-pill{padding:8px 12px;border-radius:9px;font-size:11px;font-weight:700}
.bullish{background:#14281d;color:#4ade80}.neutral{background:#1f2937;color:#d1d5db}.bearish{background:#2a1515;color:#ff7070}
.status-info-text{margin-top:16px;text-align:center;font-size:14px;color:#d4d4d8}.status-info-text span{color:#00ff95;font-weight:800;text-transform:uppercase}
.calc-box{display:flex;flex-direction:column;flex:1}
.input-group{margin-bottom:13px}
.input-group label{display:block;margin-bottom:7px;color:#d4d4d8;font-size:13px;font-weight:700}
.input-group input{width:100%;height:46px;border-radius:11px;border:1px solid rgba(0,255,170,.35);background:#07110e;color:#fff;font-size:15px;padding:0 16px;outline:none}
.input-group input:focus{border-color:#00ff95;box-shadow:0 0 14px rgba(0,255,170,.15)}
.calc-btn{width:100%;height:50px;border:2px solid #00ff95;border-radius:12px;background:transparent;color:#00ff95;font-size:17px;font-weight:800;cursor:pointer;margin-top:2px}
.calc-btn:hover{background:#00ff95;color:#000}
.result-display{margin-top:30px;padding-top:20px;border-top:1px solid rgba(255,255,255,.08)}
.result-display p{font-size:16px;color:#e5e7eb;margin:0 0 8px}.result-display span{color:#00ff95;font-weight:800}
@media(max-width:1100px){.trading-tools-wrapper{grid-template-columns:1fr}.tool-card{height:auto;max-width:700px;width:100%;margin:auto}.tool-title{font-size:34px}.market-status-box,.result-display,.discipline-footer{margin-top:24px}}
@media(max-width:600px){.trading-tools-wrapper{padding:50px 20px;gap:22px}.tool-card{padding:22px 18px;border-radius:22px}.tool-title{font-size:30px}.tool-subtitle{font-size:13px;margin-bottom:20px}.check-item p{font-size:13px}.custom-check{width:20px;height:20px}.submit-discipline-btn{font-size:13px;padding:13px}.gauge-base{width:210px;height:110px}.gauge-base:after{width:160px;height:80px}.gauge-needle{height:78px}.label-fear,.label-neutral,.label-greed{bottom:15px;font-size:9px}.sentiment-value{font-size:14px}.input-group input{height:44px}.calc-btn{height:46px;font-size:15px}}
      `}</style>
    </section>
  );
}

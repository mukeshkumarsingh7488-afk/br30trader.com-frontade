import React, { useState } from "react";

export default function PdfHubSection() {
  const [showVipBox, setShowVipBox] = useState(false);

  const pdfs = [
    ["9 EMA + 15 EMA + FVG (Option Buying)", "/ema-fvg-option-buying"],
    ["9 EMA + 15 EMA + FVG (Option Selling)", "/ema-fvg-option-selling"],
    ["Option Greeks Mastery", "/option-greeks-mastery"],
    ["Option Selling with Hedging", "/option-selling-with-hedging"],
    ["RSI Divergence Full Guide", "/rsi-divergence-full-guide"],
    ["Option Basics for Beginners", "/options-basics-for-beginners"],
    ["Technical Analysis Mastery", "/technical-analysis-mastery"],
    ["Candlestick Patterns Guide", "/candlestick-patterns-guide"],
    ["Support & Resistance Levels", "/support-resistance-levels"],
    ["Moving Averages Trading Logic", "/moving-averages-trading-logic"],
    ["RSI & Stochastic Indicators", "/rsi-stochastic-indicators"],
    ["Fibonacci Retracement Strategy", "/fibonacci-retracement-strategy"],
    ["Bollinger Bands Trading Setup", "/bollinger-bands-trading-setup"],
    ["Volume Analysis Techniques", "/volume-analysis-techniques"],
    ["MACD Indicator Explained", "/macd-indicator-explained"],
    ["EMA Trading Strategy", "/ema-trading-strategy"],
    ["Price Action Mastery", "/price-action-mastery"],
    ["Risk Management Techniques", "/risk-management-techniques"],
    ["Option Buying Guide", "/option-buying-guide"],
    ["Option Selling Guide", "/option-selling-guide"],
    ["Intraday Trading Techniques", "/intraday-trading-techniques"],
    ["Swing Trading Strategies", "/swing-trading-strategies"],
    ["Fair Value Gap (FVG) Trading", "/fair-value-gap-trading"],
    ["Chart Patterns & Signals", "/chart-patterns-signals"],
    ["Trend Analysis Techniques", "/trend-analysis-techniques"],
    ["Option Hedging Strategies", "/option-hedging-strategies"],
    ["Scalping Techniques", "/scalping-techniques"],
    ["Advanced Options Strategies", "/advanced-options-strategies"],
    ["Bullish Option Strategies", "/bullish-option-strategies"],
    ["Bearish Option Strategies", "/bearish-option-strategies"],
    ["Neutral / Volatility Option Strategies", "/neutral-volatility-option-strategies"],
    ["Other Option Strategies", "/other-option-strategies"],
  ];

  const user = JSON.parse(localStorage.getItem("user")) || JSON.parse(localStorage.getItem("br30User")) || null;
  const isVipUser = user?.badge?.toLowerCase() === "vip";

  const handlePdfClick = (e, file) => {
    e.preventDefault();

    if (!isVipUser) {
      setShowVipBox(true);
      return;
    }

    window.open(file, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="pdf-hub-section">
      <div className="pdf-container">
        <div className="pdf-header">
          <h2>
            📚 VIP <span>Course PDF</span> Hub
          </h2>

          <p>Only VIP members can access these premium study materials.</p>
        </div>

        {showVipBox && (
          <div className="vip-lock-box">
            <button className="vip-close" onClick={() => setShowVipBox(false)}>
              ×
            </button>

            <h3>🔒 VIP Access Required</h3>

            <p>This PDF Hub is locked for non-VIP users. Join VIP to unlock all trading PDFs, premium notes, and advanced course resources.</p>

            <a href="/vip-access" className="vip-join-btn">
              🚀 Join VIP Now
            </a>
          </div>
        )}

        <div className="pdf-list scrollable">
          {pdfs.map(([title, file], index) => (
            <a href={file} onClick={(e) => handlePdfClick(e, file)} className="pdf-item" key={index}>
              <i className="fa-solid fa-file-pdf pdf-icon"></i>

              <span>{title}</span>

              <i className={`fa-solid ${isVipUser ? "fa-download" : "fa-lock"} download-icon`}></i>
            </a>
          ))}
        </div>
      </div>

      <style>{`.pdf-hub-section{width:100%;padding:90px 20px;background:radial-gradient(circle at center,rgba(0,255,136,.05),#03110b 45%,#020403 100%);overflow:hidden}.pdf-container{max-width:980px;margin:auto;background:#020202;border:1px solid rgba(168,85,247,.35);border-radius:28px;padding:50px 40px}.pdf-header{text-align:center;margin-bottom:40px}.pdf-header h2{margin:0;color:#00eaff;font-size:28px;font-weight:800}.pdf-header h2 span{color:#00ff88}.pdf-header p{margin:8px 0 0;color:#a1a1aa;font-size:16px}.pdf-list{max-height:430px;overflow-y:auto;padding-right:10px}.pdf-list::-webkit-scrollbar{width:8px}.pdf-list::-webkit-scrollbar-track{background:#111;border-radius:20px}.pdf-list::-webkit-scrollbar-thumb{background:#00ff88;border-radius:20px}.pdf-item{background:#071122;border-radius:12px;padding:16px 22px;margin-bottom:14px;display:flex;align-items:center;gap:18px;text-decoration:none;color:#00ff88;font-size:16px;font-weight:700;transition:.25s ease;border:1px solid transparent}.pdf-item span{flex:1}.pdf-item:hover{transform:translateY(-3px);border-color:#00ff88;box-shadow:0 0 18px rgba(0,255,136,.18)}.pdf-icon{color:#00ff88;font-size:22px}.download-icon{color:#6b7280;font-size:18px}.pdf-item:hover .download-icon{color:#00ff88}.vip-lock-box{position:relative;margin:-15px auto 28px;background:linear-gradient(145deg,rgba(0,255,136,.08),rgba(168,85,247,.08));border:1px solid rgba(0,255,136,.35);border-radius:18px;padding:24px 22px;text-align:center;box-shadow:0 0 24px rgba(0,255,136,.12)}.vip-lock-box h3{margin:0 0 10px;color:#00ff88;font-size:22px}.vip-lock-box p{margin:0 auto 18px;max-width:720px;color:#cbd5e1;font-size:14px;line-height:1.7}.vip-join-btn{display:inline-block;background:#00ff88;color:#001b0f!important;text-decoration:none;font-weight:900;padding:12px 24px;border-radius:12px;box-shadow:0 0 18px rgba(0,255,136,.25)}.vip-close{position:absolute;top:10px;right:14px;background:transparent;border:none;color:#94a3b8;font-size:26px;cursor:pointer}@media(max-width:768px){.pdf-hub-section{padding:70px 14px}.pdf-container{padding:35px 18px}.pdf-header h2{font-size:24px}.pdf-item{padding:14px;font-size:14px;gap:12px}.vip-lock-box{padding:22px 15px}.vip-lock-box h3{font-size:19px}}`}</style>
    </section>
  );
}

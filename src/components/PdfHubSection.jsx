import React from "react";

export default function PdfHubSection() {
  const pdfs = [
    ["9 EMA + 15 EMA + FVG (Option Buying)", `${window.location.origin}/course-files/01-9EMA-15EMA-FVG-Option-Buying.html`],
    ["9 EMA + 15 EMA + FVG (Option Selling)", `${window.location.origin}/course-files/02-9EMA-15EMA-FVG-Option-Selling.html`],
    ["Option Greeks Mastery", `${window.location.origin}/course-files/03-Option-Greeks-Mastery.html`],
    ["Option Selling with Hedging", `${window.location.origin}/course-files/04-Option-Selling-with-Hedging.html`],
    ["RSI Divergence Full Guide", `${window.location.origin}/course-files/05-RSI-Divergence-Full-Guide.html`],
    ["Option Basics for Beginners", `${window.location.origin}/course-files/06-Option-Basics-for-Beginners.html`],
    ["Technical Analysis Mastery", `${window.location.origin}/course-files/07-Technical-Analysis-Mastery.html`],
    ["Candlestick Patterns Guide", `${window.location.origin}/course-files/08-Candlestick-Patterns-Guide.html`],
    ["Support & Resistance Levels", `${window.location.origin}/course-files/09-Support-Resistance-Levels.html`],
    ["Moving Averages Trading Logic", `${window.location.origin}/course-files/10-Moving-Averages-Trading-Logic.html`],
    ["RSI & Stochastic Indicators", `${window.location.origin}/course-files/11-RSI-Stochastic-Indicators.html`],
    ["Fibonacci Retracement Strategy", `${window.location.origin}/course-files/12-Fibonacci-Retracement-Strategy.html`],
    ["Bollinger Bands Trading Setup", `${window.location.origin}/course-files/13-Bollinger-Bands-Trading-Setup.html`],
    ["Volume Analysis Techniques", `${window.location.origin}/course-files/14-Volume-Analysis-Techniques.html`],
    ["MACD Indicator Explained", `${window.location.origin}/course-files/15-MACD-Indicator-Explained.html`],
    ["EMA Trading Strategy", `${window.location.origin}/course-files/16-EMA-Trading-Strategy.html`],
    ["Price Action Mastery", `${window.location.origin}/course-files/17-Price-Action-Mastery.html`],
    ["Risk Management Techniques", `${window.location.origin}/course-files/18-Risk-Management-Techniques.html`],
    ["Option Buying Guide", `${window.location.origin}/course-files/19-Option-Buying-Guide.html`],
    ["Option Selling Guide", `${window.location.origin}/course-files/20-Option-Selling-Guide.html`],
    ["Intraday Trading Techniques", `${window.location.origin}/course-files/21-Intraday-Trading-Techniques.html`],
    ["Swing Trading Strategies", `${window.location.origin}/course-files/22-Swing-Trading-Strategies.html`],
    ["Fair Value Gap (FVG) Trading", `${window.location.origin}/course-files/23-Fair-Value-Gap-Trading.html`],
    ["Chart Patterns & Signals", `${window.location.origin}/course-files/24-Chart-Patterns-and-Signals.html`],
    ["Trend Analysis Techniques", `${window.location.origin}/course-files/25-Trend-Analysis-Techniques.html`],
    ["Option Hedging Strategies", `${window.location.origin}/course-files/26-Option-Hedging-Strategies.html`],
    ["Scalping Techniques", `${window.location.origin}/course-files/27-Scalping-Techniques.html`],
    ["Advanced Options Strategies", `${window.location.origin}/course-files/28-Advanced-Options-Strategies.html`],
    ["Bullish Option Strategies", `${window.location.origin}/course-files/29-Bullish-Option-Strategies.html`],
    ["Bearish Option Strategies", `${window.location.origin}/course-files/30-Bearish-Option-Strategies.html`],
    ["Neutral / Volatility Option Strategies", `${window.location.origin}/course-files/31-Neutral-Volatility-Option-Strategies.html`],
    ["Other Option Strategies", `${window.location.origin}/course-files/32-Other-Option-Strategies.html`],
  ];

  return (
    <section className="pdf-hub-section">
      <div className="pdf-container">
        <div className="pdf-header">
          <h2>
            📚 Free <span>Course PDF</span> Hub
          </h2>

          <p>Master the markets with our curated study material.</p>
        </div>

        <div className="pdf-list scrollable">
          {pdfs.map(([title, file], index) => (
            <a href={file} target="_blank" rel="noopener noreferrer" className="pdf-item" key={index}>
              <i className="fa-solid fa-file-pdf pdf-icon"></i>

              <span>{title}</span>

              <i className="fa-solid fa-download download-icon"></i>
            </a>
          ))}
        </div>
      </div>

      <style>{`.pdf-hub-section{width:100%;padding:90px 20px;background:radial-gradient(circle at center,rgba(0,255,136,.05),#03110b 45%,#020403 100%);overflow:hidden}.pdf-container{max-width:980px;margin:auto;background:#020202;border:1px solid rgba(168,85,247,.35);border-radius:28px;padding:50px 40px}.pdf-header{text-align:center;margin-bottom:40px}.pdf-header h2{margin:0;color:#00eaff;font-size:28px;font-weight:800}.pdf-header h2 span{color:#00ff88}.pdf-header p{margin:8px 0 0;color:#a1a1aa;font-size:16px}.pdf-list{max-height:430px;overflow-y:auto;padding-right:10px}.pdf-list::-webkit-scrollbar{width:8px}.pdf-list::-webkit-scrollbar-track{background:#111;border-radius:20px}.pdf-list::-webkit-scrollbar-thumb{background:#00ff88;border-radius:20px}.pdf-item{background:#071122;border-radius:12px;padding:16px 22px;margin-bottom:14px;display:flex;align-items:center;gap:18px;text-decoration:none;color:#00ff88;font-size:16px;font-weight:700;transition:.25s ease;border:1px solid transparent}.pdf-item span{flex:1}.pdf-item:hover{transform:translateY(-3px);border-color:#00ff88;box-shadow:0 0 18px rgba(0,255,136,.18)}.pdf-icon{color:#00ff88;font-size:22px}.download-icon{color:#6b7280;font-size:18px}.pdf-item:hover .download-icon{color:#00ff88}@media(max-width:768px){.pdf-hub-section{padding:70px 14px}.pdf-container{padding:35px 18px}.pdf-header h2{font-size:24px}.pdf-item{padding:14px;font-size:14px;gap:12px}}`}</style>
    </section>
  );
}

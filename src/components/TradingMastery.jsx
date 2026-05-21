import React from "react";

const sections = [
  { title: "🚀 Top 12 Indicators", items: ["RSI", "MACD", "Bollinger Bands", "Moving Average (EMA/SMA)", "VWAP", "Supertrend", "Fibonacci Retracement", "Stochastic Oscillator", "ADX", "Parabolic SAR", "Volume Oscillator", "Money Flow Index (MFI)"] },
  { title: "🕯️ Top 12 Candlesticks", items: ["Hammer", "Doji", "Engulfing (Bull/Bear)", "Morning Star", "Shooting Star", "Hanging Man", "Inverted Hammer", "Piercing Pattern", "Dark Cloud Cover", "Tweezer Bottom", "Marubozu (Bull/Bear)", "Tweezer Top"] },
  { title: "📈 Price Action Logic", items: ["Support & Resistance", "Trendline Breakout", "Double Top/Bottom", "Head & Shoulders", "Supply & Demand Zones", "Cup and Handle", "Descending Triangle", "Triangle"] },
];

export default function TradingMastery() {
  return (
    <section className="trading-network">
      <h2 className="section-title">
        Trading <span>Mastery</span>
      </h2>
      <p className="section-subtitle">Top Strategies & Tools for Success</p>

      {sections.map((section) => (
        <div key={section.title} className="tm-category">
          <h3 className="category-name">{section.title}</h3>
          <div className="grid-container">
            {section.items.map((item) => (
              <div className="grid-box" key={item}>
                <span>●</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      ))}

      <style>{`
        .trading-network{width:100%;background:radial-gradient(circle at center,rgba(0,255,136,.08),#001108 45%,#020403 100%);padding:72px 11% 80px;font-family:Arial,sans-serif;color:#fff;overflow:hidden}
        .section-title{text-align:center;font-size:40px;font-weight:900;margin:0;color:#00eaff;letter-spacing:.5px}
        .section-title span{color:#00ff88}
        .section-subtitle{text-align:center;color:#9ca3af;font-size:16px;font-weight:600;margin:22px 0 45px;letter-spacing:.8px}
        .tm-category{margin-top:30px}
        .category-name{font-size:21px;color:#d1d5db;font-weight:900;margin:0 0 18px;padding-left:18px;border-left:5px solid #00ff88;letter-spacing:.3px}
        .grid-container{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
        .grid-box{height:64px;background:#020202;border:1px solid rgba(0,255,136,.04);border-radius:9px;color:#9ca3af;display:flex;align-items:center;gap:15px;padding:0 22px;font-size:16px;font-weight:700;box-shadow:0 0 18px rgba(0,0,0,.7);transition:all .25s ease}
        .grid-box span{color:#00ff88;font-size:22px;line-height:1}
        .grid-box:hover{background:#00ff88;color:#000;transform:translateY(-2px);box-shadow:0 0 25px rgba(0,255,136,.45)}
        .grid-box:hover span{color:#000}
        @media(max-width:1000px){.trading-network{padding:60px 5%}.grid-container{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:600px){.section-title{font-size:30px}.grid-container{grid-template-columns:1fr}.grid-box{height:58px;font-size:15px}.category-name{font-size:18px}}
      `}</style>
    </section>
  );
}

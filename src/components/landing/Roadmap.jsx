import React from "react";

const steps = [
  { no: "01", title: "Trading Basics", text: "Market structure, candles, sessions and beginner foundation." },
  { no: "02", title: "Technical Analysis", text: "Support resistance, trend, volume, indicators and chart reading." },
  { no: "03", title: "Price Action", text: "Real market entries, rejection, breakout, retest and confirmations." },
  { no: "04", title: "Options Mastery", text: "Option buying, option selling, Greeks, hedging and execution logic." },
  { no: "05", title: "Risk Management", text: "Position sizing, stop loss, capital protection and trading discipline." },
  { no: "06", title: "Professional Routine", text: "Journal, review, psychology and repeatable trading process." },
];

export default function Roadmap() {
  return (
    <>
      <section className="roadmap-section" id="roadmap">
        <div className="br30-trader-container">
          <div className="roadmap-head">
            <span>LEARNING ROADMAP</span>
            <h2>From beginner to disciplined trader.</h2>
            <p>BR30 Trader course flow is built like a step-by-step journey, not random content.</p>
          </div>

          <div className="roadmap-grid">
            {steps.map((item) => (
              <div className="roadmap-card" key={item.no}>
                <strong>{item.no}</strong>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
.roadmap-section{position:relative;padding:95px 0;background:linear-gradient(180deg,rgba(9,4,18,.15),rgba(0,0,0,.12));}
.roadmap-head{text-align:center;max-width:760px;margin:0 auto;}
.roadmap-head span{display:inline-flex;padding:9px 18px;border-radius:999px;background:rgba(248,201,108,.11);border:1px solid rgba(248,201,108,.25);color:#f8c96c;font-size:13px;font-weight:950;letter-spacing:1px;}
.roadmap-head h2{margin:22px 0 16px;color:#fff;font-size:52px;line-height:1.04;font-weight:950;letter-spacing:-2px;}
.roadmap-head p{margin:0;color:#b8acd0;font-size:18px;line-height:1.7;}
.roadmap-grid{position:relative;margin-top:64px;display:grid;grid-template-columns:repeat(3,1fr);gap:18px;}
.roadmap-card{position:relative;min-height:230px;padding:28px;border-radius:30px;background:linear-gradient(180deg,rgba(255,255,255,.085),rgba(255,255,255,.032));border:1px solid rgba(255,255,255,.1);overflow:hidden;box-shadow:0 28px 70px rgba(0,0,0,.32);}
.roadmap-card:before{content:"";position:absolute;right:-55px;top:-55px;width:145px;height:145px;border-radius:50%;background:radial-gradient(circle,rgba(168,51,255,.22),transparent 70%);}
.roadmap-card strong{position:relative;z-index:2;display:inline-flex;width:54px;height:54px;align-items:center;justify-content:center;border-radius:18px;background:linear-gradient(135deg,#f8c96c,#a833ff);color:#16031d;font-size:16px;font-weight:950;box-shadow:0 16px 35px rgba(168,51,255,.24);}
.roadmap-card h3{position:relative;z-index:2;margin:24px 0 12px;color:#fff;font-size:24px;font-weight:950;letter-spacing:-.8px;}
.roadmap-card p{position:relative;z-index:2;margin:0;color:#b8acd0;font-size:15px;line-height:1.75;font-weight:650;}
@media(max-width:980px){.roadmap-grid{grid-template-columns:repeat(2,1fr);}.roadmap-head h2{font-size:42px;}}
@media(max-width:560px){.roadmap-section{padding:70px 0;}.roadmap-grid{grid-template-columns:1fr;margin-top:42px;}.roadmap-head h2{font-size:34px;}.roadmap-card{min-height:auto;border-radius:24px;}}
      `}</style>
    </>
  );
}

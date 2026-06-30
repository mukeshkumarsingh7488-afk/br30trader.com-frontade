import React from "react";

const features = [
  { icon: "🎯", title: "Focused Learning", text: "Only trading education, no marketplace noise and no random content." },
  { icon: "📊", title: "Real Market Logic", text: "Learn entries, exits, risk and setups with practical market understanding." },
  { icon: "🛡️", title: "Risk First Approach", text: "Capital protection, stop loss discipline and position sizing are treated as priority." },
  { icon: "📘", title: "PDF Notes", text: "Structured notes help students revise the concepts faster." },
  { icon: "🏆", title: "Certificate Verify", text: "Students can verify their BR30 Trader certificate from the platform." },
  { icon: "🚀", title: "Lifetime Access", text: "Learn at your own speed and revisit the course whenever needed." },
];

export default function WhyTrader() {
  return (
    <>
      <section className="why-section" id="why">
        <div className="br30-trader-container">
          <div className="why-head">
            <span>WHY BR30 TRADER</span>
            <h2>Built for serious trading learners.</h2>
            <p>BR30 Trader is not a content dump. It is a clean learning platform for traders who want structure, discipline and clarity.</p>
          </div>

          <div className="why-grid">
            {features.map((item) => (
              <div className="why-card" key={item.title}>
                <div className="why-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
.why-section{padding:95px 0;position:relative;}
.why-head{text-align:center;max-width:790px;margin:0 auto;}
.why-head span{display:inline-flex;padding:9px 18px;border-radius:999px;background:rgba(168,51,255,.12);border:1px solid rgba(168,51,255,.3);color:#f5d5ff;font-size:13px;font-weight:950;letter-spacing:1px;}
.why-head h2{margin:22px 0 16px;color:#fff;font-size:52px;line-height:1.04;font-weight:950;letter-spacing:-2px;}
.why-head p{margin:0;color:#b8acd0;font-size:18px;line-height:1.75;}
.why-grid{margin-top:64px;display:grid;grid-template-columns:repeat(3,1fr);gap:18px;}
.why-card{position:relative;min-height:245px;padding:28px;border-radius:30px;background:linear-gradient(180deg,rgba(255,255,255,.08),rgba(255,255,255,.03));border:1px solid rgba(255,255,255,.1);box-shadow:0 28px 70px rgba(0,0,0,.28);overflow:hidden;}
.why-card:before{content:"";position:absolute;left:-55px;bottom:-65px;width:155px;height:155px;border-radius:50%;background:radial-gradient(circle,rgba(248,201,108,.16),transparent 72%);}
.why-icon{position:relative;z-index:2;width:58px;height:58px;border-radius:20px;display:grid;place-items:center;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.11);font-size:26px;}
.why-card h3{position:relative;z-index:2;margin:24px 0 12px;color:#fff;font-size:23px;font-weight:950;letter-spacing:-.7px;}
.why-card p{position:relative;z-index:2;margin:0;color:#b8acd0;font-size:15px;line-height:1.75;font-weight:650;}
@media(max-width:980px){.why-grid{grid-template-columns:repeat(2,1fr);}.why-head h2{font-size:42px;}}
@media(max-width:560px){.why-section{padding:70px 0;}.why-grid{grid-template-columns:1fr;margin-top:42px;}.why-head h2{font-size:34px;}.why-card{min-height:auto;border-radius:24px;}}
      `}</style>
    </>
  );
}

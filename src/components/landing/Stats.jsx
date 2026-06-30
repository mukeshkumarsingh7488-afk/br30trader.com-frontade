import React from "react";

const stats = [
  { value: "25+", label: "Premium Lessons" },
  { value: "30+ PDF", label: "Learning Notes" },
  { value: "VIP", label: "Student Access" },
  { value: "24×7", label: "Self Learning" },
];

export default function Stats() {
  return (
    <>
      <section className="trader-stats-section">
        <div className="br30-trader-container trader-stats-grid">
          {stats.map((item) => (
            <div className="trader-stat-card" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <style>{`
.trader-stats-section{position:relative;padding:28px 0 82px;background:linear-gradient(180deg,rgba(255,255,255,.015),rgba(0,0,0,.08));}
.trader-stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;}
.trader-stat-card{position:relative;overflow:hidden;min-height:135px;padding:28px 22px;border-radius:28px;background:linear-gradient(180deg,rgba(255,255,255,.09),rgba(255,255,255,.035));border:1px solid rgba(255,255,255,.11);box-shadow:0 24px 60px rgba(0,0,0,.28);display:flex;flex-direction:column;justify-content:center;}
.trader-stat-card:before{content:"";position:absolute;inset:auto -45px -60px auto;width:150px;height:150px;border-radius:50%;background:radial-gradient(circle,rgba(168,51,255,.22),transparent 70%);}
.trader-stat-card strong{position:relative;z-index:2;color:#fff;font-size:38px;font-weight:950;letter-spacing:-1.2px;line-height:1;}
.trader-stat-card span{position:relative;z-index:2;margin-top:12px;color:#bdb0cf;font-size:14px;font-weight:850;}
@media(max-width:850px){.trader-stats-section{padding:22px 0 58px;}.trader-stats-grid{grid-template-columns:repeat(2,1fr);}}
@media(max-width:480px){.trader-stats-grid{grid-template-columns:1fr;}.trader-stat-card{min-height:112px;border-radius:22px;}}
      `}</style>
    </>
  );
}

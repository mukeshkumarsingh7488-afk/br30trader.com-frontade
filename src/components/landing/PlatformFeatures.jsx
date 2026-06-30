import React from "react";

const items = [
  {
    title: "Structured Learning",
    desc: "Every lesson follows a logical order so you build strong trading foundations step by step.",
  },
  {
    title: "HD Video Courses",
    desc: "Professional quality videos designed for easy understanding across desktop and mobile.",
  },
  {
    title: "Premium Study Notes",
    desc: "Read organized PDF study materials inside BR30 Trader to strengthen your understanding and revise key concepts.",
  },
  {
    title: "Yearly Course Upgrades",
    desc: "Every year, BR30 Trader courses are upgraded based on current market conditions, new trading insights and practical learning improvements.",
  },
];

export default function PlatformFeatures() {
  return (
    <>
      <section className="platform-section">
        <div className="br30-trader-container">
          <div className="platform-head">
            <span>LEARNING EXPERIENCE</span>

            <h2>
              Everything designed
              <br />
              for serious learners.
            </h2>

            <p>BR30 Trader focuses on quality education instead of information overload.</p>
          </div>

          <div className="platform-grid">
            {items.map((item, index) => (
              <div className="platform-card" key={index}>
                <div className="platform-number">{(index + 1).toString().padStart(2, "0")}</div>

                <h3>{item.title}</h3>

                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
.platform-section{padding:100px 0;position:relative;}
.platform-head{text-align:center;max-width:760px;margin:auto;}
.platform-head span{display:inline-flex;padding:10px 18px;border-radius:999px;background:rgba(248,201,108,.1);border:1px solid rgba(248,201,108,.22);color:#f8c96c;font-size:13px;font-weight:900;letter-spacing:1px;}
.platform-head h2{margin:24px 0 18px;color:#fff;font-size:56px;line-height:1.05;font-weight:950;letter-spacing:-2px;}
.platform-head p{margin:0;color:#b8acd0;font-size:18px;line-height:1.8;}
.platform-grid{margin-top:65px;display:grid;grid-template-columns:repeat(2,1fr);gap:22px;}
.platform-card{position:relative;padding:34px;border-radius:32px;background:linear-gradient(180deg,rgba(255,255,255,.08),rgba(255,255,255,.03));border:1px solid rgba(255,255,255,.09);overflow:hidden;transition:.35s;}
.platform-card:hover{transform:translateY(-8px);border-color:rgba(168,51,255,.45);box-shadow:0 30px 70px rgba(168,51,255,.15);}
.platform-card:before{content:"";position:absolute;right:-60px;bottom:-60px;width:170px;height:170px;border-radius:50%;background:radial-gradient(circle,rgba(168,51,255,.18),transparent 70%);}
.platform-number{position:relative;z-index:2;font-size:58px;font-weight:950;line-height:1;background:linear-gradient(135deg,#f8c96c,#b245ff);-webkit-background-clip:text;background-clip:text;color:transparent;}
.platform-card h3{position:relative;z-index:2;margin:26px 0 14px;color:#fff;font-size:28px;font-weight:900;}
.platform-card p{position:relative;z-index:2;margin:0;color:#b8acd0;font-size:15px;line-height:1.85;}
@media(max-width:900px){.platform-grid{grid-template-columns:1fr;}.platform-head h2{font-size:42px;}}
@media(max-width:560px){.platform-section{padding:70px 0;}.platform-head h2{font-size:34px;}.platform-card{padding:24px;border-radius:24px;}.platform-number{font-size:46px;}.platform-card h3{font-size:24px;}}
`}</style>
    </>
  );
}

import React, { useState } from "react";

const faqs = [
  {
    q: "Is BR30 Trader only for beginners?",
    a: "No. BR30 Trader is useful for beginners as well as traders who already know the basics but want a structured learning path.",
  },
  {
    q: "Are PDF notes downloadable?",
    a: "No. PDF study materials are readable inside the BR30 Trader platform for learning and revision.",
  },
  {
    q: "How often are courses updated?",
    a: "BR30 Trader courses are upgraded once every year depending on market conditions, new insights and learning improvements.",
  },
  {
    q: "Will I get a certificate?",
    a: "Yes. When a student buys a course and completes watching that course, the BR30 Trader system provides a course completion certificate.",
  },
  {
    q: "How can I verify my certificate?",
    a: "BR30 Trader provides a certificate verification page where students can verify their course certificate online.",
  },
  {
    q: "Do I get lifetime access?",
    a: "Access depends on the course plan you purchase. You can check the exact access details on the course page before enrolling.",
  },
  {
    q: "What will I learn inside BR30 Trader?",
    a: "You can learn trading basics, technical analysis, price action, option buying, option selling, risk management and trading psychology.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <>
      <section className="faq-section" id="faq">
        <div className="br30-trader-container">
          <div className="faq-head">
            <span>FAQ</span>
            <h2>Questions before joining?</h2>
            <p>Here are the most important things students should know before starting with BR30 Trader.</p>
          </div>

          <div className="faq-list">
            {faqs.map((item, index) => (
              <div className={`faq-card ${active === index ? "active" : ""}`} key={item.q}>
                <button className="faq-question" onClick={() => setActive(active === index ? null : index)}>
                  <span>{item.q}</span>
                  <b>{active === index ? "−" : "+"}</b>
                </button>

                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
.faq-section{padding:100px 0;position:relative;}
.faq-head{text-align:center;max-width:760px;margin:0 auto;}
.faq-head span{display:inline-flex;padding:10px 18px;border-radius:999px;background:rgba(168,51,255,.12);border:1px solid rgba(168,51,255,.28);color:#f4d8ff;font-size:13px;font-weight:950;letter-spacing:1px;}
.faq-head h2{margin:22px 0 16px;color:#fff;font-size:52px;line-height:1.05;font-weight:950;letter-spacing:-2px;}
.faq-head p{margin:0;color:#b8acd0;font-size:18px;line-height:1.75;}
.faq-list{max-width:900px;margin:60px auto 0;display:grid;gap:16px;}
.faq-card{border-radius:26px;background:linear-gradient(180deg,rgba(255,255,255,.075),rgba(255,255,255,.028));border:1px solid rgba(255,255,255,.1);box-shadow:0 22px 55px rgba(0,0,0,.22);overflow:hidden;}
.faq-card.active{border-color:rgba(248,201,108,.28);box-shadow:0 28px 70px rgba(168,51,255,.15);}
.faq-question{width:100%;display:flex;align-items:center;justify-content:space-between;gap:18px;padding:24px 28px;border:0;background:transparent;color:#fff;text-align:left;cursor:pointer;}
.faq-question span{font-size:19px;font-weight:950;letter-spacing:-.4px;}
.faq-question b{min-width:38px;width:38px;height:38px;border-radius:50%;display:grid;place-items:center;background:linear-gradient(135deg,#f8c96c,#a833ff);color:#16031d;font-size:24px;font-weight:950;}
.faq-answer{max-height:0;overflow:hidden;transition:max-height .32s ease;}
.faq-card.active .faq-answer{max-height:180px;}
.faq-answer p{margin:0;padding:0 28px 24px;color:#b8acd0;font-size:15.5px;line-height:1.75;font-weight:650;}
@media(max-width:560px){.faq-section{padding:70px 0;}.faq-head h2{font-size:34px;}.faq-question{padding:20px 20px;}.faq-question span{font-size:16px;}.faq-answer p{padding:0 20px 22px;}.faq-question b{min-width:34px;width:34px;height:34px;font-size:21px;}}
      `}</style>
    </>
  );
}

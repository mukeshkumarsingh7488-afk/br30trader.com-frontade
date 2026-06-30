import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <section className="trader-hero" id="home">
        <div className="br30-trader-container trader-hero-grid">
          <div className="trader-hero-content">
            <span className="trader-hero-badge">✦ Premium Trading Education by BR30 Trader</span>

            <h1>
              Trading Mastery
              <span> starts with discipline.</span>
            </h1>

            <p>Learn price action, option buying, option selling, risk management and practical market execution through structured BR30 Trader courses.</p>

            <div className="trader-hero-actions">
              <Link to="/register" className="trader-hero-primary">
                Start Learning
              </Link>
              <a href="#courses" className="trader-hero-secondary">
                View Courses
              </a>
            </div>

            <div className="trader-hero-trust">
              <span>Beginner Friendly</span>
              <span>Lifetime Access</span>
              <span>Certificate</span>
            </div>
          </div>

          <div className="trader-hero-card">
            <div className="hero-card-top">
              <span>BR30 Trader</span>
              <b>Course Dashboard</b>
            </div>

            <div className="hero-course-main">
              <small>Flagship Course</small>
              <h3>Trading Mastery Center</h3>
              <p>Option Buying • Option Selling • Price Action • Risk</p>
            </div>

            <div className="hero-progress">
              <div>
                <span>Learning Progress</span>
                <b>78%</b>
              </div>
              <div className="hero-progress-bar">
                <i />
              </div>
            </div>

            <div className="hero-mini-grid">
              <div>
                <strong>24+</strong>
                <span>Lessons</span>
              </div>
              <div>
                <strong>PDF</strong>
                <span>Notes</span>
              </div>
              <div>
                <strong>VIP</strong>
                <span>Access</span>
              </div>
              <div>
                <strong>Live</strong>
                <span>Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
.trader-hero{position:relative;padding:105px 0 92px;overflow:hidden;border-bottom:1px solid rgba(168,51,255,.22);}
.trader-hero:before{content:"";position:absolute;inset:-120px -80px auto auto;width:520px;height:520px;border-radius:50%;background:radial-gradient(circle,rgba(248,201,108,.18),transparent 65%);filter:blur(8px);pointer-events:none;}
.trader-hero:after{content:"";position:absolute;left:-160px;top:90px;width:470px;height:470px;border-radius:50%;background:radial-gradient(circle,rgba(168,51,255,.22),transparent 66%);filter:blur(10px);pointer-events:none;}
.trader-hero-grid{position:relative;z-index:2;display:grid;grid-template-columns:1.04fr .96fr;gap:58px;align-items:center;}
.trader-hero-content{max-width:690px;}
.trader-hero-badge{display:inline-flex;align-items:center;gap:8px;padding:11px 17px;border-radius:999px;background:rgba(168,51,255,.12);border:1px solid rgba(168,51,255,.34);color:#f4d6ff;font-size:14px;font-weight:900;box-shadow:0 0 35px rgba(168,51,255,.14);}
.trader-hero h1{margin:24px 0 18px;font-size:clamp(45px,6vw,84px);line-height:.96;letter-spacing:-3px;color:#fff;font-weight:950;}
.trader-hero h1 span{display:block;background:linear-gradient(135deg,#f8c96c,#c05aff,#ffffff);-webkit-background-clip:text;background-clip:text;color:transparent;}
.trader-hero p{max-width:610px;margin:0;color:#b8accd;font-size:18px;line-height:1.8;font-weight:600;}
.trader-hero-actions{display:flex;align-items:center;gap:14px;flex-wrap:wrap;margin-top:34px;}
.trader-hero-primary,.trader-hero-secondary{min-height:56px;padding:0 28px;border-radius:999px;display:inline-flex;align-items:center;justify-content:center;text-decoration:none;font-size:15px;font-weight:950;transition:.25s ease;}
.trader-hero-primary{color:#120319;background:linear-gradient(135deg,#f8c96c,#bd48ff);box-shadow:0 22px 55px rgba(168,51,255,.32);}
.trader-hero-secondary{color:#fff;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.13);}
.trader-hero-primary:hover,.trader-hero-secondary:hover{transform:translateY(-3px);}
.trader-hero-trust{display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-top:26px;}
.trader-hero-trust span{padding:9px 13px;border-radius:999px;background:rgba(255,255,255,.055);border:1px solid rgba(255,255,255,.1);color:#d9d1e8;font-size:13px;font-weight:850;}
.trader-hero-card{position:relative;padding:24px;border-radius:34px;background:linear-gradient(180deg,rgba(255,255,255,.105),rgba(255,255,255,.04));border:1px solid rgba(255,255,255,.13);box-shadow:0 35px 90px rgba(0,0,0,.48),0 0 70px rgba(168,51,255,.18);overflow:hidden;}
.trader-hero-card:before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 72% 10%,rgba(248,201,108,.2),transparent 34%),radial-gradient(circle at 0% 100%,rgba(168,51,255,.2),transparent 42%);pointer-events:none;}
.hero-card-top,.hero-course-main,.hero-progress,.hero-mini-grid{position:relative;z-index:2;}
.hero-card-top{display:flex;align-items:center;justify-content:space-between;gap:18px;margin-bottom:22px;}
.hero-card-top span{font-size:13px;color:#c9badb;font-weight:850;}
.hero-card-top b{font-size:13px;color:#f8c96c;background:rgba(248,201,108,.1);border:1px solid rgba(248,201,108,.25);padding:8px 11px;border-radius:999px;}
.hero-course-main{min-height:210px;padding:28px;border-radius:28px;background:linear-gradient(135deg,rgba(7,4,14,.92),rgba(31,18,47,.78));border:1px solid rgba(255,255,255,.11);display:flex;flex-direction:column;justify-content:center;}
.hero-course-main small{color:#f8c96c;text-transform:uppercase;letter-spacing:1.6px;font-size:12px;font-weight:950;}
.hero-course-main h3{margin:12px 0 10px;color:#fff;font-size:34px;line-height:1.05;letter-spacing:-1.2px;}
.hero-course-main p{margin:0;color:#b8accd;font-size:15px;line-height:1.6;font-weight:750;}
.hero-progress{margin-top:18px;padding:18px;border-radius:22px;background:rgba(255,255,255,.055);border:1px solid rgba(255,255,255,.1);}
.hero-progress>div:first-child{display:flex;align-items:center;justify-content:space-between;margin-bottom:11px;color:#dcd4ed;font-size:13px;font-weight:900;}
.hero-progress-bar{height:10px;border-radius:999px;background:rgba(255,255,255,.1);overflow:hidden;}
.hero-progress-bar i{display:block;width:78%;height:100%;border-radius:999px;background:linear-gradient(90deg,#a833ff,#f8c96c);}
.hero-mini-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:14px;}
.hero-mini-grid div{padding:16px 10px;border-radius:20px;background:rgba(0,0,0,.22);border:1px solid rgba(255,255,255,.09);text-align:center;}
.hero-mini-grid strong{display:block;color:#fff;font-size:20px;font-weight:950;}
.hero-mini-grid span{display:block;margin-top:5px;color:#b8accd;font-size:12px;font-weight:800;}
@media(max-width:980px){.trader-hero{padding:76px 0 70px;}.trader-hero-grid{grid-template-columns:1fr;gap:34px;}.trader-hero-content{max-width:100%;}.trader-hero h1{letter-spacing:-2px;}.trader-hero-card{max-width:620px;margin:0 auto;width:100%;}}
@media(max-width:560px){.trader-hero{padding:56px 0 54px;}.trader-hero h1{font-size:43px;letter-spacing:-1.6px;}.trader-hero p{font-size:15.5px;}.trader-hero-primary,.trader-hero-secondary{width:100%;}.trader-hero-card{padding:16px;border-radius:26px;}.hero-course-main{min-height:180px;padding:22px;border-radius:22px;}.hero-course-main h3{font-size:27px;}.hero-mini-grid{grid-template-columns:repeat(2,1fr);}}
      `}</style>
    </>
  );
}

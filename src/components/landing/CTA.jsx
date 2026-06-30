import React from "react";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <>
      <section className="trader-cta-section">
        <div className="br30-trader-container">
          <div className="trader-cta-card">
            <span>READY TO START?</span>

            <h2>
              Start your trading learning
              <br />
              journey with BR30 Trader.
            </h2>

            <p>Join BR30 Trader and learn through structured courses, readable PDF study materials, certificate verification and annual market-based course updates.</p>

            <div className="trader-cta-actions">
              <Link to="/register" className="trader-cta-primary">
                Create Account
              </Link>
              <Link to="/login" className="trader-cta-secondary">
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
.trader-cta-section{padding:100px 0;position:relative;}
.trader-cta-card{position:relative;overflow:hidden;text-align:center;padding:78px 34px;border-radius:42px;background:linear-gradient(135deg,rgba(248,201,108,.14),rgba(168,51,255,.18)),linear-gradient(180deg,rgba(255,255,255,.09),rgba(255,255,255,.035));border:1px solid rgba(255,255,255,.12);box-shadow:0 38px 100px rgba(0,0,0,.4);}
.trader-cta-card:before{content:"";position:absolute;left:-120px;top:-130px;width:330px;height:330px;border-radius:50%;background:radial-gradient(circle,rgba(248,201,108,.24),transparent 70%);}
.trader-cta-card:after{content:"";position:absolute;right:-120px;bottom:-140px;width:360px;height:360px;border-radius:50%;background:radial-gradient(circle,rgba(168,51,255,.28),transparent 70%);}
.trader-cta-card span,.trader-cta-card h2,.trader-cta-card p,.trader-cta-actions{position:relative;z-index:2;}
.trader-cta-card span{display:inline-flex;padding:10px 18px;border-radius:999px;background:rgba(0,0,0,.2);border:1px solid rgba(248,201,108,.25);color:#f8c96c;font-size:13px;font-weight:950;letter-spacing:1px;}
.trader-cta-card h2{margin:24px 0 18px;color:#fff;font-size:56px;line-height:1.05;font-weight:950;letter-spacing:-2px;}
.trader-cta-card p{max-width:760px;margin:0 auto;color:#d0c5df;font-size:18px;line-height:1.8;}
.trader-cta-actions{display:flex;justify-content:center;gap:15px;flex-wrap:wrap;margin-top:36px;}
.trader-cta-primary,.trader-cta-secondary{min-height:58px;padding:0 30px;border-radius:999px;display:inline-flex;align-items:center;justify-content:center;text-decoration:none;font-size:15px;font-weight:950;transition:.3s;}
.trader-cta-primary{background:linear-gradient(135deg,#f8c96c,#b847ff);color:#17041d;box-shadow:0 22px 55px rgba(168,51,255,.3);}
.trader-cta-secondary{background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.12);color:#fff;}
.trader-cta-primary:hover,.trader-cta-secondary:hover{transform:translateY(-3px);}
@media(max-width:560px){.trader-cta-section{padding:70px 0;}.trader-cta-card{padding:54px 22px;border-radius:28px;}.trader-cta-card h2{font-size:34px;}.trader-cta-primary,.trader-cta-secondary{width:100%;}}
      `}</style>
    </>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function CourseShowcase() {
  return (
    <>
      <section className="course-section" id="courses">
        <div className="br30-trader-container">
          <div className="course-head">
            <span>FEATURED COURSE</span>

            <h2>Trading Mastery Center</h2>

            <p>A complete learning roadmap covering Technical Analysis, Price Action, Option Buying, Option Selling, Risk Management and Live Trading Psychology.</p>
          </div>

          <div className="course-card">
            <div className="course-left">
              <div className="course-badge">★ Bestseller Course</div>

              <h3>
                Learn Trading Like
                <br />a Professional.
              </h3>

              <p>This flagship course is designed for beginners as well as experienced traders who want a structured learning system instead of random YouTube videos.</p>

              <div className="course-tags">
                <span>Technical Analysis</span>
                <span>Price Action</span>
                <span>Risk Management</span>
                <span>Option Buying</span>
                <span>Option Selling</span>
                <span>Trading Psychology</span>
              </div>

              <div className="course-buttons">
                <Link to="/register" className="course-primary">
                  Enroll Now
                </Link>

                <a href="#roadmap" className="course-secondary">
                  View Roadmap
                </a>
              </div>
            </div>

            <div className="course-right">
              <div className="preview-window">
                <div className="preview-top">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="preview-content">
                  <div className="preview-module active">Technical Analysis</div>

                  <div className="preview-module">Price Action</div>

                  <div className="preview-module">Option Buying</div>

                  <div className="preview-module">Option Selling</div>

                  <div className="preview-module">Risk Management</div>

                  <div className="preview-module">Trading Psychology</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
.course-section{padding:95px 0;}
.course-head{text-align:center;max-width:760px;margin:auto;}
.course-head span{display:inline-flex;padding:9px 18px;border-radius:999px;background:rgba(168,51,255,.12);border:1px solid rgba(168,51,255,.3);color:#f5d5ff;font-size:13px;font-weight:900;letter-spacing:1px;}
.course-head h2{margin:22px 0 18px;color:#fff;font-size:54px;line-height:1;font-weight:950;letter-spacing:-2px;}
.course-head p{margin:0;color:#b8acd0;font-size:18px;line-height:1.8;}
.course-card{margin-top:70px;display:grid;grid-template-columns:1fr 470px;gap:55px;align-items:center;padding:42px;border-radius:38px;background:linear-gradient(180deg,rgba(255,255,255,.08),rgba(255,255,255,.03));border:1px solid rgba(255,255,255,.1);box-shadow:0 40px 100px rgba(0,0,0,.45);}
.course-badge{display:inline-flex;padding:10px 18px;border-radius:999px;background:rgba(248,201,108,.13);color:#f8c96c;font-size:13px;font-weight:900;border:1px solid rgba(248,201,108,.25);}
.course-left h3{margin:24px 0 18px;color:#fff;font-size:52px;line-height:1.05;font-weight:950;letter-spacing:-2px;}
.course-left p{margin:0;color:#b7accf;font-size:17px;line-height:1.9;}
.course-tags{display:flex;flex-wrap:wrap;gap:12px;margin-top:30px;}
.course-tags span{padding:10px 15px;border-radius:999px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.09);color:#ddd;font-size:13px;font-weight:800;}
.course-buttons{display:flex;gap:15px;flex-wrap:wrap;margin-top:34px;}
.course-primary,.course-secondary{min-height:56px;padding:0 28px;border-radius:999px;display:inline-flex;align-items:center;text-decoration:none;font-weight:900;font-size:15px;transition:.3s;}
.course-primary{background:linear-gradient(135deg,#f8c96c,#b845ff);color:#140318;box-shadow:0 18px 45px rgba(168,51,255,.3);}
.course-secondary{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);color:#fff;}
.course-primary:hover,.course-secondary:hover{transform:translateY(-3px);}
.preview-window{padding:22px;border-radius:28px;background:#100d18;border:1px solid rgba(255,255,255,.08);}
.preview-top{display:flex;gap:8px;margin-bottom:20px;}
.preview-top span{width:12px;height:12px;border-radius:50%;}
.preview-top span:nth-child(1){background:#ff5f57;}
.preview-top span:nth-child(2){background:#febc2e;}
.preview-top span:nth-child(3){background:#28c840;}
.preview-content{display:grid;gap:14px;}
.preview-module{padding:18px;border-radius:18px;background:#191525;color:#d4cae7;font-weight:800;border:1px solid rgba(255,255,255,.05);}
.preview-module.active{background:linear-gradient(135deg,#8f2cff,#d26dff);color:#fff;box-shadow:0 15px 35px rgba(168,51,255,.35);}
@media(max-width:980px){.course-card{grid-template-columns:1fr;}.course-head h2{font-size:42px;}.course-left h3{font-size:42px;}}
@media(max-width:560px){.course-section{padding:70px 0;}.course-card{padding:24px;border-radius:26px;}.course-head h2{font-size:34px;}.course-left h3{font-size:34px;}.course-buttons a{width:100%;justify-content:center;}}
`}</style>
    </>
  );
}

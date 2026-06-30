import React from "react";

export default function DashboardPreview() {
  return (
    <>
      <section className="dashboard-section">
        <div className="br30-trader-container dashboard-grid">
          <div className="dashboard-left">
            <span className="dashboard-badge">STUDENT EXPERIENCE</span>

            <h2>
              Everything you need
              <br />
              in one dashboard.
            </h2>

            <p>From premium video courses to PDF study materials, certificates, profile management and future course updates — everything is organized inside one clean learning dashboard.</p>

            <div className="dashboard-list">
              <div>
                <strong>✔ Premium Video Courses</strong>
                <span>Organized learning modules.</span>
              </div>

              <div>
                <strong>✔ Built-in PDF Library</strong>
                <span>Read study materials anytime.</span>
              </div>

              <div>
                <strong>✔ Certificate Verification</strong>
                <span>Verify your achievement online.</span>
              </div>

              <div>
                <strong>✔ Annual Course Updates</strong>
                <span>Updated based on market conditions.</span>
              </div>
            </div>
          </div>

          <div className="dashboard-right">
            <div className="dashboard-window">
              <div className="window-top">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="window-header">
                <div>
                  <small>Welcome Back</small>
                  <h3>Mukesh Raj</h3>
                </div>

                <div className="student-badge">VIP</div>
              </div>

              <div className="window-cards">
                <div className="mini-card">
                  <strong>Trading Mastery</strong>
                  <span>Continue Learning</span>
                </div>

                <div className="mini-card">
                  <strong>PDF Library</strong>
                  <span>Study Notes</span>
                </div>

                <div className="mini-card">
                  <strong>Certificates</strong>
                  <span>Verified</span>
                </div>

                <div className="mini-card">
                  <strong>Profile</strong>
                  <span>Account Settings</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
.dashboard-section{padding:110px 0;position:relative;}
.dashboard-grid{display:grid;grid-template-columns:1fr 1fr;gap:70px;align-items:center;}
.dashboard-badge{display:inline-flex;padding:10px 18px;border-radius:999px;background:rgba(168,51,255,.12);border:1px solid rgba(168,51,255,.28);color:#f4d8ff;font-size:13px;font-weight:900;letter-spacing:1px;}
.dashboard-left h2{margin:24px 0 18px;color:#fff;font-size:58px;line-height:1.05;font-weight:950;letter-spacing:-2px;}
.dashboard-left p{margin:0;color:#b8acd0;font-size:18px;line-height:1.85;}
.dashboard-list{display:grid;gap:16px;margin-top:36px;}
.dashboard-list div{padding:18px 22px;border-radius:22px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);}
.dashboard-list strong{display:block;color:#fff;font-size:17px;}
.dashboard-list span{display:block;margin-top:7px;color:#b8acd0;font-size:14px;}
.dashboard-window{padding:26px;border-radius:34px;background:linear-gradient(180deg,rgba(255,255,255,.08),rgba(255,255,255,.03));border:1px solid rgba(255,255,255,.1);box-shadow:0 35px 90px rgba(0,0,0,.35);}
.window-top{display:flex;gap:8px;margin-bottom:24px;}
.window-top span{width:12px;height:12px;border-radius:50%;}
.window-top span:nth-child(1){background:#ff5f57;}
.window-top span:nth-child(2){background:#febc2e;}
.window-top span:nth-child(3){background:#28c840;}
.window-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:28px;}
.window-header small{display:block;color:#b8acd0;font-size:12px;font-weight:800;}
.window-header h3{margin:5px 0 0;color:#fff;font-size:30px;font-weight:950;}
.student-badge{padding:10px 18px;border-radius:999px;background:linear-gradient(135deg,#f8c96c,#b43dff);color:#18041d;font-size:13px;font-weight:900;}
.window-cards{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;}
.mini-card{padding:22px;border-radius:22px;background:#151220;border:1px solid rgba(255,255,255,.06);}
.mini-card strong{display:block;color:#fff;font-size:18px;}
.mini-card span{display:block;margin-top:8px;color:#b8acd0;font-size:14px;}
@media(max-width:980px){.dashboard-grid{grid-template-columns:1fr;}.dashboard-left h2{font-size:44px;}}
@media(max-width:560px){.dashboard-section{padding:70px 0;}.dashboard-left h2{font-size:34px;}.window-cards{grid-template-columns:1fr;}.dashboard-window{padding:18px;border-radius:24px;}}
`}</style>
    </>
  );
}

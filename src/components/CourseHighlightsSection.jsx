import React from "react";
import { Link } from "react-router-dom";

export default function CourseHighlightsSection() {
  return (
    <>
      <section className="highlights-section">
        <div className="highlights-card">
          <h3>🎓 Course Highlights</h3>

          <div className="highlights-grid">
            <Link to="/dashboard/basic-to-advance" className="h-item" title="Basic to Advanced Trading Course">
              <i className="fa-solid fa-chart-line icon"></i>
              Basic to Advanced
            </Link>

            <Link to="/dashboard/live-market-analysis" className="h-item" title="Live Market Analysis Sessions">
              <i className="fa-solid fa-video icon"></i>
              Live Market Analysis
            </Link>

            <Link to="/dashboard/risk-management" className="h-item" title="Trading Risk Management Guide">
              <i className="fa-solid fa-shield-halved icon"></i>
              Risk Management
            </Link>

            <Link to="/dashboard/lifetime-access" className="h-item" title="Lifetime Access Trading Content">
              <i className="fa-solid fa-infinity icon"></i>
              Lifetime Access
            </Link>

            <Link to="/dashboard/support-community" className="h-item" title="Trading Support Community">
              <i className="fa-solid fa-users icon"></i>
              Support Community
            </Link>
          </div>
        </div>
      </section>

      {/* ✅ GREEN HR LINE */}
      <div className="green-divider"></div>

      <style>{`.highlights-section{width:100%;max-width:1200px;margin:70px auto 40px;padding:0 16px}.highlights-card{background:#000;border:1px solid rgba(140,0,255,.35);border-radius:28px;padding:42px 30px;box-shadow:0 0 30px rgba(0,255,170,.05),inset 0 0 12px rgba(0,255,170,.03);text-align:center}.highlights-card h3{font-size:2.2rem;font-weight:800;color:#f5f5f5;margin-bottom:38px;letter-spacing:1px}.highlights-grid{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;gap:22px}.h-item{display:flex;align-items:center;justify-content:center;gap:12px;text-decoration:none;padding:16px 24px;border-radius:999px;background:rgba(120,0,255,.12);border:1px solid rgba(180,0,255,.18);color:#d7d7d7;font-size:1rem;font-weight:600;transition:.3s ease;min-width:220px}.h-item:hover{transform:translateY(-3px);background:rgba(0,255,170,.12);border-color:#00ffaa;color:#fff;box-shadow:0 0 20px rgba(0,255,170,.18)}.icon{color:#00ffaa;font-size:1.1rem}.green-divider{width:100%;height:2px;background:linear-gradient(90deg,transparent,#00ffaa,transparent);box-shadow:0 0 18px rgba(0,255,170,.45);margin:50px 0 0}@media(max-width:768px){.highlights-section{margin-top:50px}.highlights-card{padding:32px 20px}.highlights-card h3{font-size:1.7rem;margin-bottom:28px}.highlights-grid{gap:14px}.h-item{width:100%;min-width:unset;font-size:.95rem;padding:15px 18px}}`}</style>
    </>
  );
}

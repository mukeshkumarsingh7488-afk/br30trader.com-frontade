import { Link } from "react-router-dom";

export default function Br30VipAccess() {
  const styles = `.vip-access-page{--primary:#a855f7;--secondary:#d4af37;--bg-dark:#080808;--card-bg:rgba(255,255,255,.03);--border:rgba(255,255,255,.1);min-height:100vh;margin:0;font-family:"Poppins",sans-serif;background:var(--bg-dark);color:#e2e8f0;line-height:1.6;letter-spacing:.5px}.vip-container{max-width:900px;margin:auto;padding:40px 20px}.vip-title{text-align:center;font-size:2.8rem;font-weight:800;margin-bottom:50px;letter-spacing:2px;text-transform:uppercase;color:#ec4899}.vip-title span{background:linear-gradient(to right,#a855f7,#ec4899);-webkit-background-clip:text;background-clip:text;color:transparent;-webkit-text-fill-color:transparent}.vip-card{background:var(--card-bg);border:1px solid var(--border);backdrop-filter:blur(10px);border-radius:24px;padding:30px;margin-bottom:30px;transition:.4s cubic-bezier(.175,.885,.32,1.275);animation:slideUp .8s ease-out forwards}.vip-card:hover{transform:translateY(-8px);border-color:var(--primary);box-shadow:0 10px 30px rgba(168,85,247,.15)}.vip-step{display:flex;align-items:center;gap:15px;margin-bottom:20px}.vip-badge{background:linear-gradient(135deg,#a855f7,#7e22ce);padding:10px 18px;border-radius:12px;font-weight:800;color:#fff;box-shadow:0 4px 15px rgba(168,85,247,.4)}.vip-card h3{font-size:1.5rem;margin:0;color:#fff;letter-spacing:1px}.vip-card p,.vip-box p{color:#94a3b8;font-size:1rem;text-align:justify}.strategy-list{list-style:none;padding:0;margin-top:20px;display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:12px}.strategy-item{background:rgba(168,85,247,.08);padding:12px 18px;border-radius:10px;border-left:4px solid var(--primary);font-weight:600;font-size:.95rem;color:#f1f5f9;display:flex;align-items:center;letter-spacing:1px}.strategy-item::before{content:"📈";margin-right:10px}.vip-pdf-grid{list-style:none;padding:0;margin-top:20px;display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:12px}.vip-pdf-grid li{background:rgba(212,175,55,.08);border:1px solid rgba(212,175,55,.18);border-left:4px solid var(--secondary);padding:13px 16px;border-radius:12px;color:#f8fafc;font-weight:700}.vip-pdf-grid li::before{content:"🔒 ";color:var(--secondary)}.vip-highlight{background:linear-gradient(145deg,rgba(168,85,247,.18),rgba(236,72,153,.08));border:1px solid rgba(168,85,247,.45);box-shadow:0 0 30px rgba(168,85,247,.12)}.vip-box{background:linear-gradient(145deg,#1e1b4b,#312e81);border:2px solid var(--primary);padding:40px;border-radius:30px;text-align:center;margin-top:50px;position:relative;overflow:hidden;box-shadow:0 20px 40px rgba(0,0,0,.4)}.vip-box::after{content:"VIP";position:absolute;top:-20px;right:-20px;font-size:8rem;font-weight:900;opacity:.05;color:#fff}.vip-box h2{font-size:2rem;color:var(--secondary);margin-bottom:15px;letter-spacing:1px}.vip-btn{display:inline-block;margin-top:25px;background:linear-gradient(90deg,#ff4d4d,#f91b1b);color:white;padding:16px 35px;border-radius:50px;text-decoration:none;font-weight:800;font-size:1.1rem;text-transform:uppercase;letter-spacing:2px;transition:.3s;box-shadow:0 10px 20px rgba(255,77,77,.3)}.vip-btn:hover{transform:scale(1.05) translateY(-3px);box-shadow:0 15px 30px rgba(255,77,77,.5)}.vip-home{text-align:center;margin-top:40px}.vip-home a{color:#64748b;text-decoration:none;font-size:.9rem;font-weight:600;transition:.3s}.vip-home a:hover{color:var(--primary);letter-spacing:2px}@keyframes slideUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}@media(max-width:600px){.vip-title{font-size:2rem}.vip-box{padding:25px}.strategy-list,.vip-pdf-grid{grid-template-columns:1fr}}`;

  return (
    <>
      <style>{styles}</style>

      <main className="vip-access-page">
        <div className="vip-container">
          <h1 className="vip-title">
            BR30 <span>VIP Access</span>
          </h1>

          <section className="vip-card vip-highlight">
            <div className="vip-step">
              <div className="vip-badge">01</div>
              <h3>Unlock VIP PDF Hub 🔐</h3>
            </div>
            <p>BR30 VIP members can access the complete premium PDF Hub including all 32 trading learning files, advanced notes, option strategies, technical analysis guides, and practical market study material.</p>
          </section>

          <section className="vip-card">
            <div className="vip-step">
              <div className="vip-badge">02</div>
              <h3>Premium Trading Access</h3>
            </div>
            <p>BR30 VIP Access is designed for serious traders who want structured learning, practical market guidance, premium trading support, and locked study resources in one place.</p>
          </section>

          <section className="vip-card">
            <div className="vip-step">
              <div className="vip-badge">03</div>
              <h3>What You Will Learn</h3>
            </div>

            <ul className="strategy-list">
              <li className="strategy-item">Price Action Logic</li>
              <li className="strategy-item">Smart Money Concept</li>
              <li className="strategy-item">Option Buying Setup</li>
              <li className="strategy-item">Option Selling Logic</li>
              <li className="strategy-item">BTST Trading Setup</li>
              <li className="strategy-item">Crypto & Forex Logic</li>
              <li className="strategy-item">Risk Management</li>
              <li className="strategy-item">Trading Psychology</li>
            </ul>
          </section>

          <section className="vip-card">
            <div className="vip-step">
              <div className="vip-badge">04</div>
              <h3>VIP PDF Resources Included</h3>
            </div>

            <ul className="vip-pdf-grid">
              <li>Option Buying & Selling PDFs</li>
              <li>Option Greeks Mastery</li>
              <li>FVG Trading Guide</li>
              <li>Technical Analysis Notes</li>
              <li>Risk Management PDFs</li>
              <li>Scalping & Intraday Guides</li>
              <li>Bullish / Bearish Strategies</li>
              <li>Advanced Options Strategies</li>
            </ul>
          </section>

          <section className="vip-card">
            <div className="vip-step">
              <div className="vip-badge">05</div>
              <h3>VIP Community Benefit</h3>
            </div>
            <p>VIP members get access to premium community support, structured course updates, market breakdowns, PDF learning access, and guidance focused on discipline and consistency.</p>
          </section>

          <section className="vip-box">
            <h2>Unlock VIP Learning 🚀</h2>
            <p>Join BR30 Trader VIP and unlock premium PDF access, professional trading education, structured learning support, and practical market understanding.</p>

            <Link to="/?scroll=coursesection" className="vip-btn">
              Get VIP Access
            </Link>
          </section>

          <div className="vip-home">
            <Link to="/">← Back to Home</Link>
          </div>
        </div>
      </main>
    </>
  );
}

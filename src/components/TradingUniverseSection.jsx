import React from "react";

export default function TradingUniverseSection() {
  return (
    <section id="br30-trading-universe">
      <div className="particles">
        <div className="dot d1"></div>
        <div className="dot d2"></div>
        <div className="dot d3"></div>
      </div>

      <div className="universe-scene">
        <div className="float-node n1">
          📈 <span>BULLISH</span>
        </div>
        <div className="float-node n2">
          📉 <span>BEARISH</span>
        </div>

        <div className="core-logo">
          <div className="logo-inner">BR30</div>
          <div className="pulse-wave">Trader</div>
          <div className="pulse-wave wave-2">Trader</div>
        </div>

        <div className="float-node n3">
          ⚡ <span>EXECUTION</span>
        </div>

        <div className="hero-content">
          <h2>Master The Market</h2>
          <p>Advanced Algorithmic Ecosystem for Professionals</p>
          <a href="https://t.me/+hBAT4kWo63A4ZWY1" target="_blank" rel="noopener noreferrer" className="pro-btn">
            Join Our Free Community ✅
          </a>
        </div>

        <div className="tech-floor">
          <div className="grid-lines"></div>
          <div className="floor-glow"></div>
        </div>
      </div>

      <style>{`
        #br30-trading-universe{width:100%;min-height:100vh;padding:90px 20px 110px;display:flex;justify-content:center;align-items:center;overflow:hidden;position:relative;color:#a9b1c5;background:radial-gradient(circle at center,rgba(0,255,136,.05),#03110b 45%,#020403 100%)}
        .universe-scene{width:100%;max-width:1200px;min-height:650px;position:relative;display:flex;align-items:center;justify-content:center}
        .core-logo{position:absolute;top:110px;left:50%;transform:translateX(-50%);width:160px;height:160px;z-index:20;display:flex;align-items:center;justify-content:center}
        .logo-inner{width:100%;height:100%;background:linear-gradient(135deg,#3c52ff,#9d00ff);border-radius:30px;display:flex;align-items:center;justify-content:center;font-size:32px;font-weight:900;color:#d8d8d8;box-shadow:0 0 50px rgba(60,82,255,.6);animation:floatCore 4s ease-in-out infinite}
        .pulse-wave{position:absolute;width:100%;height:100%;border:3px solid #3c52ff;border-radius:30px;display:flex;align-items:flex-start;justify-content:flex-start;color:rgba(255,255,255,.35);font-size:30px;padding:8px;animation:ripple 3s linear infinite}
        .wave-2{animation-delay:1.5s}
        .float-node{position:absolute;background:rgba(255,255,255,.05);padding:10px 22px;border-radius:30px;border:1px solid rgba(255,255,255,.1);font-size:15px;display:flex;align-items:center;gap:10px;color:#00ff88;font-weight:800;animation:randomFloat 6s ease-in-out infinite;z-index:25}
        .n1{top:90px;left:8%;animation-delay:0s}
        .n2{top:120px;right:8%;animation-delay:2s}
        .n3{top:360px;left:50%;transform:translateX(-50%);animation-delay:4s}
        .hero-content{position:absolute;top:450px;left:50%;transform:translateX(-50%);text-align:center;z-index:30;width:100%}
        .hero-content h2{margin:0;color:#ffffff;font-size:52px;line-height:1.1;font-weight:800}
        .hero-content p{margin:8px 0 22px;color:#a9b1c5;font-size:18px;letter-spacing:.5px}
        .pro-btn{display:inline-flex;align-items:center;justify-content:center;padding:16px 44px;border-radius:999px;background:#00ff88;color:#000;text-decoration:none;font-size:16px;font-weight:800;box-shadow:0 0 35px rgba(0,68,255,.45);transition:.3s ease}
        .pro-btn:hover{transform:translateY(-4px);box-shadow:0 0 35px rgba(0,255,136,.45)}
        .tech-floor{position:absolute;bottom:-90px;width:180%;height:420px;transform:rotateX(75deg);z-index:1;opacity:.35}
        .grid-lines{width:100%;height:100%;background-image:linear-gradient(rgba(60,82,255,.16) 1px,transparent 1px),linear-gradient(90deg,rgba(60,82,255,.16) 1px,transparent 1px);background-size:40px 40px;animation:gridMove 10s linear infinite}
        .floor-glow{position:absolute;inset:0;background:radial-gradient(circle at center,rgba(0,255,136,.15),transparent 60%)}
        .particles .dot{position:absolute;width:7px;height:7px;background:#00ff88;border-radius:50%;box-shadow:0 0 18px #00ff88;opacity:.45}
        .d1{top:25%;left:28%;animation:dotFloat 7s ease-in-out infinite}
        .d2{top:60%;right:20%;animation:dotFloat 9s ease-in-out infinite}
        .d3{bottom:20%;left:18%;animation:dotFloat 8s ease-in-out infinite}
        @keyframes floatCore{0%,100%{transform:translateY(0) rotate(5deg)}50%{transform:translateY(-20px) rotate(-5deg)}}
        @keyframes ripple{0%{transform:scale(1);opacity:1}100%{transform:scale(2.5);opacity:0}}
        @keyframes randomFloat{0%,100%{margin-top:0}50%{margin-top:-25px}}
        @keyframes gridMove{from{background-position:0 0}to{background-position:0 40px}}
        @keyframes dotFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-35px)}}
        @media(max-width:768px){#br30-trading-universe{min-height:780px;padding:70px 14px}.universe-scene{min-height:650px}.core-logo{top:135px;width:130px;height:130px}.logo-inner{font-size:26px}.pulse-wave{font-size:23px}.n1{top:55px;left:4%}.n2{top:70px;right:4%}.n3{top:335px}.float-node{font-size:12px;padding:9px 15px}.hero-content{top:430px}.hero-content h2{font-size:36px}.hero-content p{font-size:15px}.pro-btn{padding:14px 28px;font-size:14px}}
        @media(max-width:430px){.core-logo{width:115px;height:115px}.hero-content h2{font-size:31px}.n1{left:2%;top:45px}.n2{right:2%;top:105px}.n3{top:315px}.float-node{font-size:11px;padding:8px 12px}.pro-btn{width:90%;max-width:310px}}
      `}</style>
    </section>
  );
}

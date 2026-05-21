import React from "react";

export default function ServicesSection() {
  return (
    <section className="services-section">
      <div className="services-header">
        <h2 className="section-title">
          Our <span>Services & Tools</span>
        </h2>
        <p className="section-subtitle">High-performance digital solutions for your business</p>
      </div>

      <div className="services-grid">
        {[
          ["🌐", "Custom Web Development", "हम आपके बिजनेस के लिए हाई-स्पीड और रिस्पॉन्सिव वेबसाइट्स बनाते हैं (React, Node, MongoDB).", "Standard"],
          ["📊", "Trading Dashboards", "लाइव मार्केट डेटा और कस्टमाइजेबल चार्ट्स के साथ पर्सनल ट्रेडिंग जर्नल्स और डैशबोर्ड्स।", "Premium"],
          ["📱", "App Development", "एंड्रॉइड और iOS के लिए यूजर-फ्रेंडली मोबाइल एप्लिकेशन जो आपके काम को आसान बनाएं।", "Scalable"],
          ["⚡", "API Integration", "थर्ड-पार्टी टूल्स और पेमेंट गेटवे को आपकी वेबसाइट के साथ आसानी से जोड़ना।", "Fast"],
          ["🛠️", "SEO & Performance", "आपकी वेबसाइट को Google पर रैंक कराने और लोडिंग स्पीड को 100% तक बढ़ाने की सर्विस।", "SEO Friendly"],
          ["🔐", "Security Solutions", "डेटा प्रोटेक्शन और सिक्योर सर्वर सेटअप ताकि आपका बिजनेस हमेशा सुरक्षित रहे।", "Secure"],
        ].map(([icon, title, desc, tag], i) => (
          <div className={`service-card ${i === 1 ? "featured" : ""}`} key={title}>
            <div className="icon-box">{icon}</div>
            <h3>{title}</h3>
            <p>{desc}</p>
            <span className="tag">{tag}</span>
          </div>
        ))}
      </div>

      <style>{`
        .services-section{width:100%;padding:100px 20px;background:radial-gradient(circle at center,rgba(0,255,136,.05),#03110b 45%,#020403 100%);overflow:hidden}
        .services-header{text-align:center;margin-bottom:55px}
        .section-title{margin:0;font-size:52px;font-weight:800;line-height:1.2;color:#fff}
        .section-title span{background:linear-gradient(90deg,#00eaff,#00ff88);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
        .section-subtitle{margin-top:14px;color:#9ca3af;font-size:18px;letter-spacing:.3px}
        .services-grid{max-width:1300px;margin:auto;display:grid;grid-template-columns:repeat(3,1fr);gap:28px}
        .service-card{position:relative;background:#050505;border:1px solid rgba(0,255,136,.18);border-radius:26px;padding:38px 30px;transition:.35s ease;overflow:hidden;min-height:320px}
        .service-card:before{content:"";position:absolute;inset:0;background:linear-gradient(135deg,rgba(0,255,136,.05),transparent 45%,rgba(0,234,255,.04));opacity:0;transition:.35s ease;pointer-events:none}
        .service-card:hover{transform:translateY(-10px);border-color:#00ff88;box-shadow:0 0 25px rgba(0,255,136,.12),0 0 60px rgba(0,255,136,.08)}
        .service-card:hover:before{opacity:1}
        .featured{border:1px solid #00ff88;box-shadow:0 0 25px rgba(0,255,136,.12)}
        .icon-box{width:72px;height:72px;border-radius:20px;display:flex;align-items:center;justify-content:center;font-size:34px;margin-bottom:28px;background:linear-gradient(135deg,rgba(0,255,136,.12),rgba(0,234,255,.08));border:1px solid rgba(255,255,255,.06)}
        .service-card h3{margin:0 0 18px;color:#fff;font-size:31px;line-height:1.35;font-weight:700}
        .service-card p{margin:0;color:#d1d5db;font-size:19px;line-height:1.9}
        .tag{display:inline-flex;align-items:center;justify-content:center;margin-top:28px;padding:10px 18px;border-radius:999px;background:#140726;border:1px solid rgba(168,85,247,.28);color:#00ff88;font-size:14px;font-weight:700;letter-spacing:.3px}
        @media(max-width:1100px){.services-grid{grid-template-columns:repeat(2,1fr)}.section-title{font-size:44px}}
        @media(max-width:768px){.services-section{padding:80px 16px}.services-grid{grid-template-columns:1fr;gap:22px}.section-title{font-size:36px}.section-subtitle{font-size:15px}.service-card{min-height:auto;padding:30px 22px;border-radius:22px}.service-card h3{font-size:26px}.service-card p{font-size:16px;line-height:1.8}.icon-box{width:62px;height:62px;font-size:30px;border-radius:18px}}
        @media(max-width:430px){.services-section{padding:65px 12px}.section-title{font-size:31px}.service-card{padding:26px 18px}.service-card h3{font-size:22px}.service-card p{font-size:15px}.tag{font-size:12px;padding:8px 15px}}
      `}</style>
    </section>
  );
}

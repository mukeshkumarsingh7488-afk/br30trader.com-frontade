import { useEffect } from "react";
import { Link } from "react-router-dom";
import BackHomeButton from "../components/BackHomeButton";

export default function Br30WebService() {
  useEffect(() => {
    document.title = "Web Development & SEO Services (2026) | BR30 Trader Official Digital Solutions";

    const setMeta = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    setMeta("description", "Explore BR30 Trader services including trading courses, live market analysis, mentorship, and advanced strategies.");
    setMeta("keywords", "trading services, trading mentorship, live market analysis, option trading course, BR30 Trader");
    setMeta("robots", "index, follow");
  }, []);

  const services = [
    {
      icon: "fa-solid fa-code",
      title: "Web Development",
      text: "हम आपके बिजनेस के लिए हाई-स्पीड और रिस्पॉन्सिव वेबसाइट्स बनाते हैं।",
      features: ["React & Node.js Support", "MongoDB Integration", "SEO Friendly Code"],
    },
    {
      icon: "fa-solid fa-chart-line",
      title: "Trading Dashboards",
      text: "लाइव मार्केट डेटा और कस्टमाइजेबल चार्ट्स के साथ पर्सनल ट्रेडिंग जर्नल्स।",
      features: ["Real-time Analytics", "Multi-Market Support", "Risk Calculators"],
    },
    {
      icon: "fa-solid fa-mobile-screen",
      title: "App Development",
      text: "एंड्रॉइड और iOS के लिए यूजर-फ्रेंडली मोबाइल एप्लीकेशन निर्माण।",
      features: ["Cross-Platform Apps", "Fast User Interface", "Play Store Publishing"],
    },
    {
      icon: "fa-solid fa-bolt",
      title: "API Integration",
      text: "थर्ड-पार्टी टूल्स और पेमेंट गेटवे को आपकी वेबसाइट से जोड़ना।",
      features: ["Payment Gateways", "Trading APIs", "Secure Auth Systems"],
    },
    {
      icon: "fa-solid fa-magnifying-glass-chart",
      title: "SEO & Ranking",
      text: "आपकी वेबसाइट को Google पर रैंक कराने और लोडिंग स्पीड बढ़ाने की सर्विस।",
      features: ["Keyword Optimization", "Performance Tuning", "Google Analytics Setup"],
    },
    {
      icon: "fa-solid fa-user-shield",
      title: "Cyber Security",
      text: "डेटा प्रोटेक्शन और सिक्योर सर्वर सेटअप ताकि आपका बिजनेस सुरक्षित रहे।",
      features: ["SSL Encryption", "Firewall Protection", "Regular Security Audits"],
    },
  ];

  const styles = `
.web-service-page{background-color:#050505;color:#fff;line-height:1.6;overflow-x:hidden;min-height:100vh;font-family:"Poppins",sans-serif;}
.services-hero{padding:20px 20px 80px;margin-top:0;min-height:calc(100vh - 86px);display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;background:linear-gradient(rgba(160,32,240,.05),rgba(15,23,42,1));border-bottom:2px solid #a020f0;}
.services-hero h1{font-size:3.5rem;margin-bottom:15px;text-transform:uppercase;letter-spacing:2px;}
.services-hero h1 span{color:#a020f0;text-shadow:0 0 20px rgba(160,32,240,.6);}
.services-hero p{max-width:700px;margin:0 auto 8px;color:#94a3b8;font-size:1.1rem;}
.services-main{max-width:1200px;margin:80px auto;padding:0 20px;display:grid;grid-template-columns:repeat(3,1fr);gap:40px;}
.service-box{background:#1e293b;padding:50px 30px;border-radius:30px;border:1px solid rgba(160,32,240,.15);text-align:center;transition:.4s;position:relative;display:flex;flex-direction:column;align-items:center;}
.service-box:hover{transform:translateY(-15px);border-color:#a020f0;box-shadow:0 20px 40px rgba(160,32,240,.2);}
.icon-wrapper{width:90px;height:90px;background:rgba(160,32,240,.1);border:1px solid rgba(160,32,240,.3);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:2.5rem;color:#a020f0;margin-bottom:25px;transition:.3s;}
.service-box:hover .icon-wrapper{background:#a020f0;color:#fff;box-shadow:0 0 25px #a020f0;}
.service-box h2{font-size:1.5rem;margin-bottom:15px;color:#fff;}
.service-box p{font-size:.95rem;color:#cbd5e1;margin-bottom:25px;}
.feature-list{list-style:none;text-align:left;width:100%;border-top:1px solid rgba(255,255,255,.05);padding-top:20px;margin:0;}
.feature-list li{font-size:.85rem;color:#94a3b8;margin-bottom:8px;display:flex;align-items:center;gap:10px;}
.feature-list li i{color:#a020f0;font-size:.7rem;}
.cta-section{text-align:center;padding:80px 20px;background:rgba(30,41,59,.5);border-top:1px solid rgba(160,32,240,.2);}
.cta-section h2{color:#fff;font-size:2rem;}
.btn-contact{display:inline-block;padding:15px 40px;background:#a020f0;color:#fff;text-decoration:none;border-radius:50px;font-weight:700;font-size:1.1rem;transition:.3s;box-shadow:0 10px 20px rgba(160,32,240,.3);margin-top:25px;}
.btn-contact:hover{background:#fff;color:#a020f0;transform:scale(1.05);box-shadow:0 15px 30px rgba(160,32,240,.5);}
.back-home-link{color:#94a3b8;text-decoration:none;display:inline-block;margin-top:22px;}
.back-home-link:hover{color:#a020f0;}
@media(max-width:1024px){.services-main{grid-template-columns:1fr 1fr;}}
@media(max-width:768px){.services-main{grid-template-columns:1fr;}.services-hero{min-height:auto;padding:30px 20px 60px;}.services-hero h1{font-size:2.5rem;}.cta-section h2{font-size:1.5rem;}}
`;

  return (
    <>
      <style>{styles}</style>

      <main className="web-service-page">
        <header className="services-hero">
          <h1>
            Premium <span>Services</span>
          </h1>
          <p>We provide high-end digital solutions designed for high-speed trading and modern businesses.</p>
          <p>Funded & Built by Mukesh Raj | BR30 Trader</p>
        </header>

        <section className="services-main">
          {services.map((service) => (
            <div className="service-box" key={service.title}>
              <div className="icon-wrapper">
                <i className={service.icon}></i>
              </div>

              <h2>{service.title}</h2>
              <p>{service.text}</p>

              <ul className="feature-list">
                {service.features.map((feature) => (
                  <li key={feature}>
                    <i className="fa-solid fa-circle"></i>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="cta-section">
          <h2>Ready to build something amazing?</h2>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=br30service.contact@gmail.com&su=Web%20Service%20Quote%20Request&body=Hello%20Support%20Team,%0A%0AI%20am%20interested%20in%20your%20web%20services.%0A%0APlease%20share%20pricing%20and%20details.%0A%0AName:%20_____%0ARequirement:%20_____%0A%0AThanks" className="btn-contact" target="_blank" rel="noopener noreferrer">
            Get a Quote Now 🚀
          </a>

          <br />

          <BackHomeButton>← Back to Home</BackHomeButton>
        </section>
      </main>
    </>
  );
}

import { useEffect } from "react";
import { Link } from "react-router-dom";
import BackHomeButton from "../components/BackHomeButton";

export default function Br30AboutUs() {
  useEffect(() => {
    document.title = "BR30 Trader (2026) – About Us | Mission, Vision & Trading Mentorship Platform India";

    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute("content", "Learn about BR30 Trader, a professional trading education platform focused on price action, intraday trading, option buying strategies, and real market mentorship for consistent growth.");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Learn about BR30 Trader, a professional trading education platform focused on price action, intraday trading, option buying strategies, and real market mentorship for consistent growth.";
      document.head.appendChild(meta);
    }
  }, []);

  const styles = `
    .about-page {
      background-color: #050505;
      color: #ffffff;
      line-height: 1.6;
      overflow-x: hidden;
      font-family: "Poppins", sans-serif;
      min-height: 100vh;
    }

 .about-hero{min-height:430px;background:radial-gradient(circle at top,rgba(160,32,240,.25),transparent 35%),linear-gradient(135deg,#050505 0%,#1e293b 100%);display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;border-bottom:2px solid #a020f0;padding:0 20px 40px;margin-top:0;}

    .about-hero h1 {
      font-size: 3rem;
      letter-spacing: 1px;
      text-transform: uppercase;
      max-width: 1000px;
      margin-bottom: 15px;
    }

    .about-hero h1 span {
      color: #a020f0;
      text-shadow: 0 0 20px rgba(160, 32, 240, 0.5);
    }

    .about-hero p {
      color: #cbd5e1;
      font-size: 1.05rem;
      max-width: 850px;
    }

    .trust-grid {
      max-width: 1100px;
      margin: -60px auto 50px;
      padding: 0 20px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 25px;
    }

    .trust-card {
      background: rgba(30, 41, 59, 0.85);
      border: 1px solid rgba(160, 32, 240, 0.25);
      border-radius: 20px;
      padding: 30px 22px;
      text-align: center;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35);
      transition: 0.3s ease;
    }

    .trust-card:hover {
      transform: translateY(-8px);
      border-color: #a020f0;
      box-shadow: 0 0 25px rgba(160, 32, 240, 0.25);
    }

    .trust-card i {
      color: #a020f0;
      font-size: 2rem;
      margin-bottom: 15px;
    }

    .trust-card h3 {
      font-size: 1.3rem;
      margin-bottom: 10px;
      color: #ffffff;
    }

    .trust-card p {
      color: #cbd5e1;
      font-size: 0.95rem;
    }

    .about-content {
      max-width: 1000px;
      margin: 0 auto 40px;
      padding: 40px;
      background: rgba(30, 41, 59, 0.7);
      border: 1px solid rgba(160, 32, 240, 0.2);
      border-radius: 25px;
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
    }

    .about-content h2 {
      color: #a020f0;
      font-size: 2rem;
      margin-bottom: 20px;
      border-bottom: 2px solid rgba(160, 32, 240, 0.25);
      display: inline-block;
      padding-bottom: 5px;
    }

    .about-content p {
      color: #cbd5e1;
      margin-bottom: 18px;
      font-size: 1.05rem;
    }

    .purple {
      color: #a020f0;
    }

    .mission-vision {
      max-width: 1000px;
      margin: 0 auto 50px;
      padding: 0 20px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 25px;
    }

    .mv-box {
      background: rgba(15, 23, 42, 0.9);
      border-left: 5px solid #a020f0;
      border-radius: 20px;
      padding: 30px;
      transition: 0.3s ease;
    }

    .mv-box:hover {
      transform: translateY(-5px);
      box-shadow: 0 0 25px rgba(160, 32, 240, 0.25);
    }

    .mv-box h3 {
      color: #ffffff;
      margin-bottom: 15px;
      font-size: 1.5rem;
    }

    .mv-box p {
      color: #cbd5e1;
      font-size: 1rem;
    }

    .about-cta {
      text-align: center;
      padding: 50px 20px 70px;
    }

    .about-cta h2 {
      font-size: 2rem;
      color: #ffffff;
    }

    .btn-join {
      display: inline-block;
      padding: 14px 30px;
      background: #a020f0;
      color: #ffffff;
      text-decoration: none;
      border-radius: 12px;
      font-weight: 800;
      transition: 0.3s ease;
      box-shadow: 0 0 20px rgba(160, 32, 240, 0.25);
    }

    .btn-join:hover {
      background: #ffffff;
      color: #a020f0;
      transform: translateY(-3px);
      box-shadow: 0 0 30px rgba(160, 32, 240, 0.45);
    }

    .back-home-link {
      color: #94a3b8;
      text-decoration: none;
      display: inline-block;
      margin-top: 18px;
    }

    .back-home-link:hover {
      color: #a020f0;
    }

    @media (max-width: 768px) {
      .about-hero h1 {
        font-size: 2rem;
      }

      .trust-grid,
      .mission-vision {
        grid-template-columns: 1fr;
      }

      .trust-grid {
        margin-top: 30px;
      }

      .about-content {
        margin: 0 20px 40px;
        padding: 25px;
      }

      .about-cta h2 {
        font-size: 1.5rem;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>

      <main className="about-page">
        <header className="about-hero">
          <h1>
            India&apos;s Growing Trading Community: <span>BR30 Trader</span>
          </h1>
          <p>Empowering the next generation of disciplined and profitable Traders.</p>
          <p style={{ fontSize: "14px", color: "#ccc", marginTop: "10px" }}>BR30 Trader is a premier financial education platform founded by Mukesh Raj, specializing in Price Action, SMC, and Option Trading. Our mission is to empower Indian traders with professional strategies and expert mentorship.</p>
        </header>

        <section className="trust-grid">
          <div className="trust-card">
            <i className="fa-solid fa-shield-check"></i>
            <h3>Transparency</h3>
            <p>We believe in verified logic and real results, no fake promises.</p>
          </div>

          <div className="trust-card">
            <i className="fa-solid fa-users"></i>
            <h3>Community</h3>
            <p>A growing family of Traders learning and earning together daily.</p>
          </div>

          <div className="trust-card">
            <i className="fa-solid fa-graduation-cap"></i>
            <h3>Education</h3>
            <p>From Basic price action to Advanced Option strategies.</p>
          </div>
        </section>

        <section className="about-content">
          <h2>Who We Are?</h2>

          <p>
            <b>
              <span className="purple">BR30Trader</span>
            </b>{" "}
            सिर्फ एक नाम नहीं, बल्कि एक ट्रेडिंग रिवोल्यूशन है। हमारा सफर एक छोटे से विजन के साथ शुरू हुआ था—ट्रेडिंग को जुआ नहीं, बल्कि एक बिजनेस की तरह सिखाना।
          </p>

          <p>मार्केट में 90% लोग अपनी साइकोलॉजी की वजह से पैसा खोते हैं, और हम उसी 90% को 10% में बदलने के लिए काम कर रहे हैं।</p>

          <p>
            हमारा मुख्य फोकस <b>Risk Management</b> और <b>Discipline</b> पर है। हम आपको सिर्फ चार्ट देखना नहीं सिखाते, बल्कि उन चार्ट्स के पीछे की Big Boy psychology और institutional flow को समझना सिखाते हैं।
          </p>
        </section>

        <section className="mission-vision">
          <div className="mv-box">
            <h3>Our Mission 🎯</h3>
            <p>भारत के हर उस युवा को फाइनेंशियल फ्रीडम की तरफ ले जाना जो मेहनत करने और सीखने के लिए तैयार है। हम ट्रेडिंग को आसान और लॉजिकल बनाना चाहते हैं।</p>
          </div>

          <div className="mv-box">
            <h3>Our Vision 👁️</h3>
            <p>एक ऐसा इकोसिस्टम बनाना जहाँ हर ट्रेडर के पास सही टूल्स, सही डेटा और सही गाइडेंस हो ताकि वह मार्केट के उतार-चढ़ाव में घबराए नहीं, बल्कि डटकर मुकाबला करे।</p>
          </div>
        </section>

        <section className="about-cta">
          <h2>Ready to start your journey with us?</h2>

          <a href="https://t.me/+F8mDhdfiGaI1NDY1" target="_blank" rel="noreferrer" className="btn-join">
            Join the Academy Now
          </a>

          <br />

          <BackHomeButton>← Back to Home</BackHomeButton>
        </section>
      </main>
    </>
  );
}

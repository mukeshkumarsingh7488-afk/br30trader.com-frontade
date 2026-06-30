import { useEffect } from "react";
import { Link } from "react-router-dom";
import BackHomeButton from "../components/BackHomeButton";

export default function Br30SupportCommunity() {
  useEffect(() => {
    document.title = "Trading Community & Support (Telegram & WhatsApp) | BR30 Trader Official Group";

    const setMeta = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    setMeta("description", "Join BR30 Trader support community. Get help, share ideas, and learn trading with like-minded Traders.");
    setMeta("keywords", "trading community, Trader support group, telegram trading group, trading discussion");
    setMeta("robots", "index, follow");
  }, []);

  const handleContactClick = (e) => {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isMobile) {
      e.preventDefault();

      const message = encodeURIComponent("Hello BR30 Support Team, mujhe help chahiye...");

      window.open(`https://wa.me/916200986380?text=${message}`, "_blank");
    }
  };

  const styles = `
    .support-page {
      --bg-dark: #07070a;
      --card-bg: #12121a;
      --primary-purple: #9333ea;
      --accent-glow: rgba(147, 51, 234, 0.3);
      --text-gray: #a1a1aa;
      --white: #ffffff;
      --whatsapp-green: #25d366;

      font-family: "Poppins", sans-serif;
      background-color: var(--bg-dark);
      color: var(--white);
      margin: 0;
      padding: 40px 20px;
      min-height: 100vh;
    }

    .support-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .support-header {
      text-align: center;
      margin-bottom: 60px;
    }

    .support-header h1 {
      font-size: 3.5rem;
      margin: 0;
      background: linear-gradient(to right, #fff, var(--primary-purple));
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-transform: uppercase;
    }

    .support-header h1 span {
      color: var(--primary-purple);
    }

    .gray-text {
      color: var(--text-gray);
    }

    .support-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 25px;
    }

    .support-card {
      background: var(--card-bg);
      padding: 40px;
      border-radius: 25px;
      border: 1px solid #1f1f2e;
      text-align: center;
      transition: all 0.4s ease;
    }

    .support-card:hover {
      transform: translateY(-10px);
      border-color: var(--primary-purple);
      box-shadow: 0 15px 30px var(--accent-glow);
    }

    .icon-box {
      width: 60px;
      height: 60px;
      background: rgba(147, 51, 234, 0.1);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 20px;
      color: var(--primary-purple);
    }

    .support-card h2 {
      font-size: 1.5rem;
      margin-bottom: 10px;
      color: var(--white);
    }

    .support-card p {
      color: var(--text-gray);
      font-size: 0.9rem;
      margin-bottom: 20px;
    }

    .contact-link {
      display: block;
      color: var(--primary-purple);
      text-decoration: none;
      font-weight: 600;
      font-size: 1.1rem;
      word-break: break-all;
    }

    .whatsapp-btn {
      background: var(--whatsapp-green);
      color: white;
      padding: 12px 25px;
      border-radius: 50px;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      font-weight: 600;
      margin-top: 10px;
    }

    .phone-link {
      color: var(--white);
      text-decoration: none;
    }

    .notice-board {
      margin-top: 50px;
      background: rgba(147, 51, 234, 0.05);
      border: 1px solid rgba(147, 51, 234, 0.2);
      padding: 20px;
      border-radius: 15px;
      display: flex;
      align-items: center;
      gap: 15px;
      grid-column: 1 / -1;
    }

    .notice-board p {
      margin: 0;
      font-size: 0.9rem;
      color: var(--text-gray);
    }

    .back-btn-container {
      text-align: center;
      margin-top: 60px;
      grid-column: 1 / -1;
    }

    .back-btn {
      background: var(--primary-purple);
      color: white;
      padding: 14px 40px;
      border-radius: 50px;
      text-decoration: none;
      font-weight: 600;
      display: inline-block;
    }

    .back-btn:hover {
      box-shadow: 0 0 25px var(--accent-glow);
      transform: scale(1.05);
    }

    @media (max-width: 768px) {
      .support-header h1 {
        font-size: 2.3rem;
      }

      .support-grid {
        grid-template-columns: 1fr;
      }

      .support-card {
        padding: 28px 18px;
      }

      .notice-board {
        align-items: flex-start;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>

      <main className="support-page">
        <div className="support-container">
          <header className="support-header">
            <h1>
              Support <span>Community</span>
            </h1>

            <p className="gray-text">हम आपकी सहायता के लिए हमेशा तैयार हैं</p>
            <p>Funded & Built by Mukesh Raj | BR30 Trader</p>
          </header>

          <section className="support-grid">
            <div className="support-card">
              <div className="icon-box">
                <svg width="30" height="30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>

              <h2>User Help & OTP</h2>
              <p>Registration, OTP Issues और General Help के लिए यहाँ मेल करें।</p>

              <a href="mailto:support.br30trader@gmail.com" className="contact-link">
                support.br30trader@gmail.com
              </a>
            </div>

            <div className="support-card">
              <div className="icon-box">
                <svg width="30" height="30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>

              <h2>Official & Services</h2>
              <p>Web Services और Business Queries के लिए हमसे संपर्क करें।</p>

              <a href="mailto:br30service.contact@gmail.com" className="contact-link">
                br30service.contact@gmail.com
              </a>
            </div>

            <div className="support-card">
              <div className="icon-box" style={{ color: "var(--whatsapp-green)" }}>
                <svg width="30" height="30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </div>

              <h2>WhatsApp Support</h2>
              <p>सिर्फ मैसेज करें। तुरंत रिप्लाई के लिए अपना Query लिखकर भेजें।</p>

              <a href="https://wa.me/916200986380?text=Hello%20BR30%20Support%20Team%2C%20mujhe%20help%20chahiye..." className="whatsapp-btn" target="_blank" rel="noopener noreferrer">
                💬 Chat on WhatsApp
              </a>

              <p
                style={{
                  marginTop: "10px",
                  fontWeight: "bold",
                  color: "var(--white)",
                }}
              >
                <a href="tel:+916200986380" onClick={handleContactClick} className="phone-link">
                  📞 +91 6200986380
                </a>
              </p>
            </div>

            <div className="notice-board">
              <span style={{ fontSize: "1.5rem" }}>📢</span>

              <p>
                <strong>नोट:</strong> हमारी सपोर्ट टीम सुबह 10:00 से शाम 06:00 बजे तक एक्टिव रहती है। ईमेल का जवाब आमतौर पर 2 घंटे के भीतर दे दिया जाता है।
              </p>
            </div>

            <div className="back-btn-container">
              <BackHomeButton>← Back to Home</BackHomeButton>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

import { useEffect } from "react";
import { Link } from "react-router-dom";
import BackHomeButton from "../components/BackHomeButton";

export default function Br30Contact() {
  useEffect(() => {
    document.title = "Contact BR30 Trader Official | Support, Mentorship & Trading Help";

    const setMeta = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    setMeta("description", "Contact BR30 Trader for support, trading queries, and course details. Get quick help and guidance.");
    setMeta("keywords", "contact BR30 Trader, trading support, course help, trading mentor India, BR30 support");
  }, []);

  const handlePhoneClick = (e) => {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isMobile) {
      e.preventDefault();
      const message = encodeURIComponent("Hello BR30 Support Team, mujhe help chahiye...");
      window.open(`https://wa.me/916200986380?text=${message}`, "_blank");
    }
  };

  const styles = `
.contact-page{background:#050505;color:#fff;display:flex;justify-content:center;align-items:flex-start;padding:0 20px 40px;margin-top:0;min-height:100vh;font-family:"Poppins",sans-serif;}

    .contact-container {
      max-width: 850px;
      width: 100%;
      background: #1e293b;
      border: 1px solid #334155;
      border-radius: 22px;
      padding: 45px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.7);
      animation: fadeUp 0.6s ease;
    }

    @keyframes fadeUp {
      from {
        opacity: 0;
        transform: translateY(25px);
      }

      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .contact-header h1 {
      text-align: center;
      color: #a020f0;
      font-size: 30px;
      margin-bottom: 5px;
    }

    .contact-header .meta {
      text-align: center;
      color: #aaa;
      font-size: 13px;
      margin-bottom: 25px;
    }

    .desc {
      color: #cbd5e1;
      font-size: 16px;
      line-height: 1.8;
      margin-bottom: 15px;
    }

    .subtext {
      color: #9ca3af;
      font-size: 14px;
      margin-bottom: 20px;
    }

    .contact-body h3 {
      color: #fff;
      font-size: 18px;
      margin-top: 25px;
      margin-bottom: 12px;
      border-left: 4px solid #a020f0;
      padding-left: 10px;
    }

    .info-card {
      background: #0f172a;
      padding: 20px;
      border-radius: 12px;
      border: 1px solid #334155;
      margin-bottom: 10px;
    }

    .info-card p {
      color: #cbd5e1;
      margin-bottom: 8px;
      font-size: 15px;
    }

    .info-card b {
      color: #a020f0;
    }

    .contact-link {
      color: #00ffaa;
      text-decoration: none;
      transition: all 0.3s ease;
    }

    .contact-list {
      margin-left: 20px;
      color: #cbd5e1;
    }

    .contact-list li {
      margin-bottom: 8px;
      font-size: 15px;
    }

    .contact-divider {
      margin: 30px 0 15px 0;
      opacity: 0.3;
    }

    .funded-text {
      margin-top: 10px;
      text-align: center;
      color: #cbd5e1;
    }

    .btn {
      display: inline-block;
      margin-top: 25px;
      padding: 13px 32px;
      background: #a020f0;
      color: white;
      text-decoration: none;
      border-radius: 12px;
      font-weight: 600;
      transition: 0.3s;
      border: 1px solid #a020f0;
    }

    .btn:hover {
      background: transparent;
      color: #a020f0;
      transform: translateY(-3px);
      box-shadow: 0 10px 25px rgba(160, 32, 240, 0.35);
    }

     .contact-link:hover {
       color: #ffffff;
       text-shadow: 0 0 10px rgba(0, 255, 170, 0.8);
      }
     .whatsapp-hover:hover {
       color: #25d366;
       text-shadow: 0 0 12px rgba(37, 211, 102, 0.9);
      }

    @media (max-width: 600px) {
      .contact-container {
        padding: 25px 18px;
      }

      .contact-header h1 {
        font-size: 24px;
      }

      .desc {
        font-size: 14px;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>

      <main className="contact-page">
        <div className="contact-container">
          <div className="contact-header">
            <h1>Contact Official Support</h1>
            <p className="meta">BR30 Trader Support Center</p>
          </div>

          <div className="contact-body">
            <p className="desc">Get in touch with BR30 Trader official support for trading courses, account assistance, refunds, and mentorship-related queries.</p>

            <p className="subtext">BR30 Trader is the official platform of BR30 Trader, founded by Mukesh Raj.</p>

            <h3>📞 Support Information</h3>

            <div className="info-card">
              <p>
                <b>Email:</b>{" "}
                <a href="mailto:support.br30trader@gmail.com?subject=Support%20Request&body=Hello%20BR30%20Support%20Team,%0A%0AMujhe%20help%20chahiye%20regarding%20..." className="contact-link">
                  support.br30trader@gmail.com
                </a>
              </p>

              <p>
                <b>Phone:</b>{" "}
                <a href="tel:+916200986380" onClick={handlePhoneClick} className="contact-link">
                  +91 6200986380
                </a>
              </p>

              <p>
                <b>WhatsApp:</b>{" "}
                <a href="https://wa.me/916200986380?text=Hello%20BR30%20Support%20Team%2C%20mujhe%20help%20chahiye..." target="_blank" rel="noreferrer" className="contact-link whatsapp-hover">
                  Chat on WhatsApp
                </a>
              </p>

              <p>
                <b>Address:</b> Whitefield, Bangalore 560066, India
              </p>
            </div>

            <h3>⏱ Response Time</h3>
            <p className="desc">We typically respond within 24–48 business hours.</p>

            <h3>⚡ Support Guidelines</h3>
            <ul className="contact-list">
              <li>Use registered email for faster response</li>
              <li>Clearly mention your issue or order ID</li>
              <li>Avoid multiple duplicate messages</li>
            </ul>

            <hr className="contact-divider" />

            <p className="funded-text">Funded & Built by Mukesh Raj | BR30 Trader</p>

            <BackHomeButton>← Back to Home</BackHomeButton>
          </div>
        </div>
      </main>
    </>
  );
}

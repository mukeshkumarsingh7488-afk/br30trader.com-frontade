import { Link } from "react-router-dom";

export default function Disclaimer() {
  const styles = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Poppins", sans-serif;
    }

    .disclaimer-page {
      background-color: #050505;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      padding: 20px;
    }

    .disclaimer-card {
      max-width: 800px;
      background: #1e293b;
      border-radius: 20px;
      padding: 40px;
      border: 1px solid rgba(255, 68, 68, 0.3);
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
      position: relative;
      overflow: hidden;
    }

    .disclaimer-card::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 5px;
      background: linear-gradient(to right, #ef4444, #fbbf24, #ef4444);
    }

    .disclaimer-title {
      text-align: center;
      color: #ef4444;
      font-size: 1.8rem;
      margin-bottom: 30px;
      text-transform: uppercase;
      letter-spacing: 2px;
    }

    .content-box {
      line-height: 1.8;
      margin-bottom: 30px;
    }

    .disclaimer-en,
    .disclaimer-hi {
      padding: 20px;
      border-radius: 10px;
      background: rgba(15, 23, 42, 0.5);
    }

    .disclaimer-en p,
    .disclaimer-hi p {
      margin-bottom: 15px;
      font-size: 0.95rem;
      color: #cbd5e1;
    }

    .highlight {
      color: #ffffff;
      border-bottom: 1px solid #a020f0;
      font-weight: bold;
    }

    .sub-divider {
      border: 0;
      height: 1px;
      background: linear-gradient(
        to right,
        transparent,
        rgba(160, 32, 240, 0.5),
        transparent
      );
      margin: 30px 0;
    }

    .home-link {
      display: block;
      width: 150px;
      margin: 0 auto;
      text-align: center;
      padding: 12px;
      background: #a020f0;
      color: white;
      text-decoration: none;
      border-radius: 10px;
      font-weight: bold;
      transition: 0.3s;
    }

    .home-link:hover {
      background: white;
      color: #a020f0;
      box-shadow: 0 0 20px rgba(160, 32, 240, 0.4);
    }

    @media (max-width: 600px) {
      .disclaimer-card {
        padding: 25px;
      }

      .disclaimer-title {
        font-size: 1.4rem;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>

      <div className="disclaimer-page">
        <div className="disclaimer-card">
          <h3 className="disclaimer-title">⚠️ Disclaimer</h3>

          <div className="content-box">
            <div className="disclaimer-en">
              <p>
                <span className="highlight">BR30 Trader</span> provides trading education and market knowledge only.
              </p>

              <p>
                We are <span className="highlight">not SEBI registered</span> financial advisors.
              </p>

              <p>All strategies, videos, PDFs, and educational content are strictly for learning and research purposes.</p>

              <p>Trading in stocks, crypto, forex, or derivatives involves high financial risk.</p>

              <p>You are fully responsible for your own profits, losses, and investment decisions.</p>

              <p>Please consult your certified financial advisor before investing real money.</p>
            </div>

            <hr className="sub-divider" />

            <div className="disclaimer-hi">
              <p>
                <span className="highlight">BR30 Trader</span> sirf educational purpose aur market knowledge provide karta hai.
              </p>

              <p>
                Hum koi <span className="highlight">SEBI registered financial advisor</span> nahi hain.
              </p>

              <p>Hamare sabhi strategies, videos, PDFs aur content learning aur research purpose ke liye hain.</p>

              <p>Stock market, crypto, forex aur derivatives trading me financial risk hota hai.</p>

              <p>Aapke profit, loss aur investment decisions ki puri responsibility aapki khud ki hogi.</p>

              <p>Real money invest karne se pahle certified financial advisor se consult zarur karein.</p>
            </div>
          </div>

          <BackHomeButton>← Back to Home</BackHomeButton>
        </div>
      </div>
    </>
  );
}

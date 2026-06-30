import { useEffect } from "react";
import { Link } from "react-router-dom";
import BackHomeButton from "../components/BackHomeButton";

export default function LiveMarketAnalysis() {
  useEffect(() => {
    document.title = "Live Market Analysis (Nifty & BankNifty) | Intraday & Option Buying | BR30 Trader Official";

    const setMeta = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    setMeta("description", "Watch real-time live market analysis by BR30 Trader including intraday setups, breakout strategies and option buying.");
    setMeta("keywords", "live market analysis, intraday trading live, option trading live, stock market live, BR30 Trader live session");
    setMeta("robots", "index, follow, max-image-preview:large");
  }, []);

  const modules = [
    {
      title: "1. Pre-Market Setup",
      items: ["Global Market Sentiment", "Gift Nifty Tracking", "Major News & Events Check"],
    },
    {
      title: "2. Live Data Reading",
      items: ["Live PCR (Put Call Ratio)", "Open Interest (OI) Changes", "Volume Spike Detection"],
    },
    {
      title: "3. Scalping & Intraday",
      items: ["Opening Range Breakout", "VWAP & EMA Combinations", "Rejection & Trap Trading"],
    },
    {
      title: "4. Sector Rotation",
      items: ["Nifty Bank vs Nifty IT", "Leading & Lagging Sectors", "Stock Selection for Day"],
    },
    {
      title: "5. Entry & Exit Logic",
      items: ["Confirming with Price Action", "Setting Trailing Stoploss", "Partial Profit Booking"],
    },
    {
      title: "6. Review & Journal",
      items: ["Mistake Analysis", "Daily Profit/Loss Log", "Next Day Planning"],
    },
  ];

  const CheckIcon = () => (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M5 13l4 4L19 7"></path>
    </svg>
  );

  const styles = `
    .live-market-page {
      --bg-dark: #07070a;
      --card-bg: #12121a;
      --primary-purple: #9333ea;
      --accent-glow: rgba(147, 51, 234, 0.3);
      --text-gray: #a1a1aa;
      --white: #ffffff;

      font-family: "Poppins", sans-serif;
      background-color: var(--bg-dark);
      color: var(--white);
      margin: 0;
      padding: 40px 20px;
      min-height: 100vh;
    }

    .live-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .live-header {
      text-align: center;
      margin-bottom: 60px;
    }

    .live-header h1 {
      font-size: 3.5rem;
      margin: 0;
      background: linear-gradient(to right, #fff, var(--primary-purple));
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-transform: uppercase;
    }

    .gray-text {
      color: var(--text-gray);
    }

    .center-paragraph {
      display: flex;
      justify-content: center;
      margin: 12px 0;
    }

    .center-paragraph p {
      color: var(--text-gray);
      max-width: 800px;
      text-align: center;
      margin: 0;
      font-size: 14px;
    }

    .course-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 25px;
    }

    .module-card {
      background: var(--card-bg);
      padding: 30px;
      border-radius: 20px;
      border: 1px solid #1f1f2e;
      position: relative;
      overflow: hidden;
      transition: all 0.4s ease;
    }

    .module-card:hover {
      transform: translateY(-10px);
      border-color: var(--primary-purple);
      box-shadow: 0 15px 30px var(--accent-glow);
    }

    .module-card::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: var(--primary-purple);
    }

    .module-card h2 {
      color: var(--primary-purple);
      font-size: 1.4rem;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
    }

    .module-card ul {
      list-style: none;
      padding: 0;
    }

    .module-card li {
      margin-bottom: 15px;
      color: var(--text-gray);
      font-size: 0.95rem;
      display: flex;
      align-items: flex-start;
    }

    .module-card li svg {
      width: 18px;
      height: 18px;
      margin-right: 12px;
      color: var(--primary-purple);
      flex-shrink: 0;
      margin-top: 3px;
    }

    .back-btn-container {
      text-align: center;
      margin-top: 60px;
    }

    .back-btn {
      background: var(--primary-purple);
      color: white;
      padding: 14px 40px;
      border-radius: 50px;
      text-decoration: none;
      font-weight: 600;
      font-size: 1.1rem;
      box-shadow: 0 5px 15px var(--accent-glow);
      transition: 0.3s;
      display: inline-block;
    }

    .back-btn:hover {
      background: #a855f7;
      box-shadow: 0 8px 25px rgba(168, 85, 247, 0.5);
      letter-spacing: 1px;
    }

    @media (max-width: 768px) {
      .live-header h1 {
        font-size: 2.2rem;
      }

      .course-grid {
        grid-template-columns: 1fr;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>

      <main className="live-market-page">
        <div className="live-container">
          <header className="live-header">
            <h1>Live Market Analysis – Intraday Trading & Scalping Strategies</h1>

            <p className="gray-text">मार्केट के उतार-चढ़ाव को लाइव ट्रैक करना सीखें</p>

            <div className="center-paragraph">
              <p>Learn how professional traders analyze live markets using price action, volume, OI data and intraday scalping strategies to make better trading decisions.</p>
            </div>

            <p style={{ color: "#aaa", fontSize: "13px" }}>Powered by BR30 Trader, founded by Mukesh Raj, focused on structured trading education and real market analysis.</p>
          </header>

          <section className="course-grid">
            {modules.map((module) => (
              <div className="module-card" key={module.title}>
                <h2>{module.title}</h2>

                <ul>
                  {module.items.map((item) => (
                    <li key={item}>
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <div className="back-btn-container">
            <BackHomeButton>← Back to Home</BackHomeButton>
          </div>
        </div>
      </main>
    </>
  );
}

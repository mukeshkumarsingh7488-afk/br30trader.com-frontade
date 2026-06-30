import { useEffect } from "react";
import { Link } from "react-router-dom";
import BackHomeButton from "../components/BackHomeButton";

export default function BasicToAdvance() {
  useEffect(() => {
    document.title = "Basic to Advanced Trading Course (2026) | Price Action Mastery | BR30 Trader Official";

    const setMeta = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    setMeta("description", "Join BR30 Trader Basic to Advanced course. Learn price action, risk management, and real trading strategies step by step.");
    setMeta("keywords", "best trading course india, price action trading course, intraday trading strategies, option trading course india, stock market course beginner to advanced, BR30 Trader course");
    setMeta("robots", "index, follow");
  }, []);

  const modules = [
    {
      title: "Level 1: Foundation",
      items: ["Stock Market Mechanism", "IPO & Secondary Market", "Technical vs Fundamental"],
    },
    {
      title: "Level 2: Price Action",
      items: ["Advanced Candlestick Logic", "Support/Resistance Zones", "Mastering Trendlines"],
    },
    {
      title: "Level 3: Indicators",
      items: ["Moving Averages Mastery", "RSI Divergence Trading", "Bollinger Bands Strategy"],
    },
    {
      title: "Level 4: F&O Special",
      items: ["Option Chain Analysis", "Greeks (Theta & Delta)", "Hedging Strategies"],
    },
    {
      title: "Level 5: Risk Control",
      items: ["Position Sizing Secrets", "Risk to Reward Ratio", "Capital Management"],
    },
    {
      title: "Level 6: Psychology",
      items: ["Overcoming FOMO", "Journaling Your Trades", "Winning Mindset Rules"],
    },
  ];

  const CheckIcon = () => (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
  );

  const styles = `
    .basic-page {
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

    .basic-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .basic-header {
      text-align: center;
      margin-bottom: 60px;
    }

    .basic-header h1 {
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

    .center-text {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .center-text p {
      font-size: 14px;
      color: #ccc;
      margin-top: 10px;
      max-width: 800px;
      text-align: center;
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
      grid-column: 1 / -1;
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
      .basic-header h1 {
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

      <main className="basic-page">
        <div className="basic-container">
          <header className="basic-header">
            <h1>Basic to Advanced Trading Course – Intraday, Price Action & Options</h1>

            <p className="gray-text">आपका ट्रेडिंग मास्टरक्लास - 0 से Hero तक</p>

            <div className="center-text">
              <p>This Basic to Advanced Trading Course on BR30 Trader helps you master intraday trading, price action strategies and option buying with expert mentorship by BR30 Trader.</p>

              <p style={{ fontSize: "13px", color: "#aaa", marginTop: "5px" }}>Available exclusively on BR30 Trader, powered by BR30 Trader Official.</p>
            </div>
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

            <div className="back-btn-container">
              <BackHomeButton className="back-home-btn">← Back to Home</BackHomeButton>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function RiskManagement() {
  useEffect(() => {
    document.title = "Risk Management in Trading (2026) | Stop Loss, Position Sizing & Capital Protection | BR30 Trader Official";

    const setMeta = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    setMeta("description", "Learn professional risk management in trading. Control losses, protect capital and trade with discipline using BR30 Trader strategies.");
    setMeta("keywords", "risk management trading, stop loss strategy, trading psychology, capital protection, BR30 Trader");
    setMeta("robots", "index, follow, max-image-preview:large");
  }, []);

  const modules = [
    {
      title: "1. Position Sizing",
      items: ["Calculate Quantity per Trade", "Max Risk per Trade (1-2%)", "Fixed vs Variable Sizing"],
    },
    {
      title: "2. Stop Loss Mastery",
      items: ["Technical Stop Loss Placement", "Trailing SL Techniques", "Avoid System vs Mental SL"],
    },
    {
      title: "3. Risk to Reward (RR)",
      items: ["Minimum 1:2 Setup Logic", "Win Rate vs RR Ratio", "Breakeven Management"],
    },
    {
      title: "4. Capital Protection",
      items: ["Daily Loss Limit (Stop Day)", "Weekly Drawdown Rules", "Withdrawal Strategies"],
    },
    {
      title: "5. Trade Management",
      items: ["Scaling In & Scaling Out", "Avoiding Revenge Trading", "Dealing with Gap Up/Down"],
    },
    {
      title: "6. Diversification",
      items: ["Correlation Awareness", "Multiple Asset Classes", "Hedging for Overnight Risk"],
    },
  ];

  const CheckIcon = () => (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
  );

  const styles = `
    html,
    body {
      overflow-x: hidden;
    }

    .risk-page {
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

    .risk-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .risk-header {
      text-align: center;
      margin-bottom: 60px;
    }

    .risk-header h1 {
      font-size: 3.5rem;
      margin: 0;
      background: linear-gradient(to right, #fff, var(--primary-purple));
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-transform: uppercase;
    }

    .quote-box {
      max-width: 800px;
      margin: 25px auto 0;
      font-style: italic;
      font-size: 1.1rem;
      color: #cbd5e1;
      border-left: 4px solid var(--primary-purple);
      padding-left: 20px;
      text-align: left;
    }

    .powered-text {
      color: #aaa;
      font-size: 13px;
      text-align: center;
      margin-top: 20px;
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
      .risk-header h1 {
        font-size: 2.2rem;
      }

      .course-grid {
        grid-template-columns: 1fr;
      }

      .quote-box {
        font-size: 1rem;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>

      <main className="risk-page">
        <div className="risk-container">
          <header className="risk-header">
            <h1>Premium Trading Courses – Learn Price Action & Options Trading</h1>

            <div className="quote-box">&quot;The goal of a successful Trader is to make the best trades. Money is secondary.&quot; — Alexander Elder</div>

            <p className="powered-text">Powered by BR30 Trader, founded by Mukesh Raj, focused on structured trading education and real market analysis.</p>
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
            <Link to="/" className="back-btn" title="Go back to the homepage" aria-label="Go back to the homepage">
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

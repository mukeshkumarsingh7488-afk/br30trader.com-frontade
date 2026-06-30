import { useEffect } from "react";
import { Link } from "react-router-dom";
import BackHomeButton from "../components/BackHomeButton";

export default function Br30Strategies() {
  useEffect(() => {
    document.title = "Best Trading Strategies (2026) | Intraday, Price Action & Option Buying | BR30 Trader Official";

    const setMeta = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    setMeta("description", "Explore powerful trading strategies including price action, breakout setups, option buying strategies, and risk management.");
    setMeta("keywords", "trading strategies, price action strategy, breakout trading, option buying strategy, intraday trading setup");
    setMeta("robots", "index, follow");
  }, []);

  const strategies = [
    {
      icon: "fa-solid fa-bolt",
      title: "Option Buying",
      tags: ["9/15 EMA", "Price Action", "Scalping"],
      desc: "Learn to capture fast momentum using EMA crossovers and FVG gaps in highly liquid markets.",
    },
    {
      icon: "fa-solid fa-shield-halved",
      title: "Option Selling",
      tags: ["RSI Divergence", "Hedging", "Theta Decay"],
      desc: "Master the art of non-directional trading with safe hedging and premium decay logic.",
    },
    {
      icon: "fa-solid fa-moon",
      title: "BTST Strategy",
      tags: ["Gap Analysis", "Volume Profile"],
      desc: "Identify overnight opportunities based on delivery volume and high-probability gap-up setups.",
    },
    {
      icon: "fa-brands fa-bitcoin",
      title: "Crypto & Forex",
      tags: ["Fibonacci", "Trendlines", "24/7 Market"],
      desc: "Trade global markets using supply-demand zones and geometric price patterns in Crypto/Forex.",
    },
    {
      icon: "fa-solid fa-rocket",
      title: "One Side Momentum",
      tags: ["Institutional Flow", "Big Boy Entry"],
      desc: "How to ride massive trends when big players enter. Pure logic without lagging indicators.",
    },
    {
      icon: "fa-solid fa-gauge-high",
      title: "Scalping Strategy",
      tags: ["VWAP", "Quick Entry", "1 Min Chart"],
      desc: "High-speed trading logic for small targets with big quantity. Perfect for sideways markets.",
    },
  ];

  const styles = `
    .strategies-page {
      background-color: #050505;
      color: #ffffff;
      line-height: 1.6;
      overflow-x: hidden;
      min-height: 100vh;
      font-family: "Poppins", sans-serif;
    }

    .hero-strategy {
      padding: 80px 20px;
      text-align: center;
      background: linear-gradient(rgba(160, 32, 240, 0.1), rgba(15, 23, 42, 1));
      border-bottom: 2px solid #a020f0;
    }

    .hero-strategy h1 {
      font-size: 3rem;
      margin-bottom: 20px;
      text-transform: uppercase;
      letter-spacing: 2px;
    }

    .hero-strategy h1 span {
      color: #a020f0;
      text-shadow: 0 0 20px rgba(160, 32, 240, 0.5);
    }

    .quote-box {
      max-width: 800px;
      margin: 0 auto;
      font-style: italic;
      font-size: 1.2rem;
      color: #cbd5e1;
      border-left: 4px solid #a020f0;
      padding-left: 20px;
    }

    .hero-owner {
      color: #94a3b8;
      margin-top: 18px;
      font-size: 0.95rem;
    }

    .strategy-container {
      max-width: 1200px;
      margin: 60px auto;
      padding: 0 20px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
    }

    .strategy-card {
      background: #1e293b;
      padding: 40px 30px;
      border-radius: 25px;
      border: 1px solid rgba(160, 32, 240, 0.2);
      transition: 0.4s ease;
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .strategy-card:hover {
      transform: translateY(-10px);
      border-color: #a020f0;
      box-shadow: 0 15px 40px rgba(160, 32, 240, 0.2);
    }

    .icon-box {
      font-size: 3rem;
      color: #a020f0;
      margin-bottom: 20px;
      text-shadow: 0 0 15px rgba(160, 32, 240, 0.3);
    }

    .strategy-card h2 {
      font-size: 1.4rem;
      margin-bottom: 15px;
      color: #ffffff;
    }

    .tags {
      display: flex;
      gap: 10px;
      margin-bottom: 20px;
      flex-wrap: wrap;
      justify-content: center;
    }

    .tag {
      font-size: 0.7rem;
      padding: 4px 12px;
      background: rgba(160, 32, 240, 0.1);
      border: 1px solid #a020f0;
      border-radius: 50px;
      color: #ffffff;
      font-weight: 600;
    }

    .details p {
      font-size: 0.9rem;
      color: #94a3b8;
    }

    .center-quote {
      text-align: center;
      padding: 60px 20px;
      background: rgba(30, 41, 59, 0.5);
      margin: 40px 0;
    }

    .center-quote h2 {
      font-size: 2rem;
      color: #ffffff;
      margin-bottom: 10px;
    }

    .center-quote p {
      font-size: 1.1rem;
      color: #a020f0;
      font-weight: 600;
    }

    .back-home {
      display: block;
      width: 200px;
      margin: 50px auto;
      text-align: center;
      padding: 15px;
      background: #a020f0;
      color: white;
      text-decoration: none;
      border-radius: 12px;
      font-weight: bold;
      transition: 0.3s;
    }

    .back-home:hover {
      background: #ffffff;
      color: #a020f0;
      box-shadow: 0 0 20px #a020f0;
    }

    @media (max-width: 900px) {
      .strategy-container {
        grid-template-columns: 1fr 1fr;
      }
    }

    @media (max-width: 600px) {
      .strategy-container {
        grid-template-columns: 1fr;
      }

      .hero-strategy h1 {
        font-size: 2rem;
      }

      .quote-box {
        font-size: 1rem;
        padding-left: 14px;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>

      <main className="strategies-page">
        <header className="hero-strategy">
          <h1>
            Trading <span>Mastery</span> Center
          </h1>

          <div className="quote-box">&quot;The goal of a successful Trader is to make the best trades. Money is secondary.&quot; — Alexander Elder</div>

          <p className="hero-owner">Funded & Built by Mukesh Raj | BR30 Trader</p>
        </header>

        <section className="strategy-container">
          {strategies.map((item) => (
            <div className="strategy-card" key={item.title}>
              <div className="icon-box">
                <i className={item.icon}></i>
              </div>

              <h2>{item.title}</h2>

              <div className="tags">
                {item.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="details">
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </section>

        <div className="center-quote">
          <h2>&quot;Trading is 10% Strategy & 90% Discipline.&quot;</h2>
          <p>Master your mind, master the market. 📈</p>
        </div>

        <BackHomeButton>← Back to Home</BackHomeButton>
      </main>
    </>
  );
}

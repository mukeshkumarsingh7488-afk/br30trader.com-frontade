import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function LifetimeAccess() {
  useEffect(() => {
    document.title = "Lifetime VIP Trading Mentorship (2026) | BR30 Trader – Premium Access, Strategies & Live Support";

    const setMeta = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    setMeta("description", "Get lifetime VIP access to BR30 Trader courses, live trading sessions, and premium strategies with one-time payment.");
    setMeta("keywords", "lifetime trading course, VIP trading access, BR30 Trader premium, option trading course, lifetime mentorship");
    setMeta("robots", "index, follow");
  }, []);

  const modules = [
    {
      title: "1. Instant Onboarding",
      items: ["रजिस्ट्रेशन के तुरंत बाद A-Z जानकारी ईमेल पर।", "Login credentials और Setup Guide।"],
    },
    {
      title: "2. Certification",
      items: ["कोर्स पूरा होने पर Professional Certificate।", "आपकी मेहनत का डिजिटल प्रमाण।"],
    },
    {
      title: "3. Ever-Evolving Content",
      items: ["मार्केट स्ट्रक्चर के हिसाब से हर साल न्यू अपडेट्स।", "लाइफ टाइम तक लेटेस्ट स्ट्रेटेजीज़ का एक्सेस।"],
    },
    {
      title: "4. VIP Community",
      items: ["एक्सक्लूसिव VIP Telegram चैनल में एंट्री।", "Daily Live Market support और चर्चा।"],
    },
    {
      title: "5. Direct Support",
      items: ["Personal Doubt Clearing Sessions।", "महीने में एक बार VIP-Only Q&A वेबिनार।"],
    },
    {
      title: "6. Premium Resources",
      items: ["Secret Trading Rulebook (PDF)", "High-Probability Chart Layouts", "Daily Checklist for Discipline"],
    },
  ];

  const users = ["Rahul Sharma", "Amit Verma", "Sneha Patel", "Vikram Singh", "Priya Das", "Sunny Raj", "Arjun Mehta", "Rohit Kumar", "Anjali Gupta", "Karan Malhotra", "Neha Singh", "& Many Others"];

  const CheckIcon = () => (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M5 13l4 4L19 7"></path>
    </svg>
  );

  const styles = `
    .lifetime-page {
      --bg-dark: #07070a;
      --card-bg: #12121a;
      --primary-purple: #9333ea;
      --gold: #ffd700;
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

    .lifetime-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .lifetime-header {
      text-align: center;
      margin-bottom: 60px;
    }

    .lifetime-header h1 {
      font-size: 3.5rem;
      margin: 0;
      background: linear-gradient(to right, #fff, var(--gold), var(--primary-purple));
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
      justify-content: center;
    }

    .center-text p {
      font-size: 14px;
      color: #ccc;
      max-width: 800px;
      text-align: center;
      margin: 10px 0 0;
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
      transition: all 0.4s ease;
      overflow: hidden;
    }

    .module-card:hover {
      transform: translateY(-10px);
      border-color: var(--gold);
      box-shadow: 0 15px 30px rgba(255, 215, 0, 0.1);
    }

    .module-card::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: linear-gradient(to right, var(--primary-purple), var(--gold));
    }

    .module-card h2 {
      color: var(--gold);
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
      color: var(--gold);
      flex-shrink: 0;
      margin-top: 3px;
    }

    .leaderboard-section {
      margin-top: 80px;
      background: #161625;
      padding: 40px;
      border-radius: 25px;
      border: 1px dashed var(--gold);
      text-align: center;
    }

    .leaderboard-title {
      color: var(--gold);
      font-size: 2rem;
      margin-bottom: 20px;
      text-transform: uppercase;
    }

    .user-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 15px;
    }

    .user-badge {
      background: rgba(147, 51, 234, 0.2);
      padding: 8px 20px;
      border-radius: 50px;
      border: 1px solid var(--primary-purple);
      font-weight: 600;
      font-size: 0.9rem;
    }

    .buy-text {
      color: var(--gold);
      margin-top: 25px;
      font-size: 0.9rem;
    }

    .back-btn-container {
      text-align: center;
      margin-top: 60px;
    }

    .back-btn {
      background: linear-gradient(45deg, var(--primary-purple), #6b21a8);
      color: white;
      padding: 14px 40px;
      border-radius: 50px;
      text-decoration: none;
      font-weight: 600;
      transition: 0.3s;
      display: inline-block;
    }

    .back-btn:hover {
      box-shadow: 0 0 25px var(--accent-glow);
      transform: scale(1.05);
    }

    @media (max-width: 768px) {
      .lifetime-header h1 {
        font-size: 2.2rem;
      }

      .course-grid {
        grid-template-columns: 1fr;
      }

      .leaderboard-section {
        padding: 25px 15px;
      }

      .leaderboard-title {
        font-size: 1.4rem;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>

      <main className="lifetime-page">
        <div className="lifetime-container">
          <header className="lifetime-header">
            <h1>Lifetime VIP Learning Access</h1>

            <p className="gray-text">सिर्फ एक कोर्स नहीं, एक पूरी ट्रेडिंग कम्युनिटी</p>

            <div className="center-text">
              <p>Join BR30 Kart Lifetime VIP program to access trading courses, mentorship, live community discussions, premium resources and continuous market updates.</p>
            </div>

            <p
              style={{
                fontSize: "13px",
                color: "#aaa",
                marginTop: "5px",
                textAlign: "center",
              }}
            >
              Powered by BR30 Trader, founded by Mukesh Raj, this ecosystem is built for serious traders who want long-term growth.
            </p>
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

          <section className="leaderboard-section">
            <h2 className="leaderboard-title">🏆 Our VIP Hall of Fame 🏆</h2>

            <p className="gray-text" style={{ marginBottom: "30px" }}>
              सक्सेसफुल ट्रेडर्स जो हमारी VIP कम्युनिटी का हिस्सा हैं
            </p>

            <div className="user-list">
              {users.map((user) => (
                <span className="user-badge" key={user}>
                  ⭐ {user}
                </span>
              ))}
            </div>

            <p className="buy-text">कोर्स खरीदें और अपना नाम यहाँ लिस्ट करवाएं!</p>
          </section>

          <div className="back-btn-container">
            <Link to="/" className="back-btn" title="Back to BR30 Trader Dashboard" aria-label="Go back to the homepage">
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

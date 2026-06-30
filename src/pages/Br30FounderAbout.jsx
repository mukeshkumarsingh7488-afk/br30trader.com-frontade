import { useEffect } from "react";
import { Link } from "react-router-dom";
import BackHomeButton from "../components/BackHomeButton";

export default function Br30FounderAbout() {
  useEffect(() => {
    document.title = "Mukesh Raj (2026) – Founder of BR30 Trader & BR30 Kart | Trading Mentor India";

    const setMeta = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    setMeta("description", "Discover Mukesh Raj, founder of BR30 Trader & BR30 Kart. Learn his journey, price action strategies, intraday trading methods, and option buying mentorship approach.");
    setMeta("keywords", "Mukesh Raj trader, BR30 Trader founder, trading mentor India, price action trader India, intraday trading mentor, option buying expert, BR30 Kart founder");
    setMeta("robots", "index, follow, max-image-preview:large");
  }, []);

  const styles = `
.founder-page{background:#050505;color:#fff;line-height:1.6;overflow-x:hidden;min-height:100vh;font-family:"Poppins",sans-serif;}
.profile-hero{min-height:260px;background:linear-gradient(135deg,#050505 0%,#1e293b 100%);display:flex;align-items:flex-start;justify-content:center;text-align:center;border-bottom:2px solid #a020f0;position:relative;padding:55px 20px 90px;margin-top:0;}
.profile-hero h1{font-size:3.5rem;letter-spacing:2px;text-transform:uppercase;max-width:1100px;margin:0;}
.profile-hero h1 span{color:#a020f0;text-shadow:0 0 20px rgba(160,32,240,.5);}
.main-container{max-width:1000px;margin:-70px auto 50px;padding:0 20px;}
.founder-card{background:rgba(30,41,59,.7);backdrop-filter:blur(15px);border:1px solid rgba(160,32,240,.2);border-radius:30px;padding:50px;box-shadow:0 25px 50px rgba(0,0,0,.5);}
.info-grid{display:grid;grid-template-columns:1fr 1fr;gap:40px;margin-top:30px;}
.info-box h2{color:#a020f0;margin-bottom:20px;font-size:1.8rem;border-bottom:2px solid rgba(160,32,240,.2);display:inline-block;padding-bottom:5px;}
.info-box p{color:#cbd5e1;margin-bottom:15px;font-size:1.05rem;}
.intro-box{text-align:center;margin-bottom:40px;}
.intro-main{font-size:1.3rem!important;color:#fff!important;}
.intro-sub{font-size:1rem!important;color:#ccc!important;margin-top:10px;}
.badges-container{display:flex;gap:15px;flex-wrap:wrap;margin-top:20px;}
.badge{background:rgba(160,32,240,.1);border:1px solid #a020f0;color:#fff;padding:8px 18px;border-radius:50px;font-size:.9rem;font-weight:600;transition:.3s;}
.badge:hover{background:#a020f0;box-shadow:0 0 15px #a020f0;transform:translateY(-3px);}
.notes-section{margin-top:50px;padding:30px;background:rgba(15,23,42,.8);border-radius:20px;border-left:5px solid #a020f0;}
.notes-section h3{color:#fff;margin-bottom:15px;}
.notes-section em{color:#94a3b8;font-size:1.1rem;}
.home-center{text-align:center;}
.btn-home{display:inline-block;margin-top:40px;padding:12px 30px;background:#a020f0;color:#fff;text-decoration:none;border-radius:10px;font-weight:700;transition:.3s;border:1px solid transparent;}
.btn-home:hover{background:transparent;border-color:#a020f0;color:#a020f0;box-shadow:0 0 20px rgba(160,32,240,.3);}
.profile-footer{text-align:center;padding:40px;color:#64748b;font-size:.9rem;}
@media(max-width:768px){.profile-hero{min-height:220px;padding:40px 20px 80px;}.profile-hero h1{font-size:2.2rem;}.info-grid{grid-template-columns:1fr;}.founder-card{padding:30px 20px;}.main-container{margin:-55px auto 40px;}}
`;

  return (
    <>
      <style>{styles}</style>

      <main className="founder-page">
        <section className="profile-hero">
          <h1>
            Mukesh Raj – Founder of <span>BR30 Trader</span> & BR30 Kart
          </h1>
        </section>

        <div className="main-container">
          <div className="founder-card">
            <div className="info-box intro-box">
              <p className="intro-main">
                <b>Hey, I&apos;m Mukesh Raj!</b> A dedicated Trader with a focus on market psychology and high-speed web solutions.
              </p>

              <p className="intro-sub">Mukesh Raj is the founder of BR30 Trader and BR30 Kart, providing intraday trading, price action strategies and option buying mentorship in India.</p>
            </div>

            <div className="info-grid">
              <div className="info-box">
                <h2>📊 Trading Journey</h2>

                <p>
                  <b>Options Trading:</b> Actively trading since <b>March 2022</b>. Expert in analyzing breakout strategies and premium decay behaviors.
                </p>

                <p>
                  <b>Crypto Assets:</b> Involved in the crypto space since <b>Feb 2023</b>, focusing on long-term trends and volatility patterns.
                </p>
              </div>

              <div className="info-box">
                <h2>💻 Technical Skills</h2>

                <p>Apart from the charts, I build high-performance web applications tailored for business needs.</p>

                <div className="badges-container">
                  <div className="badge">Price Action</div>
                  <div className="badge">Risk Management</div>
                  <div className="badge">Web Development</div>
                  <div className="badge">API Integration</div>
                </div>
              </div>
            </div>

            <div className="notes-section">
              <h3>🎯 My Vision</h3>

              <p>
                <em>&quot;My goal is to simplify the complex world of trading through logic and structured learning. I believe in sharing insights that help others build a disciplined mindset.&quot;</em>
              </p>

              <br />

              <p>
                <strong>Looking for a Website?</strong> I specialize in custom solutions for Traders and entrepreneurs. Let&apos;s build something fast!
              </p>
            </div>

            <div className="home-center">
              <BackHomeButton>← Back to Home</BackHomeButton>
            </div>
          </div>
        </div>

        <footer className="profile-footer">
          <p>© 2026 BR30Trader | mukeshkumarsingh7488@gmail.com</p>
        </footer>
      </main>
    </>
  );
}

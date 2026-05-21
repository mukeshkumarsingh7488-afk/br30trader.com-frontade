import React from "react";

export default function TradingUpdatesSection() {
  return (
    <section className="trading-updates-section">
      {/* 💹 Daily P&L */}
      <div className="update-card pl-card">
        <h2>
          💹 <span>Daily P&L</span>
        </h2>

        <p>Transparency is key. Check my verified daily reports.</p>

        <div className="pl-button-box">
          <a href="https://drive.google.com/drive/folders/1KyYhGtuJX9J8jssCV5r9amUmwWYsqR6R?usp=sharing" target="_blank" rel="noopener noreferrer">
            <i className="fa-solid fa-folder-open"></i>
            <span>View Crypto & Forex P&L</span>
          </a>
        </div>
      </div>

      {/* 🔥 Coming Courses */}
      <div className="update-card courses-card">
        <h2>
          🔥 <span>Coming Courses</span>
        </h2>

        <div className="course-tags">
          <span>Scalping</span>
          <span>Price Action</span>
          <span>Candle Stick</span>
          <span>Chart Reading</span>
        </div>
      </div>

      <style>{`
        .trading-updates-section{
          width:100%;
          max-width:1100px;
          margin:70px auto 40px;
          padding:0 16px;

          display:grid;
          grid-template-columns:1fr 1fr;
          gap:30px;
        }

        .update-card{
          background:#000;
          border:1px solid rgba(0,255,170,0.45);
          border-radius:24px;

          padding:45px 30px;

          text-align:center;

          box-shadow:
            0 0 25px rgba(0,255,140,0.08),
            inset 0 0 10px rgba(0,255,140,0.03);

          transition:0.3s ease;
        }

        .update-card:hover{
          transform:translateY(-4px);
          box-shadow:
            0 0 35px rgba(0,255,140,0.18),
            inset 0 0 15px rgba(0,255,140,0.05);
        }

        .update-card h2{
          margin:0;
          font-size:2.1rem;
          font-weight:800;
          color:#f5f5f5;

          display:flex;
          align-items:center;
          justify-content:center;
          gap:10px;
        }

        .update-card h2 span{
          color:#f5f5f5;
        }

        .update-card p{
          margin-top:22px;
          color:#b9c2cf;
          font-size:1rem;
          line-height:1.7;
          font-weight:500;
        }

        .pl-button-box{
          margin-top:34px;
        }

        .pl-button-box a{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          gap:12px;

          text-decoration:none;

          padding:16px 30px;

          border-radius:16px;

          border:2px solid #00ffaa;

          color:#00ffaa;

          font-size:1.1rem;
          font-weight:700;

          background:rgba(0,255,170,0.05);

          transition:0.3s ease;
        }

        .pl-button-box a:hover{
          background:#00ffaa;
          color:#000;

          transform:translateY(-2px);

          box-shadow:0 0 25px rgba(0,255,170,0.4);
        }

        .course-tags{
          margin-top:34px;

          display:flex;
          justify-content:center;
          flex-wrap:wrap;
          gap:16px;
        }

        .course-tags span{
          padding:12px 22px;

          border-radius:999px;

          background:rgba(125,0,255,0.12);

          border:1px solid rgba(170,0,255,0.25);

          color:#d7b8ff;

          font-size:0.95rem;
          font-weight:600;

          transition:0.3s ease;
        }

        .course-tags span:hover{
          background:#8a2be2;
          color:#fff;
          transform:translateY(-2px);
        }

        @media(max-width:768px){

          .trading-updates-section{
            grid-template-columns:1fr;
            gap:24px;
            margin-top:50px;
          }

          .update-card{
            padding:35px 22px;
          }

          .update-card h2{
            font-size:1.7rem;
          }

          .update-card p{
            font-size:0.95rem;
          }

          .pl-button-box a{
            width:100%;
            font-size:1rem;
          }

          .course-tags{
            gap:12px;
          }

          .course-tags span{
            font-size:0.85rem;
            padding:10px 18px;
          }
        }
      `}</style>
    </section>
  );
}

import React from "react";

export default function PatternSection() {
  const patterns = [
    {
      tag: "Bullish",
      title: "📉Double Bottom",
      logic: "जब मार्केट दो बार एक ही सपोर्ट से बाउंस करे, तो यह 'W' पैटर्न बनाता है। यह मंदी के खत्म होने का संकेत है।",
      btn: "View Strategy",
      tagColor: "#22c55e",
      tagBg: "rgba(34,197,94,0.12)",
    },
    {
      tag: "Bearish",
      title: "👤Head & Shoulders",
      logic: "यह ट्रेंड रिवर्सल का सबसे बड़ा सिग्नल है। जब बायर्स नया हाई बनाने में फेल हो जाते हैं, तब यह बनता है।",
      btn: "View Strategy",
      tagColor: "#ef4444",
      tagBg: "rgba(239,68,68,0.12)",
      active: true,
    },
    {
      tag: "Neutral",
      title: "📐Symmetrical Triangle",
      logic: "यहाँ मार्केट कंसोलिडेट होता है। जिस तरफ भी ब्रेकआउट होगा, उस तरफ एक बड़ा मूव आने की संभावना होती है।",
      btn: "View Strategy",
      tagColor: "#a855f7",
      tagBg: "rgba(168,85,247,0.12)",
    },
    {
      tag: "High Volume",
      title: "🚀Breakout Logic",
      logic: "जब मार्केट किसी बड़े रेजिस्टेंस को भारी वॉल्यूम के साथ पार करता है, तो यह दर्शाता है कि अब बायर्स पूरी तरह कंट्रोल में हैं।",
      btn: "Check Volume",
      tagColor: "#3b82f6",
      tagBg: "rgba(59,130,246,0.12)",
    },
    {
      tag: "Stoploss Hunt",
      title: "🎯Fakeout Trap",
      logic: "अक्सर मार्केट रेजिस्टेंस के ऊपर जाकर वापस नीचे आ जाता है। यह रिटेलर्स को फँसाने (Trap) के लिए 'Liquidity Hunt' होता है।",
      btn: "Avoid Traps",
      tagColor: "#ef4444",
      tagBg: "rgba(239,68,68,0.12)",
    },
    {
      tag: "Multi-Touch",
      title: "📈Trendline Logic",
      logic: "ट्रेंडलाइन पर तीसरी बार टच होना सबसे 'High Accuracy' ट्रेड माना जाता है क्योंकि यहाँ बड़े प्लेयर्स अपनी पोजीशन बढ़ाते हैं।",
      btn: "View Trend",
      tagColor: "#a020f0",
      tagBg: "rgba(160,32,240,0.12)",
    },
  ];

  return (
    <>
      <style>{`
        .pattern-section{
          width:100%;
          padding:90px 20px;
          background:radial-gradient(circle at top,rgba(0,255,136,0.08),#03110b 45%,#020403 100%);
          overflow:hidden;
        }

        .pattern-title{
          text-align:center;
          font-size:62px;
          font-weight:800;
          margin:0;
          line-height:1.1;
          color:#00eaff;
        }

        .pattern-title span{
          color:#22c55e;
        }

        .pattern-subtitle{
          text-align:center;
          color:#9ca3af;
          margin-top:14px;
          font-size:20px;
          letter-spacing:0.5px;
        }

        .pattern-grid{
          max-width:1250px;
          margin:70px auto 0;
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:32px;
        }

        .pattern-card{
          background:#030303;
          border:1px solid rgba(168,85,247,0.35);
          border-radius:24px;
          padding:30px;
          transition:0.35s ease;
          box-shadow:0 0 0 rgba(0,255,136,0);
        }

        .pattern-card:hover{
          transform:translateY(-6px);
          border-color:#00ff88;
          box-shadow:0 0 22px rgba(0,255,136,0.22);
        }

        .pattern-card.active{
          border-color:#00ff88;
          box-shadow:0 0 20px rgba(0,255,136,0.18);
        }

        .pattern-tag{
          display:inline-block;
          padding:6px 12px;
          border-radius:8px;
          font-size:14px;
          font-weight:700;
          margin-bottom:18px;
        }

        .pattern-heading{
          color:#f5f5f5;
          font-size:28px;
          font-weight:800;
          margin:0 0 18px;
        }

        .logic-text{
          color:#cfcfcf;
          font-size:18px;
          line-height:1.7;
          margin-bottom:22px;
        }

        .logic-text b{
          color:#00eaff;
        }

        .view-btn{
          color:#00ff88;
          font-size:24px;
          font-weight:800;
          text-transform:uppercase;
          transition:0.3s ease;
          cursor:pointer;
        }

        .pattern-card:hover .view-btn{
          letter-spacing:1px;
        }

        @media(max-width:1100px){
          .pattern-grid{
            grid-template-columns:repeat(2,1fr);
          }

          .pattern-title{
            font-size:52px;
          }
        }

        @media(max-width:768px){
          .pattern-grid{
            grid-template-columns:1fr;
            gap:22px;
          }

          .pattern-title{
            font-size:40px;
          }

          .pattern-subtitle{
            font-size:16px;
          }

          .pattern-card{
            padding:22px;
          }

          .pattern-heading{
            font-size:22px;
          }

          .logic-text{
            font-size:16px;
          }

          .view-btn{
            font-size:20px;
          }
        }
      `}</style>

      <section className="pattern-section">
        <h2 className="pattern-title">
          Master <span>Chart Patterns</span>
        </h2>

        <p className="pattern-subtitle">The language of the market and price action logic</p>

        <div className="pattern-grid">
          {patterns.map((item, index) => (
            <div key={index} className={`pattern-card ${item.active ? "active" : ""}`}>
              <span
                className="pattern-tag"
                style={{
                  color: item.tagColor,
                  background: item.tagBg,
                }}
              >
                {item.tag}
              </span>

              <h3 className="pattern-heading">{item.title}</h3>

              <p className="logic-text">
                <b>Logic:</b> {item.logic}
              </p>

              <div className="view-btn">{item.btn}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

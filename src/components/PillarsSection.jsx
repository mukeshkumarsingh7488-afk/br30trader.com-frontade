import React from "react";

export default function PillarsSection() {
  const pillars = [
    {
      value: "90%",
      title: "Psychology Focus",
      text: "मार्केट में पैसा सेटअप से नहीं, माइंडसेट से बनता है।",
    },
    {
      value: "1:2+",
      title: "Risk Reward",
      text: "कम खोना और ज़्यादा कमाना ही असली ट्रेडर की पहचान है।",
    },
    {
      value: "Zero",
      title: "Overtrading",
      text: "जहाँ सेटअप नहीं, वहाँ ट्रेड नहीं। अनुशासन ही पैसा है।",
    },
  ];

  return (
    <>
      <style>{`
        .trading-pillars{
          width:100%;
          padding:90px 20px;
          background:radial-gradient(circle at center,rgba(0,255,136,0.05),#03110b 45%,#020403 100%);
        }

        .pillar-container{
          max-width:1250px;
          margin:auto;
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:30px;
        }

        .pillar-box{
          background:#030303;
          border-radius:26px;
          padding:55px 35px 40px;
          border:1px solid rgba(168,85,247,0.28);
          text-align:center;
          position:relative;
          overflow:hidden;
          transition:0.35s ease;
        }

        .pillar-box::after{
          content:"";
          position:absolute;
          bottom:0;
          left:0;
          width:100%;
          height:4px;
          background:#00ff88;
          box-shadow:0 0 18px rgba(0,255,136,0.8);
        }

        .pillar-box:hover{
          transform:translateY(-8px);
          border-color:#00ff88;
          box-shadow:0 0 24px rgba(0,255,136,0.18);
        }

        .purple-text{
          font-size:72px;
          font-weight:800;
          margin:0;
          line-height:1;
          color:#00ff88;
          text-shadow:0 0 16px rgba(0,255,136,0.35);
        }

        .white-text{
          margin-top:18px;
          font-size:34px;
          color:#f5f5f5;
          text-transform:uppercase;
          font-weight:800;
          letter-spacing:1px;
        }

        .pillar-footer{
          margin-top:30px;
          padding-top:22px;
          border-top:1px solid rgba(255,255,255,0.06);
          color:#bdbdbd;
          font-size:21px;
          line-height:1.8;
        }

        @media(max-width:1100px){
          .pillar-container{
            grid-template-columns:1fr;
          }
        }

        @media(max-width:768px){
          .trading-pillars{
            padding:70px 14px;
          }

          .pillar-box{
            padding:40px 22px 30px;
          }

          .purple-text{
            font-size:52px;
          }

          .white-text{
            font-size:24px;
          }

          .pillar-footer{
            font-size:17px;
          }
        }
      `}</style>

      <section className="trading-pillars">
        <div className="pillar-container">
          {pillars.map((item, index) => (
            <div className="pillar-box" key={index}>
              <h2 className="purple-text">{item.value}</h2>
              <p className="white-text">{item.title}</p>
              <div className="pillar-footer">{item.text}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

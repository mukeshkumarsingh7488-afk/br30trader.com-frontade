import React from "react";

export default function TradingMindsetSection() {
  return (
    <section id="br30-trading-section">
      <div className="trading-container">
        {/* LEFT */}
        <div className="trading-col">
          <div className="ring-card purple-glow">
            <div className="ring-inner">
              <h2 className="percent">90%</h2>
              <p className="label">MINDSET</p>
            </div>
          </div>

          <div className="text-content">
            <h3 className="title-green">🟦 Mindset – 90%</h3>

            <p>
              <span className="highlight-green">Discipline & Patience:</span> Market me loss aur drawdowns aayenge. Agar mindset strong hai, to aap panic nahi karenge aur apni strategy ko follow karenge.
            </p>

            <p>
              <span className="highlight-green">Emotions Control:</span> Greed aur fear ko control karna sabse important hai. Agar yeh na ho to perfect strategy bhi fail ho sakti hai.
            </p>

            <p>
              <span className="highlight-green">Consistency:</span> Regular profitable trader banne ke liye daily routine aur review mindset ka part hai.
            </p>

            <p>
              <span className="highlight-green">Risk Management Mentality:</span> Loss accept karna aur risk ko manage karna mindset se aata hai, na ki strategy se.
            </p>
          </div>
        </div>

        {/* CENTER */}
        <div className="trading-col-center">
          <div className="candles-box">
            <div className="cndl green"></div>
            <div className="cndl red"></div>
            <div className="cndl green"></div>
          </div>

          <p className="live-text">LIVE MARKET</p>
        </div>

        {/* RIGHT */}
        <div className="trading-col">
          <div className="ring-card yellow-glow">
            <div className="ring-inner">
              <h2 className="percent">10%</h2>
              <p className="label">STRATEGY</p>
            </div>
          </div>

          <div className="text-content">
            <h3 className="title-yellow">🟦 Strategy – 10%</h3>

            <p>
              <span className="highlight-green">Entry & Exit Rules:</span> kab aur kaha buy/sell karna hai ye strategy decide karti hai.
            </p>

            <p>
              <span className="highlight-green">Technical Analysis:</span> Support/resistance, indicators, patterns – ye tools strategy ka hissa hai.
            </p>

            <p>
              <span className="highlight-green">Position Sizing:</span> Kitna trade lena hai, stop loss kaha set karna hai, ye bhi strategy ke through hota hai.
            </p>

            <p>
              <span className="highlight-green">💡 Real Life Example 1:</span> Agar aapke paas perfect strategy hai lekin mindset weak hai → overtrade karoge, fear me exit karoge, ya overconfidence me bada loss loge.
            </p>

            <p>
              <span className="highlight-green">💡 Real Life Example 2:</span> Agar mindset strong hai lekin strategy simple hai → disciplined trading se long term me profitable reh sakte ho.
            </p>
          </div>
        </div>
      </div>

      <style>{`
#br30-trading-section{width:100%;padding:70px 5%;background:radial-gradient(circle at top,#03110d,#000);overflow:hidden;color:#fff;font-family:Poppins,sans-serif}

.trading-container{max-width:1400px;margin:auto;display:grid;grid-template-columns:1fr 240px 1fr;grid-template-areas:"leftRing center rightRing" "leftText center rightText";gap:35px 55px;align-items:start}

.trading-col{display:contents}
.trading-col:first-child .ring-card{grid-area:leftRing}
.trading-col:first-child .text-content{grid-area:leftText}
.trading-col:last-child .ring-card{grid-area:rightRing;transform:translateY(-8px)}
.trading-col:last-child .text-content{grid-area:rightText}

.trading-col-center{grid-area:center;align-self:start;justify-self:center;width:220px;text-align:center;margin-top:70px}

.ring-card{width:180px;height:180px;border-radius:50%;margin:0 auto;display:flex;align-items:center;justify-content:center;background:#020202}
.purple-glow{border:5px solid #00ffae;box-shadow:0 0 25px #00ffae}
.yellow-glow{border:5px solid #d9ff00;box-shadow:0 0 25px #d9ff00}
.ring-inner{text-align:center}
.percent{font-size:58px;margin:0;font-weight:800}
.label{font-size:18px;letter-spacing:2px;margin-top:5px;color:#d1d5db}

.text-content{max-width:520px;margin:0 auto}
.title-green,.title-yellow{font-size:34px;margin-bottom:28px;line-height:1.3}
.highlight-green{color:#00ff9d;font-weight:700}
.text-content p{font-size:18px;line-height:1.9;color:#d1d5db;margin-bottom:20px}

.candles-box{display:flex;align-items:flex-end;justify-content:center;gap:12px;margin:0 auto 20px}
.cndl{width:16px;border-radius:8px;position:relative}
.cndl:before{content:"";position:absolute;width:3px;background:#ddd;left:50%;transform:translateX(-50%)}
.green{height:65px;background:#00ff95;box-shadow:0 0 15px #00ff95}
.green:before{height:95px;top:-15px}
.red{height:90px;background:#ff4d4d;box-shadow:0 0 15px #ff4d4d}
.red:before{height:120px;top:-15px}
.live-text{font-size:24px;font-weight:800;letter-spacing:3px;text-align:center;width:100%}

@media(max-width:992px){
  .trading-container{display:flex;flex-direction:column;gap:55px;align-items:center;text-align:center}
  .trading-col{display:flex;flex-direction:column;align-items:center;gap:28px;width:100%}
  .trading-col:last-child .ring-card{transform:none}
  .trading-col-center{order:-1;margin:0 auto 20px;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}
  .candles-box{justify-content:center;margin-left:auto;margin-right:auto}
  .text-content{max-width:100%}
  .ring-card{width:150px;height:150px}
  .percent{font-size:46px}
  .title-green,.title-yellow{font-size:28px}
  .text-content p{font-size:16px;line-height:1.8}
  .live-text{font-size:20px}
}

@media(max-width:600px){
  #br30-trading-section{padding:50px 20px}
  .ring-card{width:130px;height:130px}
  .percent{font-size:38px}
  .label{font-size:14px}
  .title-green,.title-yellow{font-size:22px}
  .text-content p{font-size:15px}
  .live-text{font-size:18px}
}
`}</style>
    </section>
  );
}

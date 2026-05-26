export default function OptionSellingGuide() {
  return (
    <>
      <style>{`
*{box-sizing:border-box;}
html,body{margin:0;padding:0;background:#060b13;color:#fff;font-family:Arial,sans-serif;line-height:1.7;}
body{padding:28px 14px;}
.pdf-box{width:100%;max-width:920px;margin:0 auto;background:#0b111e;padding:32px;border-radius:14px;border:1px solid #1e293b;}
h1{color:#00ff88;font-size:30px;line-height:1.35;margin:0 0 24px;}
h2{color:#00eaff;font-size:24px;line-height:1.35;margin:30px 0 14px;}
h3{color:#ffffff;font-size:19px;margin:22px 0 10px;}
p,li{color:#d1d5db;font-size:16px;}
p{margin:0 0 16px;}
ul,ol{padding-left:24px;margin:0 0 18px;}
li{margin:6px 0;}
.table-wrap{width:100%;overflow-x:auto;margin-top:20px;}
table{width:100%;min-width:760px;border-collapse:collapse;}
th,td{border:1px solid #334155;padding:12px;text-align:left;vertical-align:top;}
th{background:#111827;color:#00ff88;}
td{background:#0f172a;color:#d1d5db;}
b,strong{color:#fff;font-weight:800;}
.note{margin-top:26px;padding:18px;background:#111827;border-left:4px solid #00ff88;border-radius:8px;color:#d1d5db;}
@media(max-width:768px){
body{padding:16px 10px;}
.pdf-box{padding:22px 16px;border-radius:12px;}
h1{font-size:26px;}
h2{font-size:21px;}
h3{font-size:18px;}
p,li{font-size:15px;}
ul,ol{padding-left:20px;}
}
@media(max-width:430px){
body{padding:10px 8px;}
.pdf-box{padding:18px 14px;}
h1{font-size:24px;}
h2{font-size:20px;}
p,li{font-size:14.5px;}
}
      `}</style>

      <div className="pdf-box">
        <h1>✅ Option Selling Guide</h1>

        <p>
          Options trading me <b>Option Selling (Writing Options)</b> ek advanced strategy hai jisme trader premium earn karta hai by selling call ya put options. Yeh strategy mainly <b>time decay (theta)</b> aur probability advantage par based hoti hai.
        </p>

        <h2>✅ Basic Concept</h2>

        <ul>
          <li>Option seller premium receive karta hai by selling Call ya Put options.</li>

          <li>Seller ke paas obligation hoti hai underlying ko buy/sell karne ki agar option exercise ho jaye.</li>

          <li>Profit limited hota hai premium received tak.</li>

          <li>Risk theoretically unlimited ho sakta hai, specially naked call selling me.</li>
        </ul>

        <h2>✅ Step by Step Option Selling</h2>

        <h3>1️⃣ Select the Option Type</h3>

        <ul>
          <li>Bullish market → Sell Put Option.</li>
          <li>Bearish market → Sell Call Option.</li>
          <li>Neutral market → ATM/OTM option sell for premium collection.</li>
        </ul>

        <h3>2️⃣ Select Strike Price</h3>

        <ul>
          <li>OTM (Out of the Money) options preferred hote hain.</li>
          <li>Higher probability hoti hai worthless expire hone ki.</li>
          <li>Deep ITM avoid karo → Risk zyada, reward limited.</li>
        </ul>

        <h3>3️⃣ Select Expiry</h3>

        <ul>
          <li>Short-term expiry → Fast theta decay, quick premium decay.</li>
          <li>Medium-term expiry → Balanced risk aur reward.</li>
        </ul>

        <h3>4️⃣ Check Greeks</h3>

        <ul>
          <li>
            <b>Theta</b> → Seller ka biggest advantage.
          </li>

          <li>
            <b>Delta</b> → Ideally low delta options sell karo.
          </li>

          <li>
            <b>Vega</b> → Volatility increase risk create kar sakta hai.
          </li>
        </ul>

        <h3>5️⃣ Entry & Exit</h3>

        <ul>
          <li>Entry → Range-bound market + attractive premium + confirmation.</li>
          <li>Exit → Profit target reached ya market move against position.</li>
        </ul>

        <h2>✅ Notebook Example Table</h2>

        <div className="table-wrap">
          <table>
            <tbody>
              <tr>
                <th>Option Type</th>
                <th>Strike Type</th>
                <th>Expiry</th>
                <th>Entry Condition</th>
                <th>Exit Condition</th>
              </tr>

              <tr>
                <td>Call Sell</td>
                <td>OTM</td>
                <td>1–5 Days</td>
                <td>Price below resistance, range-bound market</td>
                <td>Premium target hit or Stop Loss</td>
              </tr>

              <tr>
                <td>Put Sell</td>
                <td>OTM</td>
                <td>1–5 Days</td>
                <td>Price above support, range-bound market</td>
                <td>Premium target hit or Stop Loss</td>
              </tr>

              <tr>
                <td>Call Sell</td>
                <td>ATM / OTM</td>
                <td>3–10 Days</td>
                <td>High IV and attractive premium</td>
                <td>Exit on breakout against position</td>
              </tr>

              <tr>
                <td>Put Sell</td>
                <td>ATM / OTM</td>
                <td>3–10 Days</td>
                <td>High IV and attractive premium</td>
                <td>Exit on breakdown against position</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="note">
          ✅ Option selling me risk high hota hai, isliye proper Stop Loss mandatory hai.
          <br />
          <br />
          Always monitor Greeks, specially <b>Theta</b> aur <b>Vega</b>.
          <br />
          <br />
          Capital ka sirf small portion per trade use karo.
          <br />
          <br />
          Beginners ko naked option selling avoid karna chahiye.
          <br />
          <br />
          Discipline aur consistency ke saath option selling long-term profitable ho sakti hai.
        </div>
      </div>
    </>
  );
}

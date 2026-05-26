export default function OptionBuyingGuide() {
  return (
    <>
      <style>{`
*{box-sizing:border-box;}
html,body{margin:0;padding:0;background:#060b13;color:#fff;font-family:Arial,sans-serif;line-height:1.7;}
body{padding:28px 14px;}
.pdf-box{width:100%;max-width:920px;margin:0 auto;background:#0b111e;padding:32px;border-radius:14px;border:1px solid #1e293b;}
.pdf-box h1{color:#00ff88;font-size:30px;line-height:1.35;margin:0 0 24px;}
.pdf-box h2{color:#00eaff;font-size:24px;line-height:1.35;margin:30px 0 14px;}
.pdf-box h3{color:#ffffff;font-size:19px;margin:22px 0 10px;}
.pdf-box p,.pdf-box li{color:#d1d5db;font-size:16px;}
.pdf-box p{margin:0 0 16px;}
.pdf-box ul,.pdf-box ol{padding-left:24px;margin:0 0 18px;}
.pdf-box li{margin:6px 0;}
.table-wrap{width:100%;overflow-x:auto;margin-top:20px;}
.pdf-box table{width:100%;min-width:760px;border-collapse:collapse;}
.pdf-box th,.pdf-box td{border:1px solid #334155;padding:12px;text-align:left;vertical-align:top;}
.pdf-box th{background:#111827;color:#00ff88;}
.pdf-box td{background:#0f172a;color:#d1d5db;}
.pdf-box b,.pdf-box strong{color:#fff;font-weight:800;}
.note{margin-top:26px;padding:18px;background:#111827;border-left:4px solid #00ff88;border-radius:8px;color:#d1d5db;}
@media(max-width:768px){body{padding:16px 10px;}.pdf-box{padding:22px 16px;border-radius:12px;}.pdf-box h1{font-size:26px;}.pdf-box h2{font-size:21px;}.pdf-box h3{font-size:18px;}.pdf-box p,.pdf-box li{font-size:15px;}.pdf-box ul,.pdf-box ol{padding-left:20px;}}
@media(max-width:430px){body{padding:10px 8px;}.pdf-box{padding:18px 14px;}.pdf-box h1{font-size:24px;}.pdf-box h2{font-size:20px;}.pdf-box p,.pdf-box li{font-size:14.5px;}}
      `}</style>

      <div className="pdf-box">
        <h1>✅ Option Buying Guide</h1>

        <p>
          In options trading, <b>Option Buying</b> is one of the most common and beginner-friendly strategies. In this method, a trader buys the right to benefit from price movement without holding the underlying asset, with limited risk and profit potential based on market movement.
        </p>

        <h2>✅ Basic Concept</h2>

        <ul>
          <li>Option = Right to buy or sell an underlying asset without obligation.</li>

          <li>
            <b>Call Option:</b> Buy when you expect the price to increase.
          </li>

          <li>
            <b>Put Option:</b> Buy when you expect the price to decrease.
          </li>

          <li>Risk is limited to the premium paid.</li>

          <li>Profit potential can be high if momentum and timing are correct.</li>
        </ul>

        <h2>✅ Step-by-Step Option Buying</h2>

        <h3>1️⃣ Select the Option Type</h3>

        <ul>
          <li>Bullish view → Buy Call Option.</li>
          <li>Bearish view → Buy Put Option.</li>
        </ul>

        <h3>2️⃣ Select Strike Price</h3>

        <ul>
          <li>ATM (At the Money) → Strike close to the current price.</li>
          <li>ITM (In the Money) → Already has intrinsic value.</li>
          <li>OTM (Out of the Money) → Cheaper premium but higher risk.</li>
        </ul>

        <h3>3️⃣ Select Expiry</h3>

        <ul>
          <li>Short-term expiry → High gamma and faster theta decay.</li>
          <li>Medium-term expiry → Balanced risk-reward.</li>
          <li>Long-term expiry → Lower theta decay compared to short-term expiry.</li>
        </ul>

        <h3>4️⃣ Check Greeks</h3>

        <ul>
          <li>Delta → Price sensitivity.</li>
          <li>Theta → Time decay, very important for option buyers.</li>
          <li>Vega → Volatility impact.</li>
          <li>Gamma → Rate of change in Delta.</li>
        </ul>

        <h3>5️⃣ Entry & Exit</h3>

        <ul>
          <li>Entry → Market trend + breakout + confirmation candle.</li>
          <li>Exit → Profit target hit or Stop Loss hit.</li>
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
                <td>Call</td>
                <td>ATM / ITM</td>
                <td>1–5 days</td>
                <td>Price breakout with bullish trend</td>
                <td>Target or Stop Loss hit</td>
              </tr>

              <tr>
                <td>Put</td>
                <td>ATM / ITM</td>
                <td>1–5 days</td>
                <td>Price breakdown with bearish trend</td>
                <td>Target or Stop Loss hit</td>
              </tr>

              <tr>
                <td>Call</td>
                <td>OTM</td>
                <td>3–10 days</td>
                <td>High volatility and bullish momentum</td>
                <td>Target or Stop Loss hit</td>
              </tr>

              <tr>
                <td>Put</td>
                <td>OTM</td>
                <td>3–10 days</td>
                <td>High volatility and bearish momentum</td>
                <td>Target or Stop Loss hit</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="note">
          ✅ For option buyers, maximum loss is limited to the premium paid.
          <br />
          <br />
          Use high volatility and strong momentum for short-term trades.
          <br />
          <br />
          Always check Greeks before buying options.
          <br />
          <br />
          Risk management and Stop Loss are essential.
          <br />
          <br />
          Start small and gradually increase position size after gaining consistency.
        </div>
      </div>
    </>
  );
}

export default function OptionGreeksMastery() {
  return (
    <>
      <style>{`
*{box-sizing:border-box;}
html,body{margin:0;padding:0;background:#060b13;color:#fff;font-family:Arial,sans-serif;line-height:1.7;}
body{padding:28px 14px;}
.pdf-box{width:100%;max-width:920px;margin:0 auto;background:#0b111e;padding:32px;border-radius:14px;border:1px solid #1e293b;}
.pdf-box h1{color:#00ff88;font-size:30px;line-height:1.35;margin:0 0 24px;}
.pdf-box h2{color:#00eaff;font-size:24px;line-height:1.35;margin:30px 0 14px;}
.pdf-box h3{color:#fff;font-size:19px;margin:22px 0 10px;}
.pdf-box p,.pdf-box li{color:#d1d5db;font-size:16px;}
.pdf-box p{margin:0 0 16px;}
.pdf-box ul{padding-left:24px;margin:0 0 18px;}
.pdf-box li{margin:6px 0;}
.table-wrap{width:100%;overflow-x:auto;margin-top:20px;}
.pdf-box table{width:100%;min-width:760px;border-collapse:collapse;}
.pdf-box th,.pdf-box td{border:1px solid #334155;padding:12px;text-align:left;vertical-align:top;}
.pdf-box th{background:#111827;color:#00ff88;}
.pdf-box td{background:#0f172a;color:#d1d5db;}
.pdf-box b,.pdf-box strong{color:#fff;font-weight:800;}
@media(max-width:768px){body{padding:16px 10px;}.pdf-box{padding:22px 16px;border-radius:12px;}.pdf-box h1{font-size:26px;}.pdf-box h2{font-size:21px;}.pdf-box h3{font-size:18px;}.pdf-box p,.pdf-box li{font-size:15px;}.pdf-box ul{padding-left:20px;}}
@media(max-width:430px){body{padding:10px 8px;}.pdf-box{padding:18px 14px;}.pdf-box h1{font-size:24px;}.pdf-box h2{font-size:20px;}.pdf-box p,.pdf-box li{font-size:14.5px;}}
      `}</style>

      <div className="pdf-box">
        <h1>✅ Option Greeks Mastery</h1>

        <p>
          Option Greeks are the backbone of options trading. They measure the
          <b> sensitivity of option prices </b>
          with respect to price movement, time decay, and market volatility.
        </p>

        <h2>✅ Key Greeks</h2>

        <h3>1️⃣ Delta (Δ)</h3>

        <ul>
          <li>Measures price sensitivity</li>
          <li>Shows the impact of a 1-point move in the underlying asset</li>
          <li>Call Delta: 0 to +1</li>
          <li>Put Delta: 0 to -1</li>
          <li>Example: A Delta of 0.6 means a 1-point move in price may move the option price by approximately 0.6 points</li>
        </ul>

        <h3>2️⃣ Gamma (Γ)</h3>

        <ul>
          <li>Measures the rate of change in Delta</li>
          <li>Shows how Delta changes with price movement</li>
          <li>High Gamma = rapid option price movement</li>
        </ul>

        <h3>3️⃣ Theta (Θ)</h3>

        <ul>
          <li>Measures time decay</li>
          <li>Shows how much option value decreases each day</li>
          <li>Long Call / Put = Negative Theta</li>
          <li>Short Call / Put = Positive Theta</li>
        </ul>

        <h3>4️⃣ Vega (ν)</h3>

        <ul>
          <li>Measures volatility sensitivity</li>
          <li>Shows the impact of a 1% IV change on option price</li>
          <li>High Vega = option price highly affected by IV changes</li>
        </ul>

        <h3>5️⃣ Rho (ρ)</h3>

        <ul>
          <li>Measures interest rate sensitivity</li>
          <li>Rarely used in daily trading</li>
          <li>Long Call = Positive Rho</li>
          <li>Long Put = Negative Rho</li>
        </ul>

        <h2>✅ Notebook Example Table</h2>

        <div className="table-wrap">
          <table>
            <tbody>
              <tr>
                <th>Greek</th>
                <th>Measures</th>
                <th>Call Behavior</th>
                <th>Put Behavior</th>
                <th>Notes</th>
              </tr>

              <tr>
                <td>Delta</td>
                <td>Price sensitivity</td>
                <td>+0 to +1</td>
                <td>0 to -1</td>
                <td>ITM options usually have higher Delta</td>
              </tr>

              <tr>
                <td>Gamma</td>
                <td>Delta change rate</td>
                <td>Positive</td>
                <td>Positive</td>
                <td>ATM options generally have high Gamma</td>
              </tr>

              <tr>
                <td>Theta</td>
                <td>Time decay</td>
                <td>Negative</td>
                <td>Negative</td>
                <td>Short options benefit from Theta decay</td>
              </tr>

              <tr>
                <td>Vega</td>
                <td>Volatility sensitivity</td>
                <td>Positive</td>
                <td>Positive</td>
                <td>Long options usually have higher Vega exposure</td>
              </tr>

              <tr>
                <td>Rho</td>
                <td>Interest rate sensitivity</td>
                <td>Positive</td>
                <td>Negative</td>
                <td>Rarely used in short-term trading</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>✅ Important Notes</h2>

        <ul>
          <li>Understanding the combination of Delta, Gamma, Theta, and Vega is extremely important</li>

          <li>High Theta means faster option premium decay over time</li>

          <li>High Vega means IV changes can significantly affect option pricing</li>

          <li>
            Use Greeks for
            <b> risk management, hedging, and position sizing </b>
          </li>
        </ul>
      </div>
    </>
  );
}

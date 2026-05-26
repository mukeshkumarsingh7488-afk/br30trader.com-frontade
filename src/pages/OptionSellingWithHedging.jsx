export default function OptionSellingWithHedging() {
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
.pdf-box ul{padding-left:24px;margin:0 0 18px;}
.pdf-box li{margin:6px 0;}
.table-wrap{width:100%;overflow-x:auto;margin-top:20px;}
.pdf-box table{width:100%;min-width:760px;border-collapse:collapse;}
.pdf-box th,.pdf-box td{border:1px solid #334155;padding:12px;text-align:left;vertical-align:top;}
.pdf-box th{background:#111827;color:#00ff88;}
.pdf-box td{background:#0f172a;color:#d1d5db;}
.pdf-box b,.pdf-box strong{color:#fff;font-weight:800;}
.note{margin-top:26px;padding:18px;background:#111827;border-left:4px solid #00ff88;border-radius:8px;color:#d1d5db;}
@media(max-width:768px){body{padding:16px 10px;}.pdf-box{padding:22px 16px;border-radius:12px;}.pdf-box h1{font-size:26px;}.pdf-box h2{font-size:21px;}.pdf-box h3{font-size:18px;}.pdf-box p,.pdf-box li{font-size:15px;}.pdf-box ul{padding-left:20px;}}
@media(max-width:430px){body{padding:10px 8px;}.pdf-box{padding:18px 14px;}.pdf-box h1{font-size:24px;}.pdf-box h2{font-size:20px;}.pdf-box p,.pdf-box li{font-size:14.5px;}}
      `}</style>

      <div className="pdf-box">
        <h1>✅ Option Selling with Hedging Strategy</h1>

        <p>
          Option selling can be profitable when
          <b> risk is managed properly</b>. Hedging helps control loss exposure while keeping the profit potential optimized.
        </p>

        <h2>✅ Basic Concept</h2>

        <ul>
          <li>Sell options to collect premium</li>
          <li>Hedge the position to limit potential losses</li>
          <li>Objective: Risk-controlled premium collection</li>
        </ul>

        <h2>✅ Step-by-Step Setup</h2>

        <h3>1️⃣ Identify Trend</h3>

        <ul>
          <li>Use moving averages and support/resistance for trend analysis</li>
          <li>Decide bullish or bearish market bias</li>
        </ul>

        <h3>2️⃣ Option Selling Rules</h3>

        <ul>
          <li>Sell Call Option when the market view is bearish</li>
          <li>Sell Put Option when the market view is bullish</li>
          <li>Strike selection: ATM or slightly OTM for better premium collection</li>
        </ul>

        <h3>3️⃣ Hedging Techniques</h3>

        <ul>
          <li>Buy a far OTM option in the same risk direction for protection</li>
          <li>Example: Sell 100 CE and Buy 110 CE → Risk becomes limited</li>
          <li>Example: Sell 100 PE and Buy 90 PE → Risk becomes limited</li>
        </ul>

        <h3>4️⃣ Profit & Loss Management</h3>

        <ul>
          <li>Maximum Profit: Premium collected</li>
          <li>Maximum Loss: Difference between strikes minus premium collected, if hedged</li>
          <li>Always maintain a favorable risk/reward structure</li>
        </ul>

        <h2>✅ Notebook Example Table</h2>

        <div className="table-wrap">
          <table>
            <tbody>
              <tr>
                <th>Market View</th>
                <th>Sell Option</th>
                <th>Hedge Option</th>
                <th>Premium Collected</th>
                <th>Risk Limited Notes</th>
              </tr>

              <tr>
                <td>Bullish</td>
                <td>Put OTM</td>
                <td>Lower PE OTM</td>
                <td>₹X</td>
                <td>Loss limited with hedge</td>
              </tr>

              <tr>
                <td>Bearish</td>
                <td>Call OTM</td>
                <td>Higher CE OTM</td>
                <td>₹X</td>
                <td>Loss limited with hedge</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="note">
          ✅ Always hedge when selling options to prevent unlimited losses.
          <br />
          <br />
          Short-term time decay, or Theta, generally works in favor of the seller.
          <br />
          <br />
          Monitor IV: High IV can provide better premium, while low IV may provide lower premium.
          <br />
          <br />
          Position sizing is crucial to protect trading capital.
        </div>
      </div>
    </>
  );
}

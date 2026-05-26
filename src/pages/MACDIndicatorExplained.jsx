export default function MACDIndicatorExplained() {
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
        <h1>✅ MACD Indicator Explained</h1>

        <p>MACD, also known as Moving Average Convergence Divergence, is a powerful trend and momentum indicator used to identify direction, strength, and possible reversals in the market.</p>

        <h2>✅ Basic Concept</h2>

        <ul>
          <li>MACD is based on the difference between two moving averages.</li>
          <li>Components:</li>
          <li>
            <b>1️⃣ MACD Line</b> = 12-period EMA - 26-period EMA
          </li>
          <li>
            <b>2️⃣ Signal Line</b> = 9-period EMA of the MACD Line
          </li>
          <li>
            <b>3️⃣ Histogram</b> = MACD Line - Signal Line
          </li>
          <li>It helps identify trend direction and trend strength.</li>
          <li>It generates crossover and divergence signals.</li>
        </ul>

        <h2>✅ MACD Signals</h2>

        <h3>1️⃣ MACD Line Crosses Signal Line</h3>

        <ul>
          <li>
            <b>Bullish Crossover:</b> MACD Line crosses above the Signal Line → Buy Signal
          </li>
          <li>
            <b>Bearish Crossover:</b> MACD Line crosses below the Signal Line → Sell Signal
          </li>
        </ul>

        <h3>2️⃣ MACD Divergence</h3>

        <ul>
          <li>Price makes a new high but MACD forms a lower high → Weakness → Sell Signal</li>
          <li>Price makes a new low but MACD forms a higher low → Weakness → Buy Signal</li>
        </ul>

        <h3>3️⃣ MACD Histogram</h3>

        <ul>
          <li>Histogram is increasing → Trend strength is increasing</li>
          <li>Histogram is decreasing → Trend strength is weakening</li>
        </ul>

        <h2>✅ Step-by-Step MACD Trading</h2>

        <ol>
          <li>Add the MACD indicator to the chart using default settings: 12, 26, 9.</li>
          <li>Observe the overall trend direction.</li>
          <li>Detect MACD Line and Signal Line crossovers.</li>
          <li>Use divergence and histogram behavior for confirmation.</li>
          <li>Set Stop Loss and Target before entering the trade.</li>
        </ol>

        <h2>✅ Notebook Example Table</h2>

        <div className="table-wrap">
          <table>
            <tbody>
              <tr>
                <th>Signal Type</th>
                <th>Condition</th>
                <th>Action</th>
              </tr>

              <tr>
                <td>Bullish Crossover</td>
                <td>MACD Line crosses above Signal Line</td>
                <td>Buy / Long</td>
              </tr>

              <tr>
                <td>Bearish Crossover</td>
                <td>MACD Line crosses below Signal Line</td>
                <td>Sell / Short</td>
              </tr>

              <tr>
                <td>Bullish Divergence</td>
                <td>Price Lower Low, MACD Higher Low</td>
                <td>Buy / Reversal</td>
              </tr>

              <tr>
                <td>Bearish Divergence</td>
                <td>Price Higher High, MACD Lower High</td>
                <td>Sell / Reversal</td>
              </tr>

              <tr>
                <td>Histogram Increase</td>
                <td>MACD - Signal Line widening</td>
                <td>Trend Strong</td>
              </tr>

              <tr>
                <td>Histogram Decrease</td>
                <td>MACD - Signal Line narrowing</td>
                <td>Trend Weak</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="note">
          ✅ MACD is usually more reliable on higher timeframes.
          <br />
          <br />
          Always check candlestick patterns and volume for signal confirmation.
          <br />
          <br />
          Use MACD with trend direction for stronger trading signals.
          <br />
          <br />
          Always use Stop Loss and proper risk management.
        </div>
      </div>
    </>
  );
}

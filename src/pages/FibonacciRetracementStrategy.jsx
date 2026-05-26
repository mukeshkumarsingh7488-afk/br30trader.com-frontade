export default function FibonacciRetracementStrategy() {
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
        <h1>✅ Fibonacci Retracement Strategy</h1>

        <p>Fibonacci retracement is a powerful tool that helps identify price pullbacks, potential reversal zones, and continuation areas during a trend.</p>

        <h2>✅ Basic Concept</h2>

        <ul>
          <li>Used to mark key levels during a pullback or correction in a trending market.</li>
          <li>Popular retracement levels: 23.6%, 38.2%, 50%, 61.8%, and 78.6%.</li>
          <li>These levels often act as support or resistance for trend continuation or reversal.</li>
        </ul>

        <h2>✅ Step-by-Step Trading</h2>

        <ol>
          <li>Identify the market trend, either uptrend or downtrend.</li>

          <li>
            Select the Swing High and Swing Low:
            <ul>
              <li>Uptrend: Low → High</li>
              <li>Downtrend: High → Low</li>
            </ul>
          </li>

          <li>Apply the Fibonacci tool on the chart to display retracement levels.</li>

          <li>When price reaches these levels, look for possible entry opportunities.</li>

          <li>Set Stop Loss above or below the retracement structure.</li>

          <li>Keep targets near the next Fibonacci level or trend continuation zone.</li>
        </ol>

        <h2>✅ Example Table</h2>

        <div className="table-wrap">
          <table>
            <tbody>
              <tr>
                <th>Level</th>
                <th>Price Behavior</th>
                <th>Action</th>
              </tr>

              <tr>
                <td>23.6%</td>
                <td>Minor pullback</td>
                <td>Entry / Partial Entry</td>
              </tr>

              <tr>
                <td>38.2%</td>
                <td>Moderate pullback</td>
                <td>Entry / Trend Continuation</td>
              </tr>

              <tr>
                <td>50%</td>
                <td>Half retracement</td>
                <td>Strong Support / Resistance</td>
              </tr>

              <tr>
                <td>61.8%</td>
                <td>Golden ratio level</td>
                <td>High-probability entry / exit zone</td>
              </tr>

              <tr>
                <td>78.6%</td>
                <td>Deep retracement</td>
                <td>Trend reversal alert</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>✅ Trading Tips</h2>

        <ul>
          <li>Trade only in the direction of the main trend.</li>

          <li>Use candlestick confirmation and volume analysis with Fibonacci levels.</li>

          <li>Higher timeframe retracement levels are usually more reliable.</li>

          <li>Combine Fibonacci with indicators such as Moving Average or RSI for stronger signals.</li>
        </ul>

        <div className="note">
          ✅ Fibonacci levels are not absolute, so always stay flexible.
          <br />
          <br />
          Observe price reaction near psychological levels.
          <br />
          <br />
          Always use Stop Loss for proper risk management.
          <br />
          <br />
          Wait for trend continuation confirmation after the pullback is complete.
        </div>
      </div>
    </>
  );
}

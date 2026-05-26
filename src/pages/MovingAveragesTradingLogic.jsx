export default function MovingAveragesTradingLogic() {
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
        <h1>✅ Moving Averages Trading Logic</h1>

        <p>Moving Averages (MA) are one of the simplest and most effective tools for identifying market trends and generating trading signals.</p>

        <h2>✅ Basic Concept</h2>

        <ul>
          <li>
            <b>SMA (Simple Moving Average):</b> The average price of the last N periods.
          </li>

          <li>
            <b>EMA (Exponential Moving Average):</b> Gives more weight to recent prices.
          </li>

          <li>Moving averages help identify trend direction, dynamic support, and resistance levels.</li>
        </ul>

        <h2>✅ Popular MA Strategies</h2>

        <h3>1️⃣ Trend Following (MA Crossover)</h3>

        <ul>
          <li>Use short-term MA such as 9 EMA or 15 EMA with long-term MA such as 50 EMA or 200 EMA.</li>

          <li>
            <b>Buy Signal:</b> Short-term MA crosses above the long-term MA.
          </li>

          <li>
            <b>Sell Signal:</b> Short-term MA crosses below the long-term MA.
          </li>
        </ul>

        <h3>2️⃣ Price vs MA</h3>

        <ul>
          <li>Price above MA → Bullish trend</li>

          <li>Price below MA → Bearish trend</li>

          <li>Moving averages can also act as dynamic support and resistance.</li>
        </ul>

        <h3>3️⃣ EMA Ribbon Strategy</h3>

        <ul>
          <li>Use multiple EMAs such as 5, 9, 15, and 21.</li>

          <li>When all EMAs are aligned upward and parallel → Strong bullish trend.</li>

          <li>When all EMAs are aligned downward and parallel → Strong bearish trend.</li>

          <li>When price breaks the EMA ribbon → Possible trend reversal or pullback signal.</li>
        </ul>

        <h2>✅ Step-by-Step Trading Setup</h2>

        <ol>
          <li>Select a suitable timeframe such as 1H, 4H, or Daily.</li>

          <li>Add short-term and long-term EMA/SMA indicators on the chart.</li>

          <li>Observe price position and moving average crossovers.</li>

          <li>Check candle patterns and volume for confirmation.</li>

          <li>Decide entry and exit points based on confirmation.</li>
        </ol>

        <h2>✅ Notebook Example Table</h2>

        <div className="table-wrap">
          <table>
            <tbody>
              <tr>
                <th>Strategy Type</th>
                <th>Signal Condition</th>
                <th>Action</th>
              </tr>

              <tr>
                <td>MA Crossover</td>
                <td>Short MA crosses above Long MA</td>
                <td>Buy</td>
              </tr>

              <tr>
                <td>MA Crossover</td>
                <td>Short MA crosses below Long MA</td>
                <td>Sell</td>
              </tr>

              <tr>
                <td>Price vs MA</td>
                <td>Price above MA</td>
                <td>Buy</td>
              </tr>

              <tr>
                <td>Price vs MA</td>
                <td>Price below MA</td>
                <td>Sell</td>
              </tr>

              <tr>
                <td>EMA Ribbon Confirmation</td>
                <td>EMAs aligned upward and parallel</td>
                <td>Strong Buy</td>
              </tr>

              <tr>
                <td>EMA Ribbon Confirmation</td>
                <td>EMAs aligned downward and parallel</td>
                <td>Strong Sell</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="note">
          ✅ Always verify the trend using multiple timeframes.
          <br />
          <br />
          Moving average signals are lagging indicators, so use candle confirmation and volume analysis together.
          <br />
          <br />
          Always follow proper risk management using Stop Loss and Target.
          <br />
          <br />
          Combining short-term EMA with long-term SMA often creates more reliable trading signals.
        </div>
      </div>
    </>
  );
}

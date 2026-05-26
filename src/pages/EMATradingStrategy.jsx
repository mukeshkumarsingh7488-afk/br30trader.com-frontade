export default function EMATradingStrategy() {
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
        <h1>✅ EMA Trading Strategy</h1>

        <p>EMA, also known as Exponential Moving Average, is a popular trend-following indicator that gives more weight to recent price action.</p>

        <h2>✅ Basic Concept</h2>

        <ul>
          <li>EMA gives more importance to recent price movement.</li>
          <li>Fast EMA such as 9-period and slow EMA such as 21-period can help identify trend direction.</li>
          <li>EMA helps generate trend direction, crossover, and dynamic support/resistance signals.</li>
        </ul>

        <h2>✅ EMA Signals</h2>

        <h3>1️⃣ EMA Crossover</h3>

        <ul>
          <li>
            <b>Bullish Crossover:</b> Fast EMA (9) crosses above Slow EMA (21) → Buy Signal
          </li>

          <li>
            <b>Bearish Crossover:</b> Fast EMA (9) crosses below Slow EMA (21) → Sell Signal
          </li>
        </ul>

        <h3>2️⃣ Price Above / Below EMA</h3>

        <ul>
          <li>Price above EMA → Uptrend</li>
          <li>Price below EMA → Downtrend</li>
        </ul>

        <h3>3️⃣ EMA as Support / Resistance</h3>

        <ul>
          <li>EMA can act as dynamic support or resistance.</li>
          <li>A bounce from EMA may indicate trend continuation.</li>
        </ul>

        <h2>✅ Step-by-Step EMA Trading</h2>

        <ol>
          <li>Add Fast EMA and Slow EMA to the chart, commonly 9 and 21.</li>
          <li>Observe trend direction and EMA crossover signals.</li>
          <li>Take entry or exit decisions based on price position around EMA.</li>
          <li>Observe EMA bounce with candlestick confirmation.</li>
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
                <td>Fast EMA crosses above Slow EMA</td>
                <td>Buy / Long</td>
              </tr>

              <tr>
                <td>Bearish Crossover</td>
                <td>Fast EMA crosses below Slow EMA</td>
                <td>Sell / Short</td>
              </tr>

              <tr>
                <td>Price above EMA</td>
                <td>Price &gt; EMA</td>
                <td>Uptrend → Buy</td>
              </tr>

              <tr>
                <td>Price below EMA</td>
                <td>Price &lt; EMA</td>
                <td>Downtrend → Sell</td>
              </tr>

              <tr>
                <td>EMA Bounce</td>
                <td>Price bounces from EMA support/resistance</td>
                <td>Trend Continuation / Entry</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="note">
          ✅ EMA works best for trend-following setups.
          <br />
          <br />
          Observe EMA signals across multiple timeframes for stronger confirmation.
          <br />
          <br />
          Candlestick confirmation and volume analysis are important.
          <br />
          <br />
          Always set Stop Loss and follow proper risk management.
        </div>
      </div>
    </>
  );
}

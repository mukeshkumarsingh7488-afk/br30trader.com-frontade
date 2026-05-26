export default function SupportResistanceLevels() {
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
.pdf-box table{width:100%;min-width:700px;border-collapse:collapse;}
.pdf-box th,.pdf-box td{border:1px solid #334155;padding:12px;text-align:left;vertical-align:top;}
.pdf-box th{background:#111827;color:#00ff88;}
.pdf-box td{background:#0f172a;color:#d1d5db;}
.pdf-box b,.pdf-box strong{color:#fff;font-weight:800;}
.note{margin-top:26px;padding:18px;background:#111827;border-left:4px solid #00ff88;border-radius:8px;color:#d1d5db;}
@media(max-width:768px){body{padding:16px 10px;}.pdf-box{padding:22px 16px;border-radius:12px;}.pdf-box h1{font-size:26px;}.pdf-box h2{font-size:21px;}.pdf-box h3{font-size:18px;}.pdf-box p,.pdf-box li{font-size:15px;}.pdf-box ul,.pdf-box ol{padding-left:20px;}}
@media(max-width:430px){body{padding:10px 8px;}.pdf-box{padding:18px 14px;}.pdf-box h1{font-size:24px;}.pdf-box h2{font-size:20px;}.pdf-box p,.pdf-box li{font-size:14.5px;}}
      `}</style>

      <div className="pdf-box">
        <h1>✅ Support & Resistance Levels</h1>

        <p>Support and Resistance are among the most important levels in trading, where price often reacts, reverses, or pauses before making the next move.</p>

        <h2>✅ Basic Concept</h2>

        <ul>
          <li>
            <b>Support:</b> A price level where buyers become strong and price often bounces upward.
          </li>

          <li>
            <b>Resistance:</b> A price level where sellers become strong and price often reverses downward.
          </li>

          <li>
            <b>Breakout:</b> When price breaks above resistance or below support, a new trend may begin.
          </li>
        </ul>

        <h2>✅ Step-by-Step Identification</h2>

        <ol>
          <li>Select the chart and choose a timeframe such as 15min, 1H, or Daily.</li>

          <li>Observe historical price action and mark repeated highs and lows.</li>

          <li>Draw horizontal lines to identify key support and resistance zones.</li>

          <li>Trend lines and moving averages can also help confirm levels.</li>
        </ol>

        <h2>✅ Notebook Example Table</h2>

        <div className="table-wrap">
          <table>
            <tbody>
              <tr>
                <th>Level Type</th>
                <th>Price Behavior</th>
                <th>Signal</th>
              </tr>

              <tr>
                <td>Support</td>
                <td>Price bounces upward</td>
                <td>Buy Opportunity</td>
              </tr>

              <tr>
                <td>Resistance</td>
                <td>Price reverses downward</td>
                <td>Sell Opportunity</td>
              </tr>

              <tr>
                <td>Breakout Support</td>
                <td>Price breaks below support</td>
                <td>Sell / Short Signal</td>
              </tr>

              <tr>
                <td>Breakout Resistance</td>
                <td>Price breaks above resistance</td>
                <td>Buy / Long Signal</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>✅ Trading Tips</h2>

        <ul>
          <li>Use multiple timeframe analysis because higher timeframe levels are usually stronger.</li>

          <li>Confirm breakout moves with volume to identify real vs fake breakouts.</li>

          <li>Always set a Stop Loss for proper risk management.</li>

          <li>Support and resistance levels are dynamic, so update your chart regularly.</li>
        </ul>

        <div className="note">
          ✅ Psychological levels such as 100, 500, and 1000 often become strong support or resistance zones.
          <br />
          <br />
          Previous swing highs and lows are generally more reliable.
          <br />
          <br />
          Trade with the trend whenever possible because counter-trend trading is riskier.
          <br />
          <br />
          Combine support and resistance with candlestick patterns and indicators for better decision-making.
        </div>
      </div>
    </>
  );
}

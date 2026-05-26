export default function BollingerBandsTradingSetup() {
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
        <h1>✅ Bollinger Bands Trading Setup</h1>

        <p>Bollinger Bands are one of the most popular technical analysis tools used to identify price volatility, trend direction, and potential reversal zones.</p>

        <h2>✅ Basic Concept</h2>

        <ul>
          <li>Bollinger Bands consist of 3 lines:</li>

          <li>
            <b>1️⃣ Middle Band (20 SMA)</b> – Acts as the central trend line
          </li>

          <li>
            <b>2️⃣ Upper Band</b> – Middle Band + 2 standard deviations
          </li>

          <li>
            <b>3️⃣ Lower Band</b> – Middle Band - 2 standard deviations
          </li>

          <li>The bands expand and contract according to market volatility.</li>
        </ul>

        <h2>✅ Bollinger Bands Signals</h2>

        <h3>1️⃣ Band Squeeze (Narrow Bands)</h3>

        <ul>
          <li>When the bands become narrow, it indicates low market volatility.</li>

          <li>This often signals that a strong breakout may happen soon.</li>
        </ul>

        <h3>2️⃣ Price Touches Upper Band</h3>

        <ul>
          <li>When price touches or crosses the upper band, the market may be overbought.</li>

          <li>Possible action: Sell or Short opportunity.</li>
        </ul>

        <h3>3️⃣ Price Touches Lower Band</h3>

        <ul>
          <li>When price touches or crosses the lower band, the market may be oversold.</li>

          <li>Possible action: Buy or Long opportunity.</li>
        </ul>

        <h3>4️⃣ Price Bounce from Middle Band</h3>

        <ul>
          <li>The middle band often acts as dynamic support or resistance.</li>

          <li>A bounce from the middle band may indicate trend continuation.</li>
        </ul>

        <h2>✅ Step-by-Step Trading Setup</h2>

        <ol>
          <li>Add Bollinger Bands to the chart (Default: 20 period, 2 Standard Deviations).</li>

          <li>Observe overall market trend and price position.</li>

          <li>Detect band squeeze or band expansion conditions.</li>

          <li>Watch price reaction near upper and lower bands for entry or exit opportunities.</li>

          <li>Confirm signals using candlestick patterns and volume analysis.</li>

          <li>Always define Stop Loss and Target levels.</li>
        </ol>

        <h2>✅ Example Table</h2>

        <div className="table-wrap">
          <table>
            <tbody>
              <tr>
                <th>Signal Type</th>
                <th>Condition</th>
                <th>Action</th>
              </tr>

              <tr>
                <td>Band Squeeze</td>
                <td>Narrow Bands</td>
                <td>Prepare for Breakout</td>
              </tr>

              <tr>
                <td>Upper Band Touch</td>
                <td>Price touches/crosses upper band</td>
                <td>Sell / Short</td>
              </tr>

              <tr>
                <td>Lower Band Touch</td>
                <td>Price touches/crosses lower band</td>
                <td>Buy / Long</td>
              </tr>

              <tr>
                <td>Middle Band Bounce</td>
                <td>Price bounces from middle band</td>
                <td>Trend Continuation / Entry</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="note">
          ✅ Always use Bollinger Bands along with the main market trend.
          <br />
          <br />
          Observe band width carefully because it reflects market volatility.
          <br />
          <br />
          Higher timeframe signals are generally more reliable.
          <br />
          <br />
          Use candlestick confirmation and volume analysis for stronger setups.
          <br />
          <br />
          Proper risk management and Stop Loss placement are essential.
        </div>
      </div>
    </>
  );
}

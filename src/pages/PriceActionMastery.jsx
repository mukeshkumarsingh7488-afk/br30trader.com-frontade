export default function PriceActionMastery() {
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
        <h1>✅ Price Action Mastery</h1>

        <p>Price Action trading is one of the purest and most direct forms of market analysis. In this method, trading decisions are made by observing price movement, candlestick behavior, and market structure.</p>

        <h2>✅ Basic Concept</h2>

        <ul>
          <li>Price action shows the psychology of market participants.</li>
          <li>Candlestick patterns, support/resistance, and trend lines help identify entries and exits.</li>
          <li>Indicators are optional because the primary focus stays on price movement.</li>
        </ul>

        <h2>✅ Key Price Action Elements</h2>

        <h3>1️⃣ Support & Resistance</h3>

        <ul>
          <li>Support → A level where price does not want to fall further.</li>
          <li>Resistance → A level where price struggles to move higher.</li>
          <li>Bounce or breakout from these levels can create important trading signals.</li>
        </ul>

        <h3>2️⃣ Candlestick Patterns</h3>

        <ul>
          <li>Single candle patterns: Hammer, Shooting Star, Doji.</li>
          <li>Multiple candle patterns: Engulfing, Harami, Tweezer.</li>
          <li>Pattern formation can indicate trend reversal or continuation.</li>
        </ul>

        <h3>3️⃣ Trend Identification</h3>

        <ul>
          <li>Higher High and Higher Low → Uptrend.</li>
          <li>Lower High and Lower Low → Downtrend.</li>
          <li>Combine trendlines and EMA for better confirmation.</li>
        </ul>

        <h3>4️⃣ Breakout & Pullback</h3>

        <ul>
          <li>Breakout → Price breaks an important level.</li>
          <li>Pullback → Price temporarily retests a level before trend continuation.</li>
        </ul>

        <h2>✅ Step-by-Step Price Action Trading</h2>

        <ol>
          <li>Identify trend direction using Higher High / Higher Low or Lower High / Lower Low structure.</li>
          <li>Mark important Support and Resistance levels.</li>
          <li>Observe candlestick patterns and price behavior.</li>
          <li>Entry: Look for breakout or bounce points.</li>
          <li>Exit: Use the next Support/Resistance level or a defined risk target.</li>
          <li>Stop Loss: Place near the recent swing high or swing low.</li>
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
                <td>Bounce at Support</td>
                <td>Price touches support with bullish candle</td>
                <td>Buy / Long</td>
              </tr>

              <tr>
                <td>Bounce at Resistance</td>
                <td>Price touches resistance with bearish candle</td>
                <td>Sell / Short</td>
              </tr>

              <tr>
                <td>Breakout Up</td>
                <td>Price breaks resistance with high volume</td>
                <td>Buy / Long</td>
              </tr>

              <tr>
                <td>Breakout Down</td>
                <td>Price breaks support with high volume</td>
                <td>Sell / Short</td>
              </tr>

              <tr>
                <td>Trend Continuation</td>
                <td>Higher High / Higher Low or Lower High / Lower Low</td>
                <td>Follow Trend</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="note">
          ✅ Price action trading can work without indicators, but candle observation is the main tool.
          <br />
          <br />
          Use volume and multiple timeframe analysis for confirmation.
          <br />
          <br />
          Always follow risk management and use Stop Loss.
          <br />
          <br />
          Trade with patience and discipline. Avoid impulsive entries.
        </div>
      </div>
    </>
  );
}

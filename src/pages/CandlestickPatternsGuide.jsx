export default function CandlestickPatternsGuide() {
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
        <h1>✅ Candlestick Patterns Guide</h1>

        <p>Candlestick patterns are one of the easiest ways to understand price behavior in the market. Every candle shows the open, high, low, and close price.</p>

        <h2>✅ Basic Candlestick Structure</h2>

        <ul>
          <li>
            <b>Body:</b> The range between the open and close price
          </li>
          <li>
            <b>Wicks / Shadows:</b> They indicate the high and low price
          </li>
          <li>
            <b>Color:</b>
          </li>
          <li>Green / White → Close &gt; Open (Bullish)</li>
          <li>Red / Black → Close &lt; Open (Bearish)</li>
        </ul>

        <h2>✅ Important Patterns</h2>

        <h3>1️⃣ Doji</h3>

        <ul>
          <li>Open and close prices are almost the same</li>
          <li>Signal: Market indecision or possible reversal</li>
          <li>Types: Long-legged Doji, Dragonfly Doji, Gravestone Doji</li>
        </ul>

        <h3>2️⃣ Hammer & Hanging Man</h3>

        <ul>
          <li>Small body with a long lower wick</li>
          <li>Hammer → Bullish reversal during a downtrend</li>
          <li>Hanging Man → Bearish reversal during an uptrend</li>
        </ul>

        <h3>3️⃣ Engulfing Pattern</h3>

        <ul>
          <li>Bullish Engulfing: A green candle fully engulfs the previous red candle → Buy signal</li>
          <li>Bearish Engulfing: A red candle fully engulfs the previous green candle → Sell signal</li>
        </ul>

        <h3>4️⃣ Morning Star & Evening Star</h3>

        <ul>
          <li>Morning Star → Bullish reversal during a downtrend</li>
          <li>Evening Star → Bearish reversal during an uptrend</li>
        </ul>

        <h3>5️⃣ Shooting Star</h3>

        <ul>
          <li>Small body with a long upper wick</li>
          <li>Appears during an uptrend → Potential reversal or sell signal</li>
        </ul>

        <h2>✅ Step-by-Step Trading Setup</h2>

        <ol>
          <li>Select the chart and turn on candlestick view.</li>
          <li>Identify the trend and key support/resistance zones.</li>
          <li>Observe candlestick patterns for reversal or continuation signals.</li>
          <li>Check volume and other indicators for confirmation.</li>
          <li>Decide entry and exit points based on confirmation.</li>
        </ol>

        <h2>✅ Notebook Example Table</h2>

        <div className="table-wrap">
          <table>
            <tbody>
              <tr>
                <th>Pattern Name</th>
                <th>Trend Context</th>
                <th>Signal</th>
              </tr>

              <tr>
                <td>Doji</td>
                <td>Any</td>
                <td>Caution / Indecision</td>
              </tr>

              <tr>
                <td>Hammer</td>
                <td>Downtrend</td>
                <td>Buy / Reversal</td>
              </tr>

              <tr>
                <td>Hanging Man</td>
                <td>Uptrend</td>
                <td>Sell / Reversal</td>
              </tr>

              <tr>
                <td>Bullish Engulfing</td>
                <td>Downtrend</td>
                <td>Buy</td>
              </tr>

              <tr>
                <td>Bearish Engulfing</td>
                <td>Uptrend</td>
                <td>Sell</td>
              </tr>

              <tr>
                <td>Morning Star</td>
                <td>Downtrend</td>
                <td>Buy</td>
              </tr>

              <tr>
                <td>Evening Star</td>
                <td>Uptrend</td>
                <td>Sell</td>
              </tr>

              <tr>
                <td>Shooting Star</td>
                <td>Uptrend</td>
                <td>Sell</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="note">
          ✅ Do not use candlestick patterns as standalone signals. Always check trend and volume.
          <br />
          <br />
          Higher timeframe patterns are usually more reliable.
          <br />
          <br />
          Always follow risk management rules such as Stop Loss and Target.
          <br />
          <br />
          With practice, pattern recognition becomes faster and more accurate.
        </div>
      </div>
    </>
  );
}

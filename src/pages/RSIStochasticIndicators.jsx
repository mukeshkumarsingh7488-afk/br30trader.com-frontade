export default function RSIStochasticIndicators() {
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
        <h1>✅ RSI & Stochastic Indicators</h1>

        <p>RSI and Stochastic indicators are popular momentum tools used to understand market strength, overbought zones, oversold zones, and possible reversal signals.</p>

        <h2>✅ Relative Strength Index (RSI)</h2>

        <ul>
          <li>RSI moves within a 0–100 range</li>
          <li>Default period: 14</li>
          <li>
            <b>Overbought:</b> RSI &gt; 70 → Possible sell signal
          </li>
          <li>
            <b>Oversold:</b> RSI &lt; 30 → Possible buy signal
          </li>
          <li>RSI divergence: Price and RSI move in different directions, which may indicate a trend reversal</li>
        </ul>

        <h2>✅ Step-by-Step RSI Trading</h2>

        <ol>
          <li>Add RSI indicator to the chart with period 14.</li>
          <li>Observe overbought and oversold levels.</li>
          <li>Confirm price divergence and candlestick patterns.</li>
          <li>Decide entry and exit points based on confirmation.</li>
        </ol>

        <h2>✅ Stochastic Oscillator</h2>

        <ul>
          <li>Tracks %K and %D lines</li>
          <li>Scale: 0–100</li>
          <li>
            <b>Overbought:</b> Above 80 → Possible sell signal
          </li>
          <li>
            <b>Oversold:</b> Below 20 → Possible buy signal
          </li>
          <li>Crossovers between %K and %D can provide entry or exit signals</li>
        </ul>

        <h2>✅ Step-by-Step Stochastic Trading</h2>

        <ol>
          <li>Add Stochastic indicator to the chart. Default setting is usually 14, 3, 3.</li>
          <li>Observe the %K and %D lines.</li>
          <li>Confirm crossovers along with overbought or oversold zones.</li>
          <li>Decide entry and exit points based on confirmation.</li>
        </ol>

        <h2>✅ Notebook Example Table</h2>

        <div className="table-wrap">
          <table>
            <tbody>
              <tr>
                <th>Indicator</th>
                <th>Condition</th>
                <th>Signal</th>
              </tr>

              <tr>
                <td>RSI</td>
                <td>&gt; 70 (Overbought)</td>
                <td>Sell</td>
              </tr>

              <tr>
                <td>RSI</td>
                <td>&lt; 30 (Oversold)</td>
                <td>Buy</td>
              </tr>

              <tr>
                <td>RSI Divergence</td>
                <td>Price ↓, RSI ↑ (Bullish)</td>
                <td>Buy / Reversal</td>
              </tr>

              <tr>
                <td>RSI Divergence</td>
                <td>Price ↑, RSI ↓ (Bearish)</td>
                <td>Sell / Reversal</td>
              </tr>

              <tr>
                <td>Stochastic</td>
                <td>%K crosses above %D</td>
                <td>Buy</td>
              </tr>

              <tr>
                <td>Stochastic</td>
                <td>%K crosses below %D</td>
                <td>Sell</td>
              </tr>

              <tr>
                <td>Stochastic</td>
                <td>&gt; 80 (Overbought)</td>
                <td>Sell</td>
              </tr>

              <tr>
                <td>Stochastic</td>
                <td>&lt; 20 (Oversold)</td>
                <td>Buy</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="note">
          ✅ Always use momentum indicators with the main trend.
          <br />
          <br />
          Combining RSI and Stochastic can help reduce false signals.
          <br />
          <br />
          Check candlestick confirmation and volume analysis together.
          <br />
          <br />
          Multiple timeframe analysis usually gives more reliable signals.
        </div>
      </div>
    </>
  );
}

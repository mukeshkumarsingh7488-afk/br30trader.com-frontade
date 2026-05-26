export default function EMAFVGOptionBuying() {
  return (
    <>
      <style>{`
*{box-sizing:border-box;}
html,body{margin:0;padding:0;background:#060b13;color:#fff;font-family:Arial,sans-serif;line-height:1.7;}
body{padding:28px 14px;}
.pdf-box{width:100%;max-width:920px;margin:0 auto;background:#0b111e;padding:32px;border-radius:14px;border:1px solid #1e293b;}
.pdf-box h1{color:#00ff88;font-size:30px;line-height:1.35;margin:0 0 24px;}
.pdf-box h2{color:#00eaff;font-size:24px;line-height:1.35;margin:30px 0 14px;}
.pdf-box h3{color:#fff;font-size:19px;margin:22px 0 10px;}
.pdf-box p,.pdf-box li{color:#d1d5db;font-size:16px;}
.pdf-box p{margin:0 0 16px;}
.pdf-box ul{padding-left:24px;margin:0 0 18px;}
.pdf-box li{margin:6px 0;}
.table-wrap{width:100%;overflow-x:auto;margin-top:20px;}
.pdf-box table{width:100%;min-width:650px;border-collapse:collapse;}
.pdf-box th,.pdf-box td{border:1px solid #334155;padding:12px;text-align:left;vertical-align:top;}
.pdf-box th{background:#111827;color:#00ff88;}
.pdf-box td{background:#0f172a;color:#d1d5db;}
.pdf-box b,.pdf-box strong{color:#fff;font-weight:800;}
@media(max-width:768px){body{padding:16px 10px;}.pdf-box{padding:22px 16px;border-radius:12px;}.pdf-box h1{font-size:26px;}.pdf-box h2{font-size:21px;}.pdf-box h3{font-size:18px;}.pdf-box p,.pdf-box li{font-size:15px;}.pdf-box ul{padding-left:20px;}}
@media(max-width:430px){body{padding:10px 8px;}.pdf-box{padding:18px 14px;}.pdf-box h1{font-size:24px;}.pdf-box h2{font-size:20px;}.pdf-box p,.pdf-box li{font-size:14.5px;}}
      `}</style>

      <div className="pdf-box">
        <h1>✅ 9 EMA + 15 EMA + FVG (Option Buying) Strategy</h1>

        <p>
          This strategy uses a combination of <b>EMA crossover and Fair Value Gap (FVG) for short-term option buying</b>.
        </p>

        <h2>✅ Basic Concept</h2>
        <ul>
          <li>EMA = Exponential Moving Average</li>
          <li>FVG = Fair Value Gap → A price imbalance zone</li>
          <li>Objective: Trend-following + high-probability entries</li>
        </ul>

        <h2>✅ Step-by-Step Setup</h2>

        <h3>1️⃣ Chart Setup</h3>
        <ul>
          <li>Timeframe: 5-minute / 15-minute charts</li>
          <li>Indicators: 9 EMA (Fast), 15 EMA (Slow)</li>
          <li>Identify FVG: The gap or impulse zone where price skipped levels quickly</li>
        </ul>

        <h3>2️⃣ Entry Rules (Option Buying)</h3>

        <p>
          <b>Bullish Entry:</b>
        </p>
        <ul>
          <li>9 EMA crosses above 15 EMA</li>
          <li>Price retraces back to the FVG support zone</li>
          <li>Buy a Call Option near the strike close to the current price</li>
        </ul>

        <p>
          <b>Bearish Entry:</b>
        </p>
        <ul>
          <li>9 EMA crosses below 15 EMA</li>
          <li>Price retraces back to the FVG resistance zone</li>
          <li>Buy a Put Option near the strike close to the current price</li>
        </ul>

        <h2>✅ Exit Rules</h2>
        <ul>
          <li>Target: Next significant swing high or swing low</li>
          <li>Stop Loss: Below or above the FVG zone for protection</li>
          <li>Risk management: Maximum 1–2% of capital per trade</li>
        </ul>

        <h2>✅ Notebook Example Table</h2>

        <div className="table-wrap">
          <table>
            <tbody>
              <tr>
                <th>Condition</th>
                <th>EMA Setup</th>
                <th>FVG Location</th>
                <th>Option Type</th>
                <th>Notes</th>
              </tr>

              <tr>
                <td>Bullish Trend</td>
                <td>9 EMA &gt; 15 EMA</td>
                <td>FVG support zone</td>
                <td>Call Option</td>
                <td>Entry on pullback</td>
              </tr>

              <tr>
                <td>Bearish Trend</td>
                <td>9 EMA &lt; 15 EMA</td>
                <td>FVG resistance zone</td>
                <td>Put Option</td>
                <td>Entry on pullback</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>✅ Important Notes</h2>
        <ul>
          <li>Confirm the trend before entry using volume and candlestick patterns</li>
          <li>EMA crossover with FVG zone confluence creates a higher-probability entry</li>
          <li>Always maintain proper risk/reward and use a strict stop loss</li>
          <li>Check multiple timeframes such as 1H and 15-minute for confirmation</li>
        </ul>
      </div>
    </>
  );
}

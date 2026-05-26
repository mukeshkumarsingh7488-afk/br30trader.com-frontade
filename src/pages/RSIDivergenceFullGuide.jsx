export default function RSIDivergenceFullGuide() {
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
.pdf-box ul{padding-left:24px;margin:0 0 18px;}
.pdf-box li{margin:6px 0;}
.table-wrap{width:100%;overflow-x:auto;margin-top:20px;}
.pdf-box table{width:100%;min-width:650px;border-collapse:collapse;}
.pdf-box th,.pdf-box td{border:1px solid #334155;padding:12px;text-align:left;vertical-align:top;}
.pdf-box th{background:#111827;color:#00ff88;}
.pdf-box td{background:#0f172a;color:#d1d5db;}
.pdf-box b,.pdf-box strong{color:#fff;font-weight:800;}
.note{margin-top:26px;padding:18px;background:#111827;border-left:4px solid #00ff88;border-radius:8px;color:#d1d5db;}
@media(max-width:768px){body{padding:16px 10px;}.pdf-box{padding:22px 16px;border-radius:12px;}.pdf-box h1{font-size:26px;}.pdf-box h2{font-size:21px;}.pdf-box h3{font-size:18px;}.pdf-box p,.pdf-box li{font-size:15px;}.pdf-box ul{padding-left:20px;}}
@media(max-width:430px){body{padding:10px 8px;}.pdf-box{padding:18px 14px;}.pdf-box h1{font-size:24px;}.pdf-box h2{font-size:20px;}.pdf-box p,.pdf-box li{font-size:14.5px;}}
      `}</style>

      <div className="pdf-box">
        <h1>✅ RSI Divergence Full Guide</h1>

        <p>
          RSI Divergence is a powerful trading signal that helps identify
          <b> trend reversal or trend weakness</b>.
        </p>

        <h2>✅ Basic Concept</h2>

        <ul>
          <li>RSI = Relative Strength Index, a momentum indicator</li>
          <li>Divergence = Price and RSI move in opposite directions</li>
          <li>Objective: Trend reversal identification and better trade timing</li>
        </ul>

        <h2>✅ Types of RSI Divergence</h2>

        <h3>1️⃣ Bullish Divergence (Buy Signal)</h3>

        <ul>
          <li>Price: Lower Low</li>
          <li>RSI: Higher Low</li>
          <li>Meaning: Price is moving lower, but momentum is showing strength, which may indicate a possible reversal</li>
        </ul>

        <h3>2️⃣ Bearish Divergence (Sell Signal)</h3>

        <ul>
          <li>Price: Higher High</li>
          <li>RSI: Lower High</li>
          <li>Meaning: Price is moving higher, but momentum is weakening, which may indicate a possible downtrend reversal</li>
        </ul>

        <h2>✅ Step-by-Step Identification</h2>

        <ul>
          <li>Add RSI indicator on the chart, usually default 14-period RSI</li>
          <li>Compare price highs/lows with RSI highs/lows</li>
          <li>Opposite movement between price and RSI creates a divergence signal</li>
          <li>Divergence near support or resistance zones can be stronger</li>
        </ul>

        <h2>✅ Notebook Example Table</h2>

        <div className="table-wrap">
          <table>
            <tbody>
              <tr>
                <th>Type</th>
                <th>Price Movement</th>
                <th>RSI Movement</th>
                <th>Signal</th>
              </tr>

              <tr>
                <td>Bullish Divergence</td>
                <td>Lower Low</td>
                <td>Higher Low</td>
                <td>Buy / Reversal</td>
              </tr>

              <tr>
                <td>Bearish Divergence</td>
                <td>Higher High</td>
                <td>Lower High</td>
                <td>Sell / Reversal</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="note">
          ✅ Do not use RSI Divergence as a standalone signal.
          <br />
          <br />
          Always check candle confirmation and volume confirmation.
          <br />
          <br />
          Signals on higher timeframes such as 15-minute and 1H are usually more reliable.
          <br />
          <br />
          Always use proper Stop Loss and Risk Management.
        </div>
      </div>
    </>
  );
}

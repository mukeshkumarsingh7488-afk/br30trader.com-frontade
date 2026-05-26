export default function ChartPatternsSignals() {
  return (
    <>
      <style>{`*{box-sizing:border-box;}html,body{margin:0;padding:0;background:#060b13;color:#fff;font-family:Arial,sans-serif;line-height:1.7;}body{padding:28px 14px;}.pdf-box{width:100%;max-width:920px;margin:0 auto;background:#0b111e;padding:32px;border-radius:14px;border:1px solid #1e293b;}.pdf-box h1{color:#00ff88;font-size:30px;line-height:1.35;margin:0 0 24px;}.pdf-box h2{color:#00eaff;font-size:24px;line-height:1.35;margin:30px 0 14px;}.pdf-box h3{color:#ffffff;font-size:19px;margin:22px 0 10px;}.pdf-box p,.pdf-box li{color:#d1d5db;font-size:16px;}.pdf-box p{margin:0 0 16px;}.pdf-box ul,.pdf-box ol{padding-left:24px;margin:0 0 18px;}.pdf-box li{margin:6px 0;}.table-wrap{width:100%;overflow-x:auto;margin-top:20px;}.pdf-box table{width:100%;min-width:860px;border-collapse:collapse;}.pdf-box th,.pdf-box td{border:1px solid #334155;padding:12px;text-align:left;vertical-align:top;}.pdf-box th{background:#111827;color:#00ff88;}.pdf-box td{background:#0f172a;color:#d1d5db;}.pdf-box b,.pdf-box strong{color:#fff;font-weight:800;}.note{margin-top:26px;padding:18px;background:#111827;border-left:4px solid #00ff88;border-radius:8px;color:#d1d5db;}@media(max-width:768px){body{padding:16px 10px;}.pdf-box{padding:22px 16px;border-radius:12px;}.pdf-box h1{font-size:26px;}.pdf-box h2{font-size:21px;}.pdf-box h3{font-size:18px;}.pdf-box p,.pdf-box li{font-size:15px;}.pdf-box ul,.pdf-box ol{padding-left:20px;}}@media(max-width:430px){body{padding:10px 8px;}.pdf-box{padding:18px 14px;}.pdf-box h1{font-size:24px;}.pdf-box h2{font-size:20px;}.pdf-box p,.pdf-box li{font-size:14.5px;}}`}</style>

      <div className="pdf-box">
        <h1>✅ Chart Patterns & Signals</h1>

        <p>
          Chart patterns trading me <b>price movement ka visual representation</b> hote hain jo future ke potential moves ka signal dete hain. Ye short-term aur long-term dono ke liye use kiye ja sakte hain.
        </p>

        <h2>✅ Basic Concept</h2>

        <ul>
          <li>Objective: Price ka trend predict karna.</li>
          <li>Patterns formation: Consolidation, Reversal, Continuation.</li>
          <li>Use: Entry aur exit points identify karna.</li>
        </ul>

        <h2>✅ Common Chart Patterns</h2>

        <h3>1️⃣ Head and Shoulders</h3>

        <ul>
          <li>Reversal pattern: Bullish to Bearish or Bearish to Bullish.</li>
          <li>Entry: Neckline break par.</li>
          <li>Target: Pattern height ke barabar move.</li>
        </ul>

        <h3>2️⃣ Double Top / Bottom</h3>

        <ul>
          <li>Double Top → Sell signal, Double Bottom → Buy signal.</li>
          <li>Confirmation: Break of support or resistance.</li>
          <li>Target: Height between top or bottom levels.</li>
        </ul>

        <h3>3️⃣ Triangles</h3>

        <ul>
          <li>Symmetrical → Continuation.</li>
          <li>Ascending → Bullish continuation.</li>
          <li>Descending → Bearish continuation.</li>
          <li>Entry: Breakout direction me.</li>
        </ul>

        <h3>4️⃣ Flags & Pennants</h3>

        <ul>
          <li>Small consolidation after strong move.</li>
          <li>Breakout usually follows the trend direction.</li>
          <li>Target: Length of previous move.</li>
        </ul>

        <h3>5️⃣ Cup & Handle</h3>

        <ul>
          <li>Bullish continuation pattern.</li>
          <li>Entry: Break above handle resistance.</li>
          <li>Target: Cup depth projection.</li>
        </ul>

        <h2>✅ Technical Signals</h2>

        <ul>
          <li>
            <b>Volume Confirmation:</b> Breakout me volume spike → strong move.
          </li>

          <li>
            <b>Candlestick Signals:</b> Engulfing, Pinbar, Doji → reversal indication.
          </li>

          <li>
            <b>Divergence:</b> RSI / MACD divergence → trend weakening.
          </li>
        </ul>

        <h2>✅ Notebook Example Table</h2>

        <div className="table-wrap">
          <table>
            <tbody>
              <tr>
                <th>Pattern / Signal</th>
                <th>Type</th>
                <th>Entry Condition</th>
                <th>Exit / Target</th>
                <th>Confirmation Tools</th>
              </tr>

              <tr>
                <td>Head & Shoulders</td>
                <td>Reversal</td>
                <td>Neckline break</td>
                <td>Height projection</td>
                <td>Volume, Candles</td>
              </tr>

              <tr>
                <td>Double Top / Bottom</td>
                <td>Reversal</td>
                <td>Support / Resistance break</td>
                <td>Pattern height</td>
                <td>Volume, Candles</td>
              </tr>

              <tr>
                <td>Triangle</td>
                <td>Continuation</td>
                <td>Breakout in trend direction</td>
                <td>Trend continuation</td>
                <td>Volume, Trendlines</td>
              </tr>

              <tr>
                <td>Flag / Pennant</td>
                <td>Continuation</td>
                <td>Breakout direction</td>
                <td>Previous move length</td>
                <td>Volume</td>
              </tr>

              <tr>
                <td>Cup & Handle</td>
                <td>Continuation</td>
                <td>Break handle resistance</td>
                <td>Cup depth projection</td>
                <td>Volume, Trendlines</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="note">
          ✅ Patterns ko <b>higher timeframe me validate</b> karo.
          <br />
          <br />
          Risk management aur Stop Loss mandatory hai.
          <br />
          <br />
          Patterns alone 100% reliable nahi hote, isliye indicators aur volume confluence essential hai.
          <br />
          <br />
          Journal maintain karo learning aur improvement ke liye.
        </div>
      </div>
    </>
  );
}

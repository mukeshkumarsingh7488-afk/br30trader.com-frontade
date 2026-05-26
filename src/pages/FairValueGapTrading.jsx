export default function FairValueGapTrading() {
  return (
    <>
      <style>{`*{box-sizing:border-box;}html,body{margin:0;padding:0;background:#060b13;color:#fff;font-family:Arial,sans-serif;line-height:1.7;}body{padding:28px 14px;}.pdf-box{width:100%;max-width:920px;margin:0 auto;background:#0b111e;padding:32px;border-radius:14px;border:1px solid #1e293b;}.pdf-box h1{color:#00ff88;font-size:30px;line-height:1.35;margin:0 0 24px;}.pdf-box h2{color:#00eaff;font-size:24px;line-height:1.35;margin:30px 0 14px;}.pdf-box h3{color:#ffffff;font-size:19px;margin:22px 0 10px;}.pdf-box p,.pdf-box li{color:#d1d5db;font-size:16px;}.pdf-box p{margin:0 0 16px;}.pdf-box ul,.pdf-box ol{padding-left:24px;margin:0 0 18px;}.pdf-box li{margin:6px 0;}.table-wrap{width:100%;overflow-x:auto;margin-top:20px;}.pdf-box table{width:100%;min-width:760px;border-collapse:collapse;}.pdf-box th,.pdf-box td{border:1px solid #334155;padding:12px;text-align:left;vertical-align:top;}.pdf-box th{background:#111827;color:#00ff88;}.pdf-box td{background:#0f172a;color:#d1d5db;}.pdf-box b,.pdf-box strong{color:#fff;font-weight:800;}.note{margin-top:26px;padding:18px;background:#111827;border-left:4px solid #00ff88;border-radius:8px;color:#d1d5db;}@media(max-width:768px){body{padding:16px 10px;}.pdf-box{padding:22px 16px;border-radius:12px;}.pdf-box h1{font-size:26px;}.pdf-box h2{font-size:21px;}.pdf-box h3{font-size:18px;}.pdf-box p,.pdf-box li{font-size:15px;}.pdf-box ul,.pdf-box ol{padding-left:20px;}}@media(max-width:430px){body{padding:10px 8px;}.pdf-box{padding:18px 14px;}.pdf-box h1{font-size:24px;}.pdf-box h2{font-size:20px;}.pdf-box p,.pdf-box li{font-size:14.5px;}}`}</style>

      <div className="pdf-box">
        <h1>✅ Fair Value Gap (FVG) Trading</h1>

        <p>
          Fair Value Gap (FVG) ek <b>price imbalance area</b> hota hai jahan market me strong move ke baad candle gap ban jata hai. Ye gap future me <b>price ka reversal ya pullback zone</b> provide karta hai.
        </p>

        <h2>✅ Basic Concept</h2>

        <ul>
          <li>
            FVG identify karo using <b>3-candle pattern</b>
          </li>
          <li>Gap ke andar price enter kar sakta hai → opportunity</li>
          <li>
            Mostly used in <b>smart money concepts aur supply-demand trading</b>
          </li>
        </ul>

        <h2>✅ Step by Step FVG Trading</h2>

        <h3>1️⃣ Identify FVG</h3>

        <ul>
          <li>3 consecutive candles dekho</li>
          <li>Middle candle ke high-low area aur surrounding candles ka comparison</li>
          <li>Gap area = Middle candle body gap between high-low</li>
        </ul>

        <h3>2️⃣ Trade Entry</h3>

        <ul>
          <li>Price gap ke andar pullback hone par enter karo</li>
          <li>Buy → Gap support par</li>
          <li>Sell → Gap resistance par</li>
        </ul>

        <h3>3️⃣ Confirmation Tools</h3>

        <ul>
          <li>Volume spike at FVG → strong move</li>
          <li>RSI / MACD divergence → confirm reversal</li>
          <li>Trendline / Support-Resistance confluence → strong setup</li>
        </ul>

        <h3>4️⃣ Stop Loss & Target</h3>

        <ul>
          <li>Stop loss: Gap ke bahar slightly</li>
          <li>Target: Next swing high/low ya major level</li>
        </ul>

        <h2>✅ Notebook Example Table</h2>

        <div className="table-wrap">
          <table>
            <tbody>
              <tr>
                <th>FVG Type</th>
                <th>Entry Condition</th>
                <th>Exit Condition</th>
                <th>Tools / Indicators</th>
              </tr>

              <tr>
                <td>Bullish FVG</td>
                <td>Price pulls back to gap support</td>
                <td>Next swing high</td>
                <td>RSI, MACD, Volume, Trendline</td>
              </tr>

              <tr>
                <td>Bearish FVG</td>
                <td>Price rallies to gap resistance</td>
                <td>Next swing low</td>
                <td>RSI, MACD, Volume, Trendline</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="note">
          ✅ FVG ka use <b>trend aur volume context me karo</b>.
          <br />
          <br />
          Avoid trading isolated gaps without confirmation.
          <br />
          <br />
          Risk management aur stop loss mandatory hai.
          <br />
          <br />
          High timeframe jaise 15 min, 1H me zyada reliable signals.
          <br />
          <br />
          Combine with other technical tools → better probability.
        </div>
      </div>
    </>
  );
}

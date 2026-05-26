export default function AdvancedOptionsStrategies() {
  return (
    <>
      <style>{`*{box-sizing:border-box;}html,body{margin:0;padding:0;background:#060b13;color:#fff;font-family:Arial,sans-serif;line-height:1.7;}body{padding:28px 14px;}.pdf-box{width:100%;max-width:920px;margin:0 auto;background:#0b111e;padding:32px;border-radius:14px;border:1px solid #1e293b;}.pdf-box h1{color:#00ff88;font-size:30px;line-height:1.35;margin:0 0 24px;}.pdf-box h2{color:#00eaff;font-size:24px;line-height:1.35;margin:30px 0 14px;}.pdf-box h3{color:#ffffff;font-size:19px;margin:22px 0 10px;}.pdf-box p,.pdf-box li{color:#d1d5db;font-size:16px;}.pdf-box p{margin:0 0 16px;}.pdf-box ul,.pdf-box ol{padding-left:24px;margin:0 0 18px;}.pdf-box li{margin:6px 0;}.table-wrap{width:100%;overflow-x:auto;margin-top:20px;}.pdf-box table{width:100%;min-width:860px;border-collapse:collapse;}.pdf-box th,.pdf-box td{border:1px solid #334155;padding:12px;text-align:left;vertical-align:top;}.pdf-box th{background:#111827;color:#00ff88;}.pdf-box td{background:#0f172a;color:#d1d5db;}.pdf-box b,.pdf-box strong{color:#fff;font-weight:800;}.note{margin-top:26px;padding:18px;background:#111827;border-left:4px solid #00ff88;border-radius:8px;color:#d1d5db;}@media(max-width:768px){body{padding:16px 10px;}.pdf-box{padding:22px 16px;border-radius:12px;}.pdf-box h1{font-size:26px;}.pdf-box h2{font-size:21px;}.pdf-box h3{font-size:18px;}.pdf-box p,.pdf-box li{font-size:15px;}.pdf-box ul,.pdf-box ol{padding-left:20px;}}@media(max-width:430px){body{padding:10px 8px;}.pdf-box{padding:18px 14px;}.pdf-box h1{font-size:24px;}.pdf-box h2{font-size:20px;}.pdf-box p,.pdf-box li{font-size:14.5px;}}`}</style>

      <div className="pdf-box">
        <h1>✅ Advanced Options Strategies</h1>

        <p>
          Advanced Options Strategies un traders ke liye hain jo basic buying/selling se aage badh kar <b>multi-leg strategies</b> use karte hain taaki risk control aur profit maximize ho sake.
        </p>

        <h2>✅ Basic Concept</h2>

        <ul>
          <li>Multi-leg options ka use karna.</li>
          <li>Objective: Limited risk, defined reward, ya income generation.</li>
          <li>Instruments: Calls, Puts, Combinations.</li>
        </ul>

        <h2>✅ Common Advanced Strategies</h2>

        <h3>1️⃣ Iron Condor</h3>

        <ul>
          <li>Sell OTM Call + Buy further OTM Call.</li>
          <li>Sell OTM Put + Buy further OTM Put.</li>
          <li>Objective: Range-bound profit.</li>
          <li>Limited risk + limited reward.</li>
        </ul>

        <h3>2️⃣ Butterfly Spread</h3>

        <ul>
          <li>Buy 1 ITM Call, Sell 2 ATM Calls, Buy 1 OTM Call.</li>
          <li>Same structure can also be created using Put options.</li>
          <li>Objective: Profit near middle strike.</li>
          <li>Low cost, defined risk.</li>
        </ul>

        <h3>3️⃣ Strangle</h3>

        <ul>
          <li>Buy OTM Call + Buy OTM Put with different strikes.</li>
          <li>Objective: Profit from large move in either direction.</li>
          <li>Risk limited to premium paid.</li>
        </ul>

        <h3>4️⃣ Straddle</h3>

        <ul>
          <li>Buy ATM Call + Buy ATM Put.</li>
          <li>Objective: Profit from volatility in either direction.</li>
          <li>Higher premium but strong profit potential during big moves.</li>
        </ul>

        <h3>5️⃣ Calendar Spread</h3>

        <ul>
          <li>Sell short-term option + Buy long-term option with same strike.</li>
          <li>Objective: Time decay exploitation.</li>
          <li>Directional risk remains comparatively limited.</li>
        </ul>

        <h2>✅ Notebook Example Table</h2>

        <div className="table-wrap">
          <table>
            <tbody>
              <tr>
                <th>Strategy</th>
                <th>Type</th>
                <th>Objective</th>
                <th>Key Notes</th>
              </tr>

              <tr>
                <td>Iron Condor</td>
                <td>Multi-leg</td>
                <td>Range-bound profit</td>
                <td>Limited risk & reward</td>
              </tr>

              <tr>
                <td>Butterfly Spread</td>
                <td>Multi-leg</td>
                <td>Profit near middle strike</td>
                <td>Low cost, defined risk</td>
              </tr>

              <tr>
                <td>Strangle</td>
                <td>Long Option</td>
                <td>Profit from big move</td>
                <td>Risk = Premium paid</td>
              </tr>

              <tr>
                <td>Straddle</td>
                <td>Long Option</td>
                <td>Profit from volatility</td>
                <td>High premium, strong potential</td>
              </tr>

              <tr>
                <td>Calendar Spread</td>
                <td>Multi-leg</td>
                <td>Exploit time decay</td>
                <td>Directional risk limited</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="note">
          ✅ Multi-leg strategies ke liye <b>margin aur capital</b> manage karo.
          <br />
          <br />
          Premium, theta decay, implied volatility samajhna zaruri hai.
          <br />
          <br />
          Stop loss aur exit plan predefine karo.
          <br />
          <br />
          Market conditions aur timeframe ke hisaab se strategy choose karo.
          <br />
          <br />
          Demo practice aur chart analysis mandatory hai.
        </div>
      </div>
    </>
  );
}

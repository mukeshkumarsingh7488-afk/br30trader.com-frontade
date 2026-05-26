export default function OtherOptionStrategies() {
  return (
    <>
      <style>{`*{box-sizing:border-box;}html,body{margin:0;padding:0;background:#060b13;color:#fff;font-family:Arial,sans-serif;line-height:1.7;}body{padding:28px 14px;}.pdf-box{width:100%;max-width:920px;margin:0 auto;background:#0b111e;padding:32px;border-radius:14px;border:1px solid #1e293b;}.pdf-box h1{color:#00ff88;font-size:30px;line-height:1.35;margin:0 0 24px;}.pdf-box h2{color:#00eaff;font-size:24px;line-height:1.35;margin:30px 0 14px;}.pdf-box h3{color:#ffffff;font-size:19px;margin:22px 0 10px;}.pdf-box p,.pdf-box li{color:#d1d5db;font-size:16px;}.pdf-box p{margin:0 0 16px;}.pdf-box ul,.pdf-box ol{padding-left:24px;margin:0 0 18px;}.pdf-box li{margin:6px 0;}.table-wrap{width:100%;overflow-x:auto;margin-top:20px;}.pdf-box table{width:100%;min-width:920px;border-collapse:collapse;}.pdf-box th,.pdf-box td{border:1px solid #334155;padding:12px;text-align:left;vertical-align:top;}.pdf-box th{background:#111827;color:#00ff88;}.pdf-box td{background:#0f172a;color:#d1d5db;}.pdf-box b,.pdf-box strong{color:#fff;font-weight:800;}.note{margin-top:26px;padding:18px;background:#111827;border-left:4px solid #00ff88;border-radius:8px;color:#d1d5db;}@media(max-width:768px){body{padding:16px 10px;}.pdf-box{padding:22px 16px;border-radius:12px;}.pdf-box h1{font-size:26px;}.pdf-box h2{font-size:21px;}.pdf-box h3{font-size:18px;}.pdf-box p,.pdf-box li{font-size:15px;}.pdf-box ul,.pdf-box ol{padding-left:20px;}}@media(max-width:430px){body{padding:10px 8px;}.pdf-box{padding:18px 14px;}.pdf-box h1{font-size:24px;}.pdf-box h2{font-size:20px;}.pdf-box p,.pdf-box li{font-size:14.5px;}}`}</style>

      <div className="pdf-box">
        <h1>✅ Other Option Strategies</h1>

        <p>
          Market me jab direction uncertain ho ya price range me rahe, tab ye strategies use hoti hain. Ye strategies mostly <b>premium decay</b> aur <b>volatility ka fayda</b> uthane ke liye design ki gayi hain.
        </p>

        <h2>✅ Common Neutral / Volatility Strategies</h2>

        <h3>1️⃣ Call Ratio Spread</h3>
        <ul>
          <li>Buy 1 Call + Sell 2 Calls at higher strikes.</li>
          <li>Limited risk, reward asymmetric.</li>
          <li>Maximum profit if price modestly rises.</li>
          <li>Works in moderately bullish scenarios.</li>
        </ul>

        <h3>2️⃣ Put Ratio Spread</h3>
        <ul>
          <li>Buy 1 Put + Sell 2 Puts at lower strikes.</li>
          <li>Limited risk, reward asymmetric.</li>
          <li>Maximum profit if price modestly falls.</li>
          <li>Works in moderately bearish scenarios.</li>
        </ul>

        <h3>3️⃣ Long Straddle</h3>
        <ul>
          <li>Buy 1 ATM Call + Buy 1 ATM Put.</li>
          <li>Profit if price makes large move in either direction.</li>
          <li>Loss limited to total premium paid.</li>
          <li>High IV markets can make this strategy expensive.</li>
        </ul>

        <h3>4️⃣ Long Iron Butterfly</h3>
        <ul>
          <li>Buy 1 ATM Call + Buy 1 ATM Put + Sell 1 OTM Call + Sell 1 OTM Put.</li>
          <li>Limited risk, reward limited.</li>
          <li>Maximum profit if price expires near strike.</li>
          <li>Best in low volatility markets anticipating spike.</li>
        </ul>

        <h3>5️⃣ Long Strangle</h3>
        <ul>
          <li>Buy 1 OTM Call + Buy 1 OTM Put.</li>
          <li>Profit if price makes big move up or down.</li>
          <li>Loss limited to premiums paid.</li>
          <li>Cheaper than straddle for high movement expectation.</li>
        </ul>

        <h3>6️⃣ Long Iron Condor</h3>
        <ul>
          <li>Buy 1 lower strike Put + Buy 1 higher strike Call + Sell 1 OTM Put + Sell 1 OTM Call.</li>
          <li>Risk limited, reward limited.</li>
          <li>Maximum profit if price stays in middle range.</li>
          <li>Ideal for low volatility, range-bound markets.</li>
        </ul>

        <h3>7️⃣ Strip</h3>
        <ul>
          <li>Buy 1 ATM Call + Buy 2 ATM Puts.</li>
          <li>Slightly bearish bias.</li>
          <li>Profit high if price drops sharply.</li>
          <li>Loss limited to total premium paid.</li>
        </ul>

        <h3>8️⃣ Strap</h3>
        <ul>
          <li>Buy 2 ATM Calls + Buy 1 ATM Put.</li>
          <li>Slightly bullish bias.</li>
          <li>Profit high if price rises sharply.</li>
          <li>Loss limited to total premium paid.</li>
        </ul>

        <h2>✅ Notebook Example Table</h2>

        <div className="table-wrap">
          <table>
            <tbody>
              <tr>
                <th>Strategy</th>
                <th>Market View</th>
                <th>Risk</th>
                <th>Reward</th>
                <th>Key Notes</th>
              </tr>

              <tr>
                <td>Call Ratio Spread</td>
                <td>Moderately Bullish</td>
                <td>Limited</td>
                <td>Asymmetric</td>
                <td>Works best in moderate upside move</td>
              </tr>

              <tr>
                <td>Put Ratio Spread</td>
                <td>Moderately Bearish</td>
                <td>Limited</td>
                <td>Asymmetric</td>
                <td>Profits from moderate downside</td>
              </tr>

              <tr>
                <td>Long Straddle</td>
                <td>Volatile</td>
                <td>Limited</td>
                <td>Unlimited</td>
                <td>Big move expected in either direction</td>
              </tr>

              <tr>
                <td>Long Strangle</td>
                <td>Volatile</td>
                <td>Limited</td>
                <td>Unlimited</td>
                <td>Cheaper than straddle</td>
              </tr>

              <tr>
                <td>Strip / Strap</td>
                <td>Directional Volatility</td>
                <td>Limited</td>
                <td>High</td>
                <td>Bullish or bearish volatility bias</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="note">
          ✅ Risk management zaruri hai in all option strategies.
          <br />
          <br />
          Position sizing capital ke hisaab se adjust karein.
          <br />
          <br />
          Entry/exit me technical indicators aur IV analysis ka use karein.
          <br />
          <br />
          Har strategy ka max loss aur max profit samajhna zaruri hai.
        </div>
      </div>
    </>
  );
}

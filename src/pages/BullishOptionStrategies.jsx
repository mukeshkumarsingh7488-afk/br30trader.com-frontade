export default function BullishOptionStrategies() {
  return (
    <>
      <style>{`*{box-sizing:border-box;}html,body{margin:0;padding:0;background:#060b13;color:#fff;font-family:Arial,sans-serif;line-height:1.7;}body{padding:28px 14px;}.pdf-box{width:100%;max-width:920px;margin:0 auto;background:#0b111e;padding:32px;border-radius:14px;border:1px solid #1e293b;}.pdf-box h1{color:#00ff88;font-size:30px;line-height:1.35;margin:0 0 24px;}.pdf-box h2{color:#00eaff;font-size:24px;line-height:1.35;margin:30px 0 14px;}.pdf-box h3{color:#ffffff;font-size:19px;margin:22px 0 10px;}.pdf-box p,.pdf-box li{color:#d1d5db;font-size:16px;}.pdf-box p{margin:0 0 16px;}.pdf-box ul,.pdf-box ol{padding-left:24px;margin:0 0 18px;}.pdf-box li{margin:6px 0;}.table-wrap{width:100%;overflow-x:auto;margin-top:20px;}.pdf-box table{width:100%;min-width:900px;border-collapse:collapse;}.pdf-box th,.pdf-box td{border:1px solid #334155;padding:12px;text-align:left;vertical-align:top;}.pdf-box th{background:#111827;color:#00ff88;}.pdf-box td{background:#0f172a;color:#d1d5db;}.pdf-box b,.pdf-box strong{color:#fff;font-weight:800;}.note{margin-top:26px;padding:18px;background:#111827;border-left:4px solid #00ff88;border-radius:8px;color:#d1d5db;}@media(max-width:768px){body{padding:16px 10px;}.pdf-box{padding:22px 16px;border-radius:12px;}.pdf-box h1{font-size:26px;}.pdf-box h2{font-size:21px;}.pdf-box h3{font-size:18px;}.pdf-box p,.pdf-box li{font-size:15px;}.pdf-box ul,.pdf-box ol{padding-left:20px;}}@media(max-width:430px){body{padding:10px 8px;}.pdf-box{padding:18px 14px;}.pdf-box h1{font-size:24px;}.pdf-box h2{font-size:20px;}.pdf-box p,.pdf-box li{font-size:14.5px;}}`}</style>

      <div className="pdf-box">
        <h1>✅ Bullish Option Strategies</h1>

        <p>Bullish market me option strategies profit generate karne ke liye use ki jaati hain. Ye strategies tab use hoti hain jab market ya underlying asset ka price upar jaane ki expectation ho.</p>

        <h2>✅ Common Bullish Strategies</h2>

        <h3>1️⃣ Buy Call</h3>
        <ul>
          <li>Simple aur basic bullish strategy.</li>
          <li>Buy a call option at strike price.</li>
          <li>Unlimited profit potential.</li>
          <li>Max loss: Premium paid.</li>
        </ul>

        <h3>2️⃣ Sell Put</h3>
        <ul>
          <li>Sell a put option to earn premium.</li>
          <li>Obligation to buy if strike hit.</li>
          <li>Profit limited to premium collected.</li>
        </ul>

        <h3>3️⃣ Bull Call Spread</h3>
        <ul>
          <li>Buy lower strike call + Sell higher strike call.</li>
          <li>Risk limited.</li>
          <li>Profit limited to difference in strikes minus net premium.</li>
        </ul>

        <h3>4️⃣ Bull Put Spread</h3>
        <ul>
          <li>Sell higher strike put + Buy lower strike put.</li>
          <li>Limited risk.</li>
          <li>Profit limited to net premium collected.</li>
        </ul>

        <h3>5️⃣ Call Ratio Back Spread</h3>
        <ul>
          <li>Sell 1 call + Buy 2 higher strike calls.</li>
          <li>Profit rises sharply if price goes up strongly.</li>
          <li>Loss can occur if price moves only slightly up.</li>
        </ul>

        <h3>6️⃣ Long Calendar with Calls</h3>
        <ul>
          <li>Buy longer expiry call + Sell shorter expiry call at same strike.</li>
          <li>Profit if price stays around strike at short expiry.</li>
          <li>Risk limited to net premium.</li>
        </ul>

        <h3>7️⃣ Bull Condor</h3>
        <ul>
          <li>Combination of call spreads to create a defined range.</li>
          <li>Maximum profit if price stays within middle strikes.</li>
          <li>Limited risk and limited reward.</li>
        </ul>

        <h3>8️⃣ Bull Butterfly</h3>
        <ul>
          <li>Buy 1 call low strike + Sell 2 calls middle strike + Buy 1 call high strike.</li>
          <li>Maximum profit at middle strike.</li>
          <li>Limited loss.</li>
        </ul>

        <h3>9️⃣ Range Forward</h3>
        <ul>
          <li>Construct forward-style range positions using options.</li>
          <li>Profits if price moves in the expected upward range.</li>
        </ul>

        <h3>🔟 Long Synthetic Future</h3>
        <ul>
          <li>Buy call + Sell put at same strike.</li>
          <li>Mimics buying the underlying asset.</li>
          <li>Profit increases if price rises.</li>
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
                <td>Buy Call</td>
                <td>Bullish</td>
                <td>Limited</td>
                <td>Unlimited</td>
                <td>Simple beginner strategy</td>
              </tr>

              <tr>
                <td>Sell Put</td>
                <td>Bullish</td>
                <td>High</td>
                <td>Limited</td>
                <td>Premium collection strategy</td>
              </tr>

              <tr>
                <td>Bull Call Spread</td>
                <td>Moderately Bullish</td>
                <td>Limited</td>
                <td>Limited</td>
                <td>Defined risk & reward</td>
              </tr>

              <tr>
                <td>Bull Put Spread</td>
                <td>Moderately Bullish</td>
                <td>Limited</td>
                <td>Limited</td>
                <td>Income strategy</td>
              </tr>

              <tr>
                <td>Long Synthetic Future</td>
                <td>Strong Bullish</td>
                <td>High</td>
                <td>Unlimited</td>
                <td>Mimics underlying movement</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="note">
          ✅ Risk management is key in every bullish strategy.
          <br />
          <br />
          Position sizing must align with your capital.
          <br />
          <br />
          Combine strategies with technical indicators for better entries and exits.
          <br />
          <br />
          Always understand max loss and max profit before taking any trade.
        </div>
      </div>
    </>
  );
}

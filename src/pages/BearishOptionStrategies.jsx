export default function BearishOptionStrategies() {
  return (
    <>
      <style>{`*{box-sizing:border-box;}html,body{margin:0;padding:0;background:#060b13;color:#fff;font-family:Arial,sans-serif;line-height:1.7;}body{padding:28px 14px;}.pdf-box{width:100%;max-width:920px;margin:0 auto;background:#0b111e;padding:32px;border-radius:14px;border:1px solid #1e293b;}.pdf-box h1{color:#00ff88;font-size:30px;line-height:1.35;margin:0 0 24px;}.pdf-box h2{color:#00eaff;font-size:24px;line-height:1.35;margin:30px 0 14px;}.pdf-box h3{color:#ffffff;font-size:19px;margin:22px 0 10px;}.pdf-box p,.pdf-box li{color:#d1d5db;font-size:16px;}.pdf-box p{margin:0 0 16px;}.pdf-box ul,.pdf-box ol{padding-left:24px;margin:0 0 18px;}.pdf-box li{margin:6px 0;}.table-wrap{width:100%;overflow-x:auto;margin-top:20px;}.pdf-box table{width:100%;min-width:900px;border-collapse:collapse;}.pdf-box th,.pdf-box td{border:1px solid #334155;padding:12px;text-align:left;vertical-align:top;}.pdf-box th{background:#111827;color:#00ff88;}.pdf-box td{background:#0f172a;color:#d1d5db;}.pdf-box b,.pdf-box strong{color:#fff;font-weight:800;}.note{margin-top:26px;padding:18px;background:#111827;border-left:4px solid #00ff88;border-radius:8px;color:#d1d5db;}@media(max-width:768px){body{padding:16px 10px;}.pdf-box{padding:22px 16px;border-radius:12px;}.pdf-box h1{font-size:26px;}.pdf-box h2{font-size:21px;}.pdf-box h3{font-size:18px;}.pdf-box p,.pdf-box li{font-size:15px;}.pdf-box ul,.pdf-box ol{padding-left:20px;}}@media(max-width:430px){body{padding:10px 8px;}.pdf-box{padding:18px 14px;}.pdf-box h1{font-size:24px;}.pdf-box h2{font-size:20px;}.pdf-box p,.pdf-box li{font-size:14.5px;}}`}</style>

      <div className="pdf-box">
        <h1>✅ Bearish Option Strategies</h1>

        <p>Bearish market me option strategies tab use hoti hain jab underlying asset ka price neeche jaane ki expectation ho. Ye strategies profit generate karne ke liye design ki gayi hain.</p>

        <h2>✅ Common Bearish Strategies</h2>

        <h3>1️⃣ Buy Put</h3>
        <ul>
          <li>Simple bearish strategy.</li>
          <li>Buy a put option at strike price.</li>
          <li>Profit increases as price goes down.</li>
          <li>Max loss: Premium paid.</li>
        </ul>

        <h3>2️⃣ Sell Call</h3>
        <ul>
          <li>Sell a call option to earn premium.</li>
          <li>Obligation to sell if strike hit.</li>
          <li>Profit limited to premium collected.</li>
        </ul>

        <h3>3️⃣ Bear Call Spread</h3>
        <ul>
          <li>Sell lower strike call + Buy higher strike call.</li>
          <li>Risk limited.</li>
          <li>Profit limited to net premium collected.</li>
        </ul>

        <h3>4️⃣ Bear Put Spread</h3>
        <ul>
          <li>Buy higher strike put + Sell lower strike put.</li>
          <li>Risk limited.</li>
          <li>Profit limited to difference in strikes minus net premium.</li>
        </ul>

        <h3>5️⃣ Put Ratio Back Spread</h3>
        <ul>
          <li>Sell 1 put + Buy 2 lower strike puts.</li>
          <li>Profit rises sharply if price falls.</li>
          <li>Loss limited if price moves slightly down.</li>
        </ul>

        <h3>6️⃣ Long Calendar with Puts</h3>
        <ul>
          <li>Buy longer expiry put + Sell shorter expiry put at same strike.</li>
          <li>Profit if price stays around strike at short expiry.</li>
          <li>Risk limited to net premium.</li>
        </ul>

        <h3>7️⃣ Bear Condor</h3>
        <ul>
          <li>Combination of put spreads to create range.</li>
          <li>Profit maximum if price within middle strikes.</li>
          <li>Limited risk and reward.</li>
        </ul>

        <h3>8️⃣ Bear Butterfly</h3>
        <ul>
          <li>Buy 1 put high strike + Sell 2 puts middle strike + Buy 1 put low strike.</li>
          <li>Profit maximum at middle strike.</li>
          <li>Limited loss.</li>
        </ul>

        <h3>9️⃣ Range Forward</h3>
        <ul>
          <li>Construct bearish forward range positions.</li>
          <li>Profits if price moves in expected downward range.</li>
        </ul>

        <h3>🔟 Synthetic Short Future</h3>
        <ul>
          <li>Sell call + Buy put at same strike.</li>
          <li>Mimics shorting the underlying asset.</li>
          <li>Unlimited profit if price falls.</li>
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
                <td>Buy Put</td>
                <td>Bearish</td>
                <td>Limited</td>
                <td>High / Unlimited</td>
                <td>Simple beginner bearish setup</td>
              </tr>

              <tr>
                <td>Sell Call</td>
                <td>Bearish</td>
                <td>High</td>
                <td>Limited</td>
                <td>Premium collection strategy</td>
              </tr>

              <tr>
                <td>Bear Call Spread</td>
                <td>Moderately Bearish</td>
                <td>Limited</td>
                <td>Limited</td>
                <td>Defined risk & reward</td>
              </tr>

              <tr>
                <td>Bear Put Spread</td>
                <td>Moderately Bearish</td>
                <td>Limited</td>
                <td>Limited</td>
                <td>Controlled downside strategy</td>
              </tr>

              <tr>
                <td>Synthetic Short Future</td>
                <td>Strong Bearish</td>
                <td>High</td>
                <td>Unlimited</td>
                <td>Mimics short futures position</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="note">
          ✅ Risk management is essential in bearish option trading.
          <br />
          <br />
          Position sizing should always align with your capital.
          <br />
          <br />
          Combine bearish setups with technical indicators for better entries and exits.
          <br />
          <br />
          Always know max loss and max profit before taking any trade.
        </div>
      </div>
    </>
  );
}

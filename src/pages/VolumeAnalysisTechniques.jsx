export default function VolumeAnalysisTechniques() {
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
        <h1>✅ Volume Analysis Techniques</h1>

        <p>Volume is one of the most important indicators for understanding the strength behind price movement and overall market sentiment.</p>

        <h2>✅ Basic Concept</h2>

        <ul>
          <li>Volume shows how many participants are actively trading.</li>
          <li>High volume often indicates a strong trend or breakout.</li>
          <li>Low volume often indicates a weak trend or consolidation.</li>
        </ul>

        <h2>✅ Key Volume Patterns</h2>

        <h3>1️⃣ Volume Spike</h3>

        <ul>
          <li>A sudden increase in volume means market interest has increased.</li>
          <li>Implication: Possible trend reversal or breakout signal.</li>
        </ul>

        <h3>2️⃣ Rising Volume in Uptrend</h3>

        <ul>
          <li>Price is moving up and volume is also increasing → Strong trend.</li>
          <li>Action: Follow the trend and consider buy or long opportunities.</li>
        </ul>

        <h3>3️⃣ Falling Volume in Uptrend</h3>

        <ul>
          <li>Price is moving up but volume is decreasing → Weak trend.</li>
          <li>Action: Be cautious because trend strength may be reducing.</li>
        </ul>

        <h3>4️⃣ Rising Volume in Downtrend</h3>

        <ul>
          <li>Price is moving down and volume is increasing → Strong bearish trend.</li>
          <li>Action: Consider short or sell opportunities.</li>
        </ul>

        <h3>5️⃣ Falling Volume in Downtrend</h3>

        <ul>
          <li>Price is moving down but volume is decreasing → Weak trend.</li>
          <li>Action: Possible trend reversal signal.</li>
        </ul>

        <h2>✅ Step-by-Step Volume Analysis</h2>

        <ol>
          <li>Add the volume indicator to the chart.</li>
          <li>Observe the relationship between price and volume.</li>
          <li>Detect volume spikes, rising volume, or falling volume.</li>
          <li>Identify trend strength and possible reversal signals.</li>
          <li>Check candlestick patterns and other indicators for confirmation.</li>
        </ol>

        <h2>✅ Notebook Example Table</h2>

        <div className="table-wrap">
          <table>
            <tbody>
              <tr>
                <th>Price Trend</th>
                <th>Volume Behavior</th>
                <th>Signal / Action</th>
              </tr>

              <tr>
                <td>Uptrend</td>
                <td>Rising Volume</td>
                <td>Strong Trend → Buy / Long</td>
              </tr>

              <tr>
                <td>Uptrend</td>
                <td>Falling Volume</td>
                <td>Weak Trend → Caution</td>
              </tr>

              <tr>
                <td>Downtrend</td>
                <td>Rising Volume</td>
                <td>Strong Trend → Short / Sell</td>
              </tr>

              <tr>
                <td>Downtrend</td>
                <td>Falling Volume</td>
                <td>Weak Trend → Possible Reversal</td>
              </tr>

              <tr>
                <td>Any Trend</td>
                <td>Volume Spike</td>
                <td>Possible Breakout / Reversal</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="note">
          ✅ Always combine volume analysis with the main trend.
          <br />
          <br />
          Observing volume spikes and volume divergence is important.
          <br />
          <br />
          Check volume across multiple timeframes for more reliable signals.
          <br />
          <br />
          Combine volume with candlestick confirmation and support/resistance zones.
        </div>
      </div>
    </>
  );
}

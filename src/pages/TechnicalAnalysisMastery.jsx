export default function TechnicalAnalysisMastery() {
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
        <h1>✅ Technical Analysis Mastery</h1>

        <p>Technical Analysis, also known as TA, is a method of studying the market by analyzing historical price action and volume data to understand possible future price movements.</p>

        <h2>✅ Key Concepts</h2>

        <h3>1️⃣ Price Action</h3>

        <ul>
          <li>Observing real-time market movement through candles and structure.</li>
          <li>Candlestick patterns such as Doji, Hammer, and Engulfing help identify trend strength, reversals, and market sentiment.</li>
        </ul>

        <h3>2️⃣ Support & Resistance</h3>

        <ul>
          <li>Support: A level where price often reacts or bounces after falling.</li>
          <li>Resistance: A level where price often reacts or reverses after rising.</li>
          <li>These levels are important for breakout, breakdown, and reversal signals.</li>
        </ul>

        <h3>3️⃣ Trend Analysis</h3>

        <ul>
          <li>Uptrend: Higher Highs and Higher Lows</li>
          <li>Downtrend: Lower Highs and Lower Lows</li>
          <li>Sideways / Consolidation: Range-bound price movement</li>
        </ul>

        <h3>4️⃣ Volume Analysis</h3>

        <ul>
          <li>Volume helps measure the strength behind a price move.</li>
          <li>High volume with breakout = Stronger trend confirmation</li>
          <li>Low volume with breakout = Weak or unreliable signal</li>
        </ul>

        <h2>✅ Popular Indicators</h2>

        <div className="table-wrap">
          <table>
            <tbody>
              <tr>
                <th>Indicator</th>
                <th>Usage</th>
              </tr>

              <tr>
                <td>Moving Average</td>
                <td>Trend identification</td>
              </tr>

              <tr>
                <td>RSI</td>
                <td>Overbought and oversold levels</td>
              </tr>

              <tr>
                <td>MACD</td>
                <td>Momentum and crossover signals</td>
              </tr>

              <tr>
                <td>Bollinger Bands</td>
                <td>Volatility and price channels</td>
              </tr>

              <tr>
                <td>Fibonacci</td>
                <td>Retracement and target levels</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>✅ Step-by-Step Trading Setup</h2>

        <ol>
          <li>Select the desired timeframe on the chart, such as 1H, 4H, or Daily.</li>
          <li>Identify the trend and key support/resistance levels.</li>
          <li>Add indicators such as RSI, MACD, and Moving Average.</li>
          <li>Check volume and candlestick patterns for confirmation.</li>
          <li>Decide entry and exit points based on confirmation.</li>
        </ol>

        <h2>✅ Notebook Example Table</h2>

        <div className="table-wrap">
          <table>
            <tbody>
              <tr>
                <th>Signal Type</th>
                <th>Indicator Reading</th>
                <th>Action</th>
              </tr>

              <tr>
                <td>Bullish Trend</td>
                <td>Price above MA, RSI &lt; 70</td>
                <td>Buy</td>
              </tr>

              <tr>
                <td>Bearish Trend</td>
                <td>Price below MA, RSI &gt; 30</td>
                <td>Sell</td>
              </tr>

              <tr>
                <td>Overbought</td>
                <td>RSI &gt; 70</td>
                <td>Wait / Sell</td>
              </tr>

              <tr>
                <td>Oversold</td>
                <td>RSI &lt; 30</td>
                <td>Wait / Buy</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="note">
          ✅ Indicators only provide signals. Understanding market context is very important.
          <br />
          <br />
          Focus on higher timeframe trends and choose entries on lower timeframes.
          <br />
          <br />
          Always follow risk management rules such as Stop Loss and Target.
          <br />
          <br />
          Mastery comes through practice, observation, and disciplined execution.
        </div>
      </div>
    </>
  );
}

export default function IntradayTradingTechniques() {
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
.pdf-box table{width:100%;min-width:820px;border-collapse:collapse;}
.pdf-box th,.pdf-box td{border:1px solid #334155;padding:12px;text-align:left;vertical-align:top;}
.pdf-box th{background:#111827;color:#00ff88;}
.pdf-box td{background:#0f172a;color:#d1d5db;}
.pdf-box b,.pdf-box strong{color:#fff;font-weight:800;}
.note{margin-top:26px;padding:18px;background:#111827;border-left:4px solid #00ff88;border-radius:8px;color:#d1d5db;}
@media(max-width:768px){body{padding:16px 10px;}.pdf-box{padding:22px 16px;border-radius:12px;}.pdf-box h1{font-size:26px;}.pdf-box h2{font-size:21px;}.pdf-box h3{font-size:18px;}.pdf-box p,.pdf-box li{font-size:15px;}.pdf-box ul,.pdf-box ol{padding-left:20px;}}
@media(max-width:430px){body{padding:10px 8px;}.pdf-box{padding:18px 14px;}.pdf-box h1{font-size:24px;}.pdf-box h2{font-size:20px;}.pdf-box p,.pdf-box li{font-size:14.5px;}}
      `}</style>

      <div className="pdf-box">
        <h1>✅ Intraday Trading Techniques</h1>

        <p>
          In intraday trading, <b>same-day trades</b> are taken and all positions are closed before market closing. It is fast-paced and high-risk, but with proper techniques, discipline, and risk management, it can become a structured trading approach.
        </p>

        <h2>✅ Basic Concept</h2>

        <ul>
          <li>The objective is to capture short-term price movements.</li>
          <li>Positions are opened and closed on the same trading day.</li>
          <li>High liquidity and volatility are preferred for smoother execution.</li>
        </ul>

        <h2>✅ Key Intraday Techniques</h2>

        <h3>1️⃣ Trend Following</h3>

        <ul>
          <li>Trade in the direction of the main market trend.</li>
          <li>Tools: Moving Averages, EMA, and Supertrend.</li>
          <li>Example: Price above 20 EMA → Bullish trend preference.</li>
        </ul>

        <h3>2️⃣ Breakout Trading</h3>

        <ul>
          <li>Enter when price crosses strong support or resistance.</li>
          <li>Volume and candle confirmation are essential.</li>
          <li>Example: Resistance breakout → Long position opportunity.</li>
        </ul>

        <h3>3️⃣ Pullback Strategy</h3>

        <ul>
          <li>Enter during a temporary retracement inside the main trend.</li>
          <li>Use support/resistance and Fibonacci retracement for confirmation.</li>
          <li>Example: Minor dip in an uptrend → Buy opportunity.</li>
        </ul>

        <h3>4️⃣ Scalping</h3>

        <ul>
          <li>Multiple small trades with quick entry and exit.</li>
          <li>Focus on small but frequent profits.</li>
          <li>Requires fast execution, discipline, and low spread.</li>
        </ul>

        <h3>5️⃣ Momentum Trading</h3>

        <ul>
          <li>Focus on stocks or indices with strong momentum or news-based movement.</li>
          <li>Entry: Strong price movement with volume spike.</li>
          <li>Exit: Target hit or momentum slowdown.</li>
        </ul>

        <h3>6️⃣ Gap & Go Strategy</h3>

        <ul>
          <li>Uses opening gap and early market momentum.</li>
          <li>Entry: Follow momentum in the first few minutes after market open.</li>
          <li>Exit: Based on target or Stop Loss.</li>
        </ul>

        <h2>✅ Notebook Example Table</h2>

        <div className="table-wrap">
          <table>
            <tbody>
              <tr>
                <th>Strategy</th>
                <th>Entry Condition</th>
                <th>Exit Condition</th>
                <th>Tools / Indicators</th>
              </tr>

              <tr>
                <td>Trend Following</td>
                <td>Price above or below EMA</td>
                <td>Trend reversal or target</td>
                <td>EMA, MA, Supertrend</td>
              </tr>

              <tr>
                <td>Breakout Trading</td>
                <td>Strong support or resistance breakout</td>
                <td>Target or Stop Loss</td>
                <td>Volume, Candlestick patterns</td>
              </tr>

              <tr>
                <td>Pullback Strategy</td>
                <td>Minor retracement in trend direction</td>
                <td>Next high or low</td>
                <td>Fibonacci, Support / Resistance</td>
              </tr>

              <tr>
                <td>Scalping</td>
                <td>Quick small price movements</td>
                <td>Small profit or quick exit</td>
                <td>Tick charts, 1-minute candles</td>
              </tr>

              <tr>
                <td>Momentum Trading</td>
                <td>High volume with strong price movement</td>
                <td>Target or momentum slowdown</td>
                <td>RSI, Volume, News flow</td>
              </tr>

              <tr>
                <td>Gap & Go</td>
                <td>Opening gap with momentum</td>
                <td>Target or Stop Loss</td>
                <td>Pre-market data, Volume</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="note">
          ✅ Intraday trading requires <b>discipline and quick decision-making</b>.
          <br />
          <br />
          Always follow <b>Stop Loss and risk management</b>.
          <br />
          <br />
          Avoid overtrading and emotional trading.
          <br />
          <br />
          Focus on liquid stocks or indices for smooth execution.
          <br />
          <br />
          Maintain a trading journal to track mistakes and learning.
        </div>
      </div>
    </>
  );
}

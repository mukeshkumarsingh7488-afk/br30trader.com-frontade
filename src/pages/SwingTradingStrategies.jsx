export default function SwingTradingStrategies() {
  return (
    <>
      <style>{`*{box-sizing:border-box;}html,body{margin:0;padding:0;background:#060b13;color:#fff;font-family:Arial,sans-serif;line-height:1.7;}body{padding:28px 14px;}.pdf-box{width:100%;max-width:920px;margin:0 auto;background:#0b111e;padding:32px;border-radius:14px;border:1px solid #1e293b;}.pdf-box h1{color:#00ff88;font-size:30px;line-height:1.35;margin:0 0 24px;}.pdf-box h2{color:#00eaff;font-size:24px;line-height:1.35;margin:30px 0 14px;}.pdf-box h3{color:#ffffff;font-size:19px;margin:22px 0 10px;}.pdf-box p,.pdf-box li{color:#d1d5db;font-size:16px;}.pdf-box p{margin:0 0 16px;}.pdf-box ul,.pdf-box ol{padding-left:24px;margin:0 0 18px;}.pdf-box li{margin:6px 0;}.table-wrap{width:100%;overflow-x:auto;margin-top:20px;}.pdf-box table{width:100%;min-width:820px;border-collapse:collapse;}.pdf-box th,.pdf-box td{border:1px solid #334155;padding:12px;text-align:left;vertical-align:top;}.pdf-box th{background:#111827;color:#00ff88;}.pdf-box td{background:#0f172a;color:#d1d5db;}.pdf-box b,.pdf-box strong{color:#fff;font-weight:800;}.note{margin-top:26px;padding:18px;background:#111827;border-left:4px solid #00ff88;border-radius:8px;color:#d1d5db;}@media(max-width:768px){body{padding:16px 10px;}.pdf-box{padding:22px 16px;border-radius:12px;}.pdf-box h1{font-size:26px;}.pdf-box h2{font-size:21px;}.pdf-box h3{font-size:18px;}.pdf-box p,.pdf-box li{font-size:15px;}.pdf-box ul,.pdf-box ol{padding-left:20px;}}@media(max-width:430px){body{padding:10px 8px;}.pdf-box{padding:18px 14px;}.pdf-box h1{font-size:24px;}.pdf-box h2{font-size:20px;}.pdf-box p,.pdf-box li{font-size:14.5px;}}`}</style>

      <div className="pdf-box">
        <h1>✅ Swing Trading Strategies</h1>

        <p>
          Swing trading me trades <b>multiple days se leke weeks</b> tak hold ki jati hain. Ye short-term aur medium-term trend aur price patterns ka use karta hai.
        </p>

        <h2>✅ Basic Concept</h2>

        <ul>
          <li>Objective: Short-to-medium term price swings ka profit lena</li>
          <li>Positions hold for few days to weeks</li>
          <li>Less stressful than intraday, lekin trend aur patience zaruri</li>
        </ul>

        <h2>✅ Key Swing Trading Strategies</h2>

        <h3>1️⃣ Trend Following Swing</h3>

        <ul>
          <li>Identify major uptrend/downtrend</li>
          <li>Buy in uptrend pullbacks, Sell in downtrend rallies</li>
          <li>Tools: EMA, MA, Supertrend, Trendlines</li>
        </ul>

        <h3>2️⃣ Breakout Swing</h3>

        <ul>
          <li>Support/resistance break hone par enter</li>
          <li>Confirmation: High volume aur close above/below level</li>
          <li>Exit: Next major level ya target</li>
        </ul>

        <h3>3️⃣ Reversal Swing</h3>

        <ul>
          <li>Trend exhaustion aur reversal pattern par entry</li>
          <li>Candlestick patterns aur divergence indicators use karo</li>
          <li>Example: Bullish engulfing at support → Buy</li>
        </ul>

        <h3>4️⃣ Fibonacci Retracement Swing</h3>

        <ul>
          <li>Price retracement ke levels par buy/sell entry</li>
          <li>Stop loss slightly beyond retracement level</li>
          <li>Exit: Next swing high/low</li>
        </ul>

        <h3>5️⃣ Volume & Momentum Swing</h3>

        <ul>
          <li>High volume + momentum move identify karo</li>
          <li>Enter in direction of momentum, exit at slowdown</li>
          <li>Tools: RSI, MACD, Volume spikes</li>
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
                <td>Trend Following Swing</td>
                <td>Pullback in uptrend/downtrend</td>
                <td>Trend reversal / Target</td>
                <td>EMA, MA, Trendlines</td>
              </tr>

              <tr>
                <td>Breakout Swing</td>
                <td>Break of support/resistance</td>
                <td>Target / Stop loss</td>
                <td>Volume, Candle Patterns</td>
              </tr>

              <tr>
                <td>Reversal Swing</td>
                <td>Trend exhaustion & reversal pattern</td>
                <td>Next swing high/low</td>
                <td>Candlestick patterns, RSI</td>
              </tr>

              <tr>
                <td>Fibonacci Retracement</td>
                <td>Price retracement level</td>
                <td>Next swing high/low</td>
                <td>Fibonacci, Support/Resistance</td>
              </tr>

              <tr>
                <td>Volume & Momentum</td>
                <td>Volume spike + price momentum</td>
                <td>Momentum slowdown</td>
                <td>RSI, MACD, Volume</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="note">
          ✅ Swing trading requires <b>trend identification aur patience</b>.
          <br />
          <br />
          Stop loss aur risk management mandatory hai.
          <br />
          <br />
          Avoid overleveraging aur impulsive trades.
          <br />
          <br />
          Focus on liquid stocks/indices for smooth exits.
          <br />
          <br />
          Trading journal maintain karo for tracking performance.
        </div>
      </div>
    </>
  );
}

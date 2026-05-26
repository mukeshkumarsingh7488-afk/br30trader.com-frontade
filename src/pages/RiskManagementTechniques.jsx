export default function RiskManagementTechniques() {
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
        <h1>✅ Risk Management Techniques</h1>

        <p>Risk management is one of the most important skills in trading. Proper risk management helps protect trading capital and improves long-term consistency.</p>

        <h2>✅ Basic Concept</h2>

        <ul>
          <li>Risk management means controlling potential losses.</li>
          <li>Following proper risk-reward ratio and position sizing is essential.</li>
          <li>The goal is to keep losses small and maximize profitable trades.</li>
        </ul>

        <h2>✅ Key Risk Management Techniques</h2>

        <h3>1️⃣ Position Sizing</h3>

        <ul>
          <li>Decide how much capital you are willing to risk per trade.</li>
          <li>A common rule is risking only 1% to 2% of total capital per trade.</li>
          <li>Formula: Risk Amount = Total Capital × Risk Percentage</li>
        </ul>

        <h3>2️⃣ Stop Loss</h3>

        <ul>
          <li>Always place a predefined Stop Loss in every trade.</li>
          <li>Stop Loss can be based on support/resistance, swing high/low, ATR, or candle structure.</li>
          <li>Following Stop Loss strictly is mandatory.</li>
        </ul>

        <h3>3️⃣ Risk-Reward Ratio</h3>

        <ul>
          <li>Maintain at least a 1:2 or 1:3 Risk-Reward Ratio.</li>
          <li>Example: Risk ₹500 → Target ₹1000 or ₹1500.</li>
        </ul>

        <h3>4️⃣ Diversification</h3>

        <ul>
          <li>Distribute capital across multiple trades or setups.</li>
          <li>Avoid risking too much capital on a single trade.</li>
        </ul>

        <h3>5️⃣ Avoid Overtrading</h3>

        <ul>
          <li>Avoid emotional or impulsive trades.</li>
          <li>Follow your trading plan and analyze market conditions carefully.</li>
        </ul>

        <h3>6️⃣ Daily / Weekly Loss Limit</h3>

        <ul>
          <li>Set a predefined maximum loss limit.</li>
          <li>Stop trading once the loss limit is reached.</li>
        </ul>

        <h2>✅ Notebook Example Table</h2>

        <div className="table-wrap">
          <table>
            <tbody>
              <tr>
                <th>Technique</th>
                <th>Description</th>
                <th>Example</th>
              </tr>

              <tr>
                <td>Position Sizing</td>
                <td>Decide capital allocation per trade</td>
                <td>1% of ₹1,00,000 → ₹1,000 risk</td>
              </tr>

              <tr>
                <td>Stop Loss</td>
                <td>Define maximum acceptable loss</td>
                <td>ATR / Support / Resistance based</td>
              </tr>

              <tr>
                <td>Risk-Reward Ratio</td>
                <td>Define target relative to risk</td>
                <td>1:2 or 1:3</td>
              </tr>

              <tr>
                <td>Diversification</td>
                <td>Use multiple trades with smaller exposure</td>
                <td>5 trades × 2% capital each</td>
              </tr>

              <tr>
                <td>Avoid Overtrading</td>
                <td>Take only planned setups</td>
                <td>Follow strategy, avoid random entries</td>
              </tr>

              <tr>
                <td>Daily / Weekly Loss Limit</td>
                <td>Set maximum acceptable drawdown</td>
                <td>₹5,000 daily stop</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="note">
          ✅ Risk management is one of the biggest factors behind long-term trading success.
          <br />
          <br />
          Follow discipline and consistency in every trade.
          <br />
          <br />
          Avoid emotional trading and impulsive entries.
          <br />
          <br />
          Maintain a trading journal to track mistakes and improvements.
        </div>
      </div>
    </>
  );
}

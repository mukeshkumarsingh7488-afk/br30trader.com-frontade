export default function OptionsBasicsForBeginners() {
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
.pdf-box table{width:100%;min-width:650px;border-collapse:collapse;}
.pdf-box th,.pdf-box td{border:1px solid #334155;padding:12px;text-align:left;vertical-align:top;}
.pdf-box th{background:#111827;color:#00ff88;}
.pdf-box td{background:#0f172a;color:#d1d5db;}
.pdf-box b,.pdf-box strong{color:#fff;font-weight:800;}
.note{margin-top:26px;padding:18px;background:#111827;border-left:4px solid #00ff88;border-radius:8px;color:#d1d5db;}
@media(max-width:768px){body{padding:16px 10px;}.pdf-box{padding:22px 16px;border-radius:12px;}.pdf-box h1{font-size:26px;}.pdf-box h2{font-size:21px;}.pdf-box h3{font-size:18px;}.pdf-box p,.pdf-box li{font-size:15px;}.pdf-box ul,.pdf-box ol{padding-left:20px;}}
@media(max-width:430px){body{padding:10px 8px;}.pdf-box{padding:18px 14px;}.pdf-box h1{font-size:24px;}.pdf-box h2{font-size:20px;}.pdf-box p,.pdf-box li{font-size:14.5px;}}
      `}</style>

      <div className="pdf-box">
        <h1>✅ Options Basics for Beginners</h1>

        <p>Options are financial derivatives that give you the right, but not the obligation, to buy or sell an asset such as stocks, indices, or commodities at a fixed price in the future.</p>

        <h2>✅ Options Have Two Main Types</h2>

        <h3>1️⃣ Call Option</h3>
        <ul>
          <li>Gives the buyer the right to buy an asset at a fixed price called the strike price in the future.</li>
          <li>If the price goes up, the profit potential can increase.</li>
          <li>Example: Strike Price: ₹500, Premium: ₹20, Current Price: ₹510 → Call option becomes profitable.</li>
        </ul>

        <h3>2️⃣ Put Option</h3>
        <ul>
          <li>Gives the buyer the right to sell an asset at a fixed price in the future.</li>
          <li>If the price goes down, the profit potential can increase.</li>
          <li>Example: Strike Price: ₹500, Premium: ₹15, Current Price: ₹490 → Put option becomes profitable.</li>
        </ul>

        <h2>✅ Key Terminology</h2>

        <div className="table-wrap">
          <table>
            <tbody>
              <tr>
                <th>Term</th>
                <th>Meaning</th>
              </tr>

              <tr>
                <td>Strike Price</td>
                <td>The price at which the asset can be bought or sold.</td>
              </tr>

              <tr>
                <td>Premium</td>
                <td>The price paid to buy the option contract.</td>
              </tr>

              <tr>
                <td>Expiry Date</td>
                <td>The last date until which the option remains valid.</td>
              </tr>

              <tr>
                <td>Intrinsic Value</td>
                <td>The real value of the option if it is exercised immediately.</td>
              </tr>

              <tr>
                <td>Time Value</td>
                <td>The part of the premium that depends on time remaining and market volatility.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>✅ Step-by-Step Understanding</h2>

        <ol>
          <li>Select the market and choose the underlying asset.</li>
          <li>Decide whether to use a Call or Put option based on your price direction expectation.</li>
          <li>Select the strike price and expiry date.</li>
          <li>Pay the premium and buy the option.</li>
          <li>Monitor price movement and decide when to sell or exercise the option.</li>
        </ol>

        <div className="note">
          ✅ Options are high-risk, high-reward instruments.
          <br />
          <br />
          Do not focus only on premium. Always check intrinsic value and market trend.
          <br />
          <br />
          Understand time decay, also called Theta. As expiry gets closer, premium can reduce quickly.
          <br />
          <br />
          Beginners should start with small positions and practice through paper trading.
          <br />
          <br />
          Learn the basics of Greeks like Delta, Gamma, Vega, and Theta to manage risk properly.
        </div>
      </div>
    </>
  );
}

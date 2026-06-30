import { useEffect } from "react";
import { Link } from "react-router-dom";
import BackHomeButton from "../components/BackHomeButton";

export default function Br30RefundPolocy() {
  useEffect(() => {
    document.title = "Refund Policy | BR30 Trader – Official Refund & Cancellation Policy";

    const setMeta = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`);

      if (!meta) {
        meta = document.createElement("meta");
        meta.name = name;
        document.head.appendChild(meta);
      }

      meta.content = content;
    };

    setMeta("description", "Read the official BR30 Trader refund policy for trading courses, mentorship programs, and digital services.");

    setMeta("keywords", "refund policy, BR30 Trader refund, course cancellation, trading mentorship refund");

    setMeta("robots", "index, follow");
  }, []);

  const styles = `
    .refund-page{
      background:#050505;
      color:#fff;
      display:flex;
      justify-content:center;
      padding:40px 20px;
      min-height:100vh;
      font-family:"Poppins",sans-serif;
    }

    .policy-container{
      max-width:900px;
      width:100%;
      background:#1e293b;
      border:1px solid #334155;
      border-radius:20px;
      padding:40px;
      box-shadow:0 15px 40px rgba(0,0,0,0.6);
      animation:fadeIn 0.6s ease;
    }

    @keyframes fadeIn{
      from{
        opacity:0;
        transform:translateY(20px);
      }

      to{
        opacity:1;
        transform:translateY(0);
      }
    }

    .policy-title h1{
      color:#a020f0;
      font-size:30px;
      margin-bottom:10px;
      text-align:center;
    }

    .policy-title .meta{
      color:#aaa;
      font-size:13px;
      text-align:center;
      margin-bottom:25px;
    }

    .policy-body p{
      color:#cbd5e1;
      font-size:16px;
      line-height:1.8;
      margin-bottom:15px;
      text-align:left;
    }

    .policy-body h3{
      color:#ffffff;
      font-size:18px;
      margin-top:25px;
      margin-bottom:10px;
      font-weight:600;
      border-left:4px solid #a020f0;
      padding-left:10px;
    }

    .policy-body ul{
      margin-left:20px;
      margin-bottom:15px;
      color:#cbd5e1;
    }

    .policy-body ul li{
      margin-bottom:8px;
      line-height:1.6;
    }

    .policy-body hr{
      margin:30px 0 15px;
      opacity:0.3;
    }

    .btn{
      display:inline-block;
      margin-top:25px;
      padding:12px 30px;
      background:#a020f0;
      color:white;
      text-decoration:none;
      border-radius:10px;
      font-weight:600;
      transition:0.3s ease;
      border:1px solid #a020f0;
    }

    .btn:hover{
      background:transparent;
      color:#a020f0;
      transform:translateY(-3px);
      box-shadow:0 10px 25px rgba(160,32,240,0.3);
    }

    @media (max-width:600px){

      .policy-container{
        padding:25px 18px;
      }

      .policy-title h1{
        font-size:24px;
      }

      .policy-body p{
        font-size:14px;
      }

      .policy-body h3{
        font-size:16px;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>

      <main className="refund-page">
        <div className="policy-container">
          <div className="policy-title">
            <h1>Refund Policy</h1>

            <p className="meta">Last Updated: 30/04/2026 | Effective From: 15/03/2026</p>
          </div>

          <div className="policy-body">
            <p>Thank you for choosing BR30 Trader. We value transparency and customer satisfaction. Please read our refund policy carefully before purchasing any course, mentorship, or digital product.</p>

            <h3>1. Digital Product Policy</h3>

            <p>All courses, mentorship programs, PDFs, and digital products sold on BR30 Trader are delivered digitally.</p>

            <p>Due to the nature of digital content, all sales are generally considered final once access is granted.</p>

            <h3>2. Refund Eligibility</h3>

            <p>Refunds may only be considered under the following conditions:</p>

            <ul>
              <li>Duplicate payment made accidentally</li>
              <li>Technical issue preventing course access</li>
              <li>Payment deducted but service not delivered</li>
            </ul>

            <h3>3. Non-Refundable Situations</h3>

            <ul>
              <li>Change of mind after purchase</li>
              <li>Lack of trading results or profits</li>
              <li>Failure to understand course content</li>
              <li>Partial course completion</li>
              <li>Ignoring mentorship guidance</li>
            </ul>

            <h3>4. Refund Request Process</h3>

            <p>To request a refund, contact our support team with your payment details and issue description.</p>

            <p>
              Email: <b>support.br30trader@gmail.com</b>
            </p>

            <h3>5. Refund Processing Time</h3>

            <p>Approved refunds are usually processed within 5–10 business days depending on your payment provider or bank.</p>

            <h3>6. Account Misuse</h3>

            <p>Refund requests made after content downloading, account sharing, or policy violations may be rejected immediately.</p>

            <h3>7. Course Access Cancellation</h3>

            <p>We reserve the right to suspend or terminate access in cases of piracy, abuse, or violation of platform policies without refund.</p>

            <h3>8. Policy Updates</h3>

            <p>BR30 Trader may update this Refund Policy anytime without prior notice. Continued use of services means acceptance of updated policies.</p>

            <hr />

            <p>Funded & Built by Mukesh Raj | BR30 Trader</p>

            <BackHomeButton className="back-home-btn">← Back to Home</BackHomeButton>
          </div>
        </div>
      </main>
    </>
  );
}

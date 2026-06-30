import { useEffect } from "react";
import { Link } from "react-router-dom";
import BackHomeButton from "../components/BackHomeButton";

export default function Br30TermsCondition() {
  useEffect(() => {
    document.title = "BR30 Trader Terms & Conditions – User Agreement & Legal Policies (Official)";

    const setMeta = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    setMeta("description", "Read the terms and conditions of BR30 Trader. Understand user responsibilities, course access rules, and platform policies.");
    setMeta("keywords", "terms and conditions, BR30 Trader terms, user agreement, trading course terms");
    setMeta("robots", "index, follow");
  }, []);

  const styles = `
    .terms-page {
      background: #050505;
      color: #fff;
      display: flex;
      justify-content: center;
      padding: 40px 20px;
      min-height: 100vh;
      font-family: "Poppins", sans-serif;
    }

    .policy-container {
      max-width: 950px;
      width: 100%;
      background: #1e293b;
      border: 1px solid #334155;
      border-radius: 22px;
      padding: 45px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.7);
      animation: fadeUp 0.6s ease-in-out;
    }

    @keyframes fadeUp {
      from {
        opacity: 0;
        transform: translateY(25px);
      }

      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .policy-title h1 {
      font-size: 32px;
      color: #a020f0;
      text-align: center;
      margin-bottom: 10px;
      letter-spacing: 0.5px;
    }

    .policy-title .meta {
      text-align: center;
      color: #9ca3af;
      font-size: 13px;
      margin-bottom: 30px;
    }

    .policy-body p {
      font-size: 16px;
      color: #cbd5e1;
      line-height: 1.9;
      margin-bottom: 15px;
      text-align: left;
    }

    .policy-body h3 {
      font-size: 18px;
      color: #ffffff;
      margin-top: 30px;
      margin-bottom: 12px;
      font-weight: 600;
      border-left: 4px solid #a020f0;
      padding-left: 12px;
    }

    .policy-body ul {
      margin-left: 22px;
      margin-bottom: 15px;
    }

    .policy-body ul li {
      font-size: 15px;
      color: #cbd5e1;
      margin-bottom: 8px;
      line-height: 1.6;
    }

    .policy-body b {
      color: #a020f0;
      font-weight: 600;
    }

    .policy-body hr {
      margin: 30px 0 15px;
      opacity: 0.3;
    }

    .btn {
      display: inline-block;
      margin-top: 30px;
      padding: 13px 32px;
      background: #a020f0;
      color: #fff;
      text-decoration: none;
      border-radius: 12px;
      font-weight: 600;
      transition: 0.3s ease;
      border: 1px solid #a020f0;
    }

    .btn:hover {
      background: transparent;
      color: #a020f0;
      transform: translateY(-3px);
      box-shadow: 0 12px 30px rgba(160, 32, 240, 0.35);
    }

    @media (max-width: 768px) {
      .policy-container {
        padding: 30px 20px;
      }

      .policy-title h1 {
        font-size: 24px;
      }

      .policy-body p {
        font-size: 14px;
      }

      .policy-body h3 {
        font-size: 16px;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>

      <main className="terms-page">
        <div className="policy-container">
          <div className="policy-title">
            <h1>Terms of Service</h1>
            <p className="meta">Last Updated: 30/04/2026 | Effective From: 15/03/2026</p>
          </div>

          <div className="policy-body">
            <p>Welcome to BR30 Trader. These Terms of Service govern your use of our website, courses, digital content, and services.</p>

            <p>By accessing this website or purchasing any service, you agree to be legally bound by these Terms along with our Privacy Policy and Refund Policy.</p>

            <h3>1. Nature of Services</h3>
            <p>BR30 Trader provides educational trading content including courses, market analysis, and mentorship programs.</p>
            <p>All content is strictly for educational purposes only. We do not provide financial, investment, or guaranteed profit advice.</p>

            <h3>2. Eligibility</h3>
            <p>You must be at least 18 years old to use our services. By using this platform, you confirm that you meet this requirement.</p>

            <h3>3. Account & Information Accuracy</h3>
            <p>You agree to provide accurate and complete information while registering or purchasing. Any incorrect information may result in restricted access.</p>

            <h3>4. Payments & Orders</h3>
            <p>All payments must be completed in advance using approved payment methods. Once payment is successful:</p>
            <ul>
              <li>Order is confirmed</li>
              <li>Access is granted or processed</li>
              <li>Transaction is considered final</li>
            </ul>
            <p>All purchases are subject to our Refund Policy.</p>

            <h3>5. Digital Delivery</h3>
            <p>Courses and digital services are delivered electronically. Access is usually provided instantly or within a short processing time.</p>

            <h3>6. No Guaranteed Results</h3>
            <p>Trading involves risk. We do not guarantee profits or financial success. All decisions made by users are their own responsibility.</p>

            <h3>7. User Responsibilities</h3>
            <ul>
              <li>Use services for personal learning only</li>
              <li>Do not share, resell, or redistribute content</li>
              <li>Do not misuse platform or attempt hacking</li>
              <li>Respect intellectual property rights</li>
            </ul>

            <h3>8. Intellectual Property</h3>
            <p>All content including videos, PDFs, designs, branding, and materials belong to BR30 Trader. Unauthorized use or reproduction is strictly prohibited.</p>

            <h3>9. Service Availability</h3>
            <p>We aim for continuous service availability but do not guarantee uninterrupted access due to maintenance or technical issues.</p>

            <h3>10. Limitation of Liability</h3>
            <p>BR30 Trader is not responsible for any financial loss, trading loss, or indirect damages resulting from the use of our services.</p>
            <p>Liability, if any, is limited to the amount paid for the specific service.</p>

            <h3>11. Third-Party Services</h3>
            <p>We may use third-party tools like payment gateways and analytics services. We are not responsible for their performance or policies.</p>

            <h3>12. Termination</h3>
            <p>We reserve the right to suspend or terminate access if any violation of terms is detected.</p>

            <h3>13. Changes to Terms</h3>
            <p>These Terms may be updated at any time. Continued use of the platform means acceptance of updated terms.</p>

            <h3>14. Governing Law</h3>
            <p>These Terms are governed by the laws of India. Any disputes will be handled under Indian jurisdiction.</p>

            <h3>15. Contact Information</h3>
            <p>
              Email: <b>support.br30trader@gmail.com</b>
              <br />
              Phone: <b>+91 6200986380</b>
            </p>

            <hr />

            <p>Funded & Built by Mukesh Raj | BR30 Trader</p>

            <BackHomeButton className="back-home-btn">← Back to Home</BackHomeButton>
          </div>
        </div>
      </main>
    </>
  );
}

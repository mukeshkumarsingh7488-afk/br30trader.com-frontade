import { useEffect } from "react";
import { Link } from "react-router-dom";
import BackHomeButton from "../components/BackHomeButton";

export default function Br30UserPrivacy() {
  useEffect(() => {
    document.title = "Privacy Policy | BR30 Trader – Data Security, Protection & Transparency (Official)";

    const setMeta = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    setMeta("description", "Learn about our privacy practices and how we protect your personal information.");
    setMeta("keywords", "trading, br30 Trader, price action, options trading india");
    setMeta("robots", "index, follow, max-image-preview:large");
  }, []);

  const styles = `
.privacy-page{background:#050505;color:#fff;display:flex;justify-content:center;align-items:flex-start;padding:0 20px 40px;margin-top:0;min-height:100vh;font-family:"Poppins",sans-serif;}

    .policy-container {
      max-width: 900px !important;
      width: 100% !important;
      background: #1e293b !important;
      border: 1px solid #334155 !important;
      border-radius: 20px !important;
      padding: 40px;
      box-shadow: 0 15px 45px rgba(0, 0, 0, 0.6);
      animation: fadeIn 0.6s ease-in-out;
    }

    @keyframes fadeIn {
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
      color: #a020f0;
      font-size: 30px;
      text-align: center;
      margin-bottom: 10px;
    }

    .policy-title .meta {
      text-align: center;
      color: #aaa;
      font-size: 13px;
      margin-bottom: 25px;
    }

    .policy-body p {
      color: #cbd5e1;
      font-size: 16px;
      line-height: 1.8;
      margin-bottom: 15px;
      text-align: left;
    }

    .policy-body h3 {
      color: #ffffff;
      font-size: 18px;
      margin-top: 25px;
      margin-bottom: 10px;
      font-weight: 600;
      border-left: 4px solid #a020f0;
      padding-left: 10px;
    }

    .policy-body ul {
      margin-left: 20px;
      margin-bottom: 15px;
    }

    .policy-body ul li {
      color: #cbd5e1;
      font-size: 15px;
      margin-bottom: 8px;
      line-height: 1.6;
    }

    .policy-body hr {
      margin: 30px 0 15px;
      opacity: 0.3;
    }

    .btn {
      display: inline-block;
      margin-top: 25px;
      padding: 12px 30px;
      background: #a020f0;
      color: white;
      text-decoration: none;
      border-radius: 10px;
      font-weight: 600;
      transition: 0.3s ease;
      border: 1px solid #a020f0;
    }

    .btn:hover {
      background: transparent;
      color: #a020f0;
      transform: translateY(-3px);
      box-shadow: 0 10px 25px rgba(160, 32, 240, 0.3);
    }

    @media (max-width: 600px) {
      .policy-container {
        padding: 25px 18px;
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

      <main className="privacy-page">
        <div className="policy-container">
          <div className="policy-title">
            <h1>Privacy Policy</h1>
            <p className="meta">Last Updated: 30/04/2026 | Effective From: 15/03/2026</p>
          </div>

          <div className="policy-body">
            <p>BR30 Trader respects your privacy and is committed to protecting your personal data with transparency, security, and responsibility.</p>

            <p>This Privacy Policy explains how we collect, use, store, and protect your information when you use our website, courses, and services.</p>

            <h3>1. Information We Collect</h3>
            <p>We collect only necessary information to provide our services effectively.</p>

            <p>
              <b>Personal Information:</b>
            </p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Billing details</li>
              <li>Account login details</li>
            </ul>

            <p>
              <b>Service Information:</b>
            </p>
            <ul>
              <li>Course purchase history</li>
              <li>Trading course activity</li>
              <li>Support communication</li>
            </ul>

            <p>
              <b>Technical Data:</b>
            </p>
            <ul>
              <li>IP address</li>
              <li>Device type</li>
              <li>Browser information</li>
              <li>Cookies and analytics data</li>
            </ul>

            <h3>2. How We Use Your Information</h3>
            <ul>
              <li>To provide access to trading courses and services</li>
              <li>To process payments securely</li>
              <li>To improve platform performance</li>
              <li>To provide customer support</li>
              <li>To comply with legal obligations</li>
            </ul>

            <p>We do NOT sell, rent, or trade your personal data to any third party.</p>

            <h3>3. Cookies & Tracking</h3>
            <p>We use cookies and third-party tools like analytics and advertising platforms to improve user experience.</p>
            <p>You may accept, reject, or manage cookies anytime via browser settings or consent tools.</p>

            <h3>4. Data Sharing</h3>
            <p>We share limited data only when necessary with:</p>
            <ul>
              <li>Payment gateways such as Razorpay, Paytm Payment, Stripe etc.</li>
              <li>Hosting providers</li>
              <li>Customer support systems</li>
              <li>Legal authorities if required by law</li>
            </ul>

            <h3>5. Data Security</h3>
            <p>We use industry-standard security measures to protect your data. However, no system is 100% secure over the internet.</p>

            <h3>6. Data Retention</h3>
            <ul>
              <li>Transaction data: As per legal requirement</li>
              <li>Account data: Until account remains active</li>
              <li>Support records: Up to 3–5 years</li>
            </ul>

            <h3>7. Your Rights</h3>
            <ul>
              <li>Access your personal data</li>
              <li>Request correction or deletion</li>
              <li>Withdraw consent anytime</li>
            </ul>

            <p>
              To exercise rights, contact: <b>support.br30trader@gmail.com</b>
            </p>

            <h3>8. Data Breach Policy</h3>
            <p>In case of any data breach, we will take immediate action and notify affected users as required by law.</p>

            <h3>9. Children Policy</h3>
            <p>Our services are not intended for individuals under 18 years of age.</p>

            <h3>10. Changes to Policy</h3>
            <p>We may update this Privacy Policy anytime. Updated version will be published on this page.</p>

            <hr />

            <p>Funded & Built by Mukesh Raj | BR30 Trader</p>

            <BackHomeButton>← Back to Home</BackHomeButton>
          </div>
        </div>
      </main>
    </>
  );
}

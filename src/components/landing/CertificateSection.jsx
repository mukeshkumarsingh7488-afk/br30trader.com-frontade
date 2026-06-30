import React from "react";
import { Link } from "react-router-dom";
import certificatePreview from "../../assets/BR30-B4BA65.png";

export default function CertificateSection() {
  return (
    <>
      <section className="certificate-section">
        <div className="br30-trader-container certificate-grid">
          <div className="certificate-left">
            <span className="certificate-badge">COURSE CERTIFICATION</span>

            <h2>
              Complete the course.
              <br />
              Earn your certificate.
            </h2>

            <p>Every student who successfully completes a BR30 Trader course becomes eligible for a course completion certificate. The certificate can also be verified online through our Certificate Verification System.</p>

            <div className="certificate-points">
              <div>
                <strong>✔ Complete Video Lessons</strong>
                <span>Watch the complete course content.</span>
              </div>
              <div>
                <strong>✔ Receive Digital Certificate</strong>
                <span>Issued after successful course completion.</span>
              </div>
              <div>
                <strong>✔ Online Verification</strong>
                <span>Anyone can verify certificate authenticity.</span>
              </div>
            </div>

            <div className="certificate-buttons">
              <Link to="/dashboard/verify" className="certificate-primary">
                Verify Certificate
              </Link>
              <Link to="/dashboard/register" className="certificate-secondary">
                Join BR30 Trader
              </Link>
            </div>
          </div>

          <div className="certificate-right">
            <div className="certificate-frame">
              <img src={certificatePreview} alt="BR30 Trader Certificate" loading="lazy" />
            </div>

            <div className="certificate-info">
              <div>
                <span>Certificate ID</span>
                <strong>BR30-B4BA65</strong>
              </div>
              <div>
                <span>Status</span>
                <strong>Verified ✓</strong>
              </div>
              <div>
                <span>Issued By</span>
                <strong>BR30 Trader</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
.certificate-section{padding:110px 0;position:relative;}
.certificate-grid{display:grid;grid-template-columns:1fr 520px;gap:70px;align-items:center;}
.certificate-badge{display:inline-flex;padding:10px 18px;border-radius:999px;background:rgba(248,201,108,.1);border:1px solid rgba(248,201,108,.25);color:#f8c96c;font-size:13px;font-weight:900;letter-spacing:1px;}
.certificate-left h2{margin:24px 0 18px;color:#fff;font-size:58px;line-height:1.04;font-weight:950;letter-spacing:-2px;}
.certificate-left p{margin:0;color:#b8acd0;font-size:18px;line-height:1.85;}
.certificate-points{display:grid;gap:16px;margin-top:36px;}
.certificate-points div{padding:18px 22px;border-radius:22px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);}
.certificate-points strong{display:block;color:#fff;font-size:17px;}
.certificate-points span{display:block;margin-top:7px;color:#b8acd0;font-size:14px;}
.certificate-buttons{display:flex;gap:15px;flex-wrap:wrap;margin-top:34px;}
.certificate-primary,.certificate-secondary{min-height:56px;padding:0 28px;border-radius:999px;display:inline-flex;align-items:center;justify-content:center;text-decoration:none;font-size:15px;font-weight:900;transition:.3s;}
.certificate-primary{background:linear-gradient(135deg,#f8c96c,#b847ff);color:#17041d;box-shadow:0 18px 45px rgba(168,51,255,.28);}
.certificate-secondary{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);color:#fff;}
.certificate-primary:hover,.certificate-secondary:hover{transform:translateY(-3px);}
.certificate-right{display:flex;flex-direction:column;gap:18px;align-self:center;}
.certificate-frame{width:100%;padding:9px;border-radius:24px;background:linear-gradient(135deg,#f8c96c,#b847ff);box-shadow:0 35px 90px rgba(0,0,0,.42),0 0 70px rgba(168,51,255,.16);}
.certificate-frame img{display:block;width:100%;height:auto;border-radius:16px;background:#fff;}
.certificate-info{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;padding:14px;border-radius:22px;background:linear-gradient(180deg,rgba(255,255,255,.07),rgba(255,255,255,.03));border:1px solid rgba(255,255,255,.1);}
.certificate-info div{padding:14px 12px;border-radius:16px;background:rgba(0,0,0,.22);border:1px solid rgba(255,255,255,.07);}
.certificate-info span{display:block;color:#8d82a7;font-size:11px;font-weight:850;text-transform:uppercase;letter-spacing:.8px;}
.certificate-info strong{display:block;margin-top:7px;color:#fff;font-size:13px;font-weight:950;line-height:1.25;}
@media(max-width:980px){.certificate-grid{grid-template-columns:1fr;}.certificate-left h2{font-size:44px;}.certificate-right{max-width:520px;margin:0 auto;width:100%;}}
@media(max-width:560px){.certificate-section{padding:70px 0;}.certificate-left h2{font-size:34px;}.certificate-grid{gap:44px;}.certificate-frame{padding:7px;border-radius:20px;}.certificate-frame img{border-radius:13px;}.certificate-info{grid-template-columns:1fr;}}
      `}</style>
    </>
  );
}

import { useEffect, useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";
import logoDarkGreen from "../assets/logo-dark-Green.png";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://my-backend-1-avpd.onrender.com";

export default function CertificateVerify() {
  const qrRef = useRef(null);
  const scannerRunningRef = useRef(false);

  const [certId, setCertId] = useState("");
  const [result, setResult] = useState(null);
  const [scannerRunning, setScannerRunning] = useState(false);

  useEffect(() => {
    document.title = "BR30 Trader Certificate Verification (Official) | Check Trading Course Certificate";

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    if (id) {
      setCertId(id);
      verifyCert(id);
    }

    return () => {
      stopScanner();
    };
  }, []);

  const startScanner = async () => {
    try {
      if (scannerRunningRef.current) return;

      const reader = document.getElementById("reader");
      if (reader) reader.style.display = "block";

      const html5QrCode = new Html5Qrcode("reader");
      qrRef.current = html5QrCode;

      await html5QrCode.start({ facingMode: "environment" }, { fps: 10, qrbox: { width: 250, height: 250 } }, async (decodedText) => {
        let id = decodedText;

        if (decodedText.includes("id=")) {
          id = decodedText.split("id=")[1];
        }

        setCertId(id);
        verifyCert(id);
        await stopScanner();
      });

      scannerRunningRef.current = true;
      setScannerRunning(true);
    } catch (err) {
      console.error("Camera Error:", err);
      alert("Camera permission allow karo bhai 📷");
    }
  };

  const stopScanner = async () => {
    try {
      if (qrRef.current && scannerRunningRef.current) {
        await qrRef.current.stop();
        await qrRef.current.clear();
      }
    } catch (err) {
      console.log("Scanner stop skipped");
    } finally {
      scannerRunningRef.current = false;
      setScannerRunning(false);

      const reader = document.getElementById("reader");
      if (reader) reader.style.display = "none";

      qrRef.current = null;
    }
  };

  const verifyCert = async (customId) => {
    const finalId = (customId || certId).trim();

    if (!finalId) {
      alert("Bhai, ID toh dalo!");
      return;
    }

    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/verify-certificate/${finalId}`);
      const data = await res.json();

      if (data.success) {
        const dateObj = new Date(data.issueDate);
        const formattedDate = isNaN(dateObj) ? new Date().toLocaleDateString("en-IN") : dateObj.toLocaleDateString("en-IN");

        setResult({
          certId: finalId,
          studentName: data.studentName,
          course: data.course,
          issueDate: formattedDate,
          downloadUrl: data.downloadUrl,
        });

        setTimeout(() => {
          document.querySelector(".result-box")?.scrollIntoView({ behavior: "smooth" });
        }, 200);
      } else {
        alert("❌ Invalid Certificate ID!");
        setResult(null);
      }
    } catch (err) {
      alert("Bhai, server connection fail!");
    }
  };

  const downloadCertificate = async () => {
    if (!result?.downloadUrl) return;

    try {
      const response = await fetch(result.downloadUrl);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = `BR30_Certificate_${result.certId}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      window.URL.revokeObjectURL(blobUrl);
    } catch (err) {
      window.open(result.downloadUrl, "_blank");
    }
  };

  const styles = `.certificate-page{background:#050505;color:#ffffff;font-family:"Poppins",sans-serif;margin:0;padding:20px;text-align:center;min-height:100vh}.verify-card{max-width:500px;margin:40px auto;background:#111;padding:30px;border-radius:25px;border:2px solid #00ff88;box-shadow:0 0 30px rgba(0,255,136,.1)}.verify-logo{display:block;width:95px;height:95px;object-fit:cover;margin:0 auto 18px;border-radius:22px;background:#050505;padding:6px;box-shadow:0 0 20px rgba(0,255,136,.35);}.built-text{color:#94a3b8;font-size:12px;margin-bottom:5px}.verify-card h2{color:#00ff88;text-transform:uppercase;letter-spacing:2px}.verify-subtitle{color:#94a3b8;font-size:13px;margin-bottom:15px}.cert-input{width:100%;padding:15px;border-radius:12px;border:1px solid #333;background:#000;color:#00ff88;margin-bottom:15px;font-weight:bold;text-align:center;outline:none;box-sizing:border-box}.verify-btn{width:100%;padding:15px;background:#00ff88;color:#000;font-weight:900;border:none;border-radius:12px;cursor:pointer;text-transform:uppercase;transition:.3s}.verify-btn:hover{box-shadow:0 0 20px rgba(0,255,136,.4);transform:scale(1.02)}.scan-divider{margin:25px 0;color:#333;font-weight:bold}.scanner-status{font-size:12px;color:#94a3b8;margin-bottom:10px}.scanner-btn{width:100%;padding:14px;background:#111827;color:#00ff88;border:1px solid #00ff88;border-radius:12px;font-weight:800;cursor:pointer;transition:.3s;margin-bottom:15px}.scanner-btn:hover{background:#00ff88;color:#000}.scanner-stop-btn{width:100%;padding:12px;background:#ff4d4d;color:#fff;border:none;border-radius:10px;font-weight:800;cursor:pointer;margin-top:0;margin-bottom:15px}.scanner-stop-btn:hover{background:#ff2222}#reader{width:100%;border-radius:15px;overflow:hidden;margin-top:10px;border:1px dashed #00ff88;display:none}.result-box{margin-top:25px;padding:20px;border-radius:15px;border-left:5px solid #00ff88;background:rgba(0,255,136,.05);text-align:left;animation:fadeIn .5s ease}.status-tag{background:#00ff88;color:#000;padding:5px 10px;border-radius:5px;font-weight:900;font-size:12px}.res-name{margin:15px 0 5px 0;color:#00ff88}.res-course{margin:0;color:#cbd5e1;font-size:14px}.res-date{margin-top:10px;color:#94a3b8;font-size:12px}.download-btn{width:100%;padding:12px;margin-top:20px;background:#d4af37;color:#000;border:none;border-radius:10px;font-weight:900;cursor:pointer;text-transform:uppercase;letter-spacing:1px;transition:.3s}.download-btn:hover{box-shadow:0 0 15px rgba(212,175,55,.5);transform:scale(1.02)}@keyframes fadeIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}@media(max-width:480px){.certificate-page{padding:15px}.verify-card{padding:22px 18px;margin:25px auto}.verify-card h2{font-size:24px}.cert-input,.verify-btn,.scanner-btn{padding:13px}}`;

  return (
    <>
      <style>{styles}</style>

      <main className="certificate-page">
        <div className="verify-card">
          <img src={logoDarkGreen} alt="BR30" className="verify-logo" />

          <p className="built-text">Funded & Built by Mukesh Raj | BR30 Trader</p>

          <h2>🛡️ BR30 Verification</h2>

          <p className="verify-subtitle">Official MSME Registered Academy Verification System</p>

          <input
            type="text"
            className="cert-input"
            placeholder="ENTER CERTIFICATE NO BR30-123456"
            value={certId}
            onChange={(e) => setCertId(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") verifyCert();
            }}
          />

          <button className="verify-btn" onClick={() => verifyCert()}>
            VERIFY CERTIFICATE ✅
          </button>

          <div className="scan-divider">-- OR SCAN QR CODE --</div>

          <div className="scanner-status">{scannerRunning ? "🟢 Scanner Running" : "🔴 Scanner Stopped"}</div>

          <button className="scanner-btn" onClick={startScanner}>
            START QR SCANNER 📷
          </button>

          {scannerRunning && (
            <button className="scanner-stop-btn" onClick={stopScanner}>
              STOP SCANNER ❌
            </button>
          )}

          <div id="reader"></div>

          {result && (
            <div className="result-box">
              <span className="status-tag">OFFICIALLY VERIFIED✅</span>

              <h3 className="res-name">{result.studentName?.toUpperCase()}</h3>

              <p className="res-course">{result.course}</p>

              <p className="res-date">Issued on: {result.issueDate}</p>

              <button className="download-btn" onClick={downloadCertificate}>
                DOWNLOAD CERTIFICATE 📥
              </button>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

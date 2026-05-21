import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://my-backend-1-avpd.onrender.com";

export default function BellViewAlert() {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loginRequired, setLoginRequired] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    document.title = "Live Market Alerts | BR30 Trader";
    fetchAllAlerts();
  }, []);

  const fetchAllAlerts = async () => {
    const token = localStorage.getItem("token");

    try {
      setLoading(true);

      const response = await fetch(`${API_BASE_URL}/api/notifications/all`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
      });

      if (response.status === 401) {
        setLoginRequired(true);
        setLoading(false);
        return;
      }

      const data = await response.json();

      if (!Array.isArray(data)) {
        setAlerts([]);
        return;
      }

      setAlerts(data);
    } catch (err) {
      console.error("Error:", err);
      setError("Server connect nahi ho pa raha!");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (date) => {
    const d = new Date(date);

    if (isNaN(d)) {
      return {
        day: "Invalid Date",
        time: "",
      };
    }

    return {
      day: d.toLocaleDateString(),
      time: d.toLocaleTimeString(),
    };
  };

  const styles = `
    .bell-alert-page {
      font-family: "Segoe UI", sans-serif;
      background: #0f0f1b;
      color: white;
      padding: 20px;
      min-height: 100vh;
    }

    .alert-container {
      max-width: 800px;
      margin: auto;
      background: #1a1a2e;
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    }

    .alert-title {
      border-bottom: 2px solid #6c5ce7;
      padding-bottom: 10px;
      color: #a29bfe;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 15px;
      font-size: 24px;
      margin: 0;
    }

    .all-notif-list {
      margin-top: 20px;
      max-height: 70vh;
      overflow-y: auto;
      padding-right: 10px;
    }

    .notif-card {
      background: #252545;
      padding: 15px;
      border-radius: 8px;
      margin-bottom: 15px;
      border-left: 5px solid #6c5ce7;
      transition: 0.3s;
      border-bottom: 1px solid #444;
    }

    .notif-card:hover {
      transform: translateX(5px);
      background: #2d2d5a;
    }

    .notif-card p {
      margin: 0;
      font-size: 16px;
      line-height: 1.5;
    }

    .notif-card b {
      color: #f1c40f;
    }

    .notif-card small {
      color: #bbb;
      display: block;
      margin-top: 8px;
      font-size: 12px;
    }

    .all-notif-list::-webkit-scrollbar {
      width: 6px;
    }

    .all-notif-list::-webkit-scrollbar-thumb {
      background: #6c5ce7;
      border-radius: 10px;
    }

    .back-btn {
      color: #fff;
      text-decoration: none;
      font-size: 14px;
      background: #4834d4;
      padding: 8px 15px;
      border-radius: 5px;
      white-space: nowrap;
    }

    .muted-text {
      text-align: center;
      color: gray;
    }

    .login-text {
      color: orange;
      text-align: center;
    }

    .error-text {
      color: red;
      text-align: center;
    }

    @media (max-width: 600px) {
      .alert-title {
        font-size: 18px;
        flex-direction: column;
        align-items: flex-start;
      }

      .back-btn {
        align-self: flex-end;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>

      <main className="bell-alert-page">
        <div className="alert-container">
          <h2 className="alert-title">
            <span>Live Market Alerts ⚡</span>
            <Link to="/" className="back-btn">
              ← Home
            </Link>
          </h2>

          <div className="all-notif-list">
            {loading ? (
              <p className="muted-text">Alerts load ho rahe hain...</p>
            ) : loginRequired ? (
              <p className="login-text">Plese login Frist!</p>
            ) : error ? (
              <p className="error-text">{error}</p>
            ) : alerts.length === 0 ? (
              <p className="muted-text">Koi alert record nahi mila.</p>
            ) : (
              alerts.map((data, index) => {
                const name = data.senderName || "Admin Mukesh Raj Raj";
                const date = formatDate(data.date);

                return (
                  <div className="notif-card" key={data._id || index}>
                    <p>
                      🚀 <b>{name}:</b> {data.message}
                    </p>
                    <small>
                      📅 {date.day} | ⏰ {date.time}
                    </small>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </main>
    </>
  );
}

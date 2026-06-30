import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import logoDarkGreen from "../assets/logo-dark-Green.png";

export default function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const [activeMenu, setActiveMenu] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [notifications, setNotifications] = useState([]);

  const accountRef = useRef(null);
  const notifRef = useRef(null);

  const storedUser = JSON.parse(localStorage.getItem("br30_user") || localStorage.getItem("userData") || "null");
  const userRole = localStorage.getItem("role") || storedUser?.role || "";
  const userFirstName = user?.name?.split(" ")[0] || storedUser?.name?.split(" ")[0] || null;

  const [marketTimes, setMarketTimes] = useState({
    india: { time: "--:--:--", status: "CLOSED", isOpen: false },
    tokyo: { time: "--:--:--", status: "CLOSED", isOpen: false },
    london: { time: "--:--:--", status: "CLOSED", isOpen: false },
    ny: { time: "--:--:--", status: "CLOSED", isOpen: false },
  });

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        if (!userFirstName) {
          setNotifications([]);
          return;
        }

        const token = localStorage.getItem("br30_token") || localStorage.getItem("token");
        const API_BASE_URL = window.API_BASE_URL || import.meta.env.VITE_API_BASE_URL || "https://my-backend-1-avpd.onrender.com";

        const res = await fetch(`${API_BASE_URL}/api/notifications/all`, {
          method: "GET",
          headers: { "Content-Type": "application/json", "x-auth-token": token || "", Authorization: token ? `Bearer ${token}` : "" },
        });

        const data = await res.json();
        setNotifications(Array.isArray(data) ? data : []);
      } catch (err) {
        console.log("Notification error:", err);
        setNotifications([]);
      }
    };

    fetchNotifications();
  }, [userFirstName]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.visualViewport?.width || window.innerWidth;
      setIsMobile(width <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    window.visualViewport?.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.visualViewport?.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (height > 0) setScrollProgress((winScroll / height) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (accountRef.current && !accountRef.current.contains(e.target) && notifRef.current && !notifRef.current.contains(e.target)) setActiveMenu(null);
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  useEffect(() => {
    const updateMarketClocks = () => {
      const now = new Date();
      const markets = [
        { name: "india", tz: "Asia/Kolkata", open: "09:15", close: "15:30" },
        { name: "tokyo", tz: "Asia/Tokyo", open: "09:00", close: "15:00" },
        { name: "london", tz: "Europe/London", open: "08:00", close: "16:30" },
        { name: "ny", tz: "America/New_York", open: "09:30", close: "16:00" },
      ];

      const updatedData = {};

      markets.forEach((m) => {
        const formatter = new Intl.DateTimeFormat("en-GB", { timeZone: m.tz, hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false });
        const timeParts = formatter.formatToParts(now);
        const hh = timeParts.find((p) => p.type === "hour")?.value || "00";
        const mm = timeParts.find((p) => p.type === "minute")?.value || "00";
        const ss = timeParts.find((p) => p.type === "second")?.value || "00";
        const currentTime = `${hh}:${mm}:${ss}`;
        const currentTimeShort = `${hh}:${mm}`;
        const day = new Intl.DateTimeFormat("en-US", { weekday: "short", timeZone: m.tz }).format(now);
        const isWeekend = day === "Sat" || day === "Sun";
        const isOpen = !isWeekend && currentTimeShort >= m.open && currentTimeShort < m.close;

        updatedData[m.name] = { time: currentTime, status: isOpen ? "OPEN" : "CLOSED", isOpen };
      });

      setMarketTimes(updatedData);
    };

    updateMarketClocks();
    const clockInterval = setInterval(updateMarketClocks, 1000);
    return () => clearInterval(clockInterval);
  }, []);

  const handleMenuToggle = (menuName) => setActiveMenu((prev) => (prev === menuName ? null : menuName));

  const handleLogout = () => {
    localStorage.removeItem("br30_token");
    localStorage.removeItem("br30_user");
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    localStorage.removeItem("username");
    localStorage.removeItem("role");

    logout?.();

    window.location.replace("/");
  };

  const marketItem = (label, data) => (
    <div className="market-item">
      <span className="market-label">{label}</span>
      <span className="market-time">{data.time}</span>
      {data.isOpen ? <span className="market-open">OPEN</span> : <span className="market-closed">CLOSED</span>}
    </div>
  );

  return (
    <>
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      <header className="br30-header">
        <div>
          <Link to="/dashboard" className="brand-link">
            <img src={logoDarkGreen} alt="BR30 Trader Logo" className="brand-logo" />
            <h1 className="brand-title">
              <span>BR30</span> Trader
            </h1>
          </Link>
        </div>

        {!isMobile && <h1 className="welcome-text">💫 Welcome 💫</h1>}

        <nav className="nav-actions">
          <div ref={notifRef} className="nav-menu-wrap" onMouseEnter={() => !isMobile && setActiveMenu("notif")}>
            <div className="bell-btn" onClick={() => handleMenuToggle("notif")}>
              <i className="fa-solid fa-bell"></i>
              <span className="notification-badge">{userFirstName ? notifications.length || 0 : 0}</span>
            </div>

            {activeMenu === "notif" && (
              <div className="dropdown-box notif-dropdown">
                <div className="dropdown-head">
                  <h3>Daily Updates ⚡</h3>
                  <span>Clear All</span>
                </div>

                <div className="dropdown-body">
                  {!userFirstName ? (
                    <div className="dropdown-item">
                      <p>🔒 Login Required to View Alerts</p>
                    </div>
                  ) : notifications.length === 0 ? (
                    <div className="dropdown-item">
                      <p>🔔 Koi new alert nahi hai.</p>
                    </div>
                  ) : (
                    notifications.slice(0, 7).map((item, index) => (
                      <div className="dropdown-item" key={item._id || index}>
                        <p>
                          🚀 <b>{item.senderName || "Admin Mukesh Raj"}:</b> {item.message}
                        </p>
                        <small>{item.date ? new Date(item.date).toLocaleString() : ""}</small>
                      </div>
                    ))
                  )}
                </div>

                <div className="dropdown-footer">
                  <Link to={userFirstName ? "/dashboard/view-alert" : "/login"} onClick={() => setActiveMenu(null)}>
                    {userFirstName ? "View All Alerts" : "Login First"}
                  </Link>
                </div>
              </div>
            )}
          </div>

          <div ref={accountRef} className="nav-menu-wrap" onMouseEnter={() => !isMobile && setActiveMenu("account")}>
            <button className="account-btn" onClick={() => handleMenuToggle("account")}>
              👤 {userFirstName || "Account"} <span>▼</span>
            </button>

            {activeMenu === "account" && (
              <div className="dropdown-box account-dropdown">
                <Link to="/dashboard" onClick={() => setActiveMenu(null)}>
                  🏠 Home
                </Link>

                {!userFirstName && (
                  <Link to="/register" onClick={() => setActiveMenu(null)}>
                    🔐 Login / Register
                  </Link>
                )}

                <Link to="/dashboard/myprofile" onClick={() => setActiveMenu(null)}>
                  👤 My Profile
                </Link>
                <Link to="/dashboard/mycourse" onClick={() => setActiveMenu(null)}>
                  🛍️ My Course
                </Link>
                <Link to="/dashboard/verify" onClick={() => setActiveMenu(null)}>
                  📜 Certificate
                </Link>
                <Link to="/dashboard/disclaimer" onClick={() => setActiveMenu(null)}>
                  ⚠️ Disclaimer
                </Link>
                <Link to="/dashboard/about" onClick={() => setActiveMenu(null)}>
                  🏢 About Us
                </Link>

                <hr />

                <Link to="/dashboard/vip-access" onClick={() => setActiveMenu(null)} className="vip-link">
                  ✨ VIP Access
                </Link>
                <a href="https://br-30-kart.vercel.app/" target="_blank" rel="noopener noreferrer">
                  🌐 BR30 Kart
                </a>

                {userRole.toLowerCase() === "admin" && (
                  <Link to="/dashboard/admin" target="_blank" rel="noopener noreferrer" onClick={() => setActiveMenu(null)}>
                    👑 Admin Dashboard
                  </Link>
                )}

                {userFirstName && (
                  <>
                    <hr />
                    <button onClick={handleLogout} className="logout-btn">
                      🚪 Logout
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        </nav>
      </header>

      <div className="header-space" />

      <div className="market-clock-bar">
        <div className="market-clock-inner">
          {marketItem("IN NSE/BSE:", marketTimes.india)}
          {marketItem("JP TOKYO:", marketTimes.tokyo)}
          {marketItem("GB LONDON:", marketTimes.london)}
          {marketItem("US NYSE:", marketTimes.ny)}
        </div>
      </div>

      <style>{`
.scroll-progress{height:4px;background:#8a2be2;position:fixed;top:0;left:0;z-index:300005;transition:width .1s ease-out}
.br30-header{position:fixed;top:4px;left:0;right:0;z-index:100000;width:100%;display:flex;justify-content:space-between;align-items:center;padding:${isMobile ? "12px 16px" : "16px 60px"};background:#000;border-bottom:1px solid #1e293b;box-sizing:border-box}
.header-space{height:${isMobile ? "78px" : "84px"}}
.brand-link{display:flex;align-items:center;text-decoration:none}
.brand-logo{width:48px;height:48px;object-fit:contain;display:block;}
.brand-title{padding-left:14px;color:#fff;font-size:${isMobile ? "1.2rem" : "1.5rem"};font-weight:700;margin:0;font-family:sans-serif;white-space:nowrap}
.brand-title span{color:#a020f0}
.welcome-text{margin:0;font-size:1.3rem;color:#fbbf24;font-weight:700;font-family:sans-serif}
.nav-actions{display:flex;align-items:center;gap:${isMobile ? "16px" : "25px"}}
.nav-menu-wrap{position:relative;padding:10px 0}
.bell-btn{cursor:pointer;font-size:1.4rem;color:#fbbf24;display:flex;align-items:center;position:relative}
.notification-badge{position:absolute;top:-8px;right:-8px;background:#ef4444;color:#fff;font-size:.65rem;font-weight:700;border-radius:50%;padding:1px 5px}
.account-btn{background:#111827;color:#00ffcc;border:1px solid #00ffcc;padding:${isMobile ? "6px 12px" : "8px 16px"};border-radius:6px;cursor:pointer;font-size:${isMobile ? ".8rem" : ".9rem"};font-weight:700;display:flex;align-items:center;gap:4px}
.account-btn span{font-size:.6rem}
.dropdown-box{background:#0a0f1d;border:1px solid #1e293b;border-radius:8px;z-index:200000;box-shadow:0 10px 15px -3px rgba(0,0,0,.7);overflow:hidden}
.notif-dropdown{position:${isMobile ? "fixed" : "absolute"};left:${isMobile ? "50%" : "auto"};right:${isMobile ? "auto" : "-40px"};transform:${isMobile ? "translateX(-50%)" : "none"};top:${isMobile ? "78px" : "calc(100% + 12px)"};width:${isMobile ? "90%" : "320px"};max-width:${isMobile ? "340px" : "none"}}
.account-dropdown{position:${isMobile ? "fixed" : "absolute"};right:${isMobile ? "16px" : "0"};top:${isMobile ? "78px" : "calc(100% + 12px)"};min-width:210px;padding:6px 0}
.dropdown-head{display:flex;justify-content:space-between;align-items:center;padding:14px 16px;background:#0b111e;color:#fff;border-bottom:1px solid #1e293b}
.dropdown-head h3{margin:0;font-size:.95rem;font-weight:700}
.dropdown-head span{cursor:pointer;font-size:.8rem;color:#2ecc71;font-weight:700}
.dropdown-body{max-height:330px;overflow-y:auto}
.dropdown-body::-webkit-scrollbar{width:6px}
.dropdown-body::-webkit-scrollbar-thumb{background:#334155;border-radius:20px}
.dropdown-item{padding:12px 16px;border-bottom:1px solid #1e293b}
.dropdown-item p{margin:0;color:#cbd5e1;font-size:.85rem;line-height:1.4}
.dropdown-item small{display:block;color:#94a3b8;font-size:.72rem;margin-top:6px}
.dropdown-footer{padding:12px;text-align:center;background:#0b111e;border-top:1px solid #1e293b}
.dropdown-footer a{color:#38bdf8;text-decoration:none;font-size:.85rem;font-weight:700;display:block}
.account-dropdown a{display:block;padding:10px 16px;color:#cbd5e1;text-decoration:none;font-size:.9rem}
.account-dropdown a:hover{background:#111827}
.account-dropdown hr{border:0;border-top:1px solid #1e293b;margin:6px 0}
.account-dropdown .vip-link{color:#fbbf24;font-weight:700}
.logout-btn{width:100%;background:transparent;border:none;color:#ef4444;text-align:left;padding:10px 16px;cursor:pointer;font-size:.9rem}
.logout-btn:hover{background:#111827}
.market-clock-bar{width:100%;background:#000;color:#fff;border-top:1px solid #1e293b;border-bottom:1px solid #1e293b;font-family:monospace;font-size:.8rem;white-space:nowrap;overflow-x:auto;overflow-y:hidden;scrollbar-width:thin;scrollbar-color:#00ffcc #000}
.market-clock-inner{min-width:max-content;display:flex;justify-content:space-between;align-items:center;gap:${isMobile ? "28px" : "70px"};padding:${isMobile ? "10px 16px" : "10px 60px"}}
.market-item{display:flex;align-items:center;gap:6px;flex:0 0 auto}
.market-label{color:#2ecc71}
.market-time{background:#111827;padding:4px 8px;border-radius:4px;border:1px solid #374151}
.market-open{color:#2ecc71;background:rgba(46,204,113,.15);border:1px solid #2ecc71;padding:2px 6px;border-radius:4px;font-size:.7rem;font-weight:700}
.market-closed{color:#ef4444;font-size:.75rem}
@media(max-width:768px){.market-clock-bar{display:block}.market-clock-inner{justify-content:flex-start}.welcome-text{display:none}}
      `}</style>
    </>
  );
}

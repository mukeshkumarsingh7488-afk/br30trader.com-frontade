import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Leaderboard() {
  const API_URL = import.meta.env.VITE_API_URL;
  const itemsPerPage = 9;

  const [allTraders, setAllTraders] = useState([]);
  const [visibleTraders, setVisibleTraders] = useState([]);
  const [fade, setFade] = useState(true);

  const currentIndexRef = useRef(0);

  useEffect(() => {
    document.body.style.overflowX = "hidden";
    fetchTraders();
  }, []);

  useEffect(() => {
    if (!allTraders.length) return;

    displayNextBatch();

    const interval = setInterval(() => {
      displayNextBatch();
    }, 4000);

    return () => clearInterval(interval);
  }, [allTraders]);

  const fetchTraders = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(`${API_URL}/api/courses/leaderboard`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          ...(token && { Authorization: `Bearer ${token}` }),
        },
      });

      const data = await res.json();
      let traders = Array.isArray(data) ? data : data.data || [];

      let user = null;
      try {
        user = JSON.parse(localStorage.getItem("user"));
      } catch {}

      if (user?.isVip) {
        const myIndex = traders.findIndex((t) => String(t._id) === String(user._id));

        const myProfile =
          myIndex !== -1
            ? traders.splice(myIndex, 1)[0]
            : {
                _id: user._id,
                name: user.name,
                profilePic: user.profilePic,
                isVip: true,
              };

        traders.unshift(myProfile);
      }

      traders = traders.filter((v, i, a) => a.findIndex((t) => String(t._id) === String(v._id)) === i);

      setAllTraders(traders);
    } catch (err) {
      console.error("Leaderboard fetch error:", err);
    }
  };

  const displayNextBatch = () => {
    setFade(false);

    setTimeout(() => {
      const stickyTrader = allTraders[0];
      const slidingList = allTraders.slice(1);
      const batchSize = itemsPerPage - 1;

      const start = currentIndexRef.current;
      const batch = slidingList.slice(start, start + batchSize);

      const finalList = stickyTrader
        ? [
            { ...stickyTrader, rank: 1 },
            ...batch.map((t, i) => ({
              ...t,
              rank: start + i + 2,
            })),
          ]
        : batch.map((t, i) => ({
            ...t,
            rank: start + i + 1,
          }));

      setVisibleTraders(finalList);

      currentIndexRef.current = start + batchSize >= slidingList.length ? 0 : start + batchSize;

      setFade(true);
    }, 300);
  };

  const getUserPic = (trader) => {
    const rawPath = trader?.profilePic || "";

    if (rawPath.startsWith("http")) return rawPath;

    if (rawPath) {
      return `${API_URL}/uploads/${rawPath.split(/[\\/]/).pop()}`;
    }

    return `https://ui-avatars.com/api/?name=${encodeURIComponent(trader?.name || "Trader")}&background=111&color=00ff88&bold=true`;
  };

  return (
    <div className="leaderboard-wrapper">
      <div className="bubbles">
        {[11, 12, 24, 10, 14, 23, 18, 16, 19, 20, 22, 25, 13, 21, 15, 17].map((num, i) => (
          <span key={i} style={{ "--i": num }}></span>
        ))}
      </div>

      <div className="animated-leaderboard-box">
        <div className="leaderboard-header">
          <h2 className="leaderboard-title">
            Top <span className="highlight-green">👑 VIP Traders</span>
          </h2>
          <p className="leaderboard-subtitle">In Last Six Month</p>
        </div>

        <div className="Traders-list-container" style={{ opacity: fade ? 1 : 0 }}>
          {visibleTraders.map((trader, index) => (
            <div className="Trader-item" key={trader._id || index}>
              <span className="rank-num">#{trader.rank}</span>

              <img
                src={getUserPic(trader)}
                className="user-avatar"
                alt={trader.name}
                onError={(e) => {
                  e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(trader?.name || "Trader")}&background=111&color=00ff88&bold=true`;
                }}
              />

              <span className="user-name">{trader.name}</span>
              <span className="vip-badge">💎 VIP</span>
            </div>
          ))}
        </div>

        <div className="leaderboard-footer">
          <Link to="/dashboard/#coursesection" className="vip-btn">
            <span>BROWSE COURSES</span>
            <span>↗</span>
          </Link>

          <p className="footer-note">Join VIP to see your name here!</p>
        </div>
      </div>

      <style>{`*{box-sizing:border-box}html,body,#root{overflow-x:hidden!important}.leaderboard-wrapper{position:relative;overflow:hidden;width:100%;min-height:560px;padding:28px 16px 45px;display:flex;justify-content:center;align-items:center;background:radial-gradient(circle at center,rgba(0,255,136,.10),#001108 45%,#020403 100%);font-family:Arial,sans-serif}.bubbles{position:absolute;width:100%;height:100%;z-index:1;display:flex;justify-content:space-around;pointer-events:none}.bubbles span{position:relative;width:15px;height:15px;background:#0f8;margin:0 4px;border-radius:50%;box-shadow:0 0 15px #00ff8844,0 0 30px #00ff8822;animation:animateBubbles linear infinite;animation-duration:calc(125s/var(--i));opacity:.5}.bubbles span:nth-child(2n){background:#a9b1c5;width:8px;height:8px;opacity:.1}@keyframes animateBubbles{0%{transform:translateY(100vh) scale(0)}100%{transform:translateY(-10vh) scale(1)}}.animated-leaderboard-box{position:relative;z-index:2;width:100%;max-width:1050px;background:rgba(0,0,0,.92);border:1.5px solid #00ff88;border-radius:24px;padding:34px 38px 28px;animation:leaderboardGlow 2.5s ease-in-out infinite alternate;box-shadow:0 0 18px rgba(0,255,136,.18)}.leaderboard-header{text-align:center;margin-bottom:22px}.leaderboard-title{margin:0;color:#00eaff;font-size:27px;font-weight:800;text-transform:uppercase}.highlight-green{color:#22c55e}.leaderboard-subtitle{margin:3px 0 0;color:#aeb4c3;font-size:17px;font-weight:700;text-transform:uppercase;letter-spacing:1px}.Traders-list-container{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;transition:opacity .3s ease}.Trader-item{height:62px;background:linear-gradient(145deg,#050505,#0c0c0c);border:1px solid #1f1f1f;border-radius:12px;display:flex;align-items:center;padding:0 16px;gap:12px;box-shadow:inset 0 0 14px rgba(255,255,255,.03);transition:transform .25s ease,border-color .25s ease,box-shadow .25s ease,background .25s ease}.Trader-item:hover{transform:translateY(-2px);border-color:#00ff88;background:linear-gradient(145deg,#07120d,#0c0c0c);box-shadow:0 0 18px rgba(0,255,136,.22),inset 0 0 14px rgba(255,255,255,.03)}.rank-num{color:#00ff88;font-weight:800;font-size:14px;min-width:42px}.user-avatar{width:38px;height:38px;border-radius:50%;object-fit:cover;border:2px solid rgba(255,255,255,.35);flex-shrink:0}.user-name{color:#fff;font-weight:700;font-size:14px;flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.vip-badge{background:rgba(0,255,136,.12);border:1px solid rgba(0,255,136,.45);color:#00ff88;padding:3px 7px;border-radius:6px;font-size:10px;font-weight:800;white-space:nowrap}.leaderboard-footer{border-top:1px solid #111;margin-top:24px;padding-top:14px;text-align:center}.vip-btn{width:220px;height:54px;margin:0 auto;display:flex;align-items:center;justify-content:center;gap:10px;border:2px solid #00ff88;color:#00ff88;text-decoration:none;border-radius:12px;font-weight:800;box-shadow:0 0 16px rgba(0,255,136,.5);font-size:14px;transition:transform .25s ease,box-shadow .25s ease,border-color .25s ease,color .25s ease}.vip-btn:hover{transform:scale(1.04);border-color:#00eaff;color:#00eaff;box-shadow:0 0 24px rgba(0,234,255,.75)}.footer-note{color:#b9bed0;font-size:12px;letter-spacing:1.2px;font-weight:800;margin:14px 0 0;text-transform:uppercase}@media(max-width:900px){.Traders-list-container{grid-template-columns:repeat(2,1fr)}}@media(max-width:600px){.leaderboard-wrapper{padding:30px 10px}.animated-leaderboard-box{padding:26px 14px}.Traders-list-container{grid-template-columns:1fr}.leaderboard-title{font-size:22px}.leaderboard-subtitle{font-size:14px}}`}</style>
    </div>
  );
}

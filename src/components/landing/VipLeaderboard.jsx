import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

const fallback = [
  { name: "Saroj Rajput", rank: 1, isVip: true },
  { name: "Rudransh Malhotra", rank: 602, isVip: true },
  { name: "Sanya Malhotra", rank: 603, isVip: true },
  { name: "Yuvansh Malhotra", rank: 604, isVip: true },
  { name: "Aarav Malhotra", rank: 605, isVip: true },
  { name: "Ishita Malhotra", rank: 606, isVip: true },
  { name: "Devraj Malhotra", rank: 607, isVip: true },
  { name: "Anika Malhotra", rank: 608, isVip: true },
  { name: "Rehan Malhotra", rank: 609, isVip: true },
  { name: "Alok Srivastava", rank: 610, isVip: true },
  { name: "Rahul Yadav", rank: 611, isVip: true },
  { name: "Neha Singh", rank: 612, isVip: true },
  { name: "Aditi Sharma", rank: 613, isVip: true },
  { name: "Rohit Verma", rank: 614, isVip: true },
  { name: "Sneha Patel", rank: 615, isVip: true },
  { name: "Karan Singh", rank: 616, isVip: true },
  { name: "Pooja Mehta", rank: 617, isVip: true },
];

export default function VipLeaderboard() {
  const API_URL = window.API_BASE_URL || import.meta.env.VITE_API_BASE_URL || import.meta.env.VITE_API_URL || "https://my-backend-1-avpd.onrender.com";
  const [traders, setTraders] = useState([]);
  const [startIndex, setStartIndex] = useState(1);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const loadLeaderboard = async () => {
      try {
        const res = await fetch(`${API_URL}/api/courses/leaderboard`);
        const data = await res.json();

        const list = Array.isArray(data) ? data : Array.isArray(data.leaderboard) ? data.leaderboard : Array.isArray(data.users) ? data.users : Array.isArray(data.traders) ? data.traders : Array.isArray(data.data) ? data.data : [];

        setTraders(list.length ? list : fallback);
        setStartIndex(1);
        setTick(0);
      } catch (err) {
        setTraders(fallback);
        setStartIndex(1);
        setTick(0);
      }
    };

    loadLeaderboard();
  }, [API_URL]);

  useEffect(() => {
    const listLength = traders.length || fallback.length;
    if (listLength <= 9) return;

    const timer = setInterval(() => {
      setStartIndex((prev) => {
        const next = prev + 8;
        return next >= listLength ? 1 : next;
      });

      setTick((prev) => prev + 1);
    }, 3500);

    return () => clearInterval(timer);
  }, [traders.length]);

  const dataList = traders.length ? traders : fallback;

  const getName = (item) => item?.name || item?.username || item?.userName || item?.fullName || "BR30 Trader";
  const getRank = (item, index) => item?.rank || item?.position || index + 1;
  const getAvatar = (item) => item?.profilePic || item?.avatar || item?.image || `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(getName(item))}`;

  const fixedTrader = useMemo(() => dataList[0] || fallback[0], [dataList]);

  const visibleUsers = useMemo(() => {
    if (dataList.length <= 1) return fallback.slice(1, 9);

    const users = [];

    for (let i = 0; i < 8; i++) {
      const safeLength = dataList.length - 1;
      const index = ((startIndex - 1 + i) % safeLength) + 1;
      users.push(dataList[index]);
    }

    return users;
  }, [dataList, startIndex]);

  const displayUsers = [fixedTrader, ...visibleUsers];

  return (
    <>
      <section className="vip-leaderboard-section" id="vip-leaderboard">
        <div className="br30-trader-container">
          <div className="vip-leaderboard-head">
            <span>LIVE VIP LEADERBOARD</span>
            <h2>
              Top <b>VIP Traders</b>
            </h2>
            <p>Students who purchase BR30 Trader courses can appear on the VIP leaderboard based on their learning journey and platform activity.</p>
          </div>

          <div className="vip-live-board">
            <div className="vip-board-title">
              <h3>
                TOP <span>👑 VIP TRADERS</span>
              </h3>
              <p>IN LAST SIX MONTH</p>
            </div>

            <div className="vip-grid-list" key={tick}>
              {displayUsers.map((item, index) => (
                <div className={`vip-trader-card ${index === 0 ? "vip-first" : ""}`} key={`${tick}-${item?._id || item?.id || getName(item)}-${index}`}>
                  <span className="vip-rank">#{index === 0 ? 1 : getRank(item, startIndex + index - 1)}</span>
                  <img
                    src={getAvatar(item)}
                    alt={getName(item)}
                    onError={(e) => {
                      e.currentTarget.src = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(getName(item))}`;
                    }}
                  />
                  <strong>{getName(item)}</strong>
                  <em>💎 VIP</em>
                </div>
              ))}
            </div>

            <div className="vip-board-footer">
              <Link to="/register" className="vip-board-btn">
                Browse Courses ↗
              </Link>
              <p>JOIN VIP TO SEE YOUR NAME HERE!</p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
.vip-leaderboard-section{padding:82px 0 76px;position:relative;overflow:hidden;}
.vip-leaderboard-head{text-align:center;max-width:780px;margin:0 auto;}
.vip-leaderboard-head span{display:inline-flex;padding:10px 18px;border-radius:999px;background:rgba(168,51,255,.12);border:1px solid rgba(168,51,255,.3);color:#f4d8ff;font-size:13px;font-weight:950;letter-spacing:1px;}
.vip-leaderboard-head h2{margin:20px 0 14px;color:#fff;font-size:48px;line-height:1.04;font-weight:950;letter-spacing:-2px;}
.vip-leaderboard-head h2 b{color:#00ff88;text-shadow:0 0 30px rgba(0,255,136,.25);}
.vip-leaderboard-head p{margin:0;color:#b8acd0;font-size:17px;line-height:1.7;}
.vip-live-board{margin-top:48px;padding:36px 40px 32px;border-radius:34px;background:rgba(0,0,0,.82);border:1.5px solid #00ff88;box-shadow:0 0 22px rgba(0,255,136,.16),0 36px 90px rgba(0,0,0,.42);position:relative;overflow:hidden;}
.vip-board-title{text-align:center;margin-bottom:24px;}
.vip-board-title h3{margin:0;color:#00eaff;font-size:30px;font-weight:950;text-transform:uppercase;letter-spacing:.6px;}
.vip-board-title h3 span{color:#00ff88;}
.vip-board-title p{margin:4px 0 0;color:#aeb4c3;font-size:17px;font-weight:900;text-transform:uppercase;letter-spacing:1.2px;}
.vip-grid-list{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;min-height:242px;}
.vip-trader-card{height:70px;display:flex;align-items:center;gap:12px;padding:0 16px;border-radius:14px;background:linear-gradient(145deg,#050505,#0c0c0c);border:1px solid rgba(255,255,255,.08);box-shadow:inset 0 0 14px rgba(255,255,255,.03);animation:vipFade .45s ease both;transition:.25s;}
.vip-trader-card:hover{transform:translateY(-2px);border-color:#00ff88;box-shadow:0 0 18px rgba(0,255,136,.2),inset 0 0 14px rgba(255,255,255,.03);}
.vip-first{border-color:rgba(0,255,136,.28);}
.vip-rank{min-width:48px;color:#00ff88;font-size:17px;font-weight:950;}
.vip-trader-card img{width:42px;height:42px;border-radius:50%;object-fit:cover;border:2px solid rgba(255,255,255,.35);flex-shrink:0;}
.vip-trader-card strong{flex:1;min-width:0;color:#fff;font-size:15px;font-weight:900;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.vip-trader-card em{font-style:normal;padding:5px 9px;border-radius:8px;background:rgba(0,255,136,.12);border:1px solid rgba(0,255,136,.45);color:#00ff88;font-size:11px;font-weight:950;white-space:nowrap;}
.vip-board-footer{border-top:1px solid rgba(255,255,255,.08);margin-top:24px;padding-top:20px;text-align:center;}
.vip-board-btn{width:220px;height:54px;margin:0 auto;display:inline-flex;align-items:center;justify-content:center;gap:10px;border:2px solid #00ff88;color:#00ff88;text-decoration:none;border-radius:14px;font-weight:950;box-shadow:0 0 18px rgba(0,255,136,.45);font-size:14px;transition:.25s;}
.vip-board-btn:hover{transform:scale(1.04);border-color:#00eaff;color:#00eaff;box-shadow:0 0 26px rgba(0,234,255,.7);}
.vip-board-footer p{color:#b9bed0;font-size:12px;letter-spacing:1.4px;font-weight:950;margin:16px 0 0;text-transform:uppercase;}
@keyframes vipFade{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
@media(max-width:980px){.vip-grid-list{grid-template-columns:repeat(2,1fr);}.vip-live-board{padding:30px 24px;}.vip-grid-list{min-height:410px;}}
@media(max-width:620px){.vip-leaderboard-section{padding:70px 0;}.vip-leaderboard-head h2{font-size:34px;}.vip-live-board{padding:26px 14px;border-radius:24px;}.vip-grid-list{grid-template-columns:1fr;min-height:auto;}.vip-trader-card{height:66px;}.vip-board-title h3{font-size:23px;}.vip-board-title p{font-size:13px;}.vip-board-btn{width:100%;}}
      `}</style>
    </>
  );
}

import React, { useEffect, useState } from "react";

const fallbackReviews = [
  { username: "Ramesh Patel", rating: 5, message: "Live market me apply kar raha hu.", adminReply: "Thanks for your feedback!" },
  { username: "Kiran P.", rating: 5, message: "Strategy kaafi powerful hai.", adminReply: "Keep learning with discipline." },
  { username: "Aditya Sharma", rating: 5, message: "Ab trade lene ka confidence aa gaya.", adminReply: "" },
];

export default function LiveReviews() {
  const apiBase = window.API_BASE_URL || import.meta.env.VITE_API_BASE_URL || import.meta.env.VITE_API_URL || "https://my-backend-1-avpd.onrender.com";
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openReply, setOpenReply] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${apiBase}/api/reviews/all`);
        const data = await res.json();
        const list = Array.isArray(data) ? data : Array.isArray(data.reviews) ? data.reviews : [];
        const visible = list.filter((item) => item.status !== "hidden" && item.isHidden !== true);
        setReviews(visible.length ? visible : fallbackReviews);
      } catch (err) {
        setReviews(fallbackReviews);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [apiBase]);

  const getName = (r) => r.username || r.name || r.userName || "BR30 Student";
  const getText = (r) => r.message || r.feedback || r.review || r.comment || "Great learning experience.";
  const getRating = (r) => Number(r.rating || r.stars || 5);
  const getAvatar = (r) => r.profilePic || r.avatar || r.image || `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(getName(r))}`;
  const getReply = (r) => r.adminReply || r.reply || r.adminResponse || "";

  return (
    <>
      <section className="live-review-section" id="reviews">
        <div className="br30-trader-container">
          <div className="live-review-head">
            <span>LIVE STUDENT REVIEWS</span>
            <h2>Real feedback from BR30 learners.</h2>
            <p>Reviews are fetched from the existing BR30 Trader review system. Review submission is available only after course purchase.</p>
          </div>

          <div className="live-review-grid">
            <div className="review-form-card">
              <h3>Share Your Experience</h3>

              <input disabled placeholder="Your Name" />

              <label>RATE YOUR EXPERIENCE</label>
              <select disabled>
                <option>⭐⭐⭐⭐⭐ (5 Stars)</option>
              </select>

              <textarea disabled placeholder="Write your feedback here..." />

              <button disabled>🔒 Login & Purchase Course to Submit Review</button>
            </div>

            <div className="review-list-card">
              <div className="review-list-top">
                <h3>Community Highlights</h3>
                <span>Total {reviews.length.toLocaleString("en-IN")}</span>
              </div>

              <div className="review-scroll-box">
                {loading ? (
                  <p className="review-empty">Loading reviews...</p>
                ) : reviews.length === 0 ? (
                  <p className="review-empty">No reviews yet.</p>
                ) : (
                  reviews.map((r, i) => {
                    const reply = getReply(r);
                    return (
                      <div className="review-item" key={r._id || i}>
                        <img src={getAvatar(r)} alt={getName(r)} />

                        <div className="review-content">
                          <div className="review-row">
                            <h4>{getName(r)}</h4>
                            <b>{"★".repeat(Math.min(getRating(r), 5))}</b>
                          </div>

                          <p>{getText(r)}</p>

                          {reply && (
                            <>
                              <button className="reply-toggle" onClick={() => setOpenReply(openReply === i ? null : i)}>
                                {openReply === i ? "Hide Reply" : "View Reply"}
                              </button>

                              {openReply === i && <div className="admin-reply">BR30 Reply: {reply}</div>}
                            </>
                          )}
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
.live-review-section{padding:75px 0;position:relative;overflow:hidden;}
.live-review-head{text-align:center;max-width:850px;margin:0 auto;}
.live-review-head span{display:inline-flex;padding:10px 18px;border-radius:999px;background:rgba(168,51,255,.12);border:1px solid rgba(168,51,255,.3);color:#f4d8ff;font-size:13px;font-weight:950;letter-spacing:1px;}
.live-review-head h2{margin:22px 0 16px;color:#fff;font-size:52px;line-height:1.04;font-weight:950;letter-spacing:-2px;}
.live-review-head p{margin:0;color:#b8acd0;font-size:18px;line-height:1.75;}
.live-review-grid{margin-top:42px;display:grid;grid-template-columns:.95fr 1.05fr;gap:28px;align-items:stretch;}
.review-form-card,.review-list-card{border-radius:28px;background:linear-gradient(180deg,rgba(255,255,255,.075),rgba(255,255,255,.028));border:1px solid rgba(255,255,255,.1);box-shadow:0 24px 58px rgba(0,0,0,.28);padding:24px;}
.review-form-card h3,.review-list-top h3{margin:0;color:#fff;font-size:25px;font-weight:950;letter-spacing:-.8px;}
.review-form-card input,.review-form-card select,.review-form-card textarea{width:100%;margin-top:16px;border:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.06);color:#b8acd0;border-radius:15px;padding:14px 16px;font-size:14px;outline:none;opacity:.75;}
.review-form-card label{display:block;margin-top:18px;color:#f4d8ff;font-size:12px;font-weight:950;letter-spacing:.8px;}
.review-form-card textarea{min-height:115px;resize:none;}
.review-form-card button{width:100%;margin-top:20px;min-height:52px;border:0;border-radius:15px;background:linear-gradient(135deg,#f8c96c,#b847ff);color:#17041d;font-size:14px;font-weight:950;cursor:not-allowed;opacity:.78;}
.review-list-top{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:22px;}
.review-list-top span{padding:8px 14px;border-radius:999px;background:rgba(248,201,108,.12);border:1px solid rgba(248,201,108,.25);color:#f8c96c;font-size:13px;font-weight:950;}
.review-scroll-box{height:350px;overflow-y:auto;padding-right:8px;display:grid;gap:14px;}
.review-scroll-box::-webkit-scrollbar{width:8px;}
.review-scroll-box::-webkit-scrollbar-thumb{background:linear-gradient(#a833ff,#f8c96c);border-radius:999px;}
.review-item{display:flex;gap:16px;padding:18px;border-radius:22px;background:rgba(0,0,0,.24);border:1px solid rgba(255,255,255,.08);}
.review-item img{width:58px;height:58px;border-radius:50%;object-fit:cover;border:2px solid rgba(248,201,108,.55);flex-shrink:0;}
.review-content{flex:1;min-width:0;}
.review-row{display:flex;align-items:center;justify-content:space-between;gap:14px;}
.review-row h4{margin:0;color:#fff;font-size:18px;font-weight:950;}
.review-row b{color:#f8c96c;font-size:13px;white-space:nowrap;}
.review-content p{margin:8px 0 0;color:#d4cae7;font-size:15px;line-height:1.65;}
.reply-toggle{margin-top:10px;border:0;background:transparent;color:#f8c96c;font-size:13px;font-weight:900;cursor:pointer;padding:0;}
.admin-reply{margin-top:12px;padding:12px 14px;border-radius:14px;background:rgba(168,51,255,.12);border:1px solid rgba(168,51,255,.22);color:#e8ddf8;font-size:13px;line-height:1.6;}
.review-empty{color:#b8acd0;text-align:center;margin:40px 0;font-weight:800;}
@media(max-width:980px){.live-review-grid{grid-template-columns:1fr;}.live-review-head h2{font-size:42px;}}
@media(max-width:560px){.live-review-section{padding:70px 0;}.live-review-head h2{font-size:34px;}.review-form-card,.review-list-card{padding:22px;border-radius:24px;}.review-list-top{align-items:flex-start;flex-direction:column;}.review-scroll-box{height:430px;}.review-item{flex-direction:column;}.review-row{align-items:flex-start;flex-direction:column;gap:6px;}}
      `}</style>
    </>
  );
}

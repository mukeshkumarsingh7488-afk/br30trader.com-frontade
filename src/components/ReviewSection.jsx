import React, { useEffect, useState } from "react";

export default function ReviewSection() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("5");
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState([]);
  const [totalCount, setTotalCount] = useState(20282);
  const [openReplyId, setOpenReplyId] = useState(null);
  const [loadingReviews, setLoadingReviews] = useState(true);

  const apiBase = window.API_BASE_URL || import.meta.env.VITE_API_BASE_URL || "https://my-backend-1-avpd.onrender.com";

  const loadTopReviews = async () => {
    try {
      setLoadingReviews(true);
      const res = await fetch(`${apiBase}/api/reviews/top10`);
      const data = await res.json();

      const list = Array.isArray(data) ? data : Array.isArray(data.reviews) ? data.reviews : [];

      setReviews(list);
      setTotalCount(data.totalCount || data.count || list.length || 0);
    } catch (err) {
      console.warn("Reviews load notice:", err.message);
    } finally {
      setLoadingReviews(false);
    }
  };

  useEffect(() => {
    loadTopReviews();

    const closeReply = () => setOpenReplyId(null);
    document.addEventListener("click", closeReply);

    return () => {
      document.removeEventListener("click", closeReply);
    };
  }, []);

  const getProfileImg = (r) => {
    const userName = r?.userId?.name || r?.name || r?.username || "User";
    const rawPath = r?.userId?.profilePic || r?.profilePic || "";

    if (rawPath && typeof rawPath === "string" && rawPath.length > 5) {
      if (rawPath.startsWith("http")) return rawPath;
      const fileName = rawPath.split(/[\\/]/).pop();
      return `${apiBase}/uploads/${fileName}`;
    }

    return `https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=00ff88&color=000&bold=true&size=128`;
  };

  const submitReview = async (e) => {
    e.preventDefault();

    const storedData = localStorage.getItem("userData");

    if (!storedData) {
      alert("Please, Login first!");
      return;
    }

    const user = JSON.parse(storedData);
    const finalUserId = user._id || user.id || (user.user && (user.user._id || user.user.id));

    const latestProfilePic = user.profilePic || (user.user && user.user.profilePic) || "";

    if (!name.trim() || !comment.trim()) {
      alert("Please fill all fields!");
      return;
    }

    const data = {
      username: name.trim(),
      rating,
      comment: comment.trim(),
      userId: finalUserId,
      profilePic: latestProfilePic,
    };

    try {
      const res = await fetch(`${apiBase}/api/reviews/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        alert("Thanks for your review! ✅");
        setName("");
        setRating("5");
        setComment("");
        loadTopReviews();
      } else {
        alert(result.message || "Error while posting review!");
      }
    } catch (err) {
      console.error("Review Error:", err);
      alert("Server Error! Check console for details.");
    }
  };

  return (
    <section className="review-section">
      <p className="review-desc">BR30 Trader is the official trading education platform founded by Mukesh Raj, offering intraday trading, price action and option buying mentorship. BR30 Kart is its official marketplace where verified trading courses are available.</p>

      <h3 className="happy-users">10,000+ Happy Users in Last 6 Months.</h3>

      <div className="review-flex-container">
        <div className="review-form-box">
          <h3>Share Your Experience</h3>

          <form onSubmit={submitReview}>
            <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />

            <label>Rate your experience</label>

            <select value={rating} onChange={(e) => setRating(e.target.value)}>
              <option value="5">⭐⭐⭐⭐⭐ (5 Stars)</option>
              <option value="4">⭐⭐⭐⭐ (4 Stars)</option>
              <option value="3">⭐⭐⭐ (3 Stars)</option>
            </select>

            <textarea
              placeholder="Write your feedback here..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  e.currentTarget.form.requestSubmit();
                }
              }}
              required
            />

            <button type="submit">Post Review</button>
          </form>
        </div>

        <div className="review-list-box">
          <div className="review-heading">
            <h3>
              Community Highlights <span>(Top Review)</span>
            </h3>

            <div className="review-total">
              <span>Total</span>
              <b>{Number(totalCount).toLocaleString("en-IN")}</b>
            </div>
          </div>

          <div className="review-display">
            {loadingReviews ? (
              <p className="no-review">Loading reviews...</p>
            ) : reviews.length === 0 ? (
              <p className="no-review">No reviews yet.</p>
            ) : (
              reviews.map((r, i) => {
                const userName = r?.userId?.name || r?.name || r?.username || "User";
                const replyId = r?._id || r?.id || i;

                return (
                  <div className="review-card" key={replyId}>
                    <img
                      src={getProfileImg(r)}
                      onError={(e) => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=333&color=fff&size=128`;
                      }}
                      alt={userName}
                    />

                    <div className="review-content">
                      <div className="review-top">
                        <strong>{userName}</strong>

                        <div>
                          <span className="stars">{"★".repeat(Number(r.rating || r.stars || 5))}</span>

                          {r.adminReply && (
                            <button
                              type="button"
                              className="reply-btn"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setOpenReplyId((prev) => (prev === replyId ? null : replyId));
                              }}
                            >
                              View Reply
                            </button>
                          )}
                        </div>
                      </div>

                      <p>{r.comment || r.review || r.message || "No comment"}</p>

                      {r.adminReply && openReplyId === replyId && (
                        <div className="reply-box" onClick={(e) => e.stopPropagation()}>
                          <strong>Admin:</strong> {r.adminReply}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>

      <style>{`
.review-section{width:100%;padding:55px 5% 90px;background:radial-gradient(circle at top,#04150f,#000);font-family:Arial,sans-serif;color:#fff}
.review-desc{font-size:13px;opacity:.8;text-align:center;margin:0 auto 4px;max-width:1500px;color:#cbd5e1;line-height:1.5}
.happy-users{margin:0 0 55px;font-size:12px;color:#a1a1aa;text-align:center}
.review-flex-container{max-width:1280px;margin:auto;display:grid;grid-template-columns:1fr 1fr;gap:34px}
.review-form-box,.review-list-box{background:#050505;border:1px solid rgba(0,255,136,.25);border-radius:18px;padding:26px;box-shadow:0 0 25px rgba(0,255,136,.07)}
.review-form-box h3{margin:0 0 16px;color:#fff;font-size:22px;letter-spacing:.5px}
.review-form-box input,.review-form-box select,.review-form-box textarea{width:100%;background:#111;border:1px solid transparent;border-radius:9px;color:#fff;padding:14px;font-size:15px;outline:none;margin-bottom:18px}
.review-form-box input:focus,.review-form-box select:focus,.review-form-box textarea:focus{border-color:#00ff88}
.review-form-box label{display:block;color:#cbd5e1;font-size:13px;text-transform:uppercase;font-weight:800;margin:0 0 10px}
.review-form-box textarea{height:105px;resize:vertical}
.review-form-box button{width:100%;height:44px;border:0;border-radius:8px;background:#db6f98;color:#000;font-size:15px;font-weight:800;cursor:pointer}
.review-form-box button:hover{background:#00ff88}
.review-heading{display:flex;align-items:center;gap:12px;margin-bottom:24px;flex-wrap:wrap}
.review-heading h3{margin:0;color:#fff;font-size:17px;white-space:nowrap}
.review-heading h3 span{font-weight:400;font-size:12px;color:#888}
.review-total{display:flex;align-items:center;gap:6px}
.review-total span{font-size:12px;color:#fff;opacity:.9}
.review-total b{background:#00ff88;color:#000;padding:4px 12px;border-radius:5px;font-size:12px;box-shadow:0 0 10px rgba(0,255,136,.3)}
.review-display{max-height:320px;overflow-y:auto;padding-right:6px}
.review-display::-webkit-scrollbar{width:6px}
.review-display::-webkit-scrollbar-thumb{background:#00ff88;border-radius:30px}
.review-display::-webkit-scrollbar-track{background:#111}
.no-review{color:gray;font-size:13px}
.review-card{background:rgba(255,255,255,.05);padding:15px;margin-bottom:12px;border-radius:15px;border-left:4px solid #00ff88;box-shadow:0 4px 15px rgba(0,0,0,.3);display:flex;align-items:flex-start;gap:12px}
.review-card img{width:45px;height:45px;border-radius:50%;border:2px solid #00ff88;object-fit:cover;background:#111;flex-shrink:0}
.review-content{flex:1}
.review-top{display:flex;justify-content:space-between;align-items:center;gap:10px}
.review-top strong{color:#00ff88;font-size:15px;letter-spacing:.4px}
.stars{color:gold;font-size:12px}
.reply-btn{border:0;background:transparent;color:#00ff88;font-size:10px;cursor:pointer;text-decoration:underline;margin-left:8px}
.review-content p{margin:6px 0 0;font-size:13px;color:#e2e8f0;line-height:1.5}
.reply-box{margin-top:8px;padding:8px;background:rgba(0,255,136,.1);border-left:2px solid #00ff88;border-radius:4px;font-size:12px;color:#00ff88}
.reply-box strong{color:#fff}
@media(max-width:900px){.review-flex-container{grid-template-columns:1fr}.happy-users{margin-bottom:35px}}
@media(max-width:600px){.review-section{padding:45px 16px 70px}.review-form-box,.review-list-box{padding:20px}.review-heading h3{white-space:normal}.review-top{align-items:flex-start;flex-direction:column}.review-form-box h3{font-size:20px}}
      `}</style>
    </section>
  );
}

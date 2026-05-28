import React, { useEffect, useState } from "react";

const baseCourses = [
  { id: "69b08c39e9657168f7652962", title: "Advance Option Buying", tag: "Best Seller" },
  { id: "69b08a56e9657168f765295b", title: "Advance Option Selling" },
  { id: "69b08c8fe9657168f765296a", title: "Advance BTST Mastery" },
  { id: "69b08cfae9657168f7652973", title: "Crypto & Forex Pro" },
  { id: "69b08d75e9657168f765297d", title: "One Side Momentum", tag: "VIP" },
  { id: "69c67168f5be64158b6e2056", title: "Scalping Strategy Pro" },
];

export default function CoursesSection() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [courses, setCourses] = useState(baseCourses);
  const [coupon, setCoupon] = useState(null);
  const [applied, setApplied] = useState({});

  useEffect(() => {
    loadCourses();
    loadCoupon();
  }, []);

  const imgUrl = (thumb) => {
    if (!thumb) return "https://i.ibb.co/KxnQc4gx/BR30-LOGO1.png";
    if (thumb.startsWith("http")) return thumb.includes("cloudinary") ? thumb.replace("/upload/", "/upload/f_auto,q_auto,w_600/") : thumb;
    return `${API_URL}/uploads/${thumb.replace(/^\/?uploads\//, "")}`;
  };

  const loadCourses = async () => {
    try {
      const res = await fetch(`${API_URL}/api/courses`);
      const data = await res.json();
      const list = Array.isArray(data) ? data : [];
      setCourses(baseCourses.map((c) => ({ ...c, ...(list.find((x) => x._id === c.id) || {}) })));
    } catch {}
  };

  const loadCoupon = async () => {
    try {
      const res = await fetch(`${API_URL}/api/auth/latest-coupon`);
      const data = await res.json();
      if (data.success && data.coupon) setCoupon({ ...data.coupon, daysLeft: data.daysLeft || 7 });
    } catch {}
  };

  const loadRazorpay = () =>
    new Promise((resolve) => {
      if (window.Razorpay) return resolve(true);
      const s = document.createElement("script");
      s.src = "https://checkout.razorpay.com/v1/checkout.js";
      s.onload = () => resolve(true);
      s.onerror = () => resolve(false);
      document.body.appendChild(s);
    });

  const checkout = async (courseId) => {
    const token = localStorage.getItem("token");
    if (!token) return alert("Please login first!");

    const ok = await loadRazorpay();
    if (!ok) return alert("Payment system failed to load! Try again later.");

    try {
      const res = await fetch(`${API_URL}/api/payment/order`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-auth-token": token },
        body: JSON.stringify({
          courseId,
          couponCode: applied[courseId] && coupon ? coupon.code : "",
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.msg || "Order failed");

      const notifyPaymentFailed = async (reason = "Payment cancelled or failed") => {
        try {
          await fetch(`${API_URL}/api/payment/payment-failed`, {
            method: "POST",
            headers: { "Content-Type": "application/json", "x-auth-token": token },
            body: JSON.stringify({
              courseId,
              reason,
              amount: data?.order?.amount ? data.order.amount / 100 : 0,
              orderId: data?.order?.id || "",
            }),
          });
        } catch (e) {
          console.log("Payment failure mail API error:", e.message);
        }
      };

      const rzp = new window.Razorpay({
        key: data.key,
        amount: data.order.amount,
        currency: "INR",
        name: "BR30Trader ACADEMY",
        description: "VIP Enrollment",
        order_id: data.order.id,
        theme: { color: "#00ff88" },

        modal: {
          ondismiss: async () => {
            await notifyPaymentFailed("User closed Razorpay checkout without completing payment");
          },
        },

        handler: async (response) => {
          const verify = await fetch(`${API_URL}/api/payment/verify`, {
            method: "POST",
            headers: { "Content-Type": "application/json", "x-auth-token": token },
            body: JSON.stringify({
              ...response,
              courseId,
              amount: data.order.amount / 100,
            }),
          });

          if (verify.ok) alert("Congratulations! Course Unlock ho gaya.");
        },
      });

      rzp.on("payment.failed", async (response) => {
        await notifyPaymentFailed(response?.error?.description || response?.error?.reason || "Razorpay payment failed");
        alert("Payment failed. Our support team has been notified.");
      });

      rzp.open();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <section id="coursesection" className="course-section">
      <div className="section-header-box">
        <h2>
          🎓 Our <span>Premium Courses</span> 🎓
        </h2>

        <p>
          Join the BR30 Trader ecosystem with <span>Lifetime Course Updates</span>,<span> VIP Community Access</span>, premium <span>VIP PDF Study Materials</span>, real market experience, <span> Professional Certification</span>, structured trading education, and yearly strategy upgrades based on live market conditions — you're not just buying a course, you're becoming a part of the BR30 family for life. 🚀
        </p>
      </div>
      <div className="poster-grid">
        {courses.map((course, i) => {
          const price = Number(course.price || 0);
          const isApplied = applied[course.id || course._id];
          const finalPrice = coupon && isApplied ? Math.round(price - (price * coupon.discount) / 100) : price;
          const courseId = course.id || course._id;
          return (
            <div className="poster-card" key={courseId}>
              {course.tag && <div className={`card-tag ${course.tag === "VIP" ? "gold" : ""}`}>{course.tag}</div>}
              <img className="course-img" src={imgUrl(course.thumbnail)} alt={course.title} loading={i < 3 ? "eager" : "lazy"} onError={(e) => (e.currentTarget.src = "https://i.ibb.co/KxnQc4gx/BR30-LOGO1.png")} />
              <h3 className="course-title">{course.title}</h3>
              <p className="price">
                Price:{" "}
                {isApplied && price ? (
                  <>
                    <span>₹{price.toLocaleString("en-IN")}</span> <b>₹{finalPrice.toLocaleString("en-IN")}</b>
                  </>
                ) : (
                  <>₹{price ? price.toLocaleString("en-IN") : "--"}</>
                )}
              </p>
              {coupon && (
                <div className="coupon-display-box">
                  <p>
                    🎁 Exclusive <span>{coupon.discount}</span> % OFF Offer
                  </p>
                  <h4>
                    Code: <span>{coupon.code}</span>
                  </h4>
                  <button type="button" onClick={() => setApplied({ ...applied, [courseId]: true })}>
                    ✔ APPLIED
                  </button>
                  <div>⏳ Only {coupon.daysLeft} Days Left!</div>
                </div>
              )}
              <button type="button" className="payBtn" onClick={() => checkout(courseId)}>
                Enroll Now
              </button>
            </div>
          );
        })}
      </div>

      <style>{`
        .course-section{width:100%;background:radial-gradient(circle at center,rgba(0,255,136,.09),#001108 45%,#020403 100%);padding:70px 6% 90px;font-family:Arial,sans-serif;overflow:hidden}
        .section-header-box{text-align:center;margin-bottom:50px}
        .section-header-box h2{color:#fff;font-size:28px;margin:0;font-weight:900}
        .section-header-box h2 span{color:#00ff88}
        .section-header-box p{color:#a9b1c5;font-size:16px;margin:6px 0 0;letter-spacing:1px}
        .poster-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:34px;max-width:1280px;margin:0 auto;opacity:1}
        .poster-card{position:relative;background:#020202;border-radius:18px;padding:24px 24px 26px;border:1px solid rgba(0,255,136,.08);box-shadow:0 0 30px rgba(0,0,0,.8);text-align:center;overflow:hidden}
        .poster-card:hover{transform:translateY(-4px);box-shadow:0 0 26px rgba(0,255,136,.18)}
        .course-img{width:100%;height:185px;object-fit:cover;border-radius:12px;display:block;margin-bottom:18px}
        .course-title{color:#00ff88;font-size:21px;font-weight:900;margin:0 0 10px}
        .price{color:#fff;font-size:10px;font-weight:900;margin:0 0 18px}
        .price span{text-decoration:line-through;color:#94a3b8;font-size:14px;margin-right:8px}
        .price b{color:#4ade80;font-size:22px}
        .card-tag{position:absolute;top:5px;right:18px;background:#00ff88;color:#000;padding:8px 14px;border-radius:20px;font-size:12px;font-weight:900;z-index:3}
        .card-tag.gold{background:#fbbf24}
        .coupon-display-box{display:flex;flex-direction:column;align-items:center;justify-content:center;margin:15px 0;border:1px dashed rgba(160,32,240,.5);padding:12px;border-radius:12px;background:rgba(160,32,240,.05)}
        .coupon-display-box p{color:#4ade80;font-size:11px;margin:0;text-transform:uppercase;letter-spacing:1px;font-weight:700}
        .coupon-display-box h4{color:#fff;margin:5px 0;font-size:14px}
        .coupon-display-box h4 span{color:#a020f0;background:#fff;padding:1px 8px;border-radius:4px;font-weight:900}
        .coupon-display-box button{background:#059669;color:#000;border:0;width:100%;padding:8px;border-radius:50px;font-size:12px;font-weight:900;cursor:default}
        .coupon-display-box div{color:#ff8e8e;font-size:12.5px;margin-top:8px;font-weight:900;text-transform:uppercase;animation:blinkExpiry 1.5s infinite}
        .payBtn{width:100%;height:42px;background:#00ff88;color:#000;border:0;border-radius:10px;font-size:15px;font-weight:900;cursor:pointer}
        .payBtn:hover{background:#00eaff;box-shadow:0 0 18px rgba(0,234,255,.55)}
        @keyframes blinkExpiry{0%,100%{opacity:1}50%{opacity:.45}}
        @media(max-width:1000px){.poster-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:650px){.course-section{padding:45px 14px}.poster-grid{grid-template-columns:1fr}.course-img{height:180px}}
      `}</style>
    </section>
  );
}

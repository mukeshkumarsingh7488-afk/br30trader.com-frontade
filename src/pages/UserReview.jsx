import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function UserReview() {
  const API = import.meta.env.VITE_API_URL;
  const [reviews, setReviews] = useState([]);
  const [search, setSearch] = useState("");
  const [openReply, setOpenReply] = useState(null);
  const [replyText, setReplyText] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedReviews, setSelectedReviews] = useState([]);
  const [bulkCount, setBulkCount] = useState(100);

  useEffect(() => {
    fetchReviews();
  }, []);

  const chunkArray = (arr, size = 500) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) chunks.push(arr.slice(i, i + size));
    return chunks;
  };

  const fetchReviews = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API}/api/reviews/all`);
      if (!res.ok) throw new Error(`Fetch failed ${res.status}`);
      const data = await res.json();
      setReviews(Array.isArray(data) ? data : []);
    } catch (err) {
      Swal.fire({ title: "❌ Error", text: "Database connection failed.", icon: "error", background: "#0a0a0a", color: "#fff", confirmButtonColor: "#ef4444" });
    } finally {
      setLoading(false);
    }
  };

  const filteredReviews = reviews.filter((rev) => (rev.username || "").toLowerCase().includes(search.toLowerCase()));

  const resetAllFilters = () => {
    setSearch("");
    setSelectedReviews([]);
    fetchReviews();
  };

  const toggleSelectReview = (id) => {
    setSelectedReviews((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
  };

  const selectFirstNReviews = () => {
    const count = Math.max(0, Number(bulkCount) || 0);
    const ids = filteredReviews.slice(0, count).map((r) => r._id);
    setSelectedReviews(ids);
    Swal.fire({ title: "✅ Selected", text: `${ids.length} reviews selected.`, icon: "success", background: "#0a0a0a", color: "#fff", timer: 1200, showConfirmButton: false });
  };

  const clearSelection = () => setSelectedReviews([]);

  const processChunks = async ({ url, method, makeBody, title }) => {
    const chunks = chunkArray(selectedReviews, 500);
    let done = 0;

    Swal.fire({ title, html: `Processing 0 / ${selectedReviews.length}`, allowOutsideClick: false, showConfirmButton: false, background: "#0a0a0a", color: "#fff", didOpen: () => Swal.showLoading() });

    for (const chunk of chunks) {
      const res = await fetch(url, { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(makeBody(chunk)) });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.message || data.error || "Bulk action failed!");
      done += chunk.length;
      Swal.update({ html: `Processing ${done} / ${selectedReviews.length}` });
    }
  };

  const bulkStatusUpdate = async (status) => {
    if (selectedReviews.length === 0) return Swal.fire({ title: "⚠️ No Reviews", text: "Pehle reviews select karo!", icon: "warning", background: "#0a0a0a", color: "#fff", confirmButtonColor: "#f59e0b" });

    const confirm = await Swal.fire({ title: status === "hidden" ? "Hide Selected Reviews?" : "Show Selected Reviews?", text: `${selectedReviews.length} reviews update honge.`, icon: "question", showCancelButton: true, confirmButtonText: status === "hidden" ? "Yes, Hide" : "Yes, Show", cancelButtonText: "Cancel", background: "#0a0a0a", color: "#fff", confirmButtonColor: status === "hidden" ? "#f59e0b" : "#00ffa3", cancelButtonColor: "#334155" });
    if (!confirm.isConfirmed) return;

    try {
      await processChunks({ url: `${API}/api/reviews/bulk-status`, method: "PATCH", title: "Bulk Update Running...", makeBody: (chunk) => ({ ids: chunk, status }) });
      await Swal.fire({ title: "✅ Done", text: `${selectedReviews.length} reviews update ho gaye!`, icon: "success", background: "#0a0a0a", color: "#fff", confirmButtonColor: "#00ffa3", timer: 1600, showConfirmButton: false });
      setSelectedReviews([]);
      fetchReviews();
    } catch (err) {
      Swal.fire({ title: "❌ Error", text: err.message || "Bulk update failed!", icon: "error", background: "#0a0a0a", color: "#fff", confirmButtonColor: "#ef4444" });
    }
  };

  const bulkDeleteReviews = async () => {
    if (selectedReviews.length === 0) return Swal.fire({ title: "⚠️ No Reviews", text: "Pehle reviews select karo!", icon: "warning", background: "#0a0a0a", color: "#fff", confirmButtonColor: "#f59e0b" });

    const confirm = await Swal.fire({ title: "Delete Selected Reviews?", text: `${selectedReviews.length} reviews permanently delete honge!`, icon: "warning", showCancelButton: true, confirmButtonText: "Delete All", cancelButtonText: "Cancel", background: "#0a0a0a", color: "#fff", confirmButtonColor: "#ef4444", cancelButtonColor: "#334155" });
    if (!confirm.isConfirmed) return;

    try {
      await processChunks({ url: `${API}/api/reviews/bulk-delete`, method: "DELETE", title: "Bulk Delete Running...", makeBody: (chunk) => ({ ids: chunk }) });
      await Swal.fire({ title: "🗑️ Deleted", text: `${selectedReviews.length} reviews delete ho gaye!`, icon: "success", background: "#0a0a0a", color: "#fff", confirmButtonColor: "#00ffa3", timer: 1600, showConfirmButton: false });
      setSelectedReviews([]);
      fetchReviews();
    } catch (err) {
      Swal.fire({ title: "❌ Error", text: err.message || "Bulk delete failed!", icon: "error", background: "#0a0a0a", color: "#fff", confirmButtonColor: "#ef4444" });
    }
  };

  const bulkReplyReviews = async () => {
    if (selectedReviews.length === 0) return Swal.fire({ title: "⚠️ No Reviews", text: "Pehle reviews select karo!", icon: "warning", background: "#0a0a0a", color: "#fff", confirmButtonColor: "#f59e0b" });

    const { value: adminReply } = await Swal.fire({ title: "Bulk Reply", input: "textarea", inputLabel: `${selectedReviews.length} selected reviews me same reply save hoga`, inputPlaceholder: "Admin reply likho...", showCancelButton: true, confirmButtonText: "Save Reply", cancelButtonText: "Cancel", background: "#0a0a0a", color: "#fff", confirmButtonColor: "#00ffa3", cancelButtonColor: "#334155", inputValidator: (value) => (!value.trim() ? "Reply text required!" : undefined) });
    if (!adminReply) return;

    try {
      await processChunks({ url: `${API}/api/reviews/bulk-reply`, method: "PUT", title: "Bulk Reply Running...", makeBody: (chunk) => ({ ids: chunk, adminReply }) });
      await Swal.fire({ title: "✅ Reply Saved", text: `${selectedReviews.length} reviews me reply save ho gaya!`, icon: "success", background: "#0a0a0a", color: "#fff", confirmButtonColor: "#00ffa3", timer: 1600, showConfirmButton: false });
      setSelectedReviews([]);
      fetchReviews();
    } catch (err) {
      Swal.fire({ title: "❌ Error", text: err.message || "Bulk reply failed!", icon: "error", background: "#0a0a0a", color: "#fff", confirmButtonColor: "#ef4444" });
    }
  };

  const toggleStatus = async (id, currentStatus) => {
    const nextAction = currentStatus === "approved" ? "Hide" : "Show";
    const confirm = await Swal.fire({ title: `${nextAction} Review?`, text: `Bhai, is review ko ${nextAction.toLowerCase()} karna hai?`, icon: "question", showCancelButton: true, confirmButtonText: `Yes, ${nextAction}`, cancelButtonText: "Cancel", background: "#0a0a0a", color: "#fff", confirmButtonColor: currentStatus === "approved" ? "#f59e0b" : "#00ffa3", cancelButtonColor: "#334155" });
    if (!confirm.isConfirmed) return;
    try {
      const res = await fetch(`${API}/api/reviews/status/${id}`, { method: "PATCH" });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        await Swal.fire({ title: "✅ Updated", text: data.msg || data.message || `Review ${nextAction.toLowerCase()} ho gaya.`, icon: "success", background: "#0a0a0a", color: "#fff", confirmButtonColor: "#00ffa3", timer: 1400, showConfirmButton: false });
        fetchReviews();
      }
    } catch (err) {
      Swal.fire({ title: "❌ Server Error", text: "Server connection failed!", icon: "error", background: "#0a0a0a", color: "#fff", confirmButtonColor: "#ef4444" });
    }
  };

  const deleteReview = async (id) => {
    const confirm = await Swal.fire({ title: "Delete Review?", text: "Pakka delete karna hai bhai? Ye wapas nahi aayega!", icon: "warning", showCancelButton: true, confirmButtonText: "Delete", cancelButtonText: "Cancel", background: "#0a0a0a", color: "#fff", confirmButtonColor: "#ef4444", cancelButtonColor: "#334155" });
    if (!confirm.isConfirmed) return;
    try {
      const res = await fetch(`${API}/api/reviews/delete/${id}`, { method: "DELETE" });
      if (res.ok) {
        await Swal.fire({ title: "🗑️ Deleted", text: "Review delete ho gaya.", icon: "success", background: "#0a0a0a", color: "#fff", confirmButtonColor: "#00ffa3", timer: 1400, showConfirmButton: false });
        setSelectedReviews((prev) => prev.filter((item) => item !== id));
        fetchReviews();
      }
    } catch (err) {
      Swal.fire({ title: "❌ Error", text: "Delete failed!", icon: "error", background: "#0a0a0a", color: "#fff", confirmButtonColor: "#ef4444" });
    }
  };

  const submitReply = async (id) => {
    if (!replyText.trim()) return Swal.fire({ title: "⚠️ Empty Reply", text: "Bhai kuch likho to!", icon: "warning", background: "#0a0a0a", color: "#fff", confirmButtonColor: "#f59e0b" });
    try {
      const res = await fetch(`${API}/api/reviews/update/${id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ adminReply: replyText.trim() }) });
      if (res.ok) {
        await Swal.fire({ title: "✅ Saved", text: "Reply Saved!", icon: "success", background: "#0a0a0a", color: "#fff", confirmButtonColor: "#00ffa3", timer: 1400, showConfirmButton: false });
        setOpenReply(null);
        setReplyText("");
        fetchReviews();
      }
    } catch (err) {
      Swal.fire({ title: "❌ Error", text: "Reply failed!", icon: "error", background: "#0a0a0a", color: "#fff", confirmButtonColor: "#ef4444" });
    }
  };

  return (
    <>
      <style>{`:root{--review-bg:#0a0a0a;--review-card:#141414;--review-primary:#00ffa3;--review-danger:#ff4d4d;--review-text:#fff}.review-page{font-family:"Segoe UI",sans-serif;background:var(--review-bg);color:var(--review-text);min-height:100vh;margin:0;padding:0}.review-topbar{position:sticky;top:0;z-index:1000;background:#000;width:100%;margin:0;padding:10px 0;border-bottom:2px solid #222;box-shadow:0 4px 15px rgba(0,0,0,.6)}.review-top-inner{display:flex;justify-content:space-between;align-items:center;padding:10px 20px;gap:12px}.review-title{margin:0;font-size:18px;color:#00ff88;white-space:nowrap}.review-bulk-panel{display:flex;align-items:center;justify-content:center;gap:8px;flex-wrap:wrap}.review-bulk-input{width:85px;padding:8px;background:#111;border:1px solid #333;border-radius:6px;color:#fff;outline:none;font-weight:bold}.review-bulk-input:focus{border-color:#00ffa3}.review-bulk-chip{background:#111;border:1px solid rgba(0,255,163,.4);color:#00ffa3;padding:7px 10px;border-radius:6px;font-size:11px;font-weight:bold}.review-stat-box{background:#1a1a1a;padding:5px 12px;border-radius:6px;border-left:3px solid #00ff88;min-width:100px;text-align:center}.review-stat-box small{color:#888;text-transform:uppercase;font-size:9px;display:block}.review-stat-box span{color:#00ff88;font-size:16px;font-weight:bold}.review-dashboard-link{background:#2563eb;color:#fff;padding:6px 14px;border-radius:6px;font-size:11px;font-weight:bold;text-decoration:none}.review-dashboard-link:hover{background:#1d4ed8}.review-search-row{display:flex;justify-content:center;align-items:center;gap:10px;padding:5px 20px 10px}.review-search{width:40%;min-width:200px;padding:10px;border-radius:8px;background:#1a1a1a;border:1px solid #333;color:#fff;outline:none}.review-search:focus{border-color:var(--review-primary)}.review-reset-btn{background:#2d333b;border:1px solid #3d444d;color:#fff;width:38px;height:38px;border-radius:8px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:.3s}.review-reset-btn:hover{background:#3d444d}.review-list{max-width:900px;margin:25px auto;padding:0 20px}.review-card{background:var(--review-card);border-left:4px solid var(--review-primary);padding:15px;margin-bottom:15px;border-radius:8px;transition:.3s}.review-card-selected{box-shadow:0 0 18px rgba(0,255,163,.25);border-left-color:#ffd700}.review-card-head{display:flex;justify-content:space-between;align-items:center;gap:10px}.review-user-wrap{display:flex;align-items:center;gap:10px}.review-check{width:18px;height:18px;cursor:pointer;accent-color:#00ffa3}.review-user-info{font-weight:bold;font-size:1.1rem}.review-stars{color:#ffd700}.review-comment{margin:10px 0;color:#ccc;line-height:1.5}.review-admin-reply{margin:10px 0;color:#00ffa3;font-size:.9rem}.review-status-tag{font-size:.8rem;padding:3px 9px;border-radius:4px;font-weight:bold;text-transform:uppercase}.review-status-approved{background:rgba(0,255,163,.2);color:var(--review-primary)}.review-status-hidden{background:rgba(255,77,77,.2);color:var(--review-danger)}.review-actions{margin-top:15px;display:flex;gap:10px;flex-wrap:wrap}.review-btn{cursor:pointer;border:none;padding:8px 18px;border-radius:5px;font-weight:bold;transition:.2s}.review-btn:hover{opacity:.8}.review-btn-reply{background:#333;color:#fff}.review-btn-hide{background:orange;color:#000}.review-btn-delete{background:var(--review-danger);color:#fff}.review-btn-bulk-select{background:#00ffa3;color:#000}.review-btn-bulk-clear{background:#333;color:#fff}.review-btn-bulk-reply{background:#2563eb;color:#fff}.review-reply-box{margin-top:15px;padding:10px;background:#1c1c1c;border-radius:8px;border:1px solid #333}.review-textarea{width:100%;background:#222;border:1px solid #444;color:#fff;padding:10px;border-radius:5px;resize:none;min-height:80px;box-sizing:border-box}.review-send-reply{margin-top:8px;width:100%;background:var(--review-primary);color:#000}.review-empty{text-align:center;color:#aaa;margin-top:40px}.review-loading{text-align:center;color:#00ffa3;margin-top:40px;font-weight:bold}@media(max-width:900px){.review-top-inner{flex-direction:column}.review-bulk-panel{width:100%}.review-search{width:100%}}@media(max-width:700px){.review-top-inner{flex-direction:column}.review-search{width:100%}.review-search-row{align-items:stretch}.review-title{white-space:normal;text-align:center}.review-card-head{flex-direction:column;align-items:flex-start}}`}</style>
      <div className="review-page" onClick={() => setOpenReply(null)}>
        <div className="review-topbar" onClick={(e) => e.stopPropagation()}>
          <div className="review-top-inner">
            <h2 className="review-title">Review Management Panel</h2>
            <div className="review-bulk-panel">
              <input type="number" min="1" className="review-bulk-input" value={bulkCount} onChange={(e) => setBulkCount(e.target.value)} placeholder="1000" />
              <button className="review-btn review-btn-bulk-select" onClick={selectFirstNReviews}>
                Select
              </button>
              <button className="review-btn review-btn-bulk-clear" onClick={clearSelection}>
                Clear
              </button>
              <button className="review-btn review-btn-hide" onClick={() => bulkStatusUpdate("hidden")}>
                Hide
              </button>
              <button className="review-btn review-btn-bulk-select" onClick={() => bulkStatusUpdate("approved")}>
                Show
              </button>
              <button className="review-btn review-btn-bulk-reply" onClick={bulkReplyReviews}>
                Reply
              </button>
              <button className="review-btn review-btn-delete" onClick={bulkDeleteReviews}>
                Delete
              </button>
              <span className="review-bulk-chip">Selected: {selectedReviews.length.toLocaleString("en-IN")}</span>
            </div>
            <div className="review-stat-box">
              <small>Total Reviews</small>
              <span>{reviews.length.toLocaleString("en-IN")}</span>
            </div>
            <Link to="/admin" className="review-dashboard-link">
              DASHBOARD
            </Link>
          </div>
          <div className="review-search-row">
            <input type="text" className="review-search" placeholder="🔍 Search by username..." value={search} onChange={(e) => setSearch(e.target.value)} />
            <button className="review-reset-btn" onClick={resetAllFilters}>
              <i className="fas fa-sync-alt"></i>
            </button>
          </div>
        </div>
        <div className="review-list">
          {loading ? (
            <p className="review-loading">🔄 Loading reviews...</p>
          ) : filteredReviews.length === 0 ? (
            <p className="review-empty">No reviews found!</p>
          ) : (
            filteredReviews.map((rev) => {
              const currentStatus = rev.status || "approved";
              const isSelected = selectedReviews.includes(rev._id);
              return (
                <div className={`review-card ${isSelected ? "review-card-selected" : ""}`} key={rev._id}>
                  <div className="review-card-head">
                    <div className="review-user-wrap">
                      <input className="review-check" type="checkbox" checked={isSelected} onChange={() => toggleSelectReview(rev._id)} />
                      <div className="review-user-info">
                        {rev.username || "Unknown User"} <span className="review-stars">{"★".repeat(Number(rev.rating) || 0)}</span>
                      </div>
                    </div>
                    <span className={`review-status-tag ${currentStatus === "approved" ? "review-status-approved" : "review-status-hidden"}`}>{currentStatus.toUpperCase()}</span>
                  </div>
                  <p className="review-comment">{rev.comment}</p>
                  {rev.adminReply ? (
                    <div className="review-admin-reply">
                      <strong>Admin:</strong> {rev.adminReply}
                    </div>
                  ) : null}
                  <div className="review-actions">
                    <button
                      className="review-btn review-btn-reply"
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenReply(openReply === rev._id ? null : rev._id);
                        setReplyText(rev.adminReply || "");
                      }}
                    >
                      Reply
                    </button>
                    <button
                      className="review-btn review-btn-hide"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleStatus(rev._id, currentStatus);
                      }}
                    >
                      {currentStatus === "approved" ? "Hide" : "Show"}
                    </button>
                    <button
                      className="review-btn review-btn-delete"
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteReview(rev._id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                  {openReply === rev._id && (
                    <div className="review-reply-box" onClick={(e) => e.stopPropagation()}>
                      <textarea className="review-textarea" placeholder="Apna jawab likho..." value={replyText} onChange={(e) => setReplyText(e.target.value)}></textarea>
                      <button className="review-btn review-send-reply" onClick={() => submitReply(rev._id)}>
                        Send Reply
                      </button>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}

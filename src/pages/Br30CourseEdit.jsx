import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function Br30CourseEdit() {
  const API = import.meta.env.VITE_API_URL;
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCourses();
  }, []);

  const getImageUrl = (thumbnail) => {
    if (!thumbnail) return "/images/BR30Trader.png";
    if (thumbnail.startsWith("http")) return `${thumbnail}?t=${Date.now()}`;
    return `${API}/${thumbnail}`.replace(/([^:]\/)\/+/g, "$1") + `?t=${Date.now()}`;
  };

  const fetchCourses = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API}/api/courses`);
      const data = await res.json();
      setCourses(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Fetch Error:", err);
      Swal.fire("Error", "Course database connection failed!", "error");
    } finally {
      setTimeout(() => setLoading(false), 400);
    }
  };

  const copyID = (id) => {
    navigator.clipboard.writeText(id);
    Swal.fire({ title: "ID Copied! ✅", text: id, timer: 1000, showConfirmButton: false, background: "#0a0a0a", color: "#00ff88" });
  };

  const openEdit = async (course) => {
    const { value: formValues } = await Swal.fire({ title: '<span style="color:#a020f0">Edit Full Course</span>', background: "#0a0a0a", color: "#fff", html: `<div style="text-align:left;padding:0 10px;"><label style="font-size:12px;color:#64748b;">Course Title</label><input id="sw-title" class="swal2-input" value="${course.title || ""}" style="background:#111;color:white;border-color:#a020f0;margin-top:5px;width:85%;"><label style="font-size:12px;color:#64748b;">Price (INR)</label><input id="sw-price" class="swal2-input" value="${course.price || ""}" type="number" style="background:#111;color:white;border-color:#a020f0;margin-top:5px;width:85%;"><label style="font-size:12px;color:#64748b;">Thumbnail (Folder se Select Karo)</label><input type="file" id="sw-file" class="swal2-input" accept="image/*" style="background:#111;color:white;border-color:#a020f0;margin-top:5px;width:85%;padding:10px;font-size:12px;"><label style="font-size:12px;color:#64748b;">Video Link</label><input id="sw-video" class="swal2-input" value="${course.videoUrl || ""}" style="background:#111;color:white;border-color:#a020f0;margin-top:5px;width:85%;"></div>`, showCancelButton: true, confirmButtonText: "SAVE CHANGES 🚀", preConfirm: () => ({ title: document.getElementById("sw-title").value, price: document.getElementById("sw-price").value, videoUrl: document.getElementById("sw-video").value, imageFile: document.getElementById("sw-file").files }) });
    if (!formValues) return;
    try {
      const formData = new FormData();
      formData.append("title", formValues.title);
      formData.append("price", formValues.price);
      formData.append("videoUrl", formValues.videoUrl);
      if (formValues.imageFile.length > 0) formData.append("thumbnail", formValues.imageFile[0]);
      const res = await fetch(`${API}/api/courses/update-course/${course._id}`, { method: "PUT", headers: { "x-auth-token": localStorage.getItem("token") }, body: formData });
      const data = await res.json();
      if (data.success || res.ok) {
        Swal.fire({ title: "Updated!", icon: "success", background: "#0a0a0a", color: "#fff", timer: 1500, showConfirmButton: false });
        fetchCourses();
      } else {
        Swal.fire("Error", data.msg || "Update failed", "error");
      }
    } catch (err) {
      console.error("Update fail:", err);
      Swal.fire("Error", "Update failed!", "error");
    }
  };

  const deleteCourse = async (id) => {
    const check = await Swal.fire({ title: "Delete Course?", text: "Bhai, pakka udaana hai? Wapas nahi aayega!", icon: "warning", showCancelButton: true, confirmButtonColor: "#ef4444", background: "#0a0a0a", color: "#fff" });
    if (!check.isConfirmed) return;
    try {
      const res = await fetch(`${API}/api/courses/delete-course/${id}`, { method: "DELETE", headers: { "x-auth-token": localStorage.getItem("token") } });
      if (res.ok) {
        Swal.fire({ title: "Deleted!", icon: "success", background: "#0a0a0a", color: "#fff", timer: 1500, showConfirmButton: false });
        fetchCourses();
      } else {
        Swal.fire("Error", "Delete failed!", "error");
      }
    } catch (err) {
      console.error("Delete Fail:", err);
      Swal.fire("Error", "Delete failed!", "error");
    }
  };

  return (
    <>
      <style>{`.course-edit-page{background:#050505;color:#fff;font-family:Poppins,sans-serif;min-height:100vh;padding:20px;box-sizing:border-box}.course-edit-container{max-width:1100px;margin:auto}.course-edit-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:30px;border-left:5px solid #a020f0;padding-left:15px;gap:15px}.course-edit-header h1{margin:0;font-size:32px}.course-edit-subtitle{color:#64748b;margin-top:6px}.course-edit-back-btn{background:#1a1a1a;color:#a020f0;border:1px solid #a020f0;padding:10px 20px;border-radius:8px;text-decoration:none;font-weight:bold;transition:.3s;display:inline-flex;align-items:center;gap:8px}.course-edit-back-btn:hover{background:#a020f0;color:#fff}.course-edit-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:25px;opacity:1;transition:opacity .4s ease-in-out}.course-edit-card{background:#0a0a0a;border:1px solid #1e293b;border-radius:20px;padding:15px;transition:.3s;box-shadow:0 10px 20px rgba(0,0,0,.5)}.course-edit-card:hover{transform:translateY(-5px);border-color:#a020f0}.course-id-box{background:rgba(160,32,240,.1);border:1px dashed #a020f0;padding:6px;border-radius:8px;margin-bottom:12px;display:flex;justify-content:space-between;align-items:center}.course-id-text{font-size:10px;color:#a020f0;font-weight:bold;font-family:"Courier New",monospace;word-break:break-all}.course-copy-btn{background:none;border:none;color:#fff;cursor:pointer;font-size:14px}.course-edit-img{width:100%;height:180px;border-radius:12px;object-fit:cover;margin-bottom:15px;background:#111}.course-edit-card h3{margin:0 0 10px 0;font-size:18px;color:#fff}.course-edit-price{font-size:22px;font-weight:800;color:#00ff88;margin-bottom:20px}.course-edit-actions{display:flex;gap:10px}.course-edit-btn{flex:2;background:#a020f0;color:#fff;border:none;padding:12px;border-radius:10px;cursor:pointer;font-weight:bold;font-size:12px;text-transform:uppercase}.course-del-btn{flex:1;background:#ef4444;color:#fff;border:none;border-radius:10px;cursor:pointer}.course-loading,.course-empty{grid-column:1/-1;text-align:center;color:#a020f0;width:100%;font-weight:bold}.course-empty{color:#64748b}@media(max-width:700px){.course-edit-header{flex-direction:column;align-items:flex-start}.course-edit-header h1{font-size:24px}.course-edit-grid{grid-template-columns:1fr}}`}</style>
      <div className="course-edit-page">
        <div className="course-edit-container">
          <div className="course-edit-header">
            <div>
              <h1>Course Management</h1>
              <p className="course-edit-subtitle">Update Prices & Details Instantly</p>
            </div>
            <Link to="/admin" className="course-edit-back-btn">
              <i className="fas fa-arrow-left"></i>Back to Dashboard
            </Link>
          </div>
          <div className="course-edit-grid">
            {loading ? (
              <p className="course-loading">🔄 Syncing with BR30 Database...</p>
            ) : courses.length === 0 ? (
              <p className="course-empty">Abhi tak koi course nahi hai bhai!</p>
            ) : (
              courses.map((course) => (
                <div className="course-edit-card" key={course._id}>
                  <div className="course-id-box">
                    <span className="course-id-text">ID: {course._id}</span>
                    <button className="course-copy-btn" onClick={() => copyID(course._id)} title="Copy ID">
                      <i className="fas fa-copy"></i>
                    </button>
                  </div>
                  <img
                    src={getImageUrl(course.thumbnail)}
                    className="course-edit-img"
                    alt={course.title || "course"}
                    onError={(e) => {
                      e.currentTarget.src = "/images/BR30Trader.png";
                    }}
                  />
                  <h3>{course.title}</h3>
                  <p className="course-edit-price">₹{Number(course.price || 0).toLocaleString("en-IN")}</p>
                  <div className="course-edit-actions">
                    <button className="course-edit-btn" onClick={() => openEdit(course)}>
                      <i className="fas fa-edit"></i> EDIT FULL COURSE
                    </button>
                    <button className="course-del-btn" onClick={() => deleteCourse(course._id)}>
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

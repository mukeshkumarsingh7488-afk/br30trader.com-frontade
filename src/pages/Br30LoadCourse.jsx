import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Br30LoadCourse() {
  const API = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const priceRef = useRef(null);
  const thumbnailRef = useRef(null);
  const courseSelectRef = useRef(null);
  const videoTitleRef = useRef(null);
  const videoUrlRef = useRef(null);
  const [courses, setCourses] = useState([]);
  const [courseMsg, setCourseMsg] = useState(false);
  const [videoMsg, setVideoMsg] = useState(false);
  const [courseLoading, setCourseLoading] = useState(false);
  const [videoLoading, setVideoLoading] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      Swal.fire("Security Alert", "Admin login required! 🔑", "warning");
      navigate("/login");
      return;
    }
    loadCourses();
  }, []);

  const loadCourses = async () => {
    try {
      const res = await fetch(`${API}/api/courses`);
      const data = await res.json();
      setCourses(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Dropdown Load Error:", err);
      Swal.fire("Error", "Courses dropdown load nahi hua", "error");
    }
  };

  const handleEnter = (e, nextRef) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (nextRef?.current) nextRef.current.focus();
    }
  };

  const createCourse = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) {
      Swal.fire("Token Missing", "Pehle admin login karo", "error");
      navigate("/login");
      return;
    }
    const title = titleRef.current.value.trim();
    const description = descriptionRef.current.value.trim();
    const price = priceRef.current.value;
    const file = thumbnailRef.current.files[0];
    if (!title || !description || !price || !file) return Swal.fire("Missing Field", "Saare fields fill karo bhai", "warning");
    setCourseLoading(true);
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("thumbnail", file);
      const res = await fetch(`${API}/api/courses/add`, { method: "POST", headers: { "x-auth-token": token }, body: formData });
      const data = await res.json();
      if (res.ok) {
        Swal.fire("Success", "✅ Course Ban Gaya Bhai!", "success");
        setCourseMsg(true);
        e.target.reset();
        loadCourses();
        setTimeout(() => setCourseMsg(false), 3000);
      } else {
        Swal.fire("Error", data.msg || "Server ne mana kar diya", "error");
      }
    } catch (err) {
      console.error("Fetch Error:", err);
      Swal.fire("Server Error", "Server connect nahi ho raha!", "error");
    } finally {
      setCourseLoading(false);
    }
  };

  const addVideo = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) {
      Swal.fire("Token Missing", "Pehle admin login karo", "error");
      navigate("/login");
      return;
    }
    const courseId = selectedCourse;
    const title = videoTitleRef.current.value.trim();
    const videoUrl = videoUrlRef.current.value.trim();
    if (!courseId) return Swal.fire("Course Missing", "Pehle Course select karle bhai! 🛑", "warning");
    if (!title || !videoUrl) return Swal.fire("Missing Field", "Video title aur URL dono likho", "warning");
    setVideoLoading(true);
    try {
      const res = await fetch(`${API}/api/courses/add-video/${courseId}`, { method: "PUT", headers: { "Content-Type": "application/json", "x-auth-token": token }, body: JSON.stringify({ title, videoUrl }) });
      const data = await res.json();
      if (res.ok) {
        Swal.fire("Success", "📹 Video successfully add ho gayi!", "success");
        setVideoMsg(true);
        e.target.reset();
        setSelectedCourse("");
        setTimeout(() => setVideoMsg(false), 3000);
      } else {
        Swal.fire("Error", data.msg || "Update Fail", "error");
      }
    } catch (err) {
      console.error("Video Fetch Error:", err);
      Swal.fire("Server Error", "Video add nahi ho paya", "error");
    } finally {
      setVideoLoading(false);
    }
  };

  return (
    <>
      <style>{`*{margin:0;padding:0;box-sizing:border-box}.load-course-page{min-height:100vh;display:flex;align-items:center;justify-content:center;background:#050505;padding:20px;color:#fff;font-family:"Poppins",sans-serif}.load-admin-container{background:#1e293b;width:100%;max-width:900px;padding:40px;border-radius:15px;box-shadow:0 20px 50px rgba(0,0,0,.5);border:1px solid rgba(160,32,240,.2)}.load-header-flex{display:flex;justify-content:space-between;align-items:center;margin-bottom:40px;border-bottom:1px solid rgba(255,255,255,.1);padding-bottom:20px;gap:15px}.load-header-flex h1{color:#fff;font-size:28px;font-weight:700}.load-header-flex h1 span{color:#a020f0}.load-back-btn{text-decoration:none;color:#fff;font-weight:600;font-size:14px;padding:10px 20px;border-radius:50px;background:#a020f0;transition:.3s ease}.load-back-btn:hover{background:#8a1bd0;transform:scale(1.05)}.load-admin-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:25px}.load-form-section{text-align:left;padding:25px;background:rgba(255,255,255,.03);border-radius:12px;border:1px solid rgba(255,255,255,.05);transition:.3s}.load-form-section:hover{border-color:#a020f0;box-shadow:0 0 15px rgba(160,32,240,.2)}.load-form-section h2{font-size:20px;color:#a020f0;margin-bottom:20px;display:flex;align-items:center;gap:10px}.load-form-group{margin-bottom:20px}.load-form-group label{display:block;font-size:13px;font-weight:500;color:#cbd5e1;margin-bottom:8px}.load-form-group input,.load-form-group textarea,.load-form-group select{width:100%;padding:12px;border-radius:8px;border:1px solid #334155;background:#050505;color:#fff;font-size:14px;transition:.3s;box-sizing:border-box}.load-form-group input:focus,.load-form-group textarea:focus,.load-form-group select:focus{border-color:#a020f0;outline:none;box-shadow:0 0 8px rgba(160,32,240,.3)}.load-submit-btn{width:100%;background:#a020f0;padding:14px;font-weight:bold;font-size:16px;border-radius:8px;border:none;color:#fff;cursor:pointer;transition:.3s;text-transform:uppercase;letter-spacing:1px}.load-submit-btn:hover{background:#8a1bd0;transform:translateY(-3px);box-shadow:0 10px 20px rgba(160,32,240,.4)}.load-submit-btn:disabled{background:#444;color:#888;cursor:not-allowed;transform:none}.load-success-msg{background:rgba(37,211,102,.1);color:#25d366;padding:12px;border-radius:8px;font-size:13px;font-weight:600;margin-top:15px;text-align:center;border:1px solid #25d366}@media(max-width:768px){.load-course-page{padding:10px}.load-admin-container{padding:20px;border-radius:10px}.load-header-flex{flex-direction:column;gap:15px;text-align:center}.load-header-flex h1{font-size:22px}.load-admin-grid{grid-template-columns:1fr}}`}</style>
      <div className="load-course-page">
        <div className="load-admin-container">
          <div className="load-header-flex">
            <h1>
              🚀 <span>Admin</span> Panel
            </h1>
            <Link to="/admin" className="load-back-btn">
              ← Back to Dashboard
            </Link>
          </div>
          <div className="load-admin-grid">
            <div className="load-form-section">
              <h2>📚 Create Course</h2>
              <form onSubmit={createCourse}>
                <div className="load-form-group">
                  <label>Course Title</label>
                  <input ref={titleRef} onKeyDown={(e) => handleEnter(e, descriptionRef)} type="text" placeholder="e.g. Master Options Trading" required />
                </div>
                <div className="load-form-group">
                  <label>Description</label>
                  <textarea ref={descriptionRef} onKeyDown={(e) => handleEnter(e, priceRef)} rows="3" placeholder="Briefly describe the course content..." required></textarea>
                </div>
                <div className="load-form-group">
                  <label>Price (INR)</label>
                  <input ref={priceRef} onKeyDown={(e) => handleEnter(e, thumbnailRef)} type="number" placeholder="₹999" required />
                </div>
                <div className="load-form-group">
                  <label>Thumbnail Image</label>
                  <input ref={thumbnailRef} type="file" accept="image/*" required />
                </div>
                <button type="submit" className="load-submit-btn" disabled={courseLoading}>
                  {courseLoading ? "Publishing..." : "Publish Course"}
                </button>
                {courseMsg && <div className="load-success-msg">Course Created Successfully! 🎉</div>}
              </form>
            </div>
            <div className="load-form-section">
              <h2>🎬 Add Course Content</h2>
              <form onSubmit={addVideo}>
                <div className="load-form-group">
                  <label>Target Course</label>
                  <select ref={courseSelectRef} value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)} required>
                    <option value="">-- Choose Target Course --</option>
                    {courses.map((c) => (
                      <option value={c._id} key={c._id}>
                        {c.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="load-form-group">
                  <label>Video Title</label>
                  <input ref={videoTitleRef} onKeyDown={(e) => handleEnter(e, videoUrlRef)} type="text" placeholder="e.g. Lesson 01: Setup" required />
                </div>
                <div className="load-form-group">
                  <label>Video URL (YouTube/Cloud)</label>
                  <input ref={videoUrlRef} type="text" placeholder="https://..." required />
                </div>
                <button type="submit" className="load-submit-btn" disabled={videoLoading}>
                  {videoLoading ? "Adding..." : "Add to Curriculum"}
                </button>
                {videoMsg && <div className="load-success-msg">Video Integrated Successfully! 🎬</div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

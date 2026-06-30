import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const API_BASE_URL = window.API_BASE_URL || import.meta.env.VITE_API_BASE_URL || "https://my-backend-1-avpd.onrender.com";

export default function MyCourse() {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getToken = () => localStorage.getItem("br30_token") || localStorage.getItem("token");

  useEffect(() => {
    fetchMyCourses();
  }, []);

  const fetchMyCourses = async () => {
    const token = getToken();

    if (!token) {
      alert("Please login first!");
      navigate("/login", { replace: true });
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await fetch(`${API_BASE_URL}/api/courses/my-courses`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (res.status === 401 || res.status === 403) {
        alert("Session expired, please login again.");
        localStorage.removeItem("br30_token");
        localStorage.removeItem("br30_user");
        localStorage.removeItem("token");
        localStorage.removeItem("userData");
        navigate("/login", { replace: true });
        return;
      }

      if (!res.ok) {
        throw new Error(data.msg || data.message || "Courses load nahi ho paya.");
      }

      setCourses(Array.isArray(data) ? data : data.courses || []);
    } catch (err) {
      console.error("MyCourse Error:", err);
      setError("Connection error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const getThumbUrl = (course) => {
    if (!course?.thumbnail) return "https://via.placeholder.com/600x350?text=No+Image";
    return course.thumbnail.startsWith("http") ? course.thumbnail : `${API_BASE_URL}/${course.thumbnail}`;
  };

  const watchCourse = (courseId) => {
    navigate(`/watch?id=${courseId}`);
  };

  const styles = `*{box-sizing:border-box}.mycourse-page{min-height:calc(100vh - 120px);background:#050505;color:#fff;padding:40px 20px 70px;font-family:"Poppins",sans-serif}.mycourse-wrap{max-width:700px;margin:0 auto;text-align:center}.mycourse-title{font-size:28px;font-weight:800;margin:0 0 10px;color:#fff}.mycourse-sub{color:#94a3b8;font-size:15px;margin-bottom:30px}.loading-text,.error-text,.empty-text{color:#94a3b8;font-size:15px;text-align:center;margin-top:30px}.error-text{color:#f87171}.course-card{background:#1e293b;padding:22px;margin:22px 0;border-radius:20px;border:1px solid #334155;box-shadow:0 10px 25px rgba(0,0,0,.3);text-align:left;transition:.3s}.course-card:hover{border-color:#a020f0;transform:translateY(-5px);box-shadow:0 15px 35px rgba(160,32,240,.18)}.course-card img{width:100%;height:auto;object-fit:contain;border-radius:12px;margin-bottom:15px;border:1px solid #334155;background:#050505;display:block}.course-card h3{color:#a020f0;font-size:21px;margin:0 0 8px;font-weight:800}.course-card p{color:#cbd5e1;font-size:14px;line-height:1.6;margin:0 0 16px}.watch-btn,.browse-btn{width:100%;background:#a020f0;color:#fff;border:none;padding:13px;border-radius:10px;cursor:pointer;font-weight:700;font-size:15px;transition:.3s;text-align:center;display:block;text-decoration:none}.watch-btn:hover,.browse-btn:hover{background:#8219c4;box-shadow:0 5px 15px rgba(160,32,240,.3);transform:translateY(-2px)}.empty-box{background:#1e293b;border:1px solid #334155;border-radius:20px;padding:30px;margin-top:25px}.empty-box h2{font-size:24px;margin:0 0 10px;color:#fff}.empty-box p{color:#94a3b8;margin-bottom:20px}@media(max-width:480px){.mycourse-page{padding:35px 14px 60px}.mycourse-title{font-size:22px}.course-card{padding:16px}.course-card img{height:auto}.course-card h3{font-size:18px}}`;

  return (
    <>
      <style>{styles}</style>

      <section className="mycourse-page">
        <div className="mycourse-wrap">
          <h1 className="mycourse-title">🎓 My Courses</h1>
          <p className="mycourse-sub">Your purchased courses are listed below.</p>

          {loading && <p className="loading-text">Loading your courses...</p>}

          {!loading && error && <p className="error-text">{error}</p>}

          {!loading && !error && courses.length === 0 && (
            <div className="empty-box">
              <h2>No Courses Found 🔒</h2>
              <p>Aapne abhi tak koi course purchase nahi kiya hai.</p>
              <Link to="/dashboard/?scroll=coursesection" className="browse-btn">
                Browse Courses
              </Link>
            </div>
          )}

          {!loading &&
            !error &&
            courses.map((course) => (
              <div className="course-card" key={course._id || course.id}>
                <img
                  src={getThumbUrl(course)}
                  alt={course.title || "Course"}
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/600x350?text=No+Image";
                  }}
                />
                <h3>{course.title || "Untitled Course"}</h3>
                <p>{course.description || "No description available."}</p>
                <button className="watch-btn" onClick={() => watchCourse(course._id || course.id)}>
                  Watch Now
                </button>
              </div>
            ))}
        </div>
      </section>
    </>
  );
}

import { useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Swal from "sweetalert2";

const API_BASE_URL = window.API_BASE_URL || import.meta.env.VITE_API_BASE_URL || "https://my-backend-1-avpd.onrender.com";

export default function CourseWatch() {
  const [searchParams] = useSearchParams();
  const courseId = searchParams.get("id");

  const playerRef = useRef(null);
  const playerBoxRef = useRef(null);

  const [course, setCourse] = useState(null);
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [certOpen, setCertOpen] = useState(false);
  const [certName, setCertName] = useState("");
  const [certMobile, setCertMobile] = useState("");
  const [claimLoading, setClaimLoading] = useState(false);

  const getToken = () => localStorage.getItem("br30_token") || localStorage.getItem("token");

  const getYTID = (url) => {
    try {
      if (!url) return null;
      const u = new URL(url);
      if (u.hostname.includes("youtu.be")) return u.pathname.slice(1);
      if (u.pathname.includes("/shorts/")) return u.pathname.split("/shorts/")[1].split("?")[0];
      if (u.pathname.includes("/embed/")) return u.pathname.split("/embed/")[1].split("?")[0];
      return u.searchParams.get("v");
    } catch {
      return null;
    }
  };

  const loadYouTubeApi = () => {
    return new Promise((resolve) => {
      if (window.YT && window.YT.Player) {
        resolve(window.YT);
        return;
      }

      const oldCallback = window.onYouTubeIframeAPIReady;

      window.onYouTubeIframeAPIReady = () => {
        if (typeof oldCallback === "function") oldCallback();
        resolve(window.YT);
      };

      if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);
      }
    });
  };

  const openCertificatePopup = () => {
    setCertOpen(true);
  };

  const createPlayer = async (videoId) => {
    if (!videoId || !playerBoxRef.current) return;

    const YT = await loadYouTubeApi();

    if (playerRef.current && typeof playerRef.current.destroy === "function") {
      playerRef.current.destroy();
      playerRef.current = null;
    }

    playerBoxRef.current.innerHTML = `<div id="yt-player-box"></div>`;

    playerRef.current = new YT.Player("yt-player-box", {
      width: "100%",
      height: "100%",
      videoId,
      playerVars: {
        rel: 0,
        modestbranding: 1,
        playsinline: 1,
      },
      events: {
        onStateChange: (event) => {
          if (event.data === YT.PlayerState.ENDED) {
            openCertificatePopup();
          }
        },
      },
    });
  };

  const loadCourseContent = async () => {
    const token = getToken();

    if (!token) {
      window.location.href = "/login";
      return;
    }

    if (!courseId) {
      window.location.href = "/mycourse";
      return;
    }

    try {
      const res = await fetch(`${API_BASE_URL}/api/courses/${courseId}`, {
        headers: {
          "x-auth-token": token,
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || data.msg || "Course load failed");

      const finalCourse = data.course || data;
      const finalVideos = finalCourse.videos || [];

      setCourse(finalCourse);
      setVideos(finalVideos);

      if (finalVideos.length > 0) setCurrentVideo(finalVideos[0]);
    } catch (err) {
      Swal.fire({ icon: "error", title: "Course Load Failed", text: err.message, background: "#0a0a0a", color: "#fff" });
    }
  };

  useEffect(() => {
    document.title = "Watch Course | BR30 Trader";
    loadCourseContent();

    return () => {
      if (playerRef.current && typeof playerRef.current.destroy === "function") {
        playerRef.current.destroy();
      }
    };
  }, [courseId]);

  useEffect(() => {
    const currentVideoId = getYTID(currentVideo?.videoUrl || "");
    if (currentVideoId) createPlayer(currentVideoId);
  }, [currentVideo]);

  const submitCertificate = async () => {
    const token = getToken();
    const name = certName.trim();
    const mobile = certMobile.trim();

    if (!name) {
      alert("Bhai, certificate ke liye apna poora naam toh likho!");
      return;
    }

    setClaimLoading(true);

    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/claim-certificate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          fullName: name,
          mobile,
          courseId,
          courseName: course?.title || "",
        }),
      });

      const data = await res.json();

      if (data.success) {
        window.open(data.downloadUrl, "_blank");

        Swal.fire({
          title: `<span style="color:#00ff88;font-weight:900;">SHABASH ${name.toUpperCase()}! 🏆</span>`,
          html: `<div style="color:#e2e8f0;font-size:15px;margin-top:10px;">Aapne <b>${course?.title || "Course"}</b> successfully finish kar liya hai.<br><br><span style="color:#94a3b8;">Certificate download ho raha hai. 🚀</span></div>`,
          icon: "success",
          iconColor: "#00ff88",
          background: "#0a0a0a",
          color: "#fff",
          confirmButtonText: "MAZA AA GAYA! 🔥",
          confirmButtonColor: "#00ff88",
        });

        setCertOpen(false);
      } else {
        Swal.fire({ icon: "error", title: "Oops!", text: data.msg || "Kuch gadbad hui!", background: "#0a0a0a", color: "#fff" });
      }
    } catch {
      Swal.fire({ icon: "warning", title: "Server Issue!", text: "Bhai, backend se connection nahi ho paa raha!", background: "#0a0a0a", color: "#fff" });
    } finally {
      setClaimLoading(false);
    }
  };

  const styles = `.watch-page{background:#050505;color:#fff;min-height:calc(100vh - 120px);font-family:"Poppins",sans-serif;padding:35px 20px}.watch-container{display:flex;flex-wrap:wrap;gap:20px;max-width:1200px;margin:0 auto}.video-player{flex:2;min-width:300px;background:#000;border-radius:15px;overflow:hidden;border:1px solid #334155;box-shadow:0 10px 30px rgba(0,0,0,.5)}.iframe-container{position:relative;width:100%;aspect-ratio:16/9;background:#000}.yt-player{width:100%;height:100%;border:0}.yt-player iframe{width:100%!important;height:100%!important;border:0!important;border-radius:15px 15px 0 0}.empty-video{width:100%;height:100%;background:#000;border-radius:15px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-size:14px}.current-video-title{padding:15px;color:#fff;background:#1e293b;margin:0;font-size:16px;font-weight:500;border-top:1px solid #334155}.video-list{flex:1;min-width:280px;background:#1e293b;padding:20px;border-radius:15px;height:fit-content;border:1px solid #334155}.video-list h3{font-size:18px;margin-bottom:15px;color:#a020f0;border-bottom:1px solid #334155;padding-bottom:10px}.playlist{max-height:400px;overflow-y:auto}.video-item{padding:12px;border-radius:8px;margin-bottom:8px;cursor:pointer;transition:.3s;font-size:14px;background:#050505;border:1px solid #334155;color:#cbd5e1}.video-item:hover,.video-item.active{background:#a020f0;color:#fff;border-color:#a020f0;transform:translateX(5px)}.complete-btn{background:#00ff88;color:#000;border:none;padding:13px;border-radius:10px;font-weight:900;cursor:pointer;width:100%;margin-top:15px;text-transform:uppercase;transition:.3s}.complete-btn:hover{transform:translateY(-2px);box-shadow:0 8px 20px rgba(0,255,136,.25)}.cert-overlay{display:flex;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.9);z-index:9999;justify-content:center;align-items:center;padding:20px}.cert-card{background:#0a0a0a;border:2px solid #00ff88;padding:30px;border-radius:20px;text-align:center;max-width:450px;width:100%;box-shadow:0 0 30px rgba(0,255,136,.3)}.cert-card h2{color:#00ff88;margin-bottom:10px}.cert-card p{color:#94a3b8;font-size:14px}.cert-input{width:100%;padding:12px;margin:10px 0;background:#111;border:1px solid #333;color:#fff;border-radius:8px;outline:none;box-sizing:border-box}.claim-btn{background:#00ff88;color:#000;border:none;padding:15px 30px;border-radius:10px;font-weight:900;cursor:pointer;width:100%;margin-top:15px;text-transform:uppercase}.claim-btn:disabled{opacity:.7;cursor:not-allowed}.later-text{color:#ff4d4d;cursor:pointer;margin-top:15px;font-size:12px}@media(max-width:768px){.watch-page{padding:20px 10px}.video-player,.video-list{flex:100%}}`;

  return (
    <>
      <style>{styles}</style>

      <main className="watch-page">
        <div className="watch-container">
          <div className="video-player">
            <div className="iframe-container">{currentVideo ? <div ref={playerBoxRef} className="yt-player"></div> : <div className="empty-video">Select a Video</div>}</div>

            <h2 className="current-video-title">{currentVideo?.title || "Select a Video"}</h2>
          </div>

          <aside className="video-list">
            <h3>Course Content</h3>

            <div className="playlist">
              {videos.length === 0 ? (
                <p style={{ fontSize: "13px", color: "#94a3b8" }}>Loading playlist...</p>
              ) : (
                videos.map((video, i) => (
                  <div key={video._id || i} className={`video-item ${(currentVideo?._id && currentVideo?._id === video._id) || currentVideo?.videoUrl === video.videoUrl ? "active" : ""}`} onClick={() => setCurrentVideo(video)}>
                    {i + 1}. {video.title}
                  </div>
                ))
              )}
            </div>

            {videos.length > 0 && (
              <button className="complete-btn" onClick={openCertificatePopup}>
                Claim Certificate 🏆
              </button>
            )}
          </aside>
        </div>

        {certOpen && (
          <div className="cert-overlay">
            <div className="cert-card">
              <h2>🏆 Congratulations!</h2>
              <p>Bhai, aapne course complete kar liya! Certificate ke liye apni details bharein:</p>

              <input type="text" className="cert-input" placeholder="Aapka Full Name" value={certName} onChange={(e) => setCertName(e.target.value)} />

              <input type="text" className="cert-input" placeholder="Mobile Number" value={certMobile} onChange={(e) => setCertMobile(e.target.value)} />

              <button className="claim-btn" onClick={submitCertificate} disabled={claimLoading}>
                {claimLoading ? "GENERATING CERTIFICATE... ⏳" : "Claim Certificate 🚀"}
              </button>

              <p className="later-text" onClick={() => setCertOpen(false)}>
                Maybe Later
              </p>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

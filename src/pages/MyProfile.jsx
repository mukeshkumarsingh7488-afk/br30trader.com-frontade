import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const API_BASE_URL = window.API_BASE_URL || import.meta.env.VITE_API_BASE_URL || "https://my-backend-1-avpd.onrender.com";

export default function MyProfile() {
  const navigate = useNavigate();

  const [user, setUser] = useState({ name: "Loading...", email: "Loading...", profilePic: "", role: "", badge: "" });
  const [editMode, setEditMode] = useState(false);
  const [editName, setEditName] = useState("");

  const avatarUrl = (name) => `https://ui-avatars.com/api/?name=${encodeURIComponent(name || "User")}&background=a020f0&color=fff&size=128&bold=true`;
  const getToken = () => localStorage.getItem("br30_token") || localStorage.getItem("token");

  const saveLocalUser = (finalUser) => {
    localStorage.setItem("br30_user", JSON.stringify(finalUser));
    localStorage.setItem("userData", JSON.stringify(finalUser));
    localStorage.setItem("username", finalUser.name || "User");
    localStorage.setItem("role", finalUser.role || "user");
  };

  const clearAuth = () => {
    localStorage.removeItem("br30_token");
    localStorage.removeItem("br30_user");
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    localStorage.removeItem("username");
    localStorage.removeItem("role");
  };

  const logout = () => {
    if (confirm("Confirm Logout?")) {
      clearAuth();
      navigate("/login", { replace: true });
      window.location.reload();
    }
  };

  const loadProfile = async () => {
    const token = getToken();

    if (!token) {
      alert("Please, Login First!");
      navigate("/login", { replace: true });
      return;
    }

    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/me`, {
        headers: { "x-auth-token": token, Authorization: `Bearer ${token}` },
      });

      if (!res.ok) throw new Error("Session Expired");

      const data = await res.json();
      const finalUser = data.user || data;

      const updatedUser = {
        name: finalUser.name || "No Name",
        email: finalUser.email || "No Email",
        profilePic: finalUser.profilePic || "",
        role: finalUser.role || "",
        badge: finalUser.badge || "",
      };

      setUser(updatedUser);
      setEditName(updatedUser.name);
      saveLocalUser(updatedUser);
    } catch (err) {
      console.error("Profile Load Error:", err);
      clearAuth();
      navigate("/login", { replace: true });
    }
  };

  useEffect(() => {
    loadProfile();
  }, []);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const token = getToken();
    if (!token) return logout();

    const formData = new FormData();
    formData.append("profilePic", file);

    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/update-profile`, {
        method: "PUT",
        headers: { "x-auth-token": token, Authorization: `Bearer ${token}` },
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.msg || data.message || "Upload failed!");

      const updatedUser = data.user || data;
      const finalUser = { ...user, ...updatedUser, profilePic: updatedUser.profilePic || "" };

      setUser(finalUser);
      saveLocalUser(finalUser);

      Swal.fire({ icon: "success", title: "Profile Photo Updated! 🚀", timer: 1800, showConfirmButton: false, background: "#111827", color: "#fff" });
    } catch (err) {
      Swal.fire({ icon: "error", title: "Upload Failed", text: err.message, background: "#111827", color: "#fff" });
    }
  };

  const saveName = async () => {
    const newName = editName.trim();
    const token = getToken();

    if (!newName) {
      Swal.fire({ icon: "warning", title: "Khali Naam?", text: "Please enter your name.", background: "#111827", color: "#fff" });
      return;
    }

    try {
      Swal.fire({ title: "Saving Changes...", text: "Please wait while we update your profile.", allowOutsideClick: false, background: "#111827", color: "#fff", didOpen: () => Swal.showLoading() });

      const res = await fetch(`${API_BASE_URL}/api/auth/update-profile`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", "x-auth-token": token, Authorization: `Bearer ${token}` },
        body: JSON.stringify({ name: newName }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || data.msg || "Update failed.");

      const updatedUser = data.user || data;
      const finalUser = { ...user, ...updatedUser, name: updatedUser.name || newName };

      setUser(finalUser);
      setEditMode(false);
      saveLocalUser(finalUser);

      Swal.fire({ icon: "success", title: "Profile Updated! ✅", text: "Your name has been updated successfully.", timer: 2000, showConfirmButton: false, background: "#111827", color: "#fff" });
    } catch (err) {
      Swal.fire({ icon: "error", title: "Oops...", text: err.message, background: "#111827", color: "#fff" });
    }
  };

  const styles = `*{box-sizing:border-box}.profile-page{min-height:calc(100vh - 120px);display:flex;justify-content:center;align-items:center;background:#050505;padding:40px 20px;font-family:"Poppins",sans-serif}.profile-card{width:100%;max-width:370px;padding:34px 32px;background:#1e293b;border:1px solid #334155;border-radius:20px;text-align:center;box-shadow:0 15px 35px rgba(0,0,0,.45);color:#fff}.profile-top{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;margin-bottom:20px}.photo-container{position:relative;width:118px;height:118px;margin:0 auto 22px;display:flex;align-items:center;justify-content:center}.profile-pic{width:110px;height:110px;border-radius:50%;border:3px solid #a020f0;object-fit:cover;background:#050505;cursor:pointer;display:block}.upload-label{position:absolute;bottom:7px;right:4px;background:#a020f0;color:white;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;border:2px solid #1e293b;font-size:14px;z-index:5}.badge-wrap{width:100%;display:flex;justify-content:center;align-items:center;margin-bottom:18px}.vip-badge-gold{background:linear-gradient(45deg,#bf953f,#fcf6ba,#b38728,#fbf5b7,#aa771c);color:#1a1a1a;padding:8px 18px;border-radius:50px;font-size:11px;font-weight:900;letter-spacing:1px;display:inline-flex;align-items:center;justify-content:center;gap:6px;box-shadow:0 8px 22px rgba(212,175,55,.55);border:1px solid rgba(255,255,255,.35);animation:gold-shine 3s infinite linear;text-transform:uppercase;white-space:nowrap}.admin-badge{background:linear-gradient(45deg,#7f1d1d,#ef4444,#991b1b);color:#fff;padding:8px 18px;border-radius:50px;font-size:11px;font-weight:900;letter-spacing:1px;display:inline-flex;align-items:center;justify-content:center;gap:6px;box-shadow:0 6px 16px rgba(239,68,68,.45);border:1px solid rgba(255,255,255,.15);white-space:nowrap}.welcome-line{font-size:10px;font-weight:900;letter-spacing:.4px;text-transform:uppercase;margin:-8px 0 4px}.welcome-admin{color:#ef4444}.welcome-user{color:#a855f7}.standard-badge{display:flex;flex-direction:column;align-items:center;margin-bottom:14px}.status-label{color:#94a3b8;font-size:11px;text-transform:uppercase;display:block;margin-bottom:6px}.upgrade-link{color:#a855f7;background:rgba(168,85,247,.1);border:1px dashed #a855f7;padding:5px 13px;border-radius:7px;font-size:11px;font-weight:bold;text-decoration:none;transition:.3s ease;display:inline-block;animation:pulse-purple 2s infinite}.upgrade-link:hover{background:#a855f7;color:#fff;border-style:solid;transform:translateY(-2px)}.profile-card h2{font-size:23px;font-weight:800;margin:0 0 8px;color:#fff;line-height:1.2}.user-email{font-size:14px;color:#94a3b8;margin:0 0 26px;word-break:break-word}.edit-box{width:100%;margin-bottom:15px}.edit-box input{width:100%;padding:12px;background:#050505;border:1px solid #334155;border-radius:10px;outline:none;color:white;text-align:center;font-size:15px}.edit-box input:focus{border-color:#a020f0;box-shadow:0 0 8px rgba(160,32,240,.2)}.buttons{display:flex;flex-direction:column;gap:12px;margin-top:10px;width:100%}.buttons button{width:100%;padding:12px;border:none;border-radius:10px;font-weight:700;cursor:pointer;transition:.3s ease;font-size:15px}.edit-btn,.save-btn{background:#a020f0;color:white}.logout-btn{background:transparent!important;border:1px solid #f87171!important;color:#f87171!important;display:flex;justify-content:center;align-items:center;text-align:center}.buttons button:hover{transform:translateY(-2px);opacity:.95}.logout-btn:hover{background:#f87171!important;color:white!important;justify-content:center;align-items:center}.back-home{text-decoration:none;color:#a020f0;font-size:14px;font-weight:500;margin-top:15px;display:inline-block}.back-home:hover{text-decoration:underline}@keyframes gold-shine{0%{filter:brightness(1);transform:scale(1)}50%{filter:brightness(1.25);transform:scale(1.03)}100%{filter:brightness(1);transform:scale(1)}}@keyframes pulse-purple{0%{box-shadow:0 0 0 0 rgba(168,85,247,.4)}70%{box-shadow:0 0 0 10px rgba(168,85,247,0)}100%{box-shadow:0 0 0 0 rgba(168,85,247,0)}}@media(max-width:480px){.profile-page{min-height:auto;padding:120px 16px 40px}.profile-card{padding:28px 20px}.vip-badge-gold,.admin-badge{font-size:10px;padding:7px 14px}.photo-container{margin-bottom:20px}}`;

  return (
    <>
      <style>{styles}</style>

      <div className="profile-page">
        <div className="profile-card">
          <div className="profile-top">
            <div className="photo-container">
              <img
                src={user.profilePic || avatarUrl(user.name)}
                className="profile-pic"
                alt="Profile"
                onError={(e) => {
                  e.currentTarget.src = avatarUrl(user.name);
                }}
                onClick={() => document.getElementById("fileInput")?.click()}
              />

              <label htmlFor="fileInput" className="upload-label">
                📷
              </label>

              <input type="file" id="fileInput" accept="image/*" onChange={handleImageUpload} style={{ display: "none" }} />
            </div>

            <div className="badge-wrap">
              {user.role === "admin" ? (
                <div className="admin-badge">
                  <i className="fas fa-user-shield"></i> SYSTEM MODERATOR
                </div>
              ) : user.badge === "vip" ? (
                <div className="vip-badge-gold">
                  <i className="fas fa-crown"></i> VIP GOLDEN PREMIUM
                </div>
              ) : (
                <div className="standard-badge">
                  <span className="status-label">Standard Member</span>
                  <Link to="/vip-access" className="upgrade-link">
                    Upgrade to VIP <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {user.role === "admin" ? <p className="welcome-line welcome-admin">WELCOME ADMIN</p> : <p className="welcome-line welcome-user">WELCOME</p>}

          {!editMode ? (
            <h2>{user.name}</h2>
          ) : (
            <div className="edit-box">
              <input
                type="text"
                value={editName}
                placeholder="Enter New Name"
                onChange={(e) => setEditName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") saveName();
                }}
                autoFocus
              />
            </div>
          )}

          <p className="user-email">{user.email}</p>

          <div className="buttons">
            {!editMode ? (
              <button className="edit-btn" onClick={() => setEditMode(true)}>
                Edit Profile
              </button>
            ) : (
              <button className="save-btn" onClick={saveName}>
                Save Changes
              </button>
            )}

            <button className="logout-btn" onClick={logout}>
              Logout
            </button>

            <Link to="/" className="back-home">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

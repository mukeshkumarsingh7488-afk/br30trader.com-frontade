//#region
const API_URL = window.API_BASE_URL + "/api/auth";

window.onload = async function () {
  const token = localStorage.getItem("token");
  console.log("🛑 Checking Token Value:", token);
  if (!token) {
    alert("Please, Login First!");
    window.location.href = "login.html";
    return;
  }
  try {
    const res = await fetch(`${window.API_BASE_URL}/api/auth/me`, {
      headers: { "x-auth-token": token },
    });
    if (!res.ok) throw new Error("Session Expired");
    const user = await res.json();
    const name = user.name || (user.user && user.user.name) || "No Name";
    const email = user.email || (user.user && user.user.email) || "No Email";
    const profilePic = user.profilePic || (user.user && user.user.profilePic);
    document.getElementById("userName").innerText = name;
    document.getElementById("userEmail").innerText = email;
    document.getElementById("editName").value = name;
    updateUserStatus(user);
    const picElement = document.getElementById("profilePic");
    if (profilePic && typeof profilePic === "string" && profilePic.startsWith("http")) {
      picElement.src = profilePic;
      picElement.onerror = () => {
        picElement.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=a020f0&color=fff&size=128&bold=true`;
      };
    } else {
      picElement.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=a020f0&color=fff&size=128&bold=true`;
    }
  } catch (err) {
    console.error("Profile Load Error:", err);
    localStorage.clear();
    window.location.href = "login.html";
  }
};

document.getElementById("fileInput").addEventListener("change", async function () {
  const file = this.files[0];
  if (!file) {
    console.warn("⚠️ No file selected!");
    return;
  }
  console.log("📂 File Selected:", file.name, "| Size:", (file.size / 1024).toFixed(2), "KB");
  const formData = new FormData();
  formData.append("profilePic", file);
  const token = localStorage.getItem("token");
  console.log("🔑 Auth Token Found:", token ? "Yes" : "No");
  try {
    console.log("🚀 Uploading to:", window.API_BASE_URL + "/api/auth/update-profile");
    const res = await fetch(window.API_BASE_URL + "/api/auth/update-profile", {
      method: "PUT",
      headers: {
        "x-auth-token": token,
      },
      body: formData,
    });
    const data = await res.json();
    console.log("📥 Server Response:", data);
    if (res.ok) {
      const updatedUser = data.user || data;
      const newPicUrl = updatedUser.profilePic;
      console.log("✅ Upload Success! New Cloudinary URL:", newPicUrl);
      const picElement = document.getElementById("profilePic");
      picElement.src = newPicUrl;
      console.log("🖼️ UI Image Source Updated.");
      let userData = JSON.parse(localStorage.getItem("userData")) || {};
      userData.profilePic = newPicUrl;
      localStorage.setItem("userData", JSON.stringify(userData));
      console.log("💾 LocalStorage Updated with new image URL.");
      alert("Profile Photo Updated! 🚀");
    } else {
      console.error("❌ Upload Failed:", data.msg || "Unknown Error");
      alert(data.msg || "Upload failed!");
    }
  } catch (err) {
    console.error("🚨 Critical Error during upload:", err);
    alert("Server connection error! Check console for details.");
  }
});

document.getElementById("editBtn").addEventListener("click", () => {
  document.getElementById("userName").style.display = "none";
  document.getElementById("editName").style.display = "block";
  document.getElementById("editBtn").style.display = "none";
  document.getElementById("saveBtn").style.display = "inline-block";
  document.getElementById("editName").focus();
});

document.getElementById("editName").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    document.getElementById("saveBtn").click();
  }
});

document.getElementById("saveBtn").addEventListener("click", async () => {
  const newName = document.getElementById("editName").value.trim();
  const token = localStorage.getItem("token");
  const showAlert = (options) => {
    if (typeof Swal !== "undefined") {
      return Swal.fire(options);
    } else {
      alert(options.text || "Something happened!");
    }
  };
  if (!newName) {
    return showAlert({
      icon: "warning",
      title: "Khali Naam?",
      text: "Please enter your name.!",
      background: "#111827",
      color: "#fff",
    });
  }
  try {
    if (typeof Swal !== "undefined") {
      Swal.fire({
        title: "Saving Changes...",
        text: "Please wait while we update your profile.",
        allowOutsideClick: false,
        background: "#111827",
        color: "#fff",
        didOpen: () => {
          Swal.showLoading();
        },
      });
    }
    const res = await fetch(window.API_BASE_URL + "/api/auth/update-profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
      body: JSON.stringify({ name: newName }),
    });
    const data = await res.json();
    console.log("📥 Server Response:", data);
    if (res.ok) {
      const finalName = data.name || (data.user && data.user.name) || newName;
      document.getElementById("userName").innerText = finalName;
      document.getElementById("userName").style.display = "block";
      document.getElementById("editName").style.display = "none";
      document.getElementById("editBtn").style.display = "inline-block";
      document.getElementById("saveBtn").style.display = "none";
      let userData = JSON.parse(localStorage.getItem("userData")) || {};
      userData.name = finalName;
      localStorage.setItem("userData", JSON.stringify(userData));
      showAlert({
        icon: "success",
        title: "Profile Updated! ✅",
        text: "Your name has been updated successfully.",
        timer: 2000,
        showConfirmButton: false,
        background: "#111827",
        color: "#fff",
      });
    } else {
      throw new Error(data.message || data.msg || "Update failed. Please try again.!");
    }
  } catch (err) {
    console.error("🚨 Update Error:", err);
    showAlert({
      icon: "error",
      title: "Oops...",
      text: err.message,
      background: "#111827",
      color: "#fff",
    });
  }
});

function logout() {
  if (confirm(" Conform Logout ?")) {
    localStorage.clear();
    window.location.href = "login.html";
  }
}

function updateUserStatus(userData) {
  const badgeContainer = document.getElementById("vipBadgeContainer");
  if (!badgeContainer) return;
  const userRole = userData.role;
  const userBadge = userData.badge;
  if (userRole === "admin") {
    badgeContainer.innerHTML = `
      <div class="admin-badge">
          <i class="fas fa-user-shield"></i> SYSTEM MODERATOR
      </div>
      <p style="color: #ef4444; font-size: 10px; margin-top: 4px; font-weight: bold;">WELCOME ADMIN</p>`;
  } else if (userBadge === "vip") {
    badgeContainer.innerHTML = `
      <div class="vip-badge-gold">
          <i class="fas fa-crown"></i> VIP GOLDEN PREMIUM
      </div>`;
  } else {
    badgeContainer.innerHTML = `
      <div class="standard-badge">
          <span class="status-label">Standard Member</span>
          <a href="../index.html#coursesection" class="upgrade-link">Upgrade to VIP <i class="fas fa-arrow-right"></i></a>
      </div>`;
  }
}

//#endregion

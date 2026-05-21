import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function Br30UserManagement() {
  const API = import.meta.env.VITE_API_URL;
  const [users, setUsers] = useState([]);
  const [sales, setSales] = useState([]);
  const [search, setSearch] = useState("");
  const [userDate, setUserDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [bestCourse, setBestCourse] = useState("Analyzing...");
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [loadingSales, setLoadingSales] = useState(true);

  useEffect(() => {
    fetchUsers();
    loadSalesData();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoadingUsers(true);
      const token = localStorage.getItem("token");
      const res = await fetch(`${API}/api/auth/all-users`, { headers: { Authorization: `Bearer ${token}` } });
      const data = await res.json();
      if (data.success) setUsers(data.users || []);
      else setUsers([]);
    } catch (err) {
      console.error("User Fetch Error:", err);
      Swal.fire("Error", "Users load nahi hua", "error");
    } finally {
      setLoadingUsers(false);
    }
  };

  const filteredUsers = useMemo(() => {
    let list = [...users];
    if (search.trim()) list = list.filter((u) => `${u.name || ""} ${u.email || ""}`.toLowerCase().includes(search.toLowerCase()));
    if (userDate) list = list.filter((u) => u.createdAt && new Date(u.createdAt).toISOString().split("T")[0] === userDate);
    return list;
  }, [users, search, userDate]);

  const loadAllUsers = () => {
    setUserDate("");
    setSearch("");
    fetchUsers();
  };

  const toggleVIP = async (id) => {
    try {
      const res = await fetch(`${API}/api/auth/update-vip/${id}`, { method: "PUT", headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
      const data = await res.json();
      if (data.success) fetchUsers();
      else Swal.fire("Error", data.msg || "VIP update failed", "error");
    } catch (err) {
      Swal.fire("Error", "VIP toggle error", "error");
    }
  };

  const toggleBlock = async (id) => {
    try {
      const res = await fetch(`${API}/api/auth/block-user/${id}`, { method: "PUT", headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
      const data = await res.json();
      if (data.success) fetchUsers();
      else Swal.fire("Error", data.msg || "Block update failed", "error");
    } catch (err) {
      Swal.fire("Error", "Block toggle error", "error");
    }
  };

  const deleteUser = async (id) => {
    const check = await Swal.fire({ title: "Delete User?", text: "Bhai, pakka udaana hai? Soche samjhe bina mat dabao!", icon: "warning", showCancelButton: true, confirmButtonText: "Delete", cancelButtonText: "Cancel", confirmButtonColor: "#f87171" });
    if (!check.isConfirmed) return;
    try {
      const res = await fetch(`${API}/api/auth/delete-user/${id}`, { method: "DELETE", headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
      const data = await res.json();
      if (data.success) {
        Swal.fire("Deleted", "User delete ho gaya", "success");
        fetchUsers();
      } else Swal.fire("Error", data.msg || "Delete failed", "error");
    } catch (err) {
      Swal.fire("Error", "Delete error", "error");
    }
  };

  const loadSalesData = async (s = "", e = "") => {
    try {
      setLoadingSales(true);
      const res = await fetch(`${API}/api/auth/sales-history?startDate=${s}&endDate=${e}`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
      const data = await res.json();
      if (data.success) {
        const saleList = data.sales || [];
        setSales(saleList);
        setTotalRevenue(data.totalRevenue || 0);
        const counts = {};
        saleList.forEach((sale) => {
          const title = sale.courseName || sale.course?.title;
          if (title) counts[title] = (counts[title] || 0) + 1;
        });
        const names = Object.keys(counts);
        setBestCourse(names.length ? names.reduce((a, b) => (counts[a] > counts[b] ? a : b)).toUpperCase() : "NO SALES");
      } else {
        setSales([]);
        setTotalRevenue(0);
        setBestCourse("NO SALES");
      }
    } catch (err) {
      console.error("Sales Data Error:", err);
      Swal.fire("Error", "Sales data load nahi hua", "error");
    } finally {
      setLoadingSales(false);
    }
  };

  const applyCalendarFilter = () => {
    if (!startDate || !endDate) return Swal.fire("Date Missing", "Start aur End dono dates select karo", "warning");
    loadSalesData(startDate, endDate);
  };

  const resetSalesFilter = () => {
    setStartDate("");
    setEndDate("");
    loadSalesData();
  };

  const downloadSalesReport = () => {
    if (!sales.length) return Swal.fire("No Data", "Pehle sales data load hone do", "warning");
    const rows = [["User Email", "Course Name", "Amount", "Date & Time"], ...sales.map((sale) => [sale.user?.email || "Unknown", sale.courseName || sale.course?.title || "", sale.amount || 0, new Date(sale.createdAt).toLocaleString("en-IN")])];
    const csv = "\uFEFF" + rows.map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = window.URL.createObjectURL(blob);
    const date = new Date().toLocaleDateString("en-IN").replace(/\//g, "-");
    const link = document.createElement("a");
    link.href = url;
    link.download = `BR30_Sales_Report_${date}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <style>{`body,html{overflow-x:hidden;width:100%}.user-admin-page{background:#050505;color:#fff;font-family:sans-serif;min-height:100vh;padding:20px;box-sizing:border-box}.user-admin-box{max-width:1000px;margin:20px auto;background:#0a0a0a;padding:25px;border-radius:20px;border:1px solid #1e293b;box-shadow:0 0 20px rgba(0,255,136,.05)}.user-admin-title{color:#fff;border-left:4px solid #00ff88;padding-left:15px;margin:0 0 10px 0}.user-admin-subtitle{color:#64748b;margin-bottom:20px;font-size:13px}.user-search{width:100%;padding:15px;margin-bottom:25px;background:#0f172a;border:1px solid #00ff88;color:#fff;border-radius:12px;font-size:16px;outline:none;box-shadow:0 0 15px rgba(0,255,136,.1);box-sizing:border-box}.user-filter-row{display:flex;gap:10px;margin:-10px 0 20px 0;align-items:center;padding:10px;background:#0f172a;border-radius:12px;border:1px solid #1e293b;flex-wrap:wrap}.user-filter-label{color:#64748b;font-size:11px;font-weight:bold;text-transform:uppercase}.user-date{background:#050505;color:#00ff88;border:1px solid #00ff88;padding:4px 8px;border-radius:6px;outline:none;font-size:13px;cursor:pointer}.user-show-btn{background:#00ff88;color:#000;border:1px solid #00ff88;padding:4px 12px;border-radius:6px;font-size:11px;font-weight:bold;cursor:pointer;transition:.3s;box-shadow:0 0 10px rgba(0,255,136,.2)}.user-table-wrap{max-height:380px;overflow-y:auto;border:1px solid #1a1a1a;border-radius:12px;scrollbar-width:thin;scrollbar-color:#00ff88 #000}.user-table{width:100%;border-collapse:collapse;table-layout:auto}.user-table thead{position:sticky;top:0;background:#0a0a0a;z-index:10;box-shadow:0 2px 10px rgba(0,0,0,.5)}.user-table th{padding:18px 15px;text-align:left;border-bottom:2px solid #1e293b;color:#00ff88;font-size:11px;text-transform:uppercase;letter-spacing:1px}.user-table td{padding:15px;border-bottom:1px solid #111}.user-table tr:hover,.sales-table tr:hover{background:rgba(255,255,255,.02);transition:.3s}.badge-vip{background:#a020f0;color:#fff;padding:4px 10px;border-radius:20px;font-size:10px;font-weight:bold}.badge-normal{background:#334155;color:#fff;padding:4px 10px;border-radius:20px;font-size:10px;font-weight:bold}.mini-btn{border:none;padding:6px 12px;border-radius:6px;cursor:pointer;font-size:10px;font-weight:bold;margin:2px}.vip-btn{background:#a020f0;color:#fff}.block-btn{color:#000;width:75px}.del-btn{background:#f87171;color:#fff}.cert-link{color:#00ff88;text-decoration:none;display:inline-flex;flex-direction:column;align-items:center}.cert-link i{font-size:18px}.cert-link span{font-size:9px;font-weight:bold}.cert-pending{color:#334155;font-size:10px;font-weight:bold}.dashboard-back{color:#00ff88;text-decoration:none;font-weight:bold;font-size:14px;transition:.3s;display:inline-block}.sales-container{max-width:1000px;margin:40px auto;padding:25px;background:#0a0a0a;border-radius:20px;border:1px solid #00ff88;box-shadow:0 0 25px rgba(0,255,136,.1)}.sales-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:25px;flex-wrap:wrap;gap:15px}.sales-date-box{display:flex;align-items:center;gap:10px;background:#050505;padding:8px 12px;border-radius:12px;border:1px solid #1e293b;flex-wrap:wrap}.sales-date-box input{background:transparent;color:#00ff88;border:none;outline:none;font-size:11px;cursor:pointer}.sales-date-box span{color:#64748b;font-size:11px}.apply-btn{background:rgba(255,255,255,.05);color:#00ff88;border:1px solid #00ff88;padding:6px 15px;border-radius:8px;font-weight:900;cursor:pointer;font-size:10px;text-transform:uppercase;transition:.3s}.sales-show-btn{background:#00ff88;color:#000;border:none;padding:6px 15px;border-radius:8px;cursor:pointer;font-size:10px;text-transform:uppercase;font-weight:bold;transition:.3s}.sales-metrics{display:flex;gap:15px;flex-wrap:wrap}.metric-purple{background:rgba(160,32,240,.1);border:1px solid #a020f0;padding:10px 20px;border-radius:15px;text-align:right;min-width:120px}.metric-green{background:rgba(0,255,136,.1);border:1px solid #00ff88;padding:10px 25px;border-radius:15px;text-align:right;min-width:140px}.metric-purple p,.metric-green p{color:#94a3b8;font-size:10px;margin:0;text-transform:uppercase;letter-spacing:1px}.metric-purple h2{color:#a020f0;margin:0;font-size:18px;font-weight:900;text-shadow:0 0 10px rgba(160,32,240,.3)}.metric-green h2{color:#00ff88;margin:0;font-size:24px;font-weight:900;text-shadow:0 0 10px rgba(0,255,136,.3)}.download-btn{background:rgba(0,255,136,.1);border:1px solid #00ff88;color:#00ff88;padding:10px 20px;border-radius:10px;cursor:pointer;font-size:12px;font-weight:bold;transition:.3s;margin-bottom:20px}.sales-scroll-panel{max-height:380px!important;overflow-y:auto!important;border:1px solid #1a1a1a;border-radius:12px}.sales-table{width:100%;border-collapse:collapse;color:#94a3b8;text-align:left}.sales-table thead{position:sticky;top:0;background:#0a0a0a;z-index:10;box-shadow:0 2px 10px rgba(0,0,0,.5)}.sales-table th{padding:18px 15px;border-bottom:2px solid #1e293b;font-size:12px;text-transform:uppercase;color:#00ff88}.sales-table td{padding:15px;border-bottom:1px solid #111}.loading-cell{text-align:center;padding:40px!important;color:#64748b}input[type=date]::-webkit-calendar-picker-indicator{filter:invert(1);cursor:pointer}::-webkit-scrollbar{width:6px}::-webkit-scrollbar-track{background:#000}::-webkit-scrollbar-thumb{background:#00ff88;border-radius:10px;box-shadow:0 0 10px rgba(0,255,136,.5)}@media(max-width:700px){.user-admin-page{padding:10px}.user-table-wrap,.sales-scroll-panel{overflow-x:auto}.user-table,.sales-table{min-width:800px}.sales-head{align-items:flex-start}.sales-date-box,.sales-metrics{width:100%}.metric-purple,.metric-green{flex:1;text-align:left}.user-filter-row{align-items:flex-start}}`}</style>
      <div className="user-admin-page">
        <div className="user-admin-box">
          <h2 className="user-admin-title">
            <i className="fas fa-users-cog"></i> User Management Panel
          </h2>
          <p className="user-admin-subtitle">Manage your students, VIP access, and Block harami users here.</p>
          <input type="text" className="user-search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="🔍 Search by Email or Name (e.g. Mukesh Raj)..." />
          <div className="user-filter-row">
            <span className="user-filter-label">Filter Date:</span>
            <input type="date" className="user-date" value={userDate} onChange={(e) => setUserDate(e.target.value)} />
            <button className="user-show-btn" onClick={loadAllUsers}>
              SHOW ALL
            </button>
          </div>
          <div className="user-table-wrap">
            <table className="user-table">
              <thead>
                <tr>
                  <th>NAME</th>
                  <th>EMAIL</th>
                  <th style={{ textAlign: "center" }}>BADGE</th>
                  <th style={{ textAlign: "center" }}>ACTIONS</th>
                  <th style={{ textAlign: "center" }}>CERTIFICATE 🏆</th>
                </tr>
              </thead>
              <tbody>
                {loadingUsers ? (
                  <tr>
                    <td colSpan="5" className="loading-cell">
                      🔍 Loading Users Data...
                    </td>
                  </tr>
                ) : filteredUsers.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="loading-cell">
                      No users found
                    </td>
                  </tr>
                ) : (
                  filteredUsers.map((u) => (
                    <tr key={u._id} style={{ opacity: u.isBlocked ? 0.5 : 1 }}>
                      <td style={{ color: "#fff", fontWeight: "bold" }}>{u.name}</td>
                      <td style={{ color: "#94a3b8", fontSize: "13px" }}>{u.email}</td>
                      <td style={{ textAlign: "center" }}>
                        <span className={u.isVip ? "badge-vip" : "badge-normal"}>{u.isVip ? "💎 VIP" : "Normal"}</span>
                      </td>
                      <td style={{ textAlign: "center", whiteSpace: "nowrap" }}>
                        <button className="mini-btn vip-btn" onClick={() => toggleVIP(u._id)}>
                          VIP
                        </button>
                        <button className="mini-btn block-btn" style={{ background: u.isBlocked ? "#00ff88" : "#fbbf24" }} onClick={() => toggleBlock(u._id)}>
                          {u.isBlocked ? "Unblock" : "Block"}
                        </button>
                        <button className="mini-btn del-btn" onClick={() => deleteUser(u._id)}>
                          DEL
                        </button>
                      </td>
                      <td style={{ textAlign: "center" }}>
                        {u.certificateFile ? (
                          <a className="cert-link" href={`${API}/certificates/${u.certificateFile}`} target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-file-pdf"></i>
                            <span>VIEW</span>
                          </a>
                        ) : (
                          <span className="cert-pending">PENDING</span>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          <br />
          <Link to="/admin" className="dashboard-back">
            <i className="fas fa-arrow-left"></i> Back to Dashboard
          </Link>
        </div>
        <div className="sales-container">
          <div className="sales-head">
            <div className="sales-date-box">
              <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
              <span>to</span>
              <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
              <button className="apply-btn" onClick={applyCalendarFilter}>
                Apply
              </button>
              <button className="sales-show-btn" onClick={resetSalesFilter}>
                Show All
              </button>
            </div>
            <div className="sales-metrics">
              <div className="metric-purple">
                <p>🔥 Best Seller</p>
                <h2>{bestCourse}</h2>
              </div>
              <div className="metric-green">
                <p>Revenue Track</p>
                <h2>₹{Number(totalRevenue || 0).toLocaleString("en-IN")}</h2>
              </div>
            </div>
          </div>
          <button className="download-btn" onClick={downloadSalesReport}>
            <i className="fas fa-file-download"></i> Download Sales Report (CSV)
          </button>
          <div className="sales-scroll-panel">
            <table className="sales-table">
              <thead>
                <tr>
                  <th>User Email</th>
                  <th>Course Name</th>
                  <th>Amount</th>
                  <th>Date & Time</th>
                </tr>
              </thead>
              <tbody>
                {loadingSales ? (
                  <tr>
                    <td colSpan="4" className="loading-cell">
                      🔍 Analyzing Sales Records...
                    </td>
                  </tr>
                ) : sales.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="loading-cell">
                      No sales found
                    </td>
                  </tr>
                ) : (
                  sales.map((sale, index) => (
                    <tr key={sale._id || index}>
                      <td style={{ color: "#fff" }}>{sale.user?.email || "Unknown"}</td>
                      <td style={{ color: "#00ff88", fontWeight: "bold" }}>{sale.courseName || sale.course?.title}</td>
                      <td style={{ color: "#fff", fontWeight: "800" }}>₹{sale.amount}</td>
                      <td style={{ fontSize: "11px", opacity: 0.7 }}>{sale.createdAt ? new Date(sale.createdAt).toLocaleString("en-IN") : ""}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

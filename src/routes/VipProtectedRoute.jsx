import { Navigate } from "react-router-dom";

const getStoredUser = () => {
  try {
    return JSON.parse(localStorage.getItem("userData")) || JSON.parse(localStorage.getItem("br30_user")) || null;
  } catch {
    return null;
  }
};

export default function VipProtectedRoute({ children }) {
  const user = getStoredUser();
  const isVipUser = user?.badge?.toLowerCase() === "vip";

  if (!isVipUser) {
    return <Navigate to="/dashboard/vip-access" replace />;
  }

  return children;
}

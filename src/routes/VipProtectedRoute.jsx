import { Navigate } from "react-router-dom";

export default function VipProtectedRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user || user?.badge !== "vip") {
    return <Navigate to="/vip-access" replace />;
  }

  return children;
}

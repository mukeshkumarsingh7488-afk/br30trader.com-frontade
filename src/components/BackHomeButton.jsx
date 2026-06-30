import { Link } from "react-router-dom";

export default function BackHomeButton({ className = "", children, target, rel }) {
  const isLoggedIn = Boolean(localStorage.getItem("br30_user") || localStorage.getItem("userData") || localStorage.getItem("token"));

  if (!isLoggedIn) return null;

  return (
    <Link to="/dashboard" className={`back-home-btn ${className}`} target={target} rel={rel}>
      {children}
    </Link>
  );
}

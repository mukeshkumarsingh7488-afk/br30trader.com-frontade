import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function useShortcuts() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;

      const key = e.key.toLowerCase();

      if (e.altKey && key === "h") {
        e.preventDefault();
        navigate("/");
      }
      if (e.altKey && key === "c") {
        e.preventDefault();
        navigate("/courses");
      }
      if (e.altKey && key === "l") {
        e.preventDefault();
        navigate("/login");
      }
      if (e.altKey && key === "r") {
        e.preventDefault();
        navigate("/register");
      }
      if (e.altKey && key === "q") {
        e.preventDefault();
        logout();
        navigate("/login");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate, logout]);
}

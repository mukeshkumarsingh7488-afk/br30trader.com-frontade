import React from "react";
import { useLocation } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import FooterSection from "./components/FooterSection";
import LandingNavbar from "./components/landing/Navbar";
import LandingFooter from "./components/landing/Footer";
import ScrollToTop from "./components/ScrollToTop";
import AppRoutes from "./routes/AppRoutes";
import useShortcuts from "./hooks/useShortcuts";

function AppContent() {
  useShortcuts();
  const location = useLocation();

  const authRoutes = ["/login", "/register", "/forgot-password", "/reset"];
  const isAuthPage = authRoutes.includes(location.pathname);
  const isHome = location.pathname === "/";

  const user = localStorage.getItem("br30_user") || localStorage.getItem("userData") || localStorage.getItem("token");

  const isLoggedIn = Boolean(user);
  const useLandingLayout = !isLoggedIn || isAuthPage;

  return (
    <div className="app-shell">
      <ScrollToTop />

      {useLandingLayout ? <LandingNavbar /> : <Navbar />}

      <main className={`app-main ${useLandingLayout ? "landing-layout-main" : ""} ${isHome ? "home-main" : ""}`}>
        <AppRoutes />
      </main>

      {useLandingLayout && !isHome && <LandingFooter />}
      {!useLandingLayout && <FooterSection />}

      <style>{`
.landing-layout-main{padding-top:112px;}
.home-main{padding-top:0;}
@media(max-width:920px){.landing-layout-main{padding-top:96px;}.home-main{padding-top:0;}}
@media(max-width:520px){.landing-layout-main{padding-top:88px;}.home-main{padding-top:0;}}
      `}</style>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

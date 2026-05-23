import React from "react";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import FooterSection from "./components/FooterSection";
import ScrollToTop from "./components/ScrollToTop";
import AppRoutes from "./routes/AppRoutes";
import useShortcuts from "./hooks/useShortcuts";

function AppContent() {
  useShortcuts();

  return (
    <div className="app-shell">
      <ScrollToTop />

      <Navbar />

      <main className="app-main">
        <AppRoutes />
      </main>

      <FooterSection />
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

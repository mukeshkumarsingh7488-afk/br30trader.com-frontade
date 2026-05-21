import React, { useEffect, useRef, useState } from "react";
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
import axios from "axios";
// 🚀 Import file
import Leaderboard from "../components/Leaderboard";
import CoursesSection from "../components/CoursesSection";
import TradingMastery from "../components/TradingMastery";
import PatternSection from "../components/PatternSection";
import PillarsSection from "../components/PillarsSection";
import PdfHubSection from "../components/PdfHubSection";
import ServicesSection from "../components/ServicesSection";
import TradingUniverseSection from "../components/TradingUniverseSection";
import TradingMindsetSection from "../components/TradingMindsetSection";
import TradingToolsSection from "../components/TradingToolsSection";
import TradingJournalSection from "../components/TradingJournalSection";
import ReviewSection from "../components/ReviewSection";
import TradingUpdatesSection from "../components/TradingUpdatesSection";
import CourseHighlightsSection from "../components/CourseHighlightsSection";
import FooterSection from "../components/FooterSection";

const firebaseConfig = {
  apiKey: "AIzaSyA4wnSAZ3VLlAMyHhPt5WjULihejoKuLoY",
  authDomain: "://firebaseapp.com",
  projectId: "br30Trader",
  storageBucket: "br30Trader.firebasestorage.app",
  messagingSenderId: "32865565434",
  appId: "1:32865565434:web:4d620d3cb41a19c5582743",
};

export default function Home() {
  const elementRef = useRef(null);
  const typedInstance = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const startTypedAnimation = () => {
      if (window.Typed && elementRef.current) {
        if (typedInstance.current) {
          typedInstance.current.destroy();
        }
        typedInstance.current = new window.Typed(elementRef.current, {
          strings: ["Web. Developer.", "Trader.", "Investor.", "Graphic Designer.", "Content Creator."],
          typeSpeed: 80,
          backSpeed: 40,
          loop: true,
        });
      }
    };

    const timer = setTimeout(startTypedAnimation, 150);
    return () => {
      clearTimeout(timer);
      if (typedInstance.current) typedInstance.current.destroy();
    };
  }, []);

  useEffect(() => {
    const initFirebaseFCM = async () => {
      try {
        let permission = Notification.permission;
        if (permission === "default") {
          permission = await Notification.requestPermission();
        }
        if (permission === "granted") {
          const app = initializeApp(firebaseConfig);
          const messaging = getMessaging(app);
          const fcmToken = await getToken(messaging, {
            vapidKey: "BFLsdCUiLyRoANZPGP8MNwvCh1SBkpOevl2PzD-wwwRPIdJgkMr857_2UkhbyCnO3iOj_DyqhfyHkbx0ezbx2B4",
          });

          if (fcmToken) {
            const oldToken = localStorage.getItem("last_fcm_token");
            if (oldToken !== fcmToken) {
              const storedUser = localStorage.getItem("br30_user");
              if (storedUser) {
                const userData = JSON.parse(storedUser);
                const API_URL = import.meta.env.VITE_API_URL || "https://onrender.com";
                await axios.post(`${API_URL}/api/save-fcm-token`, {
                  userId: userData._id,
                  token: fcmToken,
                });
                localStorage.setItem("last_fcm_token", fcmToken);
              }
            }
          }
        }
      } catch (err) {
        // Local development fallback - error suppressed to keep console clean
      }
    };

    initFirebaseFCM();
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const scrollTo = params.get("scroll");

    if (scrollTo) {
      setTimeout(() => {
        document.getElementById(scrollTo)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 500);
    }
  }, []);

  return (
    <div style={{ width: "100%", background: "#060b13", display: "flex", flexDirection: "column" }}>
      {/* 🎬 सेक्शन १: आपका लाइव वीडियो और इंट्रो टेक्स्ट ब्लॉक */}
      <div
        style={{
          height: isMobile ? "50vh" : "85vh",
          width: "100%",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          paddingLeft: isMobile ? "30px" : "85px",
          paddingTop: isMobile ? "40px" : "90px",
          paddingRight: "20px",
          boxSizing: "border-box",
          overflow: "hidden",
          maxWidth: "100%",
        }}
      >
        <video
          src="/videos/intro2.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 1,
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(6, 11, 19, 0.45)",
            zIndex: 2,
          }}
        />

        <div style={{ textAlign: "left", maxWidth: "600px", zIndex: 3, position: "relative", fontFamily: "sans-serif" }}>
          <h1 style={{ fontSize: isMobile ? "1.35rem" : "1.45rem", fontWeight: "bold", color: "#ffffff", margin: "0 0 4px 0", letterSpacing: "0.2px", whiteSpace: "nowrap" }}>
            Hey, My Name is <span style={{ color: "#2ecc71" }}>Mukesh Raj</span>
          </h1>
          <h2 style={{ fontSize: isMobile ? "1.35rem" : "1.45rem", color: "#ffffff", fontWeight: "bold", margin: "0 0 4px 0", letterSpacing: "0.2px", whiteSpace: "nowrap" }}>and I am a passionate</h2>
          <h2 style={{ fontSize: isMobile ? "1.35rem" : "1.45rem", color: "#00ffcc", fontWeight: "bold", margin: "0", letterSpacing: "0.2px" }}>
            <span ref={elementRef}></span>
          </h2>
        </div>
      </div>

      {/* 👑 सेक्शन २: load  */}
      <Leaderboard />
      <CoursesSection />
      <TradingMastery />
      <PatternSection />
      <PillarsSection />
      <PdfHubSection />
      <ServicesSection />
      <TradingUniverseSection />
      <TradingMindsetSection />
      <TradingToolsSection />
      <TradingJournalSection />
      <ReviewSection />
      <TradingUpdatesSection />
      <CourseHighlightsSection />
      {/* ===== Trustpilot Widget Temporary Hidden ========== End Trustpilot Widget ===== */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "30px 0", background: "#050505", borderTop: "1px solid rgba(0,255,204,0.4)", borderBottom: "1px solid rgba(0,255,204,0.4)" }}>
        <div className="trustpilot-widget" data-locale="en-US" data-template-id="56278e9abfbbba0bdcd568bc" data-businessunit-id="6a0e4648b5e8fbc1fc6abfcf" data-style-height="52px" data-style-width="220px" data-token="ef805818-2ebf-4905-b913-5cd6e8a0c247">
          <a href="https://www.trustpilot.com/review/my-frontend-eight-roan.vercel.app" target="_blank" rel="noopener noreferrer">
            Trustpilot
          </a>
        </div>
      </div>

      <FooterSection />
    </div>
  );
}

import React from "react";
import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import Stats from "../components/landing/Stats";
import CourseShowcase from "../components/landing/CourseShowcase";
import Roadmap from "../components/landing/Roadmap";
import WhyTrader from "../components/landing/WhyTrader";
import PlatformFeatures from "../components/landing/PlatformFeatures";
import DashboardPreview from "../components/landing/DashboardPreview";
import VipLeaderboard from "../components/landing/VipLeaderboard";
import CertificateSection from "../components/landing/CertificateSection";
import FAQ from "../components/landing/FAQ";
import LiveReviews from "../components/landing/LiveReviews";
import CTA from "../components/landing/CTA";
import Footer from "../components/landing/Footer";

export default function Home() {
  return (
    <>
      <main className="br30-trader-landing">
        <Navbar />
        <Hero />
        <Stats />
        <CourseShowcase />
        <Roadmap />
        <WhyTrader />
        <PlatformFeatures />
        <DashboardPreview />
        <VipLeaderboard />
        <CertificateSection />
        <FAQ />
        <LiveReviews />
        <CTA />
        <Footer />
      </main>

      <style>{`
.br30-trader-landing{min-height:100vh;background:radial-gradient(circle at 18% 8%,rgba(156,39,255,.22),transparent 32%),radial-gradient(circle at 85% 18%,rgba(255,190,90,.12),transparent 28%),linear-gradient(180deg,#07000f 0%,#060812 38%,#030407 100%);color:#fff;overflow-x:hidden;font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;}
.br30-trader-landing *{box-sizing:border-box;}
.br30-trader-container{width:min(1180px,calc(100% - 36px));margin:0 auto;}
::selection{background:rgba(164,66,255,.45);color:#fff;}
      `}</style>
    </>
  );
}

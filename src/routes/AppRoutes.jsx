import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import Reset from "../pages/Reset";
import MyProfile from "../pages/MyProfile";
import MyCourse from "../pages/MyCourse";
import CertificateVerify from "../pages/CertificateVerify";
import Disclaimer from "../pages/Disclaimer";
import Br30AboutUs from "../pages/Br30AboutUs";
import Br30VipAccess from "../pages/Br30VipAccess";
import Br30Contact from "../pages/Br30Contact";
import Br30UserPrivacy from "../pages/Br30UserPrivacy";
import Br30TermsCondition from "../pages/Br30TermsCondition";
import Br30RefundPolocy from "../pages/Br30RefundPolocy";
import Br30Strategies from "../pages/Br30Strategies";
import Br30WebService from "../pages/Br30WebService";
import Br30FounderAbout from "../pages/Br30FounderAbout";
import BellViewAlert from "../pages/BellViewAlert";
import CourseWatch from "../pages/CourseWatch";
import BasicToAdvance from "../pages/BasicToAdvance";
import LiveMarketAnalysis from "../pages/LiveMarketAnalysis";
import RiskManagement from "../pages/RiskManagement";
import LifetimeAccess from "../pages/LifetimeAccess";
import Br30SupportCommunity from "../pages/Br30SupportCommunity";
import AdminDashboard from "../pages/AdminDashboard";
import BR30Announcement from "../pages/BR30Announcement";
import UserReview from "../pages/UserReview";
import Br30CourseEdit from "../pages/Br30CourseEdit";
import Br30UserManagement from "../pages/Br30UserManagement";
import Br30LoadCourse from "../pages/Br30LoadCourse";
import Br30BellNotification from "../pages/Br30BellNotification";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset" element={<Reset />} />
      <Route path="/myprofile" element={<MyProfile />} />
      <Route path="/mycourse" element={<MyCourse />} />
      <Route path="/verify" element={<CertificateVerify />} />
      <Route path="/disclaimer" element={<Disclaimer />} />
      <Route path="/aboutus" element={<Br30AboutUs />} />
      <Route path="/vip-access" element={<Br30VipAccess />} />
      <Route path="/contact" element={<Br30Contact />} />
      <Route path="/privacy" element={<Br30UserPrivacy />} />
      <Route path="/terms" element={<Br30TermsCondition />} />
      <Route path="/refund" element={<Br30RefundPolocy />} />
      <Route path="/strategies" element={<Br30Strategies />} />
      <Route path="/service" element={<Br30WebService />} />
      <Route path="/about" element={<Br30FounderAbout />} />
      <Route path="/view-alert" element={<BellViewAlert />} />
      <Route path="/watch" element={<CourseWatch />} />
      <Route path="/basic-to-advance" element={<BasicToAdvance />} />
      <Route path="/live-market-analysis" element={<LiveMarketAnalysis />} />
      <Route path="/risk-management" element={<RiskManagement />} />
      <Route path="/lifetime-access" element={<LifetimeAccess />} />
      <Route path="/support-community" element={<Br30SupportCommunity />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/announcement" element={<BR30Announcement />} />
      <Route path="/admin/reviews" element={<UserReview />} />
      <Route path="/admin/course-edit" element={<Br30CourseEdit />} />
      <Route path="/admin/users" element={<Br30UserManagement />} />
      <Route path="/admin/load-course" element={<Br30LoadCourse />} />
      <Route path="/admin/bell-notification" element={<Br30BellNotification />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

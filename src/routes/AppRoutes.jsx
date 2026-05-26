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
import EMAFVGOptionBuying from "../pages/EMAFVGOptionBuying";
import EMAFVGOptionSelling from "../pages/EMAFVGOptionSelling";
import OptionGreeksMastery from "../pages/OptionGreeksMastery";
import OptionSellingWithHedging from "../pages/OptionSellingWithHedging";
import RSIDivergenceFullGuide from "../pages/RSIDivergenceFullGuide";
import OptionsBasicsForBeginners from "../pages/OptionsBasicsForBeginners";
import TechnicalAnalysisMastery from "../pages/TechnicalAnalysisMastery";
import CandlestickPatternsGuide from "../pages/CandlestickPatternsGuide";
import SupportResistanceLevels from "../pages/SupportResistanceLevels";
import MovingAveragesTradingLogic from "../pages/MovingAveragesTradingLogic";
import RSIStochasticIndicators from "../pages/RSIStochasticIndicators";
import FibonacciRetracementStrategy from "../pages/FibonacciRetracementStrategy";
import BollingerBandsTradingSetup from "../pages/BollingerBandsTradingSetup";
import VolumeAnalysisTechniques from "../pages/VolumeAnalysisTechniques";
import MACDIndicatorExplained from "../pages/MACDIndicatorExplained";
import EMATradingStrategy from "../pages/EMATradingStrategy";
import PriceActionMastery from "../pages/PriceActionMastery";
import RiskManagementTechniques from "../pages/RiskManagementTechniques";
import OptionBuyingGuide from "../pages/OptionBuyingGuide";
import OptionSellingGuide from "../pages/OptionSellingGuide";
import IntradayTradingTechniques from "../pages/IntradayTradingTechniques";
import SwingTradingStrategies from "../pages/SwingTradingStrategies";
import FairValueGapTrading from "../pages/FairValueGapTrading";
import ChartPatternsSignals from "../pages/ChartPatternsSignals";
import TrendAnalysisTechniques from "../pages/TrendAnalysisTechniques";
import OptionHedgingStrategies from "../pages/OptionHedgingStrategies";
import ScalpingTechniques from "../pages/ScalpingTechniques";
import AdvancedOptionsStrategies from "../pages/AdvancedOptionsStrategies";
import BullishOptionStrategies from "../pages/BullishOptionStrategies";
import BearishOptionStrategies from "../pages/BearishOptionStrategies";
import NeutralVolatilityOptionStrategies from "../pages/NeutralVolatilityOptionStrategies";
import OtherOptionStrategies from "../pages/OtherOptionStrategies";

const getStoredUser = () => {
  try {
    return JSON.parse(localStorage.getItem("user")) || JSON.parse(localStorage.getItem("br30User")) || null;
  } catch {
    return null;
  }
};

function VipProtectedRoute({ children }) {
  const user = getStoredUser();
  const isVipUser = user?.badge?.toLowerCase() === "vip";

  if (!isVipUser) {
    return <Navigate to="/vip-access" replace />;
  }

  return children;
}

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
      <Route
        path="/ema-fvg-option-buying"
        element={
          <VipProtectedRoute>
            <EMAFVGOptionBuying />
          </VipProtectedRoute>
        }
      />
      <Route
        path="/ema-fvg-option-selling"
        element={
          <VipProtectedRoute>
            <EMAFVGOptionSelling />
          </VipProtectedRoute>
        }
      />
      <Route
        path="/option-greeks-mastery"
        element={
          <VipProtectedRoute>
            <OptionGreeksMastery />
          </VipProtectedRoute>
        }
      />
      <Route
        path="/option-selling-with-hedging"
        element={
          <VipProtectedRoute>
            <OptionSellingWithHedging />
          </VipProtectedRoute>
        }
      />
      <Route
        path="/rsi-divergence-full-guide"
        element={
          <VipProtectedRoute>
            <RSIDivergenceFullGuide />
          </VipProtectedRoute>
        }
      />
      <Route
        path="/options-basics-for-beginners"
        element={
          <VipProtectedRoute>
            <OptionsBasicsForBeginners />
          </VipProtectedRoute>
        }
      />
      <Route
        path="/technical-analysis-mastery"
        element={
          <VipProtectedRoute>
            <TechnicalAnalysisMastery />
          </VipProtectedRoute>
        }
      />
      <Route
        path="/candlestick-patterns-guide"
        element={
          <VipProtectedRoute>
            <CandlestickPatternsGuide />
          </VipProtectedRoute>
        }
      />
      <Route
        path="/support-resistance-levels"
        element={
          <VipProtectedRoute>
            <SupportResistanceLevels />
          </VipProtectedRoute>
        }
      />
      <Route
        path="/moving-averages-trading-logic"
        element={
          <VipProtectedRoute>
            <MovingAveragesTradingLogic />
          </VipProtectedRoute>
        }
      />
      <Route
        path="/rsi-stochastic-indicators"
        element={
          <VipProtectedRoute>
            <RSIStochasticIndicators />
          </VipProtectedRoute>
        }
      />
      <Route
        path="/fibonacci-retracement-strategy"
        element={
          <VipProtectedRoute>
            <FibonacciRetracementStrategy />
          </VipProtectedRoute>
        }
      />
      <Route
        path="/bollinger-bands-trading-setup"
        element={
          <VipProtectedRoute>
            <BollingerBandsTradingSetup />
          </VipProtectedRoute>
        }
      />
      <Route
        path="/volume-analysis-techniques"
        element={
          <VipProtectedRoute>
            <VolumeAnalysisTechniques />
          </VipProtectedRoute>
        }
      />
      <Route
        path="/macd-indicator-explained"
        element={
          <VipProtectedRoute>
            <MACDIndicatorExplained />
          </VipProtectedRoute>
        }
      />
      <Route
        path="/ema-trading-strategy"
        element={
          <VipProtectedRoute>
            <EMATradingStrategy />
          </VipProtectedRoute>
        }
      />
      <Route
        path="/price-action-mastery"
        element={
          <VipProtectedRoute>
            <PriceActionMastery />
          </VipProtectedRoute>
        }
      />
      <Route
        path="/risk-management-techniques"
        element={
          <VipProtectedRoute>
            <RiskManagementTechniques />
          </VipProtectedRoute>
        }
      />
      <Route
        path="/option-buying-guide"
        element={
          <VipProtectedRoute>
            <OptionBuyingGuide />
          </VipProtectedRoute>
        }
      />
      <Route
        path="/option-selling-guide"
        element={
          <VipProtectedRoute>
            <OptionSellingGuide />
          </VipProtectedRoute>
        }
      />
      <Route
        path="/intraday-trading-techniques"
        element={
          <VipProtectedRoute>
            <IntradayTradingTechniques />
          </VipProtectedRoute>
        }
      />
      <Route
        path="/swing-trading-strategies"
        element={
          <VipProtectedRoute>
            <SwingTradingStrategies />
          </VipProtectedRoute>
        }
      />
      <Route
        path="/fair-value-gap-trading"
        element={
          <VipProtectedRoute>
            <FairValueGapTrading />
          </VipProtectedRoute>
        }
      />
      <Route
        path="/chart-patterns-signals"
        element={
          <VipProtectedRoute>
            <ChartPatternsSignals />
          </VipProtectedRoute>
        }
      />
      <Route
        path="/trend-analysis-techniques"
        element={
          <VipProtectedRoute>
            <TrendAnalysisTechniques />
          </VipProtectedRoute>
        }
      />
      <Route
        path="/option-hedging-strategies"
        element={
          <VipProtectedRoute>
            <OptionHedgingStrategies />
          </VipProtectedRoute>
        }
      />
      <Route
        path="/scalping-techniques"
        element={
          <VipProtectedRoute>
            <ScalpingTechniques />
          </VipProtectedRoute>
        }
      />
      <Route
        path="/advanced-options-strategies"
        element={
          <VipProtectedRoute>
            <AdvancedOptionsStrategies />
          </VipProtectedRoute>
        }
      />
      <Route
        path="/bullish-option-strategies"
        element={
          <VipProtectedRoute>
            <BullishOptionStrategies />
          </VipProtectedRoute>
        }
      />
      <Route
        path="/bearish-option-strategies"
        element={
          <VipProtectedRoute>
            <BearishOptionStrategies />
          </VipProtectedRoute>
        }
      />
      <Route
        path="/neutral-volatility-option-strategies"
        element={
          <VipProtectedRoute>
            <NeutralVolatilityOptionStrategies />
          </VipProtectedRoute>
        }
      />
      <Route
        path="/other-option-strategies"
        element={
          <VipProtectedRoute>
            <OtherOptionStrategies />
          </VipProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

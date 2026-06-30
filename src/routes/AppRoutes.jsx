import React from "react";
import VipProtectedRoute from "./VipProtectedRoute";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import Reset from "../pages/Reset";

import Dashboard from "../pages/Dashboard";
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

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset" element={<Reset />} />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/profile" element={<MyProfile />} />
      <Route path="/dashboard/myprofile" element={<Navigate to="/dashboard/profile" replace />} />
      <Route path="/dashboard/my-course" element={<MyCourse />} />
      <Route path="/dashboard/mycourse" element={<Navigate to="/dashboard/my-course" replace />} />
      <Route path="/dashboard/watch" element={<CourseWatch />} />
      <Route path="/dashboard/verify" element={<CertificateVerify />} />
      <Route path="/dashboard/disclaimer" element={<Disclaimer />} />
      <Route path="/dashboard/aboutus" element={<Br30AboutUs />} />
      <Route path="/dashboard/vip-access" element={<Br30VipAccess />} />
      <Route path="/dashboard/contact" element={<Br30Contact />} />
      <Route path="/dashboard/privacy" element={<Br30UserPrivacy />} />
      <Route path="/dashboard/terms" element={<Br30TermsCondition />} />
      <Route path="/dashboard/refund" element={<Br30RefundPolocy />} />
      <Route path="/dashboard/strategies" element={<Br30Strategies />} />
      <Route path="/dashboard/service" element={<Br30WebService />} />
      <Route path="/dashboard/about" element={<Br30FounderAbout />} />
      <Route path="/dashboard/view-alert" element={<BellViewAlert />} />
      <Route path="/dashboard/basic-to-advance" element={<BasicToAdvance />} />
      <Route path="/dashboard/live-market-analysis" element={<LiveMarketAnalysis />} />
      <Route path="/dashboard/risk-management" element={<RiskManagement />} />
      <Route path="/dashboard/lifetime-access" element={<LifetimeAccess />} />
      <Route path="/dashboard/support-community" element={<Br30SupportCommunity />} />

      <Route path="/dashboard/admin" element={<AdminDashboard />} />
      <Route path="/dashboard/admin/announcement" element={<BR30Announcement />} />
      <Route path="/dashboard/admin/reviews" element={<UserReview />} />
      <Route path="/dashboard/admin/course-edit" element={<Br30CourseEdit />} />
      <Route path="/dashboard/admin/users" element={<Br30UserManagement />} />
      <Route path="/dashboard/admin/load-course" element={<Br30LoadCourse />} />
      <Route path="/dashboard/admin/bell-notification" element={<Br30BellNotification />} />

      <Route path="/myprofile" element={<Navigate to="/dashboard/profile" replace />} />
      <Route path="/mycourse" element={<Navigate to="/dashboard/my-course" replace />} />
      <Route path="/watch" element={<Navigate to="/dashboard/watch" replace />} />
      <Route path="/verify" element={<Navigate to="/dashboard/verify" replace />} />
      <Route path="/disclaimer" element={<Navigate to="/dashboard/disclaimer" replace />} />
      <Route path="/aboutus" element={<Navigate to="/dashboard/aboutus" replace />} />
      <Route path="/vip-access" element={<Navigate to="/dashboard/vip-access" replace />} />
      <Route path="/contact" element={<Navigate to="/dashboard/contact" replace />} />
      <Route path="/privacy" element={<Navigate to="/dashboard/privacy" replace />} />
      <Route path="/terms" element={<Navigate to="/dashboard/terms" replace />} />
      <Route path="/refund" element={<Navigate to="/dashboard/refund" replace />} />
      <Route path="/strategies" element={<Navigate to="/dashboard/strategies" replace />} />
      <Route path="/service" element={<Navigate to="/dashboard/service" replace />} />
      <Route path="/about" element={<Navigate to="/dashboard/about" replace />} />
      <Route path="/view-alert" element={<Navigate to="/dashboard/view-alert" replace />} />
      <Route path="/basic-to-advance" element={<Navigate to="/dashboard/basic-to-advance" replace />} />
      <Route path="/live-market-analysis" element={<Navigate to="/dashboard/live-market-analysis" replace />} />
      <Route path="/risk-management" element={<Navigate to="/dashboard/risk-management" replace />} />
      <Route path="/lifetime-access" element={<Navigate to="/dashboard/lifetime-access" replace />} />
      <Route path="/support-community" element={<Navigate to="/dashboard/support-community" replace />} />
      <Route path="/admin" element={<Navigate to="/dashboard/admin" replace />} />
      <Route path="/admin/announcement" element={<Navigate to="/dashboard/admin/announcement" replace />} />
      <Route path="/admin/reviews" element={<Navigate to="/dashboard/admin/reviews" replace />} />
      <Route path="/admin/course-edit" element={<Navigate to="/dashboard/admin/course-edit" replace />} />
      <Route path="/admin/users" element={<Navigate to="/dashboard/admin/users" replace />} />
      <Route path="/admin/load-course" element={<Navigate to="/dashboard/admin/load-course" replace />} />
      <Route path="/admin/bell-notification" element={<Navigate to="/dashboard/admin/bell-notification" replace />} />

      <Route
        path="/dashboard/ema-fvg-option-buying"
        element={
          <VipProtectedRoute>
            <EMAFVGOptionBuying />
          </VipProtectedRoute>
        }
      />
      <Route
        path="/dashboard/ema-fvg-option-selling"
        element={
          <VipProtectedRoute>
            <EMAFVGOptionSelling />
          </VipProtectedRoute>
        }
      />
      <Route
        path="/dashboard/option-greeks-mastery"
        element={
          <VipProtectedRoute>
            <OptionGreeksMastery />
          </VipProtectedRoute>
        }
      />
      <Route
        path="/dashboard/option-selling-with-hedging"
        element={
          <VipProtectedRoute>
            <OptionSellingWithHedging />
          </VipProtectedRoute>
        }
      />
      <Route
        path="/dashboard/rsi-divergence-full-guide"
        element={
          <VipProtectedRoute>
            <RSIDivergenceFullGuide />
          </VipProtectedRoute>
        }
      />
      <Route
        path="/dashboard/options-basics-for-beginners"
        element={
          <VipProtectedRoute>
            <OptionsBasicsForBeginners />
          </VipProtectedRoute>
        }
      />
      <Route
        path="/dashboard/technical-analysis-mastery"
        element={
          <VipProtectedRoute>
            <TechnicalAnalysisMastery />
          </VipProtectedRoute>
        }
      />
      <Route
        path="/dashboard/candlestick-patterns-guide"
        element={
          <VipProtectedRoute>
            <CandlestickPatternsGuide />
          </VipProtectedRoute>
        }
      />
      <Route
        path="/dashboard/support-resistance-levels"
        element={
          <VipProtectedRoute>
            <SupportResistanceLevels />
          </VipProtectedRoute>
        }
      />
      <Route
        path="/dashboard/moving-averages-trading-logic"
        element={
          <VipProtectedRoute>
            <MovingAveragesTradingLogic />
          </VipProtectedRoute>
        }
      />
      <Route
        path="/dashboard/rsi-stochastic-indicators"
        element={
          <VipProtectedRoute>
            <RSIStochasticIndicators />
          </VipProtectedRoute>
        }
      />
      <Route
        path="/dashboard/fibonacci-retracement-strategy"
        element={
          <VipProtectedRoute>
            <FibonacciRetracementStrategy />
          </VipProtectedRoute>
        }
      />
      <Route
        path="/dashboard/bollinger-bands-trading-setup"
        element={
          <VipProtectedRoute>
            <BollingerBandsTradingSetup />
          </VipProtectedRoute>
        }
      />
      <Route
        path="/dashboard/volume-analysis-techniques"
        element={
          <VipProtectedRoute>
            <VolumeAnalysisTechniques />
          </VipProtectedRoute>
        }
      />
      <Route
        path="/dashboard/macd-indicator-explained"
        element={
          <VipProtectedRoute>
            <MACDIndicatorExplained />
          </VipProtectedRoute>
        }
      />
      <Route
        path="/dashboard/ema-trading-strategy"
        element={
          <VipProtectedRoute>
            <EMATradingStrategy />
          </VipProtectedRoute>
        }
      />
      <Route
        path="/dashboard/price-action-mastery"
        element={
          <VipProtectedRoute>
            <PriceActionMastery />
          </VipProtectedRoute>
        }
      />
      <Route
        path="/dashboard/risk-management-techniques"
        element={
          <VipProtectedRoute>
            <RiskManagementTechniques />
          </VipProtectedRoute>
        }
      />
      <Route
        path="/dashboard/option-buying-guide"
        element={
          <VipProtectedRoute>
            <OptionBuyingGuide />
          </VipProtectedRoute>
        }
      />
      <Route
        path="/dashboard/option-selling-guide"
        element={
          <VipProtectedRoute>
            <OptionSellingGuide />
          </VipProtectedRoute>
        }
      />
      <Route
        path="/dashboard/intraday-trading-techniques"
        element={
          <VipProtectedRoute>
            <IntradayTradingTechniques />
          </VipProtectedRoute>
        }
      />
      <Route
        path="/dashboard/swing-trading-strategies"
        element={
          <VipProtectedRoute>
            <SwingTradingStrategies />
          </VipProtectedRoute>
        }
      />
      <Route
        path="/dashboard/fair-value-gap-trading"
        element={
          <VipProtectedRoute>
            <FairValueGapTrading />
          </VipProtectedRoute>
        }
      />
      <Route
        path="/dashboard/chart-patterns-signals"
        element={
          <VipProtectedRoute>
            <ChartPatternsSignals />
          </VipProtectedRoute>
        }
      />
      <Route
        path="/dashboard/trend-analysis-techniques"
        element={
          <VipProtectedRoute>
            <TrendAnalysisTechniques />
          </VipProtectedRoute>
        }
      />
      <Route
        path="/dashboard/option-hedging-strategies"
        element={
          <VipProtectedRoute>
            <OptionHedgingStrategies />
          </VipProtectedRoute>
        }
      />
      <Route
        path="/dashboard/scalping-techniques"
        element={
          <VipProtectedRoute>
            <ScalpingTechniques />
          </VipProtectedRoute>
        }
      />
      <Route
        path="/dashboard/advanced-options-strategies"
        element={
          <VipProtectedRoute>
            <AdvancedOptionsStrategies />
          </VipProtectedRoute>
        }
      />
      <Route
        path="/dashboard/bullish-option-strategies"
        element={
          <VipProtectedRoute>
            <BullishOptionStrategies />
          </VipProtectedRoute>
        }
      />
      <Route
        path="/dashboard/bearish-option-strategies"
        element={
          <VipProtectedRoute>
            <BearishOptionStrategies />
          </VipProtectedRoute>
        }
      />
      <Route
        path="/dashboard/neutral-volatility-option-strategies"
        element={
          <VipProtectedRoute>
            <NeutralVolatilityOptionStrategies />
          </VipProtectedRoute>
        }
      />
      <Route
        path="/dashboard/other-option-strategies"
        element={
          <VipProtectedRoute>
            <OtherOptionStrategies />
          </VipProtectedRoute>
        }
      />

      <Route path="/ema-fvg-option-buying" element={<Navigate to="/dashboard/ema-fvg-option-buying" replace />} />
      <Route path="/ema-fvg-option-selling" element={<Navigate to="/dashboard/ema-fvg-option-selling" replace />} />
      <Route path="/option-greeks-mastery" element={<Navigate to="/dashboard/option-greeks-mastery" replace />} />
      <Route path="/option-selling-with-hedging" element={<Navigate to="/dashboard/option-selling-with-hedging" replace />} />
      <Route path="/rsi-divergence-full-guide" element={<Navigate to="/dashboard/rsi-divergence-full-guide" replace />} />
      <Route path="/options-basics-for-beginners" element={<Navigate to="/dashboard/options-basics-for-beginners" replace />} />
      <Route path="/technical-analysis-mastery" element={<Navigate to="/dashboard/technical-analysis-mastery" replace />} />
      <Route path="/candlestick-patterns-guide" element={<Navigate to="/dashboard/candlestick-patterns-guide" replace />} />
      <Route path="/support-resistance-levels" element={<Navigate to="/dashboard/support-resistance-levels" replace />} />
      <Route path="/moving-averages-trading-logic" element={<Navigate to="/dashboard/moving-averages-trading-logic" replace />} />
      <Route path="/rsi-stochastic-indicators" element={<Navigate to="/dashboard/rsi-stochastic-indicators" replace />} />
      <Route path="/fibonacci-retracement-strategy" element={<Navigate to="/dashboard/fibonacci-retracement-strategy" replace />} />
      <Route path="/bollinger-bands-trading-setup" element={<Navigate to="/dashboard/bollinger-bands-trading-setup" replace />} />
      <Route path="/volume-analysis-techniques" element={<Navigate to="/dashboard/volume-analysis-techniques" replace />} />
      <Route path="/macd-indicator-explained" element={<Navigate to="/dashboard/macd-indicator-explained" replace />} />
      <Route path="/ema-trading-strategy" element={<Navigate to="/dashboard/ema-trading-strategy" replace />} />
      <Route path="/price-action-mastery" element={<Navigate to="/dashboard/price-action-mastery" replace />} />
      <Route path="/risk-management-techniques" element={<Navigate to="/dashboard/risk-management-techniques" replace />} />
      <Route path="/option-buying-guide" element={<Navigate to="/dashboard/option-buying-guide" replace />} />
      <Route path="/option-selling-guide" element={<Navigate to="/dashboard/option-selling-guide" replace />} />
      <Route path="/intraday-trading-techniques" element={<Navigate to="/dashboard/intraday-trading-techniques" replace />} />
      <Route path="/swing-trading-strategies" element={<Navigate to="/dashboard/swing-trading-strategies" replace />} />
      <Route path="/fair-value-gap-trading" element={<Navigate to="/dashboard/fair-value-gap-trading" replace />} />
      <Route path="/chart-patterns-signals" element={<Navigate to="/dashboard/chart-patterns-signals" replace />} />
      <Route path="/trend-analysis-techniques" element={<Navigate to="/dashboard/trend-analysis-techniques" replace />} />
      <Route path="/option-hedging-strategies" element={<Navigate to="/dashboard/option-hedging-strategies" replace />} />
      <Route path="/scalping-techniques" element={<Navigate to="/dashboard/scalping-techniques" replace />} />
      <Route path="/advanced-options-strategies" element={<Navigate to="/dashboard/advanced-options-strategies" replace />} />
      <Route path="/bullish-option-strategies" element={<Navigate to="/dashboard/bullish-option-strategies" replace />} />
      <Route path="/bearish-option-strategies" element={<Navigate to="/dashboard/bearish-option-strategies" replace />} />
      <Route path="/neutral-volatility-option-strategies" element={<Navigate to="/dashboard/neutral-volatility-option-strategies" replace />} />
      <Route path="/other-option-strategies" element={<Navigate to="/dashboard/other-option-strategies" replace />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

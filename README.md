# BR30 Trader

🚀 **BR30 Trader** is a modern trading education platform built using **React.js, Vite, Node.js, Express.js and MongoDB**.

---

## 🌐 Live Website

[🚀 Visit BR30 Trader](https://my-frontend-eight-roan.vercel.app/)

---

## 🌟 Features

- User Registration & Login
- OTP Verification System
- Course Purchase System
- Premium Trading Courses
- Student Dashboard
- Admin Dashboard
- Profile Management
- Notification System
- SEO Optimized Pages
- Mobile Responsive Design

---

## 🛠️ Tech Stack

### Frontend

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=fff)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=fff)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=fff)

---

### Backend

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=fff)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=fff)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=fff)

---

### Integrations

![Razorpay](https://img.shields.io/badge/Razorpay-0C2451?style=for-the-badge&logo=razorpay&logoColor=fff)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=fff)
![Brevo](https://img.shields.io/badge/Brevo_SMTP-0099FF?style=for-the-badge)
![Firebase](https://img.shields.io/badge/Firebase-F57C00?style=for-the-badge&logo=firebase&logoColor=fff)

---

### Deployment

![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=fff)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=000)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=fff)

---

### Development Tools

![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=fff)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=fff)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=fff)
![NPM](https://img.shields.io/badge/NPM-CB3837?style=for-the-badge&logo=npm&logoColor=fff)

---

# 📁 Project Structure

```bash
br30trader.com-f
│
├── public/
│   ├── course-files/
│   ├── images/
│   ├── videos/
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── icons.svg
│   ├── robots.txt
│   └── sitemap.xml
│
├── src/
│   │
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── FooterSection.jsx
│   │   ├── Leaderboard.jsx
│   │   ├── ScrollToTop.jsx
│   │   ├── CoursesSection.jsx
│   │   ├── CourseHighlightsSection.jsx
│   │   ├── ServicesSection.jsx
│   │   ├── PdfHubSection.jsx
│   │   ├── ReviewSection.jsx
│   │   ├── PatternSection.jsx
│   │   ├── PillarsSection.jsx
│   │   ├── TradingMastery.jsx
│   │   ├── TradingUniverseSection.jsx
│   │   ├── TradingMindsetSection.jsx
│   │   ├── TradingToolsSection.jsx
│   │   ├── TradingJournalSection.jsx
│   │   └── TradingUpdatesSection.jsx
│   │
│   ├── context/
│   │   └── AuthContext.jsx
│   │
│   ├── hooks/
│   │   └── useShortcuts.js
│   │
│   ├── routes/
│   │   ├── AppRoutes.jsx
│   │   └── VipProtectedRoute.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── ForgotPassword.jsx
│   │   ├── Reset.jsx
│   │   ├── MyProfile.jsx
│   │   ├── MyCourse.jsx
│   │   ├── CourseWatch.jsx
│   │   ├── UserReview.jsx
│   │   ├── CertificateVerify.jsx
│   │   │
│   │   ├── AdminDashboard.jsx
│   │   ├── Br30UserManagement.jsx
│   │   ├── Br30CourseEdit.jsx
│   │   ├── Br30LoadCourse.jsx
│   │   ├── BR30Announcement.jsx
│   │   ├── BellViewAlert.jsx
│   │   ├── Br30BellNotification.jsx
│   │
│   │   ├── Br30AboutUs.jsx
│   │   ├── Br30Contact.jsx
│   │   ├── Br30TermsCondition.jsx
│   │   ├── Br30UserPrivacy.jsx
│   │   ├── Br30RefundPolocy.jsx
│   │   ├── Disclaimer.jsx
│   │   ├── Br30SupportCommunity.jsx
│   │   ├── Br30FounderAbout.jsx
│   │   ├── Br30VipAccess.jsx
│   │   ├── Br30WebService.jsx
│   │
│   │   ├── BasicToAdvance.jsx
│   │   ├── TechnicalAnalysisMastery.jsx
│   │   ├── PriceActionMastery.jsx
│   │   ├── CandlestickPatternsGuide.jsx
│   │   ├── ChartPatternsSignals.jsx
│   │   ├── SupportResistanceLevels.jsx
│   │   ├── TrendAnalysisTechniques.jsx
│   │   ├── VolumeAnalysisTechniques.jsx
│   │   ├── RiskManagement.jsx
│   │   ├── RiskManagementTechniques.jsx
│   │   ├── ScalpingTechniques.jsx
│   │   ├── SwingTradingStrategies.jsx
│   │   ├── IntradayTradingTechniques.jsx
│   │
│   │   ├── EMATradingStrategy.jsx
│   │   ├── EMAFVGOptionBuying.jsx
│   │   ├── EMAFVGOptionSelling.jsx
│   │   ├── FairValueGapTrading.jsx
│   │   ├── FibonacciRetracementStrategy.jsx
│   │   ├── BollingerBandsTradingSetup.jsx
│   │   ├── MACDIndicatorExplained.jsx
│   │   ├── RSIStochasticIndicators.jsx
│   │   ├── RSIDivergenceFullGuide.jsx
│   │
│   │   ├── OptionsBasicsForBeginners.jsx
│   │   ├── OptionBuyingGuide.jsx
│   │   ├── OptionSellingGuide.jsx
│   │   ├── OptionGreeksMastery.jsx
│   │   ├── OptionSellingWithHedging.jsx
│   │   ├── OptionHedgingStrategies.jsx
│   │   ├── AdvancedOptionsStrategies.jsx
│   │   ├── BullishOptionStrategies.jsx
│   │   ├── BearishOptionStrategies.jsx
│   │   ├── NeutralVolatilityOptionStrategies.jsx
│   │   └── OtherOptionStrategies.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .env
├── .gitignore
├── .prettierrc
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── vercel.json
└── README.md
```
---

## 📸 Screenshots

### 🏠 Home Page

![Home Page](screenshots/Home.png.png)

---

### 📚 Course Page

![Course Page](screenshots/course.png.png)

---

### 📚 Course Page 2

![Course Page 2](screenshots/course2.png.png)

---

### 🔐 Login Page

![Login Page](screenshots/login.png.png)

---

### 📝 Register Page

![Register Page](screenshots/register.png.png)

---

### 🔁 Reset Password Page

![Reset Password](screenshots/reset.png.png)

---

### 👤 My Profile

![My Profile](screenshots/myprofile.png.png)

---

### 🎓 My Course

![My Course](screenshots/mycourse.png.png)

---

### 📘 PDF Hub

![PDF Hub](screenshots/pdfhub.png.png)

---

### 🏆 Top VIP Section

![Top VIP](screenshots/top-vip.png.png)

---

### 📈 Student Trade Page

![Student Trade](screenshots/student-trade.png.png)

---

### 🛡️ Certificate Verification

![Certificate Verify](screenshots/certificate-verify.png.png)

---

### ⚙️ Admin Dashboard

![Admin Dashboard](screenshots/admin-dashboard.png.png)

---

### 🧠 Daily Discipline Page

![Daily Discipline](screenshots/daily-discipline.png.png)

---

### 🔻 Footer Section

![Footer](screenshots/footer.png.png)

---

## 👨‍💻 Developed By

**Mukesh Raj**  
Founder — **BR30 Group**

---

## 📬 Connect With Me

### 🌐 Professional Network

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Mukesh_Raj-0A66C2?style=for-the-badge\&logo=linkedin\&logoColor=white)](https://www.linkedin.com/in/mukeshraj-br30/) [![GitHub](https://img.shields.io/badge/GitHub-mukeshkumarsingh7488--afk-181717?style=for-the-badge\&logo=github\&logoColor=white)](https://github.com/mukeshkumarsingh7488-afk)

### 📱 Social Media

[![Instagram](https://img.shields.io/badge/Instagram-BR30TraderOfficial-E4405F?style=for-the-badge\&logo=instagram\&logoColor=white)](https://www.instagram.com/br30Traderofficial) [![YouTube](https://img.shields.io/badge/YouTube-BR30TraderOfficial-FF0000?style=for-the-badge\&logo=youtube\&logoColor=white)](https://www.youtube.com/@br30traderofficial) [![Facebook](https://img.shields.io/badge/Facebook-BR30-1877F2?style=for-the-badge\&logo=facebook\&logoColor=white)](https://www.facebook.com/share/1DDJYGYYDf/) [![X](https://img.shields.io/badge/X-@MukeshKuma48159-000000?style=for-the-badge\&logo=x\&logoColor=white)](https://x.com/MukeshKuma48159) [![Threads](https://img.shields.io/badge/Threads-BR30TraderOfficial-111111?style=for-the-badge\&logo=threads\&logoColor=white)](https://www.threads.com/@br30traderofficial)

### 💬 Community

[![Telegram](https://img.shields.io/badge/Telegram-BR30_Community-26A5E4?style=for-the-badge\&logo=telegram\&logoColor=white)](https://t.me/+hBAT4kWo63A4ZWY1) [![WhatsApp](https://img.shields.io/badge/WhatsApp-BR30_Community-128C7E?style=for-the-badge\&logo=whatsapp\&logoColor=white)](https://chat.whatsapp.com/B4t82SWBcgOIZTeQXp1wDI)

### 📧 Contact

[![Support Team](https://img.shields.io/badge/📧_Support_Team-Contact_Now-D14836?style=for-the-badge)](https://mail.google.com/mail/?view=cm&fs=1&to=support.br30trader@gmail.com)

[![Service Team](https://img.shields.io/badge/📨_Service_Team-Contact_Now-B71C1C?style=for-the-badge)](https://mail.google.com/mail/?view=cm&fs=1&to=br30service.contact@gmail.com)

### 🚀 BR30 Ecosystem

[![BR30 Trader](https://img.shields.io/badge/BR30_Trader-Official_Website-2962FF?style=for-the-badge\&logo=googlechrome\&logoColor=white)](https://my-frontend-eight-roan.vercel.app/)

[![BR30 Group](https://img.shields.io/badge/BR30_Group-Official_Website-6A1B9A?style=for-the-badge\&logo=googlechrome\&logoColor=white)](https://br-30-group-com.vercel.app/)

[![BR30 Kart](https://img.shields.io/badge/BR30_Kart-Official_Website-F57C00?style=for-the-badge\&logo=googlechrome\&logoColor=white)](https://br-30-kart.vercel.app/)

[![BR30 Founder](https://img.shields.io/badge/BR30_Founder-Official_Website-8E24AA?style=for-the-badge\&logo=googlechrome\&logoColor=white)](https://br30-com.vercel.app/)

[![BR30 Algo](https://img.shields.io/badge/BR30_Algo-Official_Website-1565C0?style=for-the-badge\&logo=googlechrome\&logoColor=white)](https://br30algo-com.vercel.app/)

[![BR30\_Market\_Scanner](https://img.shields.io/badge/BR30_Market_Scanner-Official_Website-455A64?style=for-the-badge\&logo=tradingview\&logoColor=white)](https://br30marketscanner-com-frontade.vercel.app/)



---

## 🚀 Project Status

This project is actively maintained and improved with new features, SEO updates, UI improvements and platform enhancements.

---

### Build • Learn • Trade • Grow 🚀


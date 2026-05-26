import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div style={{ background: "#050505", minHeight: "100vh", width: "100%" }}>
      <Router>
        <App />
      </Router>
    </div>
  </React.StrictMode>,
);

import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logoDarkGreen from "../../assets/logo-dark-Green.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Courses", id: "courses" },
    { label: "Roadmap", id: "roadmap" },
    { label: "Why BR30", id: "why" },
    { label: "FAQ", id: "faq" },
  ];

  const scrollToSection = (id) => {
    setOpen(false);

    const doScroll = () => {
      const el = document.getElementById(id);
      if (!el) return;

      const offset = 105;
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    };

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(doScroll, 250);
      return;
    }

    doScroll();
  };

  return (
    <>
      <header className="trader-nav-shell">
        <div className="trader-nav br30-trader-container">
          <button type="button" className="trader-brand trader-brand-btn" onClick={() => scrollToSection("home")}>
            <span className="trader-logo-box">
              <img src={logoDarkGreen} alt="BR30 Trader Logo" />
            </span>
            <span className="trader-brand-text">
              <b>BR30</b> Trader
            </span>
          </button>

          <nav className={`trader-links ${open ? "active" : ""}`}>
            {navItems.map((item) => (
              <button type="button" key={item.label} onClick={() => scrollToSection(item.id)}>
                {item.label}
              </button>
            ))}
          </nav>

          <div className="trader-actions">
            <Link to="/login" className="trader-login">
              Login
            </Link>
            <Link to="/register" className="trader-start">
              Get Started
            </Link>

            <button className={`trader-menu ${open ? "active" : ""}`} onClick={() => setOpen((prev) => !prev)} aria-label="Toggle menu">
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <style>{`
.br30-trader-container{width:min(1180px,calc(100% - 36px));margin:0 auto;}
.trader-nav-shell{position:fixed;top:0;left:0;width:100%;z-index:99999;padding:8px 0;background:rgba(7,0,15,.88);backdrop-filter:blur(22px);-webkit-backdrop-filter:blur(22px);border-bottom:1px solid rgba(166,79,255,.18);}
.trader-nav{min-height:68px;display:flex;align-items:center;justify-content:space-between;gap:22px;padding:10px 18px;border:1px solid rgba(255,255,255,.09);border-radius:26px;background:linear-gradient(135deg,rgba(255,255,255,.075),rgba(255,255,255,.025)),rgba(7,8,14,.82);box-shadow:0 18px 50px rgba(0,0,0,.42),inset 0 1px 0 rgba(255,255,255,.08);}
.trader-brand{display:inline-flex;align-items:center;gap:14px;text-decoration:none;min-width:max-content;}
.trader-brand-btn{border:0;background:transparent;cursor:pointer;padding:0;font-family:inherit;}
.trader-logo-box{width:58px;height:58px;border-radius:18px;display:grid;place-items:center;background:#020403;overflow:hidden;box-shadow:0 0 0 1px rgba(0,255,136,.22),0 16px 35px rgba(0,0,0,.35);}
.trader-logo-box img{width:100%;height:100%;object-fit:cover;display:block;}
.trader-brand-text{font-size:26px;font-weight:900;letter-spacing:-.8px;color:#fff;line-height:1;}
.trader-brand-text b{color:#a833ff;text-shadow:0 0 24px rgba(168,51,255,.5);}
.trader-links{display:flex;align-items:center;justify-content:center;gap:34px;flex:1;}
.trader-links button{position:relative;color:rgba(255,255,255,.72);text-decoration:none;font-size:16px;font-weight:800;transition:.25s ease;background:transparent;border:0;cursor:pointer;font-family:inherit;padding:0;}
.trader-links button:after{content:"";position:absolute;left:50%;bottom:-9px;width:0;height:3px;border-radius:99px;background:linear-gradient(90deg,#a833ff,#f8c96c);transform:translateX(-50%);transition:.25s ease;}
.trader-links button:hover{color:#fff;}
.trader-links button:hover:after{width:80%;}
.trader-actions{display:flex;align-items:center;gap:12px;min-width:max-content;}
.trader-login,.trader-start{min-height:52px;padding:0 26px;display:inline-flex;align-items:center;justify-content:center;border-radius:999px;text-decoration:none;font-size:15px;font-weight:900;transition:.25s ease;white-space:nowrap;}
.trader-login{color:#fff;background:rgba(255,255,255,.055);border:1px solid rgba(255,255,255,.11);}
.trader-login:hover{background:rgba(255,255,255,.1);transform:translateY(-2px);}
.trader-start{color:#120319;background:linear-gradient(135deg,#f8c96c,#a833ff);box-shadow:0 18px 40px rgba(168,51,255,.28);}
.trader-start:hover{transform:translateY(-2px);box-shadow:0 24px 55px rgba(168,51,255,.38);}
.trader-menu{display:none;width:50px;height:50px;border:0;border-radius:16px;background:rgba(255,255,255,.07);cursor:pointer;padding:13px;}
.trader-menu span{display:block;width:100%;height:2px;margin:5px 0;border-radius:99px;background:#fff;transition:.25s ease;}
@media(max-width:920px){.trader-nav-shell{padding:10px 0;}.trader-nav{min-height:68px;border-radius:22px;}.trader-brand-text{font-size:22px;}.trader-logo-box{width:50px;height:50px;border-radius:15px;}.trader-links{position:absolute;top:calc(100% + 10px);left:18px;right:18px;display:none;flex-direction:column;align-items:stretch;gap:8px;padding:16px;border-radius:22px;background:rgba(9,8,18,.98);border:1px solid rgba(255,255,255,.1);box-shadow:0 24px 60px rgba(0,0,0,.45);}.trader-links.active{display:flex;}.trader-links button{padding:13px 14px;border-radius:14px;background:rgba(255,255,255,.04);text-align:left;}.trader-links button:after{display:none;}.trader-menu{display:block;}.trader-login{display:none;}}
@media(max-width:520px){.trader-nav{padding:10px;border-radius:20px;}.trader-brand-text{font-size:20px;}.trader-logo-box{width:46px;height:46px;}.trader-start{min-height:46px;padding:0 17px;font-size:13px;}.trader-menu{width:46px;height:46px;}}
      `}</style>
    </>
  );
}

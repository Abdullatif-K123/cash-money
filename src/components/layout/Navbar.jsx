import React, { useState } from "react";
import logo from "../../assets/svg/cachLogo.svg";
import cashMoney from "../../assets/svg/Cash money.svg";
import classes from "./layout.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";
const Navbar = ({ select, handleSelect, target }) => {
  const [addClass, setAddClass] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  // creating function menu hamburger
  const mobileMenu = () => {
    const hamburger = document.querySelector(".hamburger");
    hamburger.classList.toggle("active");
    setAddClass(!addClass);
  };
  function openWhatsApp() {
    var phoneNumber = "1234567890"; // Replace with the desired phone number
    
    // Check if the device is mobile or desktop
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
      window.open("https://api.whatsapp.com/send?phone=" + phoneNumber);
    } else {
      window.open("https://web.whatsapp.com/send?phone=" + phoneNumber);
    }
  }
  return (
    <div
      className={`${classes.navMain} ${
        currentPath !== "/" ? classes.navWhite : null
      }`}
    >
      <div
        onClick={() => {
          navigate("/");
        }}
        className={classes.navLogo}
      >
        <img src={logo} alt="CashLogo" className={classes.cashLogo} />
        <img src={cashMoney} alt="CashMoney" className={classes.logoText} />
      </div>
      <div
        className={`${classes.navContent} ${
          addClass ? classes.navContentHam : null
        }`}
      >
        <div
          onClick={() => {
            
            mobileMenu();
            openWhatsApp();
            handleSelect(3);
          }}
          className={`${classes.navSection} ${
            select === 3 ? classes.selected : null
          }`}
        >
            تواصل معنا
        </div>
        <div className={`${classes.navSection}  `}>
          {target ? (
            <Link
              activeClass="active"
              to="partners"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={mobileMenu}
            >
              شركات التحويل{" "}
            </Link>
          ) : (
            <LinkRouter
              to="partners"
              onClick={() => {
                mobileMenu();
                handleSelect(2);
              }}
              className={`${classes.disableAnchor}  ${
                select === 2 ? classes.selected : null
              }`}
            >
              شركات التحويل
            </LinkRouter>
          )}
        </div>
        <div
          onClick={() => {
            handleSelect(1);
          }}
          className={`${classes.navSection} ${
            select === 1 ? classes.selected : null
          }`}
        >
          {target ? (
            <Link
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={mobileMenu}
            >
              خدماتنا
            </Link>
          ) : (
            <LinkRouter
              to="our-services"
              onClick={() => {
                mobileMenu();
                handleSelect(1);
              }}
              className={`${classes.disableAnchor}  ${
                select === 1 ? classes.selected : null
              }`}
            >
              خدماتنا
            </LinkRouter>
          )}
        </div>
        <div
          onClick={() => {
            handleSelect(0);
            mobileMenu();
          }}
          className={`${classes.navSection} ${
            select === 0 ? classes.selected : null
          }`}
        >
          الصفحة الرئيسية
        </div>
      </div>
      <div
        className={`${classes.navAuth} ${addClass ? classes.navAuthHam : null}`}
      >
        <button
          onClick={() => {
            navigate("/signin");
            mobileMenu();
          }}
          className={classes.btnLogin}
        >
          تسجيل الدخول
        </button>
        <button
          onClick={() => {
            navigate("/signup");
            mobileMenu();
          }}
          className={classes.btnSignUp}
        >
          إنشاء حساب
        </button>
      </div>

      <div className="hamburger" onClick={mobileMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </div>
  );
};

export default Navbar;

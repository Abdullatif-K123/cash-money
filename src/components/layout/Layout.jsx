import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import classes from "./layout.module.css";
import { useNavigate, useLocation } from "react-router-dom";
const Layout = ({ children }) => {
  const navigate = useNavigate();
  const [select, setSelect] = useState(0);
  const [testBGround, setTestBGround] = useState(false);
  const handleSelector = (id) => {
    setSelect(id);
    if (!id) navigate("/");
  };
  const { pathname } = useLocation();
  const target = pathname === "/" ? true : false;
  useEffect(() => {
    const regex = /\b(touch|alfa|partners)\b/;
    const regex1 = /\b(our-services|charging-account|withdraw|cashtocash)\b/;
    const result1 = regex1.test(pathname);
    const result = regex.test(pathname);
    const regex2 = /\b(alfa|signup|signin|touch)\b/;
    const result2 = regex2.test(pathname);
    setTestBGround(result2);
    result
      ? setSelect(2)
      : result1
      ? setSelect(1)
      : pathname === "/contactus"
      ? setSelect(3)
      : setSelect(0);
  }, [pathname]);

  return (
    <div
      className={`${classes.mainSection} ${
        testBGround ? classes.mainSecWithWite : null
      }`}
    >
      <Navbar select={select} handleSelect={handleSelector} target={target} />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;

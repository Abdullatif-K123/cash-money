import React from "react";
import classes from "./home.module.css";
import { useNavigate } from "react-router-dom";
import pocket from "../../assets/svg/pocket.svg";
import money from "../../assets/svg/money.svg";
import currency from "../../assets/svg/currency.svg";
import leftArrow from "../../assets/svg/left_arrow.svg";
import multiCicles from "../../assets/svg/singleCircleGray.svg";
import multiCicleBig from "../../assets/svg/singleCircleGrayBig.svg";
import multicircleMed from "../../assets/svg/multicircleMed.svg";
import multicircleSemi from "../../assets/svg/multicircleSemi.svg";
import blueCircle from "../../assets/svg/blueCircle.svg";
import Title from "../uiElements/Title";
const SectionTwo = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.secondSecMain} name="services">
      <div className={classes.secTwoHead}>
        <Title title={"خدماتنا"} />
      </div>
      <div className={classes.services}>
        <div className={classes.singleService}>
          <img src={pocket} alt="pocket" className={classes.servicesSec} />
          <p>cash to cash</p>
          <p>
            عند تحويل الرصيد من تطبيق كاش إلى تطبيق كاش سيتم خصم 5000 ل.ل عن كل
            تحويلة
          </p>
          <button
            onClick={() => {
              navigate("/cashtocash");
            }}
            className={classes.btnStartNow}
          >
            <img src={leftArrow} alt="Left Arrow" /> <p>ابدأ الآن</p>
          </button>
        </div>
        <div className={classes.singleService}>
          <img src={money} alt="money_penny" className={classes.servicesSec} />
          <p>سحب الرصيد</p>
          <p>سيتم تحويل المبلغ عن طريق الويش</p>
          <button
            onClick={() => {
              navigate("/withdraw");
            }}
            className={classes.btnStartNow}
          >
            <img src={leftArrow} alt="Left Arrow" /> <p>ابدأ الآن</p>
          </button>
        </div>
        <div className={classes.singleService}>
          <img
            src={currency}
            alt="currency_laptops"
            className={classes.servicesSec}
          />
          <p>تشريج الحساب</p>
          <p>عند تعبئة حسابك من الويش سيتم خصم عمولة 10.000 ل.ل</p>
          <button
            onClick={() => {
              navigate("/charging-account");
            }}
            className={classes.btnStartNow}
          >
            <img src={leftArrow} alt="Left Arrow" /> <p>ابدأ الآن</p>
          </button>
        </div>
      </div>
      <img
        src={multiCicles}
        alt="Multi_Circle"
        className={classes.multicircle}
      />
      <img
        src={multicircleSemi}
        alt="Multi_Circle"
        className={classes.multicircle}
      />
      <img
        src={multicircleMed}
        alt="Multi_Circle"
        className={classes.multicircle}
      />
      <img
        src={multiCicleBig}
        alt="Multi_Circle"
        className={classes.multicircle}
      />
      <img src={blueCircle} alt="Blue_circle" className={classes.blueCircle} />
    </div>
  );
};

export default SectionTwo;

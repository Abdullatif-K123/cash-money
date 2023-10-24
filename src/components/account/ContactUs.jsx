import React from "react";
import classes from "./account.module.css";
import accountImg from "../../assets/svg/account-img.svg";
import Title from "../uiElements/Title";
import Input from "../uiElements/Input";
import Button from "../uiElements/Button";
import threeCircle from "../../assets/svg/ThreeCircle.svg";
const ContactUs = () => {
  return (
    <div className={classes.accountMain}>
      <Title title={"تواصل معنا"} />
      <div className={classes.accountImgContent}>
        <img
          src={accountImg}
          alt="man-success"
          className={classes.imgSizingWallet}
        />
        <div className={classes.accountContent}>
          <Input
            lableTitle={"أدخل رقم الهاتف"}
            type={"number"}
            typeText={"+961"}
            placeholder={"75454545"}
            account={true}
          />
          <div className={classes.textareaMain}>
          <label for="w3review" className={classes.inputLable}>أدخل رسالتك</label>
          <textarea id="w3review" name="w3review" rows="15" cols="50" className={classes.textareaSec} />
          </div>
          <Button text="إرسال" />
        </div>
      </div>
      <img
        src={threeCircle}
        alt="Three-circle"
        className={classes.multiCircle}
      />
    </div>
  );
};

export default ContactUs;

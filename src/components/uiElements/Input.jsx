import React, { useState } from "react";
import classes from "./ui.module.css";
import hideEye from "../../assets/svg/hideEye.svg";
import openEye from "../../assets/svg/openEye.svg";
const Input = ({ lableTitle, typeText, type, placeholder, account }) => {
  const [inputValue, setInputValue] = useState("");
  const [openHide, setOpenHide] = useState(type);
  const [imgEye, setImgEye] = useState(hideEye);
  const handleClick = () => {
    openHide === "password" ? setImgEye(openEye) : setImgEye(hideEye);
    openHide === "password" ? setOpenHide("text") : setOpenHide("password");
  };
  return (
    <div className={classes.inputMain}>
      <label htmlFor="inputSec" className={classes.inputLable}>
        {lableTitle}
      </label>
      <div
        className={`${classes.inputBox} ${account ? classes.accountOn : null}`}
      >
        {type !== "password" ? (
          <p>{typeText}</p>
        ) : (
          <img onClick={handleClick} src={imgEye} alt="hideEye" />
        )}
        <input
          type={openHide}
          onChange={(e) => {
            setInputValue(e.currentTarget.value);
          }}
          value={inputValue}
          className={classes.inputSec}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default Input;

import React from 'react'
import classes from "./alfa.module.css"
import Title from '../uiElements/Title'
import manSuccess from "../../assets/svg/manCurrency.svg" 
import Input from '../uiElements/Input'
import Button from '../uiElements/Button'
import TwoButtons from '../uiElements/TwoButtons'
const Alfa2hNetSub = () => {
  return (
    <div className={classes.dollarPage}>
    <Title title={"Alfa"}/>
    <div className={classes.chargingMain}>
       <img src={manSuccess} alt="man-success" className={classes.imgSizingWallet} />
       <div className={classes.touchContent}>
        <p>انترنت غير محدود لمدة ساعتين</p>
        <TwoButtons fTitle={"تعبئة لرقم آخر"} sTitle={"تعبئة لرقمي"} type={1} navig={"/alfa/twohours-mine"}/>
        <Input lableTitle={"أدخل رقم الهاتف الذي تود إرسال الخدمة إليه"} type={"number"} typeText={"+961"} placeholder={"75454545"}/>
        <Button text={"إرسال"} />
       </div>
    </div>
  </div>
  )
}

export default Alfa2hNetSub

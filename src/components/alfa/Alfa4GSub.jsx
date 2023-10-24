import React from 'react'
import classes from "./alfa.module.css"
import Title from '../uiElements/Title'
import manSuccess from "../../assets/svg/manCurrency.svg" 
import Input from '../uiElements/Input'
import Button from '../uiElements/Button'
import TwoButtons from '../uiElements/TwoButtons'
const Alfa4GSub = () => {
  return (
    <div className={classes.dollarPage}>
    <Title title={"Alfa"}/>
    <div className={classes.chargingMain}>
       <img src={manSuccess} alt="man-success" className={classes.imgSizingWallet} />
       <div className={classes.touchContent}>
        <p>اختر نوع الحزمة التي تريد شرائها</p>
        <TwoButtons fTitle={"تعبئة لرقم آخر"} sTitle={"تعبئة لرقمي"} type={1} navig={"/alfa/fourG-mine"}/>
        <Input lableTitle={"اختر قيمة الحزمة"} type={"number"} typeText={"MB"} placeholder={"500"}/>
        <Input lableTitle={"أدخل رقم الهاتف الذي تريد تعبئة الانترنت إليه"} type={"number"} typeText={"+961"} placeholder={"75454545"}/>
        <Button text={"تحويل"} />
       </div>
    </div>
  </div>
  )
}

export default Alfa4GSub

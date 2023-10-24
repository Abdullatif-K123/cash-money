import React from 'react'
import classes from "./alfa.module.css"
import Title from '../uiElements/Title'
import manSuccess from "../../assets/svg/manCurrency.svg" 
import Input from '../uiElements/Input'
import Button from '../uiElements/Button'
import TwoButtons from '../uiElements/TwoButtons'
const AlfaDollarSub = () => {
  return (
    <div className={classes.alfaPageSub}>
    <Title title={"Alfa"}/>
    <div className={classes.chargingMain}>
       <img src={manSuccess} alt="man-success" className={classes.imgSizingWallet} />
       <div className={classes.touchContent}>
        <p>اختر عدد الدولارات التي تودّ شرائها</p>
        <TwoButtons fTitle={"إرسال لرقم آخر"} sTitle={"تعبئة لرقمي"} type={1} navig={"/alfa/dollars-mine"}/>
        <Input lableTitle={"اختر القيمة"} type={"number"} typeText={"$"} placeholder={"0.5"}/>
        <Input lableTitle={"أدخل رقم الهاتف لتعبئة كرت إليه"} type={"number"} typeText={"+961"} placeholder={"75454545"}/>
        <Button text={"إرسال"} />
       </div>
    </div>
  </div>
  )
}

export default AlfaDollarSub

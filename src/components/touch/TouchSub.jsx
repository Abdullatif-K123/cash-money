import React from 'react'
import classes from "./touch.module.css"
import Title from '../uiElements/Title'
import manSuccess from "../../assets/svg/manCurrency.svg" 
import Input from '../uiElements/Input'
import Button from '../uiElements/Button'
import TwoButtons from '../uiElements/TwoButtons'
const TouchSub = () => {
  return (
    <div className={classes.touchPage}>
    <Title title={"Touch"}/>
    <div className={classes.chargingMain}>
       <img src={manSuccess} alt="man-success" className={classes.imgSizingWallet} />
       <div className={classes.touchContent}>
        <p>اختر نوع الكرت الذي تود شرائه</p>
        <TwoButtons fTitle={"تعبئة لرقم آخر"} sTitle={"تعبئة لخطي"} type={1} navig={"/touch/mine"}/>
        <Input lableTitle={"اختر قيمة الكرت"} type={"number"} typeText={"$"} placeholder={"22073"}/>
        <Input lableTitle={"أدخل رقم الهاتف لتعبئة كرت إليه"} type={"number"} typeText={"+961"} placeholder={"75454545"}/>
        <Button text={"تعبئة"} />
       </div>
    </div>
  </div>
  )
}

export default TouchSub

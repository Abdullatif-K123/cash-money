import React from 'react'
import classes from "./alfa.module.css"
import Title from '../uiElements/Title'
import manSuccess from "../../assets/svg/manCurrency.svg" 
import Input from '../uiElements/Input'
import Button from '../uiElements/Button'
import TwoButtons from '../uiElements/TwoButtons'
const AlfaCardSub = () => {
  return (
    <div className={classes.alfaPage}>
    <Title title={"Alfa"}/>
    <div className={classes.chargingMain}>
       <img src={manSuccess} alt="man-success" className={classes.imgSizingWallet} />
       <div className={classes.touchContent}>
        <p>اختر نوع الكرت الذي تود شرائه</p>
        <TwoButtons fTitle={"تعبئة لرقم آخر"} sTitle={"تعبئة لرقمي"} type={1} navig={"/alfa/cards-mine"}/>
        <Input lableTitle={"اختر قيمة الكرت"} type={"number"} typeText={"$"} placeholder={"1.33"}/>
        <Input lableTitle={"أدخل رقم الهاتف لتعبئة كرت إليه"} type={"number"} typeText={"+961"} placeholder={"75454545"}/>
        <Button text={"تعبئة"} />
       </div>
    </div>
  </div>
  )
}

export default AlfaCardSub

import React from 'react'
import classes from "./alfa.module.css"
import Title from '../uiElements/Title'
import manSuccess from "../../assets/svg/manCurrency.svg" 
import Input from '../uiElements/Input'
import Button from '../uiElements/Button'
import TwoButtons from '../uiElements/TwoButtons'
import NoteTitle from '../uiElements/NoteTitle'
const AlfaDailySub = () => {
  return (
    <div className={classes.alfaPageSub}>
    <Title title={"Alfa"}/>
       <NoteTitle note={"عند شراء أيام فريقنا سيتواصل معك لإبلاغك عن المبلغ الذي سيكون مرهونا لحين إرسال الدولارات إلينا..."} type={2} />
    <div className={classes.chargingMain}>
       <img src={manSuccess} alt="man-success" className={classes.imgSizingWallet} />
       <div className={classes.touchContent}>
        <TwoButtons fTitle={"تعبئة لرقم آخر"} sTitle={"تعبئة لرقمي"} type={1} navig={"/alfa/daily-mine"}/>
        <Input lableTitle={"اختر القيمة"} type={"number"} typeText={"$"} placeholder={"35"}/>
        <Input lableTitle={"أدخل رقم الهاتف لتعبئة كرت إليه"} type={"number"} typeText={"+961"} placeholder={"75454545"}/>
        <Button text={"تعبئة"} />
       </div>
    </div>
  </div>
  )
}

export default AlfaDailySub

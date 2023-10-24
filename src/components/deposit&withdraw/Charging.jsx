import React from 'react'
import classes from "./cash.module.css"
import Title from '../uiElements/Title'
import charginLogo from "../../assets/svg/charginLogo.svg"
import NoteTitle from '../uiElements/NoteTitle'
import Input from '../uiElements/Input'
import Button from '../uiElements/Button'
const Charging = () => {
  return (
    <div className={classes.chargingPage}>
      <Title title={"تشريج الحساب"}/>
      <div className={classes.chargingMain}>
         <img src={charginLogo} alt="screen-currency" className={classes.imgSizing}/>
         <div className={classes.chargingContent}>
          <NoteTitle note={"عند تعبئة حسابك من الويش سيتم خصم عمولة"} money={" 10.000 "}/>
          <Input lableTitle={"أدخل المبلغ الذي تود إرساله عن طريق الويش"} type={"number"} typeText={"ل.ل"} placeholder={"10.000"}/>
          <Button text={"إرسال"} />
         </div>
      </div>
    </div>
  )
}

export default Charging

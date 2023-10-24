import React from 'react'
import classes from "./cash.module.css"
import Title from '../uiElements/Title'
import money from "../../assets/svg/moneyMain.svg"
import NoteTitle from '../uiElements/NoteTitle'
import Input from '../uiElements/Input'
import Button from '../uiElements/Button'
const Withdraw = () => { 
  return (
    <div className={classes.chargingPage}>
    <Title title={"سحب الرصيد"}/>
    <div className={classes.chargingMain}>
       <img src={money} alt="screen-currency" className={classes.imgSizingMoney} />
       <div className={classes.chargingContent}>
        <NoteTitle note={"يتم سحب المبلغ عن طريق الويش"}/>
        <Input lableTitle={"أدخل المبلغ الذي تريد أن تسحبه"} type={"number"} typeText={"ل.ل"} placeholder={"10.000"}/>
        <Input lableTitle={"أدخل رقم الهاتف الذي تريد أن تسحب الرصيد إليه"} type={"number"} typeText={"+961"} placeholder={"75454545"}/>
        <Button text={"إرسال"} />
       </div>
    </div>
  </div>
  )
}

export default Withdraw

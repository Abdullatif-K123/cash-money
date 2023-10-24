import React from 'react'
import classes from "./cash.module.css"
import Title from '../uiElements/Title'
import cashtocash from "../../assets/svg/walletCash.svg"
import NoteTitle from '../uiElements/NoteTitle'
import Input from '../uiElements/Input'
import Button from '../uiElements/Button'
const CashToCash = () => {
  return (
    <div className={classes.chargingPage}>
    <Title title={"Cash To Cash"}/>
    <div className={classes.chargingMain}>
       <img src={cashtocash} alt="wallet-currency" className={classes.imgSizingWallet} />
       <div className={classes.chargingContent}>
        <NoteTitle note={"عند تحويل الرصيد من تطبيق كاش إلى تطبيق كاش سيتم خصم "} money={"5000 "} type={1} rest={" على كل تحويلة "}/>
        <Input lableTitle={"أدخل المبلغ الذي تريد أن تحوله"} type={"number"} typeText={"ل.ل"} placeholder={"10.000"}/>
        <Input lableTitle={"أدخل رقم الهاتف الذي تريد تحويل الرصيد إليه"} type={"number"} typeText={"+961"} placeholder={"75454545"}/>
        <Button text={"إرسال"} />
       </div>
    </div>
  </div>
  )
}

export default CashToCash

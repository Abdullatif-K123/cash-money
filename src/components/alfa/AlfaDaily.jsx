import React from 'react'
import classes from "./alfa.module.css"
import Title from '../uiElements/Title' 
import TwoButtons from '../uiElements/TwoButtons'
import BoxRectangle from '../uiElements/BoxRectangle' 
import NoteTitle from '../uiElements/NoteTitle'
import callender from "../../assets/svg/callender.svg"
import threeCircle from "../../assets/svg/ThreeCircle.svg"
const AlfaDaily = () => {
  return (
    <div className={classes.dollarPage}>
    <Title title={"Alfa"}/> 
       <div className={classes.dollaratContent}>
        <NoteTitle note={"عند شراء أيام فريقنا سيتواصل معك لإبلاغك عن المبلغ الذي سيكون مرهونا لحين إرسال الدولارات إلينا..."} type={2} />
        <TwoButtons fTitle={"إرسال لرقم آخر"} sTitle={"تعبئة لرقمي"} type={0} navig={"/alfa/daily-other"}/>
        <div className={classes.alfaDollar}>
             <BoxRectangle imgSource={callender}  rtl={true} fTitle={"الأيام"} fValue={"13 يوم"} sTitle={"السعر"} sValue={"250.000"}/> 
             <BoxRectangle imgSource={callender}  rtl={true} fTitle={"الأيام"} fValue={"13 يوم"} sTitle={"السعر"} sValue={"250.000"}/> 
             <BoxRectangle imgSource={callender}  rtl={true} fTitle={"الأيام"} fValue={"13 يوم"} sTitle={"السعر"} sValue={"250.000"}/> 
             <BoxRectangle imgSource={callender}  rtl={true} fTitle={"الأيام"} fValue={"13 يوم"} sTitle={"السعر"} sValue={"250.000"}/> 
             <BoxRectangle imgSource={callender}  rtl={true} fTitle={"الأيام"} fValue={"13 يوم"} sTitle={"السعر"} sValue={"250.000"}/> 
             <BoxRectangle imgSource={callender}  rtl={true} fTitle={"الأيام"} fValue={"13 يوم"} sTitle={"السعر"} sValue={"250.000"}/> 
         </div>
       </div>
       <img src={threeCircle} alt="Three-circle" className={classes.multiCircle} />
  </div>
  )
}

export default AlfaDaily

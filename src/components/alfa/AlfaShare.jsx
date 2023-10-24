import React from 'react'
import classes from "./alfa.module.css"
import Title from '../uiElements/Title' 
import TwoButtons from '../uiElements/TwoButtons'
import BoxRectangle from '../uiElements/BoxRectangle'   
import cloudShare from "../../assets/svg/fourG.svg"
import threeCircle from "../../assets/svg/ThreeCircle.svg"
const AlfaShare = () => {
  return (
    <div className={classes.dollarPage}>
    <Title title={"Alfa"}/> 
       <div className={classes.dollaratContent}>
       
        <p className={classes.makeRtl}> اختر نوع حزمة الانترنت المناسبة لك..<span> تحتاج الخدمة إلى 0.67$ للتفعيل </span></p>
        <TwoButtons fTitle={"تعبئة لرقم آخر"} sTitle={"تعبئة لخطي"} type={0} navig={"/alfa/share-other"}/>
        <div className={classes.alfaDollar}>
        <BoxRectangle imgSource={cloudShare} fTitle={"u-share"} fValue={"500"}  fValueSec={" MB"} sTitle={"السعر"} sValue= {"250.000"}  rtlS={true}/> 
        <BoxRectangle imgSource={cloudShare} fTitle={"u-share"} fValue={"500"}  fValueSec={" MB"} sTitle={"السعر"} sValue= {"250.000"}  rtlS={true}/> 
        <BoxRectangle imgSource={cloudShare} fTitle={"u-share"} fValue={"500"}  fValueSec={" MB"} sTitle={"السعر"} sValue= {"250.000"}  rtlS={true}/> 
        <BoxRectangle imgSource={cloudShare} fTitle={"u-share"} fValue={"500"}  fValueSec={" MB"} sTitle={"السعر"} sValue= {"250.000"}  rtlS={true}/> 
         <BoxRectangle imgSource={cloudShare} fTitle={"u-share"} fValue={"500"}  fValueSec={" MB"} sTitle={"السعر"} sValue= {"250.000"}  rtlS={true}/> 
        <BoxRectangle imgSource={cloudShare} fTitle={"u-share"} fValue={"500"}  fValueSec={" MB"} sTitle={"السعر"} sValue= {"250.000"}  rtlS={true}/> 
        </div>
       </div>
       <img src={threeCircle} alt="Three-circle" className={classes.multiCircle} />

  </div>
  )
}

export default AlfaShare

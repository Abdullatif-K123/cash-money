import React from 'react'
import classes from "./alfa.module.css"
import Title from '../uiElements/Title' 
import TwoButtons from '../uiElements/TwoButtons'
import BoxRectangle from '../uiElements/BoxRectangle' 
import wifi7 from "../../assets/svg/phoneCalling.svg"
import threeCircle from "../../assets/svg/ThreeCircle.svg"
const AlfaNetWeek = () => {
  return (
    <div className={classes.dollarPage}>
    <Title title={"Alfa"}/> 
       <div className={classes.dollaratContent}>
        <p>اختر نوع الانترنت الذي تودّ شرائه</p>
        <TwoButtons fTitle={"تعبئة لرقم آخر"} sTitle={"تعبئة لخطي"} type={0} navig={"/alfa/week-other"}/>
        <div className={classes.alfaDollar}>
        <BoxRectangle imgSource={wifi7} fTitle={"Alfa"} fValue={"500"}  fValueSec={" MB"} sTitle={"الأيام"} sValue={"7"} sValueSec={"يوم"} ThTitle={"السعر"} ThValue={"250.000"} rtlThrd={true} rtlS={true}/>
        <BoxRectangle imgSource={wifi7} fTitle={"Alfa"} fValue={"500"}  fValueSec={" MB"} sTitle={"الأيام"} sValue={"7"} sValueSec={"يوم"} ThTitle={"السعر"} ThValue={"250.000"} rtlThrd={true} rtlS={true}/>
        <BoxRectangle imgSource={wifi7} fTitle={"Alfa"} fValue={"500"}  fValueSec={" MB"} sTitle={"الأيام"} sValue={"7"} sValueSec={"يوم"} ThTitle={"السعر"} ThValue={"250.000"} rtlThrd={true} rtlS={true}/>
              </div>
       </div>
       <img src={threeCircle} alt="Three-circle" className={classes.multiCircle} />

  </div>
  )
}

export default AlfaNetWeek

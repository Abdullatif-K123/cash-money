import React from 'react'
import classes from "./alfa.module.css"
import Title from '../uiElements/Title' 
import TwoButtons from '../uiElements/TwoButtons'
import BoxRectangle from '../uiElements/BoxRectangle'  
import phonCalling from "../../assets/svg/wifiseven.svg"

import threeCircle from "../../assets/svg/ThreeCircle.svg"
const Alfa20Min = () => {
  return (
    <div className={classes.dollarPage}>
    <Title title={"Alfa"}/> 
       <div className={classes.dollaratContent}>
        <p className={classes.makeRtl}>20 دقيقة مكالمات</p>
        <TwoButtons fTitle={"تعبئة لرقم آخر"} sTitle={"تعبئة لخطي"} type={0} navig={"/alfa/twentymin-other"}/>
        <div className={classes.alfaDollar}>
        <BoxRectangle imgSource={phonCalling} fTitle={"Alfa"} fValue={"20"}  fValueSec={"دقيقة مكالمات "} rtlSpan={true} sTitle={"الأيام"} sValue={"7"} sValueSec={"يوم"} ThTitle={"السعر"} ThValue={"250.000"} rtlThrd={true} rtlS={true}/> 
        <BoxRectangle imgSource={phonCalling} fTitle={"Alfa"} fValue={"20"}  fValueSec={"دقيقة مكالمات "} rtlSpan={true} sTitle={"الأيام"} sValue={"7"} sValueSec={"يوم"} ThTitle={"السعر"} ThValue={"250.000"} rtlThrd={true} rtlS={true}/> 
        <BoxRectangle imgSource={phonCalling} fTitle={"Alfa"} fValue={"20"}  fValueSec={"دقيقة مكالمات "} rtlSpan={true} sTitle={"الأيام"} sValue={"7"} sValueSec={"يوم"} ThTitle={"السعر"} ThValue={"250.000"} rtlThrd={true} rtlS={true}/> 
              </div>
       </div>
       <img src={threeCircle} alt="Three-circle" className={classes.multiCircle} />
  </div>
  )
}

export default Alfa20Min

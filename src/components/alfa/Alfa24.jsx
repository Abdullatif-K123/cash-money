import React from 'react'
import classes from "./alfa.module.css"
import Title from '../uiElements/Title' 
import TwoButtons from '../uiElements/TwoButtons'
import BoxRectangle from '../uiElements/BoxRectangle' 
import wifi24 from "../../assets/svg/twenyFour.svg"
import threeCircle from "../../assets/svg/ThreeCircle.svg"
const Alfa24 = () => {
  return (
    <div className={classes.dollarPage}>
    <Title title={"Alfa"}/> 
       <div className={classes.dollaratContent}>
        <p>اختر نوع الانترنت الذي تودّ شرائه</p>
        <TwoButtons fTitle={"تعبئة لرقم آخر"} sTitle={"تعبئة لخطي"} type={0} navig={"/alfa/wifi24-other"}/>
        <div className={classes.alfaDollar}>
        <BoxRectangle imgSource={wifi24} fTitle={"Alfa"} fValue={"500"}  fValueSec={" MB"} sTitle={"الصلاحية"} sValue={"1"} sValueSec={"يوم"} ThTitle={"السعر"} ThValue={"250.000"} rtlThrd={true} rtlS={true}/>
        <BoxRectangle imgSource={wifi24} fTitle={"Alfa"} fValue={"500"}  fValueSec={" MB"} sTitle={"الصلاحية"} sValue={"1"} sValueSec={"يوم"} ThTitle={"السعر"} ThValue={"250.000"} rtlThrd={true} rtlS={true}/>
        <BoxRectangle imgSource={wifi24} fTitle={"Alfa"} fValue={"500"}  fValueSec={" MB"} sTitle={"الصلاحية"} sValue={"1"} sValueSec={"يوم"} ThTitle={"السعر"} ThValue={"250.000"} rtlThrd={true} rtlS={true}/>
              </div>
       </div>
       <img src={threeCircle} alt="Three-circle" className={classes.multiCircle} />

  </div>
  )
}

export default Alfa24

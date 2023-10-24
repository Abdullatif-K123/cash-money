import React from 'react'
import classes from "./alfa.module.css"
import Title from '../uiElements/Title' 
import TwoButtons from '../uiElements/TwoButtons'
import BoxRectangle from '../uiElements/BoxRectangle'  
import fourG from "../../assets/svg/clock.svg"

import threeCircle from "../../assets/svg/ThreeCircle.svg"
const Alfa4G = () => {
  return (
    <div className={classes.dollarPage}>
    <Title title={"Alfa"}/> 
       <div className={classes.dollaratContent}>
        <p>اختر نوع الحزمة التي تريد شرائها</p>
        <TwoButtons fTitle={"تعبئة لرقم آخر"} sTitle={"تعبئة لخطي"} type={0} navig={"/alfa/fourG-other"}/>
        <div className={classes.alfaDollar}>
        <BoxRectangle imgSource={fourG} fTitle={"Alfa"} fValue={"500"}  fValueSec={" MB"} sTitle={"السعر"} sValue= {"250.000"}  rtlS={true}/>
        <BoxRectangle imgSource={fourG} fTitle={"Alfa"} fValue={"500"}  fValueSec={" MB"} sTitle={"السعر"} sValue= {"250.000"}  rtlS={true}/>
        <BoxRectangle imgSource={fourG} fTitle={"Alfa"} fValue={"500"}  fValueSec={" MB"} sTitle={"السعر"} sValue= {"250.000"}  rtlS={true}/>
        <BoxRectangle imgSource={fourG} fTitle={"Alfa"} fValue={"500"}  fValueSec={" MB"} sTitle={"السعر"} sValue= {"250.000"}  rtlS={true}/>
        <BoxRectangle imgSource={fourG} fTitle={"Alfa"} fValue={"500"}  fValueSec={" MB"} sTitle={"السعر"} sValue= {"250.000"}  rtlS={true}/>
        <BoxRectangle imgSource={fourG} fTitle={"Alfa"} fValue={"500"}  fValueSec={" MB"} sTitle={"السعر"} sValue= {"250.000"}  rtlS={true}/>
              </div>
       </div>
       <img src={threeCircle} alt="Three-circle" className={classes.multiCircle} />
  </div>
  )
}

export default Alfa4G

import React from 'react'
import classes from "./alfa.module.css"
import Title from '../uiElements/Title' 
import TwoButtons from '../uiElements/TwoButtons'
import BoxRectangle from '../uiElements/BoxRectangle'
import dollarImg from "../../assets/svg/dollar.svg"
import threeCircle from "../../assets/svg/ThreeCircle.svg"
const TouchSub = () => {
  return (
    <div className={classes.dollarPage}>
    <Title title={"Alfa"}/> 
       <div className={classes.dollaratContent}>
        <p>اختر عدد الدولارات التي تودّ شرائها</p>
        <TwoButtons fTitle={"إرسال لرقم آخر"} sTitle={"تعبئة لرقمي"} type={0} navig={"/alfa/dollars-other"}/>
        <div className={classes.alfaDollar}>
             <BoxRectangle imgSource={dollarImg} fTitle={"Alfa"} fValue={"500"} sTitle={"السعر"} sValue={"250.000"} rtlS={true} />
             <BoxRectangle imgSource={dollarImg} fTitle={"Alfa"} fValue={"500"} sTitle={"السعر"} sValue={"250.000"} rtlS={true} />
             <BoxRectangle imgSource={dollarImg} fTitle={"Alfa"} fValue={"500"} sTitle={"السعر"} sValue={"250.000"} rtlS={true} />
             <BoxRectangle imgSource={dollarImg} fTitle={"Alfa"} fValue={"500"} sTitle={"السعر"} sValue={"250.000"} rtlS={true} />
             <BoxRectangle imgSource={dollarImg} fTitle={"Alfa"} fValue={"500"} sTitle={"السعر"} sValue={"250.000"} rtlS={true} />
             <BoxRectangle imgSource={dollarImg} fTitle={"Alfa"} fValue={"500"} sTitle={"السعر"} sValue={"250.000"} rtlS={true} />        </div>
       </div>
       <img src={threeCircle} alt="Three-circle" className={classes.multiCircle} />
  </div>
  )
}

export default TouchSub

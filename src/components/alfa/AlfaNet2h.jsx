import React from 'react'
import classes from "./alfa.module.css"
import Title from '../uiElements/Title' 
import TwoButtons from '../uiElements/TwoButtons'
import BoxRectangle from '../uiElements/BoxRectangle'  
import clock from "../../assets/svg/cloudShare.svg"
import threeCircle from "../../assets/svg/ThreeCircle.svg"
const Alfa2hNet = () => {
  return (
    <div className={classes.dollarPage}>
    <Title title={"Alfa"}/> 
       <div className={classes.dollaratContent}>
        <p>انترنت غير محدود لمدة ساعتين</p>
        <TwoButtons fTitle={"تعبئة لرقم آخر"} sTitle={"تعبئة لخطي"} type={0} navig={"/alfa/twohours-other"}/>
        <div className={classes.alfaDollar}>
        <BoxRectangle imgSource={clock} fTitle={"Alfa"} fValue={"500"}  fValueSec={" MB"} sTitle={"السعر"} sValue= {"250.000"}  rtlS={true}/>
        <BoxRectangle imgSource={clock} fTitle={"Alfa"} fValue={"500"}  fValueSec={" MB"} sTitle={"السعر"} sValue= {"250.000"}  rtlS={true}/>
        <BoxRectangle imgSource={clock} fTitle={"Alfa"} fValue={"500"}  fValueSec={" MB"} sTitle={"السعر"} sValue= {"250.000"}  rtlS={true}/>
        <BoxRectangle imgSource={clock} fTitle={"Alfa"} fValue={"500"}  fValueSec={" MB"} sTitle={"السعر"} sValue= {"250.000"}  rtlS={true}/>
        <BoxRectangle imgSource={clock} fTitle={"Alfa"} fValue={"500"}  fValueSec={" MB"} sTitle={"السعر"} sValue= {"250.000"}  rtlS={true}/>
        <BoxRectangle imgSource={clock} fTitle={"Alfa"} fValue={"500"}  fValueSec={" MB"} sTitle={"السعر"} sValue= {"250.000"}  rtlS={true}/>
              </div>
       </div>
       <img src={threeCircle} alt="Three-circle" className={classes.multiCircle} />

  </div>
  )
}

export default Alfa2hNet

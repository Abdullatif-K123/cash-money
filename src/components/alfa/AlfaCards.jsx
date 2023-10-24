import React from 'react'
import classes from "./alfa.module.css"
import Title from '../uiElements/Title' 
import TwoButtons from '../uiElements/TwoButtons'
import TouchBox from '../uiElements/TouchBox'
import threeCircle from "../../assets/svg/ThreeCircle.svg"
const AlfaCards = () => {
  return (
    <div className={classes.dollarPage}>
    <Title title={"Alfa"}/>
    
      <div className={classes.touchContent}>
        <p>اختر نوع الكرت الذي تود شرائه</p>
        <TwoButtons fTitle={"تعبئة لرقم آخر"} sTitle={"تعبئة لخطي"} type={0} navig={"/alfa/cards-other"}/>
        <div className={classes.boxesPrize}>
        <TouchBox mtc={1.67} days={13} price={176} fTitle={":Alfa"}/>
        <TouchBox mtc={1.67} days={13} price={176} fTitle={":Alfa"}/>
        <TouchBox mtc={1.67} days={13} price={176} fTitle={":Alfa"}/>
        <TouchBox mtc={1.67} days={13} price={176} fTitle={":Alfa"}/>
        <TouchBox mtc={1.67} days={13} price={176} fTitle={":Alfa"}/>
        <TouchBox mtc={1.67} days={13} price={176} fTitle={":Alfa"}/>
 
        </div>
       </div>
       <img src={threeCircle} alt="Three-circle" className={classes.multiCircle} />
  </div>
  )
}

export default AlfaCards

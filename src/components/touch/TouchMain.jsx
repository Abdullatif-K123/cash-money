import React from 'react'
import classes from "./touch.module.css"
import Title from '../uiElements/Title' 
import TwoButtons from '../uiElements/TwoButtons'
import TouchBox from '../uiElements/TouchBox'
const TouchMain = () => {
  return (
    <div className={classes.touchPage}>
    <Title title={"Touch"}/>
    
      <div className={classes.touchContent}>
        <p>اختر نوع الكرت الذي تود شرائه</p>
        <TwoButtons fTitle={"تعبئة لرقم آخر"} sTitle={"تعبئة لخطي"} type={0} navig={"/touch/other"}/>
        <div className={classes.boxesPrize}>
        <TouchBox mtc={1.67} days={13} price={176}/>
        <TouchBox mtc={1.67} days={13} price={176}/>
        <TouchBox mtc={1.67} days={13} price={176}/>
        <TouchBox mtc={1.67} days={13} price={176}/>
        <TouchBox mtc={1.67} days={13} price={176}/>
        <TouchBox mtc={1.67} days={13} price={176}/>
        <TouchBox mtc={1.67} days={13} price={176}/>
        <TouchBox mtc={1.67} days={13} price={176}/>
        <TouchBox mtc={1.67} days={13} price={176}/>
        </div>
       </div>
     
  </div>
  )
}

export default TouchMain

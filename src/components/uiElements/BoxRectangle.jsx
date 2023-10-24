import React from 'react'
import classes from "./ui.module.css"
import leftArrow from "../../assets/svg/left_arrow.svg"
const BoxRectangle = ({imgSource, rtl , rtlS, rtlThrd, fTitle, fValue, fValueSec, sTitle, sValue, sValueSec, ThTitle, ThValue, rtlSpan}) => {
  return (
    <div className={classes.boxRecMain}>
      <img src={imgSource} alt={fTitle} className={classes.imgRec} />
      <div className={classes.boxRecContent}>
      {rtl?  <p>{fTitle}:<span className={classes.contentStrong}>{fValue}</span></p> :  <p><span className={`${classes.contentStrong} ${rtlSpan? classes.rtlMade:null}`}>{fValue} {fValueSec?fValueSec:"$"}</span>:{fTitle}</p>}
      <p className={`${rtlS? classes.rtlMade:null}`}>{sTitle}: <span  className={classes.contentStrong}> {sValue} {sValueSec?sValueSec: "ل.ل"}</span></p>
      {ThTitle?<p className={`${rtlThrd? classes.rtlMade:null}`}>{ThTitle}: <span className={classes.contentStrong}> {ThValue} ل.ل  </span></p>:null}
      <button className={classes.btnStartNow}><img src={leftArrow} alt="Left Arrow" /> <p>اشتر الآن</p></button>
      </div>
    </div>
  )
}

export default BoxRectangle

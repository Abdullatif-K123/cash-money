import React from 'react'
import touchMine from "../../assets/imgs/touchMine.png"
import leftArrow from "../../assets/svg/left_arrow.svg"
import classes from "./ui.module.css"
const TouchBox = ({mtc, days, price,fTitle}) => {
  return (
    <div className={classes.boxMain}>
       <img src={touchMine} alt="prize-steps" className={classes.prizeImg}/>
        
          <p><span className={classes.contentStrong}>{mtc} $</span>{fTitle? fTitle: ":MTC"}</p>
          <p>الأيام: <span  className={classes.contentStrong}> {days} يوم</span></p>
          <div className={classes.contentBtn}>
          <button className={classes.btnStartNow}><img src={leftArrow} alt="Left Arrow" /> <p>اشتر الآن</p></button>
          <p>السعر: <span  className={classes.contentStrong}> {price} ل.ل</span></p>
          </div>
  
    </div>
  )
}

export default TouchBox

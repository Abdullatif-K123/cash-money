import React from 'react'
import classes from "./layout.module.css"
import cashLogo from "../../assets/svg/logoFooter.svg"
import instaLogo from "../../assets/svg/instagram.svg"
import twitLogo from "../../assets/svg/twitter.svg"
import dribLogo from "../../assets/svg/dripp.svg"
import youtube from "../../assets/svg/youtube.svg"
import { useNavigate } from 'react-router-dom'
const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.footerLayout}>
    <div className={classes.footerMain}>
       <div className={classes.footerLogo}>
        <img src={cashLogo} alt="footer Logo" />
       </div>
       <div className={classes.footerContent}>
        <div className={classes.fContent}>تواصل معنا</div>
        <div onClick={()=>{navigate("/alfa")}} className={classes.fContent}>alfa</div>
        <div onClick={()=>{navigate("/touch/mine")}} className={classes.fContent}>touch</div>
        <div onClick={()=>{navigate("/cashtocash")}}className={classes.fContent}>cash to cash</div>
        <div onClick={()=>{navigate("/withdraw")}} className={classes.fContent}>سحب الرصيد</div>
        <div onClick={()=>{navigate("/charging-account")}} className={classes.fContent}>تشريج الحساب</div>
       </div>
       <div className={classes.socialIcon}>
         <img src={instaLogo} alt="instgram_Logo" className={classes.socialLogo} />
         <img src={twitLogo} alt="twitter_Logo" className={classes.socialLogo} />
         <img src={dribLogo} alt="dribble_Logo" className={classes.socialLogo} />
         <img src={youtube} alt="youtube_Logo" className={classes.socialLogo} />
       </div>
    </div>
    </div>
  )
}

export default Footer
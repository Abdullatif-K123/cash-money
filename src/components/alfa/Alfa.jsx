import React from 'react'
import classes from "./alfa.module.css"
import Title from '../uiElements/Title'
import AlfaBoxes from '../uiElements/AlfaBoxes'
import dollarImg from "../../assets/svg/dollar.svg"
import callender from "../../assets/svg/callender.svg"
import cards  from "../../assets/svg/cards.svg"
import cloudShare from "../../assets/svg/cloudShare.svg"
import fourG from "../../assets/svg/fourG.svg"
import clock from "../../assets/svg/clock.svg"
import phoneCalling from "../../assets/svg/phoneCalling.svg"
import wifi7 from "../../assets/svg/wifiseven.svg"
import wifi24 from "../../assets/svg/twenyFour.svg" 
import threeCircle from "../../assets/svg/ThreeCircle.svg"
const Alfa = () => { 
  return (
    <div className={classes.alfaPage}>
    <Title title={"Alfa"}/>
    <div className={classes.boxesPrize}>
     <AlfaBoxes urlHistory={"/cards-mine"} imgSource={cards} title={"كروت"} />
     <AlfaBoxes urlHistory={"/daily-mine"} imgSource={callender} title={"إيام"} />
     <AlfaBoxes urlHistory={"/dollars-mine"} imgSource={dollarImg} title={"دولارات"} />
     <AlfaBoxes urlHistory={"/twohours-mine"} imgSource={cloudShare} title={"انترنت ساعتين"} />
     <AlfaBoxes urlHistory={"/fourG-mine"} imgSource={clock} title={"انترنت 4g"} />
     <AlfaBoxes urlHistory={"/share-mine"} imgSource={fourG} title={"انترنت u share"} />
     <AlfaBoxes urlHistory={"/twentymin-mine"} imgSource={wifi7} title={"20 دقيقة مكالمات"} />
     <AlfaBoxes urlHistory={"/week-mine"} imgSource={phoneCalling} title={"انترنت اسبوع"} />
     <AlfaBoxes urlHistory={"/wifi24-mine"} imgSource={wifi24} title={"انترنت يومي"} />
    </div>
    <img src={threeCircle} alt="Three-circle" className={classes.multiCircle} />

  </div>
  )
}

export default Alfa

import React from 'react'
import classes from "./home.module.css"
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import { useNavigate } from 'react-router-dom'
const HomeMain = () => {
    const navigate = useNavigate();
  return (
    <div className={classes.homeMain}>
       <SectionOne/>
       <SectionTwo/>
       <SectionThree navigate={navigate}/>
    </div>
  )
}

export default HomeMain

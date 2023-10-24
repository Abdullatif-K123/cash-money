import React from 'react'
import classes from "./ui.module.css"
import { useNavigate } from 'react-router-dom'
const AlfaBoxes = ({imgSource, title, urlHistory}) => {
    const navigate = useNavigate();
  return (
    <div className={classes.alfaBox} onClick={()=>{navigate(`/alfa${urlHistory}`)}}>
      <img src={imgSource} alt={title} className={classes.alfaBoxImg}/>
      <p>{title}</p> 
    </div>
  )
}

export default AlfaBoxes

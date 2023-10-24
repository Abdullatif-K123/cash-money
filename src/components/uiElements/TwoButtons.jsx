import React from 'react'
import classes from "./ui.module.css"
import { useNavigate } from 'react-router-dom'
const TwoButtons = ({fTitle, sTitle, type, navig}) => {
  const navigate = useNavigate();
  return (
 <div className={classes.thirdContent}>
     <button onClick={()=>{navigate(navig)}} className={`${!type?classes.bold:classes.light}`}>{fTitle}</button>
     <button onClick={()=>{navigate(navig)}} className={`${type?classes.bold:classes.light}`}>{sTitle}</button>
 </div>
  )
}

export default TwoButtons

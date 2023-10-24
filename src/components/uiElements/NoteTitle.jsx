import React from 'react'
import classes from "./ui.module.css"
const NoteTitle = ({note,money,type, rest}) => {
  if(type<=1)
  return (
    <div className={classes.noteTitle}>
      {type===1? <p>{rest}{money?<span>{money}ل.ل</span>:null} {note}</p>:  <p>{money?<span>{money}ل.ل</span>:null} {note}</p> }
      <p>ملاحظة:</p>
    </div>  
  )
  if(type>1)
  return(
    <div className={classes.noteTitle}>
     <p className={classes.notSecond}> {note}</p> 
    <p>ملاحظة:</p>
  </div>  
    )
}

export default NoteTitle

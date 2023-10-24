import React from 'react'
import classes from "./ui.module.css"
const Button = ({text,disable}) => {
  return (
    <div className={`${classes.btnStyle} ${disable?classes.btnStyleDis:null}`}>
       <p>{text}</p>
    </div>
  )
}

export default Button

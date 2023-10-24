import React from 'react'
import arch from "../../assets/svg/arch.svg"
import classes from "./ui.module.css"
const Title = ({title}) => {
  return (
    <div className={classes.headTitle}>
    <p>{title}</p>
     <img src={arch} alt="simi circle" className={classes.archSecTwo} />
</div>
  )
}

export default Title

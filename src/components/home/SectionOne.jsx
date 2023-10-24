import React from 'react'
import classes from "./home.module.css"
import LayoutClasses from "../layout/layout.module.css"
import figure from "../../assets/svg/homeSection.svg"
import arch from "../../assets/svg/arch.svg"
import { useNavigate } from 'react-router-dom'
const SectionOne = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.sectionOneMain}>
       <img src={figure} alt="CashMoney_Figure" className={classes.figureLogo}/>
       <div className={classes.sectionOneContent}>
         <div className={classes.firstContent}>
             <p>أهلا بك في منصّة</p>
             <p>cash money</p>
             <img src={arch} alt="arch cimi" className={classes.semiCircle}  />
             <p>هذا المكان مخصص لكتابة نص تعريفي وتوضيحي عن هذه المنصة وما تقدمه من خدمات</p>
         </div>
         <div className={classes.secondContent}>
             <p>رصيدك الحالي:<span> 00.00 ل.ل</span></p>
         </div>
         <div className={classes.thirdContent}>
             <button onClick={()=>{navigate("/signin")}} className={classes.signIn}>تسجيل دخول</button>
             <button onClick={()=>{navigate("/signup")}} className={LayoutClasses.btnSignUp}>إنشاء حساب</button>
         </div>
       </div>
    </div>
  )
}

export default SectionOne

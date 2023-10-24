import React, {useState}  from 'react'
import classes from "./account.module.css"
import accountImg from "../../assets/svg/account-img.svg"
import Title from '../uiElements/Title'
import Input from '../uiElements/Input'
import checkedBox from "../../assets/svg/checkBoxChecked.svg"
import Button from '../uiElements/Button'
import unCheckedBox from "../../assets/svg/unCheckedBox.svg"
import { useNavigate } from 'react-router-dom'
import threeCircle from "../../assets/svg/ThreeCircle.svg"
const SignIn = () => {
    const [checkBox, setCheckBox] = useState(false);
    const navigate = useNavigate();
    const handleCheck = ()=>{
         setCheckBox(!checkBox);
    }
  return (
    <div className={classes.accountMain}>
       <Title title={"تسجيل الدخول"}/>
       <div className={classes.accountImgContent}>
       <img src={accountImg} alt="man-success" className={classes.imgSizingWallet} />
       <div className={classes.accountContent}>
         <p>قم بتسجيل الدخول إلى حسابك</p>
         <div className={classes.signInText}>
             <p onClick={()=>{navigate("/signup")}}> أنشئ حساب الآن </p>
             <p>ليس لديك حساب؟</p>
         </div>
         <Input lableTitle={"رقم الهاتف"} type={"number"} typeText={"+961"} placeholder={"75454545"} account={true}/>
         <Input lableTitle={"كلمة المرور"} type={"password"}  account={true}/>
         <p className={classes.forgetPass}>
         نسيت كلمة المرور؟
         </p>
         <div className={classes.agreePolicies}>
             <p>أوافق على الشروط والاحكام وسياسة الخصوصية</p>
             <img onClick={handleCheck} src={`${checkBox?checkedBox:unCheckedBox}`} alt="Check Box Checked" className={classes.checkBoxStyle} />
         </div>
         <Button disable={!checkBox} text="تسجيل الدخول"/>
       </div>
       </div>
       <img src={threeCircle} alt="Three-circle" className={classes.multiCircle} />
    </div>
  )
}

export default SignIn

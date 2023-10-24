import React from 'react'; 
import classes from "./home.module.css"; 
import arch from "../../assets/svg/arch.svg"
import alfa from "../../assets/imgs/alfa.png"
import touch from "../../assets/imgs/touch.png"
import { useNavigate } from 'react-router-dom';
const SectionThree = () => {
  
  const navigate = useNavigate();
  return (
    <div className={classes.thridSecMain} name="partners">
       <div className={classes.secTwoHead}>
          <p>شركات التحويل</p>
           <img src={arch} alt="simi circle" className={classes.archSecTwo} />
      </div>
      <div className={classes.thirdContent}>
         <div onClick={()=>{navigate('/alfa')}} className={classes.thirdContentSingle}>
             <img src={alfa} alt="alfa" className={classes.thridSecImg}/>
         </div>
         <div onClick={()=>{navigate('/touch/mine')}} className={classes.thirdContentSingle}>
             <img src={touch} alt="touch" className={classes.thridSecImg} />
         </div>
      </div>
    </div>
  )
}

export default SectionThree

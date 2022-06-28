import React from 'react'
import './Intro.css';
import Github  from '../../img/github.png';
import linkedin  from '../../img/linkedin.png';
import instagram  from '../../img/instagram.png';
import Vector1  from '../../img/Vector1.png';
import Vector2  from '../../img/Vector2.png';
import boy  from '../../img/boy.png';
import thumbup  from '../../img/thumbup.png';
import crown  from '../../img/crown.png';
import glassesimoji  from '../../img/glassesimoji.png';
import Floating from './Floating';
import {motion} from 'framer-motion';

function Intro() {
  const transition = {duration: 2, type:'spring'}
  return (
    <>
  <div className="container-fluid">
    <div className="row intro-section">
      <div className="col-md-12 col-lg-6 l-side">
        
            <div className="text_section">
             <span>Hy, I Am</span>
              <span>Ahmad Mehtab</span>
              <span>Frontend Developer with high level of experience in web designing, producting the quality work</span>
              <button className='button i-button'><h6>Here me</h6></button>
            <div className="i-icons">
              <a href="www.github.com"><img src={Github} alt="" class="img-fluid rounded-top"/></a>
              <a href="linkedin"><img src={linkedin} alt="" /></a>
              <a href="instagram"><img src={instagram} alt="" /></a>
            </div>
          </div>
      </div>
      {/* Right_side */}

      <div className="col-lg-6 r_side">
      <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <motion.img
         initial = {{left:'-36%'}}
         whileInView = {{left:'-25%'}}
         transition = {transition}
        src={glassesimoji} alt="" 
         />
         <motion.div className='crown' 
         initial = {{top:'-4%', left:'75%'}}
         whileInView = {{left:'65%'}}
         transition = {transition}>
         <div style={{left:'67%'}}>
           <Floating image={crown} text1='web Developer'/> 
         </div>
         </motion.div>
         <motion.div 
         initial = {{top:'18rem', left:'9rem'}}
         whileInView = {{left:'-0rem'}}
         transition = {transition}>
         <div style={{left:'-4%',top:'17rem'}}>
           <Floating image={thumbup} text1='Best Design' text2='Award' />          
         </div>
         </motion.div>
         <div className="blue" style={{background:"rgb(238 210 255)"}}></div>
         <div className="blue" style={{background:"#C1F5FF",
          top:'13rem',
          width:'21rem',
          height:'11rem',
          left:'-11rem'}}></div>
            
      </div>

    </div>
  </div>

    </>
  )
}

export default Intro
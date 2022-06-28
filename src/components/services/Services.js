import React from 'react';
import './Services.css';
import heartemoji from '../../img/heartemoji.png';
import humble from '../../img/humble.png';
import glasses from '../../img/glasses.png';
import Card from './Card.js';
import resume from './ahmad.docx';
import { motion } from 'framer-motion';
const Services = () => {
  const transition = { duration: 2, type: 'spring' }
  return (

    <div className="container-fluid">
      <div className="row  services_sec">
        <div className="col-sm-12 col-md-12 col-lg-5 offset-md-1">  
          <div className="text_sec">
            <span>My Awesome</span>
            <span>services</span>
            <span>In IT since 2020, I'm developing quality Front-end website 
              <br/>& a little knowledge of back-end as well, I also have a knowledge of DB MYSQL</span>
              <a href={resume} download >
            <button className='button button-cv'>Download CV</button>
              </a>
          </div>
          
          <div className="blue" style={{
            background: "#C1F5FF",
            position: 'relative',
            top: '-20rem', left: '14rem'
          }}></div>
        </div>
          <div className="col-md-12 col-lg-6" >
          <div className="row card-section">
            <div className="col-sm-12 col-md-12 col-lg-4">
              <div className="my-card" style={{top: '5rem',left: '-0.5rem'}} >
                <motion.div
                  initial={{left:'-5rem' }}
                  whileInView={{left:'-1rem' }}
                  transition={transition}>

                  < Card image={heartemoji}
                    heading='Design'
                    detail=' photoshop, CorelDRAW' />
                </motion.div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4">
              <div className="my-card" style={{top: '11.5rem',left: '3rem'}} >
                <motion.div
                  initial={{ left: '5rem'}}
                  whileInView={{left: '-0.5rem' }}
                  transition={transition}>
                  < Card image={glasses}
                    heading='Developer'
                    detail='HTML, CSS, JavaScript, React, Mysql, php' />
                </motion.div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4">
              <div className="my-card" style={{top: '-5rem',left: '-5.5rem'}}>
                <motion.div
                  initial={{left: '3rem'}}
                  whileInView={{left: '-1rem'}}
                  transition={transition}>

                  < Card image={humble}
                    heading='UI/UX'
                    detail='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit autem est ' />
                </motion.div>
              </div>
            </div>
          
        </div>
          </div>

      </div>
    </div>


  )
}

export default Services
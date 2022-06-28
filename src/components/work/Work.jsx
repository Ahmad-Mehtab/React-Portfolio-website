import React from 'react';
import './Work.css';
import Facebook from '../../img/Facebook.png';
import amazon from '../../img/amazon.png';
import fiverr from '../../img/fiverr.png';
import Upwork from '../../img/Upwork.png';
import Shopify from '../../img/Shopify.png';
import { motion } from 'framer-motion';
const Work = () => {
  return (
    <>

      <div className="container">
        <div className="row work" >
          {/* left-side */}
          <div className="col-md-6 col-sm-12">
            <div className="w-left">
              <div className="text_sec">
                <span>Work for All these </span>
                <span>Brand & clients</span>
                <span>In IT since 2020, I'm developing quality Front-end website & a little knowledge of back-end as well
                  <br />  I also have completed 6 months Internship KPIT board
                  <br />And developed project for a company </span>
              </div>
              <button className='button button-cv'>Hire me</button>
            </div>
          </div>
          {/* right-side */}
          <div className="col-md-6 col-sm-12">
            <div className="w-right">
              <motion.div
                initial={{ rotate: 90 }}
                whileInView={{ rotate: 0 }}

                transition={{ duration: 3.5, type: 'spring' }}

                className="w-maincircle">
                <div className="work-sec-circle">
                  <img src={Facebook} alt="" />
                </div>
                <div className="work-sec-circle">
                  <img src={amazon} alt="" />
                </div>
                <div className="work-sec-circle">
                  <img src={fiverr} alt="" />
                </div>
                <div className="work-sec-circle">
                  <img src={Upwork} alt="" />
                </div>
                <div className="work-sec-circle">
                  <img src={Shopify} alt="" />
                </div>
              </motion.div>
              {/* BackCircle */}
              <div className="w-backcircle bluecircle"></div>
              <div className="w-backcircle yellowcircle"></div>
            </div>
          </div>
        </div>
      </div>


    </>

  )
}

export default Work
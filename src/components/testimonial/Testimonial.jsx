import React from 'react';
import './Testimonial.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import profilePic1 from '../../img/profile1.jpg';
import profilePic2 from '../../img/profile2.jpg';
import profilePic3 from '../../img/profile3.jpg';
import profilePic4 from '../../img/profile4.jpg';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';

const Testimonial = () => {

    const clients =[
        {
            img:profilePic1,
            review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur labore alias eos velit laboriosam ea adipisci saepe illum repellendus officia, nisi voluptatibus reprehenderit eaque modi sunt ipsum distinctio, minima et",
        },
        {
            img:profilePic2,
            review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur labore alias eos velit laboriosam ea adipisci saepe illum repellendus officia, nisi voluptatibus reprehenderit eaque modi sunt ipsum distinctio, minima et",
        },
        {
            img:profilePic3,
            review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur labore alias eos velit laboriosam ea adipisci saepe illum repellendus officia, nisi voluptatibus reprehenderit eaque modi sunt ipsum distinctio, minima et",
        },
        {
            img:profilePic4,
            review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur labore alias eos velit laboriosam ea adipisci saepe illum repellendus officia, nisi voluptatibus reprehenderit eaque modi sunt ipsum distinctio, minima et",
        }
    ]
  return (
   <div className="container-fluid">
    <div className="row">
        <div className="col-md-12 col-sm-12">
        <div className="t-section" id="Testimonial">
       <div className="t-heading">
           <span>Client always get </span>
           <span>Exceptional work </span>
           <span>From me...</span>
           <div className="blue t-blur1" style={{background:"var(--purple)"}}></div>
           <div className="blue t-blur2" style={{background:"skyblue"}}></div>
       </div>
       <Swiper
       modules={[Pagination]}
       slidesPerView={1}
       pagination={{clickable:true}}>
        {clients.map((client, index)=>{
            return (
                
                    <SwiperSlide key={index}>
                    <div className="testimonial">
                    <img src={client.img} alt="" />
                    <span>{client.review}</span>
                    </div>
                    </SwiperSlide>
            );
        })}
       </Swiper>
   </div>
        </div>
    </div>
   </div>
  )
}

export default Testimonial
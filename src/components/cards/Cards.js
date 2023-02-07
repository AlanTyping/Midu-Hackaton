import React from 'react'
import Card from './Card';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";
import Tokenize from '../tokenize/Tokenize';

 const CardProps = [{
  title: 'Tokenize',
  description: 'Do you ever wanted to chat with a friend, using an encoded lenguaje? This, is an amazing tool that allows you to encode and decode some text sentences!'
},{
  title: 'Co:here or Open AI?',
  description: 'This, is a little game that allows you to pass throw some fun moments by trying to guess what AI tecnology are you using to'
}]

function Cards() {
  return (
    <div className='h-full w-full flex justify-center items-center'>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {CardProps.map((card, index) => {
          return (
            <SwiperSlide key={index}><Card title={card.title} description={card.description} /></SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Cards
import React, { useEffect, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar} from 'react-icons/fa'
import '../App.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper/modules'

import ReactStars from 'react-rating-stars-component'
import user from '../Assets/Images/HomeImages/user.png'

export const ReviewSlider = () => {

  const truncateWords = 15;

  return (
    <div className='text-white '>
        {/* Idhar review slider hai */}
        <div className='h-[190px] ease-linear mb-[30px]'>
          <Swiper
          slidesPerView={3}
          spaceBetween={24}
          centeredSlides={true}
        //   breakpoints={{
        //     250:{
        //       slidesPerView: 1,
        //     },
        //     576: {
        //       // width: 576,
        //       slidesPerView: 2,
        //     },
        //     768: {
        //       // width: 768,
        //       slidesPerView: 4,
        //     },
        //   }}
          modules={[FreeMode, Autoplay, Pagination]}          
          freeMode={true}
          pagination={{
            clickable: true
          }}
          autoplay={{
              delay: 2000,
              disableOnInteraction: false,
          }}
          loop={true}  
          className='custom-slider w-full pb-5 ease-linear h-[14rem]'
          >
            {
              [1, 2, 3, 4].map((index) => (
                <SwiperSlide key={index} 
                className='flex flex-col gap-5 bg-gradient-to-t from-sky-400 via-sky-500 to-sky-600 rounded-lg px-3 py-2 '>
                  <div className='flex flex-row gap-x-4'>
                    <img
                      src={user}
                      alt='Profile picture'
                      className="h-9 w-9 aspect-square rounded-full "
                    />
                    
                    <div className='flex flex-col'>
                      <p className='capitalize text-md font-semibold'>Username </p>
                      <p className='capitalize text-sm text-richblack-500'>Doctor name</p>
                    </div>
                  </div>
                  <p className='text-sm text-richblack-100'>
                  Exceptional care! The doctor's expertise and compassion made my treatment experience truly outstanding.
                  </p>
                  <div className='flex gap-x-3 items-center'>
                  <p className='text-yellow-50 font-semibold text-md'>3</p>
                  <ReactStars
                    count={5}
                    value={3}
                    size={24}
                    edit={false}
                    activeColor="#ffd700"
                    emptyIcon={<FaStar/>}
                    fullIcon={<FaStar/>}
                  />
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
    </div>
  )
}

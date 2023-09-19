'use client'
import UserData from '@/utils/UserData';
import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';
import { useEffect, useRef, useState } from 'react';
import { register } from 'swiper/element/bundle';

// Register Swiper web component
register();

// Object swiper with parameters
const swiperParams = {
  slidesPerView: 1,
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1028: {
      slidesPerView: 3,
    },
  },
  pagination: false,
};

const Review = () => {
    const swiperRef = useRef(null);
    const [swiperProgress, setSwiperProgress] = useState(0);
  
    useEffect(() => {
      // Assign it to swiper element
      Object.assign(swiperRef?.current, swiperParams);
  
      // Initialize swiper
      swiperRef.current.initialize();
  
      // Progress listener
      swiperRef.current.addEventListener('progress', (e) => {
        const [swiper, progress] = e.detail;
        setSwiperProgress(progress)
      });
    }, []);
  return (
    <div className="container mx-auto text-center">
      <h3 className="font-bold font-switzer text-6xl hidden md:block">
        See What Our <span className="text-navy-300">Users Are Saying</span>
      </h3>
      <div className="hidden md:block">
        <div className="flex items-center justify-center mt-10 gap-2">
      {UserData.usersImages.map((item)=>(
            <Image
              src={item.img}
              alt="Picture of the author"
              width={100} 
              height={50} 
              className="flex w-[40px] h-[40px] rounded-full"
          />
        ))}
      </div>
      <div className="flex items-center justify-center gap-2">
      {UserData.usersImages2.map((item)=>(
            <Image
              src={item.img}
              alt="Picture of the author"
              width={100} 
              height={50} 
              className="flex w-[40px] h-[40px] rounded-full"
          />
        ))}
      </div>
      </div>
      
      {/* testimonials */}
      <div className='flex items-center justify-center mt-56 md:mt-20 mb-24'>
      <div className='flex items-center justify-center w-4/5 sm:w-5/6 xl:w-full max-w-5xl'>
        {/* Prev slide button */}
        <button
          onClick={() => {
            swiperRef.current.swiper.slidePrev();
          }}
          // className={`${swiperProgress == 0 ? 'fill-navy-200 text-navy-200 font-extrabold text-5xl md:mr-20' : 'fill-navy-600'}`}
          className='fill-navy-200 text-navy-200 font-extrabold text-5xl md:mr-16'
        >
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
        </svg>
        </button>
        <swiper-container
          init="false"
          ref={swiperRef}
          class='w-11/12'
          // change the swiper bullets color to the same of the arrows
          style={{ '--swiper-pagination-color': '#3b82f6' }}
        >
          {UserData.testimonials.map((item)=>(
            <swiper-slide key={item.id} class="h-auto">
              <div className="border border-grey w-64 h-72 p-8" >
                <p><span className="text-navy-300 font-extrabold">“</span>{item.msg} <span className="text-navy-300 font-extrabold">”</span></p>
                <div className="flex mt-12 gap-3">
                  <p className="bg-navy-200 text-white w-[50px] h-[50px] rounded-full grid place-items-center"> {item.name.charAt(0)} </p>
                  <section>
                    <p> {item.name} </p>
                    <div className="text-yellow flex">
                      <AiFillStar/>
                      <AiFillStar/>
                      <AiFillStar/>
                    </div>
                  </section>
                </div>
              </div>
            </swiper-slide> 
          ))}
   
        </swiper-container>
        {/* Next slide button */}
        <button
          onClick={() => {
            swiperRef.current.swiper.slideNext();
          }}
          className='text-navy-200 font-extrabold'
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </button>
      </div>
    </div>
    </div>
  );
};

export default Review;


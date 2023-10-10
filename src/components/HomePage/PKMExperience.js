'use client';
import UserData from '@/utils/UserData';
import { useRef, useEffect, useState } from 'react';
import { register } from 'swiper/element/bundle';
import Image from 'next/image';
import Modal from "./PKMExperienceModal"
import Images from "../../utils/sliderImages.ts"

// register Swiper custom elements
register();

// Object swiper with parameters
const swiperParams = {
  slidesPerView: 3,
  breakpoints: {
    640: {
      slidesPerView: 3,
    },
    1028: {
      slidesPerView: 3,
    },
  },
  pagination: true,
  spaceBetween: 5,
};

export default function PocketmoniXperience() {
  const [width, setWidth] = useState('');
  const swiperRef = useRef(null);
  const [swiperProgress, setSwiperProgress] = useState(0);
  
  


  
  useEffect(() => {
    // Assign it to swiper element
    Object.assign(swiperRef?.current, swiperParams);

    // Initialize swiper
    swiperRef.current.initialize();

    // Progress listener
    const screenWidth = window.innerWidth + 15;
      setWidth(screenWidth);

    swiperRef.current.addEventListener('progress', (e) => {
      const [swiper, progress] = e.detail;
      setSwiperProgress(progress);
    });
  }, []);
   let screenWidth = width;
  // Control points calculation for a curve spanning the width of the screen
  const controlPointXTop = screenWidth / 2; // X coordinate of the control point
  const controlPointXBottom = screenWidth / 2; // X coordinate of the control point
  const controlPointYTop = 25; // Y coordinate of the control point
  const controlPointYBottom = 120; // Y coordinate of the control point
  const endPointX = screenWidth; // X coordinate of the end point
  return (
    <main
      className="overflow-hidden h-full w-full mx-auto mb-28 mt-60 md:mt-0"
      style={{ overflow: 'hidden' }}
    >
      <div className="h-full w-full text-5xl font-normal text-center mt-0 mb-16">
        The <span className="text-navy-300 ">Pocketmoni</span> Experience
      </div>
      
       
      
      
      <swiper-container
        init="false"
        ref={swiperRef}
        className="bg-white w-full h-[200px] md:h-3/6 z-0"
        // change the swiper bullets color to the same of the arrows
        style={{ '--swiper-pagination-color': '#3b82f6', marginBottom: "10%", zIndex: 0, height:  "400px"  }}
      >
        {UserData.pkmexperience.map((item, index) => (
          <swiper-slide key={index}  className="w-[16rem] h-full swiper-1" controller-control=".swiper-2">
            <Image src={item.img} alt="image1" className="sliderImages" style={{height: "100%", width: "100%"}}/>
             
          <div key={item.id} className="z-50 -mt-[85%] ml-6 w" style={{zIndex: 50}}>
            <h2 className="md:text-[32px] text-[20px] font-switzer"> {item.title} </h2>
            <p className="text-justify md:text-center md:text-base text-[12px] md:leading-7 mt-0 md:mt-2 font-switzer">
              {item.desc}
            </p>
          </div>
          </swiper-slide>
        ))}
        
      </swiper-container>
      <div
        className="flex justify-between w-3/6 mx-auto -mt-7"
        style={{ position: 'relative', zIndex: 6 }}
      >
        <button
          onClick={() => {           
            swiperRef.current.swiper.slidePrev();
          }}
          className="fill-slate-400 text-grey font-extrabold text-5xl md:mr-16"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>
        </button>
        <button
          onClick={() => {
            swiperRef.current.swiper.slideNext();

          }}
          className="fill-slate-400 text-grey font-extrabold"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </div>
    
     
    </main>
  );
};



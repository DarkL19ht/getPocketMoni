'use client';
import UserData from '@/utils/UserData';
import { useRef, useEffect, useState } from 'react';
import { register } from 'swiper/element/bundle';
import Image from 'next/image';
import Modal from './PKMExperienceModal';
import Images from '../../utils/sliderImages.ts';

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
  pagination: false,
  spaceBetween: 10,
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

      <div className=" w-full flex justify-between align-middle z-50 relative">
        <div className="h-96 bg-white opacity-80 w-2/6 blur-xl"></div>
        <div className="h-96 bg-white opacity-80 w-2/6 blur-xl"></div>
      </div>

      <swiper-container
        init="false"
        ref={swiperRef}
        className="bg-white w-[200%] h-[200px] md:h-3/6 z-0 -mt-[50%]"
        // change the swiper bullets color to the same of the arrows
        style={{
          '--swiper-pagination-color': '#3b82f6',
          marginBottom: '2.5%',
          zIndex: 0,
          height: '400px',
          overflow: 'hidden',
          marginTop: '-30%',
        }}
      >
        {UserData.pkmexperience.map((item, index) => {
          let _id = item.title.replace(/ /g, '');
          return (
            <swiper-slide
              key={index}
              id={_id}
              className="w-[16rem] h-full swiper-1"
              controller-control=".swiper-2"
              style={{}}
            >
              <Image
                src={item.img}
                alt="image1"
                className="sliderImages bg-blend-darken"
                style={{ height: '90%', width: '100%' }}
              />
              {index % 2 == 0 ? (
                <div key={item.id} className="z-10 -mt-[80%] ml-6 w-[300px]" style={{ zIndex: 10 }}>
                  <h2 className="md:text-[30px] text-[20px] font-switzer font-extrabold text-white ">
                    {' '}
                    {item.title}{' '}
                  </h2>
                  <p className="text-left md:text-left md:text-[12px] text-[12px] md:leading-7 mt-0 md:mt-2 font-switzer text-white">
                    {item.desc}
                  </p>
                </div>
              ) : (
                <div
                  key={item.id}
                  className="z-10 -mt-[35%] ml-20 w-[300px]"
                  style={{ zIndex: 10 }}
                >
                  <h2 className="md:text-[30px] text-[20px] font-switzer font-extrabold text-white ">
                    {' '}
                    {item.title}{' '}
                  </h2>
                  <p className="text-left md:text-left md:text-[12px] text-[12px] md:leading-7 mt-0 md:mt-2 font-switzer text-white">
                    {item.desc}
                  </p>
                </div>
              )}
            </swiper-slide>
          );
        })}
      </swiper-container>
      <div
        className="flex justify-between w-1/6 mx-auto -mt-7"
        style={{ position: 'relative', zIndex: 6 }}
      >
        <button
          onClick={() => {
            swiperRef.current.swiper.slidePrev();
          }}
          className="fill-slate-400 text-navy-200 font-extrabold text-5xl w-10 h-10 p-2 hover:rounded-full hover:border"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="3.5"
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
        <div className=" w-16 flex justify-between align-middle pt-3">
          <div className="h-3 bg-white w-3 rounded-full border-2 border-navy-400"></div>
          <div className="h-3 bg-navy-200 w-3 rounded-full"></div>
          <div className="h-3 bg-navy-200 w-3 rounded-full"></div>
        </div>
        <button
          onClick={() => {
            swiperRef.current.swiper.slideNext();
          }}
          className="fill-slate-400 text-navy-200 font-extrabold w-10 h-10 p-2 hover:rounded-full hover:border"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="3.5"
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
}

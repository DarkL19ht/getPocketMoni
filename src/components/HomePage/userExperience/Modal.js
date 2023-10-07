'use client';
import UserData from '@/utils/UserData';
import { useRef, useEffect, useState } from 'react';
import { register } from 'swiper/element/bundle';

// register Swiper custom elements
register();

// Object swiper with parameters
const swiperParams = {
  slidesPerView: 1,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    1028: {
      slidesPerView: 1,
    },
  },
  pagination: true,
};

const Modal = () => {
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
      setSwiperProgress(progress);
    });
  }, []);
  return (
    <div className="overflow-hidden">
      <swiper-container
        init="false"
        ref={swiperRef}
        class="w-11/12 md:h-40 h-36"
        // change the swiper bullets color to the same of the arrows
        style={{ '--swiper-pagination-color': '#3b82f6' }}
      >
        {UserData.pkmexperience.map((item) => (
          <swiper-slide key={item.id} className="">
            <h2 className="text-lg font-semibold font-switzer"> {item.title} </h2>
            <p className="text-justify md:text-center text-xs mt-0 md:mt-2 font-light font-switzer">{item.desc}</p>
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
    </div>
  );
};

export default Modal;

'use client';
import UserData from '@/utils/UserData';
import { useRef, useEffect, useState } from 'react';
import { register } from 'swiper/element/bundle';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import imageOne from '../../assets/images/image1.png';
import imageTwo from '../../assets/images/image2.png';
import imageThree from '../../assets/images/image3.png';
import Modal from './PKMExperienceModal';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useState } from 'react';

export default function PocketmoniXperience() {
  const [width, setWidth] = useState('');
  const swiperRef = useRef(null);
  const [swiperProgress, setSwiperProgress] = useState(0);

  useEffect(() => {
    const screenWidth = window.innerWidth + 15;
    setWidth(screenWidth);
  }, []);

  return (
    <main
      className="overflow-hidden h-full w-full mx-auto mb-28 mt-60 md:mt-0"
      style={{ overflow: 'hidden' }}
    >
      <div className="h-full font-switzer w-full text-5xl md:text-[65px] font-bold text-center mt-0 -mb-10 tracking-tighter">
        The <span className="text-navy-300 font-switzer">PocketMoni</span> Experience
      </div>
      <svg
        width={screenWidth}
        height="200"
        style={{ marginBottom: -118, marginLeft: -10, position: 'relative', zIndex: 2 }}
        className="z-10 mb-2 "
      >
        <path
          d={`M10 80 Q${controlPointXBottom} ${controlPointYBottom} ${endPointX} 80`}
          fill="white"
          stroke="white"
          strokeWidth="25"
        />
      </svg>
      <Swiper
        className="bg-white w-full h-[200px] md:h-3/6 z-0"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={7}
        slidesPerView={3}
        // navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        style={{ marginBottom: -80, zIndex: 0 }}
      >
        <SwiperSlide className="w-[16rem] h-3/6">
          <Image
            src="/images/image1.png"
            alt="image1"
            className="sliderImages"
            width={400}
            height={100}
          />
        </SwiperSlide>
        <SwiperSlide className="w-[16rem] h-3/6 overflow-hidden flex items-end">
          <Image
            src="/images/image2.png"
            alt="image1"
            className="sliderImages"
            width={400}
            height={100}
          />
        </SwiperSlide>
        <SwiperSlide style={flipHorizontalStyle} className="w-[16rem] h-3/6">
          <Image
            src="/images/image3.png"
            alt="image1"
            className="sliderImages"
            width={400}
            height={100}
          />
        </SwiperSlide>
      </Swiper>
      <svg
        width={screenWidth}
        height="200"
        style={{ marginLeft: -15, position: 'relative', zIndex: 2 }}
        className="mt-2"
      >
        <path
          d={`M10 80 Q${controlPointXTop} ${controlPointYTop} ${endPointX} 80`}
          fill="white"
          stroke="white"
          strokeWidth="15"
        />
      </svg>
      <div
        className="bg-white mx-auto text-center p-2 shadow-black -mt-44 md:-mt-56 border-b-0 modal"
        style={{
          position: 'relative',
          zIndex: 4,
          // width: '30%',
          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        }}
      >
        <Modal />
      </div>
    </main>
  );
}

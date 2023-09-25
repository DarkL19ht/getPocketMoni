'use client';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import imageOne from '../../../assets/images/img1.png';
import imageTwo from '../../../assets/images/image 178.png';
import Modal from './Modal';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function PocketmoniXperience() {
  //style for horizontally flipped image
  const flipHorizontalStyle = {
    transform: 'scaleX(-1)',
    display: 'inline-block', // Ensures the div only takes the necessary width
  };

  //Quadratic curves
  const screenWidth = window.innerWidth + 10;
  // Control points calculation for a curve spanning the width of the screen
  const controlPointXTop = screenWidth / 2; // X coordinate of the control point
  const controlPointXBottom = screenWidth / 2; // X coordinate of the control point
  const controlPointYTop = 25; // Y coordinate of the control point
  const controlPointYBottom = 140; // Y coordinate of the control point
  const endPointX = screenWidth; // X coordinate of the end point

  return (
    <main className="overflow-hidden h-full w-full mx-auto mb-28" style={{ overflow: 'hidden' }}>
      <div className="h-10 w-full text-4xl font-normal text-center mt-0 -mb-16">
        The <span className="text-navy-300 ">Pocketmoni</span> Experience
      </div>
      <svg
        width={screenWidth}
        height="200"
        style={{ marginBottom: -120, marginLeft: -10, position: 'relative', zIndex: 2 }}
        className="z-10 mb-2 "
      >
        <path
          d={`M10 80 Q${controlPointXBottom} ${controlPointYBottom} ${endPointX} 80`}
          fill="white"
          stroke="white"
          strokeWidth="15"
        />
      </svg>
      <Swiper
        className="bg-white w-full h-[200px] md:h-3/6 z-0"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={3}
        // navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        style={{ marginBottom: -80, zIndex: 0 }}
      >
        <SwiperSlide className="w-[16rem] h-3/6">
          <Image src={imageOne} alt="image1" className="sliderImages" />
        </SwiperSlide>
        <SwiperSlide className="w-[16rem] h-3/6 overflow-hidden flex items-end">
          <Image src={imageTwo} alt="image1" className="sliderImages" />
        </SwiperSlide>
        <SwiperSlide style={flipHorizontalStyle} className="w-[16rem] h-3/6">
          <Image src={imageOne} alt="image1" className="sliderImages" />
        </SwiperSlide>
        <SwiperSlide className="w-[16rem] h-3/6">
          <Image src={imageOne} alt="image1" className="sliderImages" />
        </SwiperSlide>
        <SwiperSlide style={flipHorizontalStyle} className="w-[16rem] h-3/6">
          <Image src={imageOne} alt="image1" className="sliderImages" />
        </SwiperSlide>
        <SwiperSlide className="w-[16rem] h-3/6">
          <Image src={imageOne} alt="image1" className="sliderImages" />
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
        className="bg-white mx-auto text-center p-2 shadow-black -mt-44 m:-mt-56 border-b-0 modal"
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

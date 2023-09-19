'use client'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import UserData from '@/utils/UserData';
import { AiFillStar } from 'react-icons/ai';
import { register } from 'swiper/element/bundle';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Register Swiper web component
register();

const ReviewModel = () => {
    const swiper = useSwiper();
  return (
    <div className="container mx-auto">  
        <div className='flex items-center justify-center mt-20 mb-24'>
            <div className='flex items-center justify-center w-4/5 sm:w-5/6 xl:w-full max-w-5xl'>
                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}
                    breakpoints={{
                        640: {slidesPerView: 2},
                        1028: {slidesPerView: 3},
                      }}
                >
                    {UserData.testimonials.map((item)=>(
                        <SwiperSlide key={item.id} class="h-auto">
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
                        </SwiperSlide> 
                    ))} 
            
                </Swiper>
                <button onClick={() => swiper.slidePrev()}>Prev</button>
                <button onClick={() => swiper.slideNext()}>Next</button>
            </div>
      </div>
    </div>
    
  );
};

export default ReviewModel
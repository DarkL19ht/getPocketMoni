import React from 'react';
import Countdown from '@/hooks/useTimer';

const HeroSection = () => {
  return (
    <div className="container mx-auto text-center h-48 pt-9 ">
      <div className="flex justify-center items-center gap-2 md:gap-[10px] mb-2">
        <button className="font-itim bg-yellow-600 md:pt-3 md:pb-3 md:pr-4 md:pl-4 p-2 rounded-lg cursor-none">
          Coming Soon!
        </button>
        <div>
          <Countdown targetDate="11/06/2023" />
        </div>
      </div>
      <p className="font-switzer text-[45px] leading-[50px] md:text-[75px] md:leading-[80px] md:-mt-3 mb-20px md:mb-[30px]">
        Send Money and Pay Bills Easily
      </p>
      <p className="text-sm font-light md:leading-[40px] text-center mt-4 md:text-[20px]">
        Pocketmoni provides you access to send and receive money instantly, pay bills conveniently
        wherever you are.
      </p>
    </div>
  );
};

export default HeroSection;

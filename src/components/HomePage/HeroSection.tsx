import React from 'react';
import Countdown from '@/hooks/useTimer';

const HeroSection = () => {
  return (
    <div className="container mx-auto text-center h-48 pt-9">
      <div className="flex justify-center items-center gap-2 md:gap-3">
        <button className="font-itim bg-yellow md:pt-3 md:pb-3 md:pr-4 md:pl-4 p-2 rounded-lg cursor-none">
          Coming Soon!
        </button>
        <div>
          <Countdown targetDate="10/10/2023" />
        </div>
      </div>
      <p className="font-switzer font-bold text-5xl md:text-8xl md:-mt-3">
        Send Money and Pay Bills Easily
      </p>
      <p className="text-sm font-light md:leading-9 text-center mt-4 md:text-lg">
        Pocketmoni provides you access to send and receive money instantly, pay bills conveniently
        wherever you are.
      </p>
    </div>
  );
};

export default HeroSection;

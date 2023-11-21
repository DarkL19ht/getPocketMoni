import Countdown from '@/hooks/useTimer';
import React from 'react';

const StoryHeroSection = () => {
  return (
    <div className="container mx-auto text-center h-48 pt-9 ">
      <div className="flex justify-center items-center gap-2 md:gap-[10px] mb-2">
        <div>
          <Countdown targetDate="11/06/2023" />
        </div>
      </div>
      <p className="font-switzer text-[45px] leading-[50px] md:text-[75px] md:leading-[80px] md:-mt-3 mb-20px md:mb-[10px]">
        Our <span className="text-navy-300"> Story</span>
      </p>
      <p className="text-sm font-light md:leading-[40px] text-center mt-4 md:text-[20px]">
        From its launch in 2010, the PocketMoni Mobile Money service has enhanced the lives of its
        users by providing reliable electronic wallets.
      </p>
    </div>
  );
};

export default StoryHeroSection;

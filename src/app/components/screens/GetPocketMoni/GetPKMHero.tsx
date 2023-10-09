import Countdown from '@/hooks/useTimer';
import Image from 'next/image';
import React from 'react';
import GetPKMImage from '../../../../../public/images/getpkm.png';

const GetPKMHero = () => {
  return (
    <>
      <div className="container mx-auto text-center h-48 pt-9 mb-10">
        <div className="flex justify-center items-center gap-2 md:gap-[10px] mb-2">
          <div>
            <Countdown targetDate="11/06/2023" />
          </div>
        </div>
        <p className="font-switzer text-[45px] leading-[50px] md:text-[75px] md:leading-[80px] md:-mt-3 mb-20px md:mb-[10px]">
          How to <span className="text-navy-300"> Register</span>
        </p>
        <p className="text-sm font-light md:leading-[40px] text-center  md:text-[20px]">
          Follow these steps to setup a PocketMoni account and access our services:
        </p>
      </div>
      <div>
        <Image src={GetPKMImage} alt="get pocketmoni" className="w-full" />
      </div>
    </>
  );
};

export default GetPKMHero;

import Image from 'next/image';
import React from 'react';

const HowToRegister = () => {
  return (
    <div className="container mx-auto mt-20 mb-40">
      {/* step1 */}
      <div className="md:flex justify-evenly">
        <div>
          <div className="relative flex items-center justify-center bg-navy-100 md:w-[412px] h-[323px] rounded-2xl">
            <p className="font-itim font-thin leading-10 text-center text-navy-300 text-[60px] opacity-10 -mt-64">
              Step 1
            </p>
            <Image
              src="/images/step1.png"
              alt="step 1 to get pocketmoni"
              width={330}
              height={200}
              className="absolute mt-12"
            />
          </div>
        </div>
        <div className="md:mt-20 md:text-left text-center mt-10">
          <h3 className="text-navy-300 font-switzer text-3xl">Step 1</h3>
          <p className="text-xl mt-4">Download the app from either Play Store or Apple App Store</p>
          <div className="flex space-x-5 mt-5 items-center justify-center md:items-start md:justify-start ">
            <Image src="/images/playstore.png" alt="play store link" width={20} height={20} />
            <Image src="/images/barcode.png" alt="scan barcode" width={20} height={20} />
            <Image src="/images/applestore.png" alt="apple store link" width={20} height={20} />
          </div>
        </div>
      </div>
      {/* step 2 */}
      <div className="md:flex justify-evenly mt-20">
        <div className="text-center md:text-left mb-4 md:mt-20 md:-ml-12">
          <h3 className="text-navy-300 font-switzer text-3xl">Step 2</h3>
          <p className="text-xl mt-4">Create your account by filling the </p>
          <p className="text-xl mt-4">required information </p>
        </div>
        <div className="md:-ml-36">
          <div className="relative flex items-center justify-center bg-navy-100 md:w-[412px] h-[323px] rounded-2xl">
            <p className="font-itim font-thin leading-10 text-center text-navy-300 text-[60px] opacity-10 -mt-64">
              Step 2
            </p>
            <Image
              src="/images/step2.png"
              alt="step 1 to get pocketmoni"
              width={330}
              height={200}
              className="absolute mt-12"
            />
          </div>
        </div>
      </div>
      {/* step3 */}
      <div className="md:flex justify-evenly mt-20">
        <div>
          <div className="relative flex items-center justify-center bg-navy-100 md:w-[412px] h-[323px] rounded-2xl">
            <p className="font-itim font-thin leading-10 text-center text-navy-300 text-[60px] opacity-10 -mt-64">
              Step 3
            </p>
            <Image
              src="/images/step3.png"
              alt="step 1 to get pocketmoni"
              width={270}
              height={20}
              className="absolute mt-12"
            />
          </div>
        </div>
        <div className="text-center mt-10 md:text-left md:mt-20">
          <h3 className="text-navy-300 font-switzer text-3xl">Step 3</h3>
          <p className="text-xl mt-4">Download the app from either Play Store or Apple App Store</p>
        </div>
      </div>
    </div>
  );
};

export default HowToRegister;

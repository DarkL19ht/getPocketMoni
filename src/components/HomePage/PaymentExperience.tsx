'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PaymentExperience = () => {
  useEffect(() => {
    AOS.init({ duration: 3000, delay: 100, disable: 'phone' });
  }, []);

  return (
    <div className="container mx-auto md:flex md:justify-between md:mt-16 md:mb-64 md:pl-20 overflow-hidden sm:overflow-visible">
      <section className="md:w-2/6 md:mt-48">
        <h3 className="font-bold font-switzer text-5xl md:text-7xl text-navy-300 text-center md:text-left">
          Easy
        </h3>
        <h3 className="font-bold font-switzer text-5xl md:text-7xl text-center md:text-left">
          Payment Experience
        </h3>
        <p className="text-xl font-light pt-5 hidden md:block">
          Create solutions to drive financial inclusion across the country and beyond
        </p>
        <Image
          src="/soon2.svg"
          alt="Mobile"
          className="mt-4 hidden md:block"
          width={120}
          height={100}
          priority
        />
      </section>
      <section className="md:w-4/6 -mt-32 md:mt-0 flex items-center justify-center h-screen">
        <div className="relative">
          {/* First Card */}
          <div
            className="top-0 left-0 w-80 h-80 bg-navy-800 border border-navy-700 p-4 rounded-lg shadow-lg z-10"
            data-aos="slide-up"
          >
            <h3 className="text-4xl leading-10 font-switzer font-light">
              <span className="text-navy-300">Send</span>Money
            </h3>
            <p className="font-switzer font-light text-sm mt-6">
              Instant funds transfer to PocketMoni users and all banks in Nigeria
            </p>
            <div style={{ width: '400px', height: '250px' }}>
              <Image
                src="/PURCHASED.svg"
                alt="Mobile"
                className="mt-4"
                width={200}
                height={100}
                priority
              />
            </div>
          </div>

          {/* Second Card */}
          <div
            className="absolute md:top-36 md:left-10 left-0 top-36 w-80 h-80 bg-navy-800 border border-navy-700 p-4 rounded-lg shadow-lg z-20 "
            data-aos="slide-up"
          >
            <h3 className="text-4xl leading-10 font-switzer font-light">
              <span className="text-navy-300">Withdraw</span>Money
            </h3>
            <p className="font-switzer font-light text-sm mt-6">
              Access our cash out service leveraging on our robust agency network as well as
              alternative payment channels (Bank , ATM).
            </p>
            <div style={{ width: '400px', height: '250px' }}>
              <Image
                src="/purchased2.svg"
                alt="Mobile"
                className="mt-4"
                width={200}
                height={100}
                priority
              />
            </div>
          </div>

          {/* Third Card */}
          <div
            className="absolute md:top-72 md:left-20 left-0 top-60 w-80 p-8 h-80 bg-navy-800 border border-navy-700 rounded-lg shadow-lg z-30"
            data-aos="slide-up"
          >
            <h3 className="text-4xl leading-10 font-switzer font-light">
              <span className="text-navy-300">Pay</span>Bills
            </h3>
            <p className="font-switzer font-light text-sm mt-6">
              With PocketMoni you can buy airtime and make payments for your everyday utility bills
              without hassle
            </p>
            <div style={{ width: '400px', height: '250px' }}>
              <Image
                src="/PURCHASED.svg"
                alt="Mobile"
                className="mt-4"
                width={200}
                height={100}
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentExperience;

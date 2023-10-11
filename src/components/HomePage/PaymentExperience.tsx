'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const PaymentExperience = () => {
  useEffect(() => {
    const timeln = gsap.timeline({
      scrollTrigger: {
        trigger: '.cards',
        pin: true,
        pinSpacing: true,
        start: 'left-=70px left',
        end: '+=120',
        scrub: 1,
      },
    });

    timeln.addLabel('card1');
    timeln.to('.card-1', {
      xPercent: 0,
      opacity: 1,
    });

    timeln.from('.card-2', {
      xPercent: 75,
      opacity: 0,
    });
    timeln.addLabel('card2');

    timeln.to(
      '.card-1',
      {
        scale: 0.95,
        xPercent: -0.5,
        opacity: 0.5,
      },
      '-=0.3'
    );

    timeln.to('.card-2', {
      xPercent: 0,
      opacity: 1,
    });

    timeln.from('.card-3', {
      xPercent: 75,
      opacity: 0,
    });
    timeln.addLabel('card3');

    timeln.to(
      '.card-2',
      {
        scale: 0.98,
        xPercent: -0.4,
        opacity: 0.6,
      },
      '-=0.3'
    );

    timeln.to('.card-3', {
      xPercent: 0,
      opacity: 1,
    });

    // ScrollTrigger.create({
    //   trigger: '.sideA',
    //   start: 'top top',
    //   end: 'bottom top',
    //   pin: true,
    //   pinSpacing: false,
    // });
  }, []);
  return (
    <div className="mx-auto md:flex md:justify-between md:mt-10 w-full -mb-24 md:mb-96 md:px-24">
      <section className=" md:w-1/2 md:mt-24">
        <h3 className=" hidden md:block font-bold font-switzer text-[45px] leading-[55px] md:text-[115px] md:leading-[118px] text-navy-300 text-center md:text-left">
          Easy
        </h3>
        <h3 className=" hidden md:block font-bold font-switzer text-5xl md:text-[115px] md:leading-[118px] text-center md:text-left">
          Payment Experience
        </h3>
        <h3 className="md:hidden font-bold font-switzer text-[45px] leading-[55px] text-center md:text-left">
          <span className="text-navy-300">Easy </span>Payment
        </h3>
        <h3 className="md:hidden font-bold font-switzer text-[45px] leading-[55px] text-center md:text-left">
          Experience
        </h3>
        <p className="font-light text-[#161718] pt-[37px] hidden md:text-[24px] md:block">
          Create solutions to drive financial inclusion
        </p>
        <p className="font-light text-[#161718] hidden md:text-[24px] md:block md:pb-9">
          across the country and beyond
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
      <section className="md:w-1/2 md:mt-28 mt-5 md:block flex items-center justify-center">
        <div className="cards ">
          <div className="card card-1 bg-navy-800 border border-navy-700 md:p-12 p-6 rounded-lg z-10 shadow-lg">
            <div>
              <h3 className="text-[42px] md:text-[48px] leading-10 font-switzer font-light">
                <span className="text-navy-300 tracking-tighter">Send </span>Money
              </h3>
              <p className="font-switzer font-light text-[16px] leading-6 mt-5">
                Instant funds transfer to PocketMoni users and all banks in Nigeria
              </p>
              <div>
                <Image
                  src="/sendm.png"
                  alt="Mobile"
                  className="mt-4"
                  width={415}
                  height={277}
                  priority
                />
              </div>
            </div>
          </div>
          <div className="card card-2 bg-navy-800 border border-navy-700 md:p-12 p-4 rounded-lg shadow-lg z-20 ">
            <div>
              <h3 className="text-[36px] md:text-[48px] leading-10 font-switzer font-light">
                <span className="text-navy-300 tracking-tighter">Withdraw </span>Money
              </h3>
              <p className="font-switzer font-light text-[13px] md:text-[16px] leading-6 md:mt-4">
                Access our cash out service leveraging on our robust agency network as well as
                alternative payment channels (Bank , ATM).
              </p>
              <div>
                <Image
                  src="/withdraw2.png"
                  alt="Mobile"
                  className="mt-4"
                  width={415}
                  height={277}
                  priority
                />
              </div>
            </div>
          </div>
          <div className="card card-3 bg-navy-800 border border-navy-700 rounded-lg shadow-lg z-30">
            <div className="p-6">
              <h3 className="text-[42px] md:text-[48px] leading-10 font-switzer font-light">
                <span className="text-navy-300 tracking-tighter">Pay </span>Bills
              </h3>
              <p className="font-switzer font-light text-[13px] md:text-[16px] leading-6 mt-3">
                With PocketMoni you can buy airtime and make payments for your everyday utility
                bills without hassle
              </p>
              <div>
                <Image
                  src="/payyyy.png"
                  alt="Mobile"
                  className="mt-4"
                  width={415}
                  height={277}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentExperience;

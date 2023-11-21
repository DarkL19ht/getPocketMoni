'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import ButtonWithIcon from '../ButtonWithIcon';
import { BsFillBellFill } from 'react-icons/bs';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BecomeAgent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 0,
      anchorPlacement: 'top-bottom',
    });
  }, []);

  return (
    <div className="container mx-auto md:flex md:justify-between -mt-10 md:mt-32 w-full md:mb-20 md:pl-20">
      <section className="hidden md:block md:w-1/2 md:-ml-14">
        <Image src="/images/agentts.png" alt="Group Agent Picture" width={496} height={450} />
      </section>
      <section className="md:w-1/2 text-center md:text-left md:p-0 p-5">
        <h3 className="md:text-[55px] text-4xl leading-10 font-switzer font-bold tracking-tighter">
          Become an <span className="text-navy-300">agent</span>
        </h3>
        <p className="md:mt-7 mt-8 font-light md:text-[18px] md:leading-[40px] text-[14px] leading-[24px]">
          PocketMoni enables wealth creation. We have created an eco-system which ensures a decent
          income for our agents to run profitable businesses.
        </p>
        <div className="flex gap-3">
          <Image
            src="/Checkboxtick.svg"
            alt="Mobile"
            className="mt-4"
            width={30}
            height={10}
            priority
          />
          <p className="text-[14px] leading-[24px] font-light mt-7 text-left">
            <span className="font-bold"> Earn quick cash</span> PocketMoni empowers its agents to
            make extra income by profiling and activation on the POS scheme.
          </p>
        </div>
        <div className="flex gap-3">
          <Image
            src="/Checkboxtick.svg"
            alt="Mobile"
            className="mt-4"
            width={25}
            height={10}
            priority
          />
          <p className="text-[14px] leading-[24px] font-light mt-[26px] text-left">
            <span className="font-bold"> Agent Support</span> Guaranteed 24/7 support for all agent
            inquiries and dispute resolutions.
          </p>
        </div>
        <div className="flex gap-3 mb-[41px]">
          <Image
            src="/Checkboxtick.svg"
            alt="Mobile"
            className="mt-4"
            width={30}
            height={10}
            priority
          />
          <p className="text-[14px] leading-[24px] font-light mt-[26px] text-left">
            <span className="font-bold">Flexible Pricing</span> We offer competitive rates and
            provide exclusive pricing to super agent networks.
          </p>
        </div>
        <div className="flex items-center justify-center md:justify-start">
          <Link href="/">
            <ButtonWithIcon className="bg-navy-400 text-white w-40" icon>
              Join Waitlist
            </ButtonWithIcon>
          </Link>
        </div>
      </section>
      <section className="md:hidden md:w-1/2 mt-14">
        <Image
          src="/images/agentts.png"
          alt="Group Agent Picture"
          width={400}
          height={100}
          className="md:p-0 p-4"
        />
      </section>
    </div>
  );
};

export default BecomeAgent;

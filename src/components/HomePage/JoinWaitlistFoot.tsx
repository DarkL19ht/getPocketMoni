import React from 'react';
import Image from 'next/image';
import Button from '../Button';
import ButtonWithIcon from '../ButtonWithIcon';
import { BsFillBellFill } from 'react-icons/bs';

const JoinWaitlistFoot = () => {
  return (
    <div className="container mx-auto md:flex md:justify-between md:mt-32 md:mb-0 -mt-24 mb-40 w-full md:pl-20">
      <section className=" md:w-1/2 md:mb-0 mb-24">
        <div className="flex md:items-center items-center justify-center h-screen">
          <div className="-mt-32">
            <p className="font-switzer font-light text-3xl">Join our</p>
            <h2 className="font-switzer font-bold text-8xl"> Waitlist </h2>
            <div className="md:flex gap-3 mt-10">
              <input
                type="email"
                name="waitlist"
                id=""
                placeholder="Enter your email to get notified when we launch"
                className="px-3 py-2 bg-white w-full mb-3 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
                style={{ height: '50px', borderRadius: '10px' }}
              />
              <ButtonWithIcon
                className="bg-navy-600 text-white w-full"
                hoverEffect="hover:bg-red-300"
                icon={<BsFillBellFill />}
              >
                Join Waitlist
              </ButtonWithIcon>
            </div>
          </div>
        </div>
      </section>
      <section className="hidden md:block md:w-1/2 ">
        <div className="flex justify-between">
          <div>
            <Image
              src="/vertical389.svg"
              alt="dial code"
              className="dark:invert mx-auto inset-0 -mr-20"
              width={500}
              height={2}
              priority
            />
          </div>
          <Image
            src="/mobile.svg"
            alt="Mobile"
            className="relative mx-auto inset-0 dark:invert -ml-10"
            width={500}
            height={2}
            priority
          />
        </div>
      </section>
    </div>
  );
};

export default JoinWaitlistFoot;

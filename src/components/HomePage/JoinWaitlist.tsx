'use client'; // This is a client component
import Image from 'next/image';
import React, { useState } from 'react';
import Button from './../Button';
import { useForm, SubmitHandler } from 'react-hook-form';
import ButtonWithIcon from '../ButtonWithIcon';
import { BsFillBellFill } from 'react-icons/bs';

type Inputs = {
  email: string;
};

const JoinWaitlist = () => {
  const { handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const [isFocused, setIsFocused] = useState(false);
  const handleButtonClick = () => {
    setIsFocused(true);
    setTimeout(() => {
      setIsFocused(false);
    }, 100);
  };
  return (
    <div className="container mx-auto md:flex justify-between md:pt-36">
      {/* FOR MOBILE SCREEN START HERE */}
      <div className="md:hidden mt-16">
        <div className="md:flex gap-3">
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="email"
              name="waitlist"
              id=""
              placeholder="Enter your email to get notified when we launch"
              className="px-3 py-2 bg-white w-full mb-5 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
              style={{ height: '50px', borderRadius: '10px' }}
            />
            <Button label="Join Waitlist" style="bg-navy-600" text="text-white" width="w-full" />
          </form>
        </div>
        <div className="flex mt-10">
          <Image
            src="/mobile.svg"
            alt="Mobile"
            className={`relative mx-auto inset-0 dark:invert ${
              isFocused ? ' bg-navy-100 opacity-50' : ''
            }`}
            width={200}
            height={2}
            priority
          />
          <div>
            <Image
              src="/POS-SMALL.svg"
              alt="Mobile"
              className={`relative mx-auto inset-0 dark:invert ${
                isFocused ? ' bg-navy-100 opacity-50' : ''
              }`}
              width={130}
              height={2}
              priority
            />
          </div>
        </div>
      </div>
      {/* FOR MOBILE SCREEN ENDS HERE */}
      <Image
        src="/mobile.svg"
        alt="Mobile"
        className={`hidden md:block relative mx-auto inset-0 dark:invert ${
          isFocused ? ' bg-navy-100 opacity-50' : ''
        }`}
        width={600}
        height={2}
        priority
      />
      <div className="hidden md:block">
        <div className="text-center">
          <div className="md:flex gap-3">
            <input
              type="email"
              name="waitlist"
              id=""
              placeholder="Enter your email to get notified when we launch"
              className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
              style={{ height: '50px', borderRadius: '10px' }}
            />
            <ButtonWithIcon
              className="bg-navy-600 text-white w-40"
              hoverEffect="hover:bg-red-300"
              icon={<BsFillBellFill />}
            >
              Join Waitlist
            </ButtonWithIcon>
            {/* <Button label="Join Waitlist" style="bg-navy-600" text="text-white" width="w-40" /> */}
          </div>
          <div className="md:mt-48 ">
            <Image
              src="/bg-wait.svg"
              alt="dial code"
              className="dark:invert"
              width={600}
              height={200}
              priority
            />
          </div>
          <div className="md:mt-24">
            <div className="flex">
              <Image
                src="/arrowleft.svg"
                alt="Mobile"
                className="dark:invert"
                width={100}
                height={1}
                priority
              />
              <Button
                // onClick={handleButtonClick}
                label="Click to see the magic"
                style="bg-black"
                text="text-white"
                width="w-40"
              />
              <Image
                src="/arrow-up.svg"
                alt="Mobile"
                className="dark:invert"
                width={100}
                height={50}
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/POS.svg"
        alt="Mobile"
        className="dark:invert hidden md:block "
        width={500}
        height={2}
        priority
      />
    </div>
  );
};

export default JoinWaitlist;

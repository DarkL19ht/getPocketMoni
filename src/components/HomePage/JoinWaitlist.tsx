'use client'; // This is a client component
import Image from 'next/image';
import React, { useState } from 'react';
import Button from './../Button';
import { useForm, SubmitHandler } from 'react-hook-form';
import ButtonWithIcon from '../ButtonWithIcon';
import { BsFillBellFill, BsFillPersonFill } from 'react-icons/bs';
import { LiaGreaterThanSolid } from 'react-icons/lia';
import { PiBank } from 'react-icons/pi';

type Inputs = {
  email: string;
};

const JoinWaitlist = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    // Toggle the modal state when a clickable region is clicked
    setShowModal(!showModal);
  };
  const { handleSubmit, register, reset } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (values) => {
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      console.log('subitted Response', data);

      reset();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const [isFocused, setIsFocused] = useState(false);

  const handleButtonClick = () => {
    setIsFocused(true);
    setTimeout(() => {
      setIsFocused(false);
    }, 100);
  };
  return (
    <div className="container mx-auto md:flex justify-between w-full md:pt-44 ">
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
            <ButtonWithIcon
              type="submit"
              className="bg-navy-400 text-white w-full"
              hoverEffect="hover:bg-red-300"
              icon={<BsFillBellFill />}
            >
              Join Waitlist
            </ButtonWithIcon>
            {/* <Button label="Join Waitlist" style="bg-navy-600" text="text-white" width="w-full" /> */}
          </form>
        </div>
        <div className="flex mt-10 -ml-16">
          <Image
            src="/mobile.svg"
            alt="Mobile"
            className={`relative mx-auto inset-0 ${isFocused ? ' bg-navy-100 opacity-50' : ''}`}
            width={200}
            height={2}
            priority
          />
          <div>
            <Image
              src="/POS-SMALL.svg"
              alt="Mobile"
              className={`relative mx-auto inset-0 ${isFocused ? ' bg-navy-100 opacity-50' : ''}`}
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
        className={`hidden md:block relative mx-auto inset-0 w-1/4 card-fly-left ${
          isFocused ? ' bg-navy-100 opacity-50' : ''
        }`}
        width={600}
        height={2}
        priority
        onClick={handleClick}
      />
      {/* <div
        className="clickable-region"
        style={{ top: '600px', left: '200px', width: '50px', height: '50px' }}
        onClick={handleClick}
      /> */}
      {showModal && (
        <div className="modal-over">
          <div className="modal-content -mt-44 w-[160px] h-[160px] shadow-lg">
            {/* Content for your modal */}
            <div className="flex justify-between mb-2" style={{ paddingTop: '12px' }}>
              <p className="text-[12px] font-bold">Send Money</p>{' '}
              <span
                onClick={handleClick}
                className=" text-navy-400 text-[11px] p-[1px]  cursor-pointer rounded"
              >
                x
              </span>
            </div>
            <div className="flex gap-5 pt-1 bg-mob rounded pb-1">
              <Image
                src="/pkmsmall.svg"
                alt="Mobile"
                // className={`relative mx-auto inset-0 ${isFocused ? ' bg-navy-100 opacity-50' : ''}`}
                width={15}
                height={1}
                priority
              />
              <div className="mr-4">
                <h2 className="text-[8px] font-bold">To PocketMoni</h2>
                <p className="text-[6px]">Best Way to sed money </p>
              </div>
              <span className="text-[5px] flex items-center justify-center">
                <LiaGreaterThanSolid />
              </span>
            </div>
            <div className="flex gap-5 pt-4 pb-2">
              <BsFillPersonFill />
              <div className="mr-4">
                <h2 className="text-[8px] font-bold">To Sub Wallet</h2>
                <p className="text-[6px]">Best Way to sed money </p>
              </div>
              <span className="text-[5px] flex items-center justify-center">
                <LiaGreaterThanSolid />
              </span>
            </div>
            <div className="flex gap-5 pt-2 bg-mob rounded pb-1">
              <PiBank />
              <div className="mr-4">
                <h2 className="text-[8px] font-bold">To Other Banks</h2>
                <p className="text-[6px]">Best Way to sed money </p>
              </div>
              <span className="text-[5px] flex items-center justify-center">
                <LiaGreaterThanSolid />
              </span>
            </div>
          </div>
        </div>
      )}
      <div className="hidden md:block w-2/4">
        <div className="text-center">
          <form className="md:flex gap-3" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="email"
              {...register('email')}
              name="email"
              id=""
              placeholder="Enter your email to get notified when we launch"
              className="px-3 py-2 w-full bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
              style={{ height: '50px', borderRadius: '10px' }}
            />
            <ButtonWithIcon
              type="submit"
              className="bg-navy-400 text-white w-40"
              hoverEffect="hover:bg-red-300"
              icon={<BsFillBellFill />}
            >
              Join Waitlist
            </ButtonWithIcon>
            {/* <Button label="Join Waitlist" style="bg-navy-600" text="text-white" width="w-40" /> */}
          </form>
          <div className="md:mt-10 ">
            <Image
              src="/bg-wait.svg"
              alt="dial code"
              className=" inset-0 z-0 card-fly-bottom"
              width={600}
              height={200}
              priority
            />
          </div>
          <div className="md:mt-10 -mt-6">
            <div className="flex">
              <Image src="/arrowleft.svg" alt="Mobile" width={100} height={1} priority />
              <ButtonWithIcon
                type="submit"
                // onClick={handleButtonClick
                className="bg-black text-white w-full"
              >
                Click to see the magic
              </ButtonWithIcon>
              {/* <Button
                // onClick={handleButtonClick}
                label="Click to see the magic"
                style="bg-black"
                text="text-white"
                width="w-full"
              /> */}
              <Image src="/arrow-up.svg" alt="Mobile" width={100} height={50} priority />
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/POS.svg"
        alt="Mobile"
        className="hidden md:block w-1/4 card-fly-right"
        width={500}
        height={2}
        priority
      />
    </div>
  );
};

export default JoinWaitlist;

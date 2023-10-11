'use client'; // This is a client component
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import ButtonWithIcon from '../ButtonWithIcon';
import { BsFillPersonFill } from 'react-icons/bs';
import { LiaGreaterThanSolid } from 'react-icons/lia';
import { PiBank } from 'react-icons/pi';
import Alert from '@/app/components/ui/Alert';
import TextField from '../TextField';
import { VALIDATE_EMAIL } from '@/utils/helper';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MobileDialog from './MobileDialog';

type Inputs = {
  email: string;
};

const initialState = {
  data: {
    data: {},
    message: '',
  },
  isSuccess: false,
  isLoading: false,
};

const JoinWaitlist = () => {
  const [showModal, setShowModal] = useState(false);
  const [state, setState] = useState(initialState);
  const { data, isSuccess, isLoading } = state;

  const handleClick = () => {
    setShowModal(!showModal);
  };

  const { handleSubmit, reset, control } = useForm<Inputs>({
    mode: 'all',
    defaultValues: {
      email: '',
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (values) => {
    try {
      setState((prev) => ({ ...prev, isLoading: true }));
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      reset();
      setState((prev) => ({
        ...prev,
        isLoading: false,
        isSuccess: true,
        data,
      }));
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        isSuccess: false,
        data: {
          data: {},
          message: 'Error: Please contact support@etranzact.com',
        },
      }));
    }
  };

  const [isFocused, setIsFocused] = useState(false);

  const handleButtonClick = () => {
    setIsFocused(true);
    setTimeout(() => {
      setIsFocused(false);
    }, 100);
  };

  useEffect(() => {
    if (data) {
      setTimeout(() => {
        setState(initialState);
      }, 4000);
    }
  }, [data]);
  return (
    <div className="container mx-auto md:flex justify-between md:pt-36 ">
      <Image
        src="/mobile.svg"
        alt="Mobile"
        className={`hidden md:block relative mx-auto inset-0 w-1/4 -mr-[66px] card-fly-left ${
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
          <div className="modal-content -mt-44 w-[160px] h-[160px] shadow-2xl">
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
                <p className="text-[5.5px]">Best Way to send money </p>
              </div>
              <span className="text-[5px] flex items-center justify-center">
                <LiaGreaterThanSolid />
              </span>
            </div>
            <div className="flex gap-5 pt-3 pb-2">
              <BsFillPersonFill />
              <div className="mr-4">
                <h2 className="text-[8px] font-bold">To Sub Wallet</h2>
                <p className="text-[5.5px]">Best Way to send money </p>
              </div>
              <span className="text-[5px] flex items-center justify-center">
                <LiaGreaterThanSolid />
              </span>
            </div>
            <div className="flex gap-5 pt-3 bg-mob rounded pb-1">
              <PiBank />
              <div className="mr-4">
                <h2 className="text-[8px] font-bold">To Other Banks</h2>
                <p className="text-[5.5px]">Best Way to send money </p>
              </div>
              <span className="text-[5px] flex items-center justify-center">
                <LiaGreaterThanSolid />
              </span>
            </div>
          </div>
        </div>
      )}
      <div className=" md:w-2/4 md:mt-0 mt-10 mb-3 mr-6 ml-6">
        <div className="container text-center">
          {data?.message && (
            <Alert message={data?.message} type={isSuccess ? 'success' : 'error'} />
          )}
          <form
            className=" md:flex md:gap-14 md:items-start md:justify-start items-center justify-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextField
              control={control}
              name="email"
              rules={{
                required: {
                  value: true,
                  message: 'Email address is required',
                },
                pattern: VALIDATE_EMAIL,
              }}
              className="md:ml-10 md:h-[60px] rounded-lg"
            />
            <ButtonWithIcon
              // disabled={!formState.isValid}
              isLoading={isLoading}
              loadingText={'Please wait'}
              type="submit"
              className="bg-navy-400 text-white md:w-[160px] w-full md:h-[60px]"
              icon
            >
              Join Waitlist
            </ButtonWithIcon>
            {/* <Button label="Join Waitlist" style="bg-navy-600" text="text-white" width="w-40" /> */}
          </form>
          <div className="md:hidden container">
            <div className="flex mt-10 -ml-10">
              <div>
                <Image
                  src="/mobile.svg"
                  alt="Mobile"
                  className={`relative mx-auto inset-0 ${
                    isFocused ? ' bg-navy-100 opacity-50' : ''
                  }`}
                  width={215}
                  height={2}
                  priority
                />
              </div>

              <div>
                <Image
                  src="/POSS.svg"
                  alt="Mobile"
                  className={`relative mx-auto inset-0 ${
                    isFocused ? ' bg-navy-100 opacity-50' : ''
                  }`}
                  width={124}
                  height={2}
                  priority
                />
              </div>
            </div>
            <div className="-mt-24 mb-20">
              <MobileDialog />
              {/* <button className="bg-navy-100 text-navy-200 pt-3 pb-3 pr-4 pl-4 rounded-full">Try Demo</button> */}
            </div>
          </div>
          <div className="hidden md:block md:mt-8">
            <Image
              src="/bg-wait.svg"
              alt="dial code"
              className="z-0 card-fly-bottom"
              width={1200}
              height={200}
              priority
            />
          </div>
          <div className="hidden md:block md:mt-7 -mt-6">
            <div className="flex justify-center items-center">
              <Image src="/arrowleft.svg" alt="Mobile" width={100} height={1} priority />
              <ButtonWithIcon type="submit" icon2 className="bg-black text-white w-[188px]">
                Click to see the magic
              </ButtonWithIcon>
              <Image src="/arrow-up.svg" alt="Mobile" width={100} height={50} priority />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Image
          src="/POSS.svg"
          alt="Mobile"
          className="hidden md:block w-[68%] card-fly-right"
          width={400}
          height={2}
          priority
        />
      </div>
    </div>
  );
};

export default JoinWaitlist;

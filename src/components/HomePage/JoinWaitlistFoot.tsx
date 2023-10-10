'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useForm, SubmitHandler } from 'react-hook-form';
import ButtonWithIcon from '../ButtonWithIcon';
import Alert from '@/app/components/ui/Alert';
import TextField from '../TextField';
import { VALIDATE_EMAIL } from '@/utils/helper';

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

const JoinWaitlistFoot = () => {
  const [state, setState] = useState(initialState);
  const { data, isSuccess, isLoading } = state;

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

  useEffect(() => {
    if (data) {
      setTimeout(() => {
        setState(initialState);
      }, 4000);
    }
  }, [data]);

  return (
    <div className="container mx-auto md:flex md:justify-between md:mt-32 md:mb-0 mb-[325px] w-full md:pl-20">
      <section className=" md:w-1/2 md:mb-0 mb-24">
        <div className="flex md:items-center items-center justify-center h-screen">
          <div className="md:-mt-96 -mt-32">
            <p className="font-switzer font-light text-3xl md:text-[65px]">Join our</p>
            <h2 className="font-switzer font-bold text-8xl md:text-[140px]">Waitlist</h2>
            <div className=" mt-10">
              {data?.message && (
                <Alert message={data?.message} type={isSuccess ? 'success' : 'error'} />
              )}
              <form className="md:flex gap-3" onSubmit={handleSubmit(onSubmit)}>
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
                  className="md:h-[60px]"
                />
                <ButtonWithIcon
                  isLoading={isLoading}
                  loadingText={'Please wait'}
                  type="submit"
                  className="bg-navy-400 text-white w-full md:w-40 md:h-[60px]"
                  icon
                >
                  Join Waitlist
                </ButtonWithIcon>
              </form>
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
              className="mx-auto inset-0 -mr-20"
              width={500}
              height={2}
              priority
            />
          </div>
          <Image
            src="/mobile.svg"
            alt="Mobile"
            className="relative mx-auto inset-0 -ml-10"
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

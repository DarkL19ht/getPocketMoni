import React from 'react';
import Image from 'next/image';

const PaymentExperience = () => {
  return (
    <div className="container mx-auto md:flex md:justify-between md:mt-24 w-full md:mb-60 md:pl-20">
      <section className="w-1/2">
        <h3 className="font-bold font-switzer text-7xl text-navy-300">Easy</h3>
        <h3 className="font-bold font-switzer text-7xl">Payment Experience</h3>
        <p className="text-xl font-light pt-5">
          Create solutions to drive financial inclusion across the country and beyond
        </p>
        <Image
          src="/soon2.svg"
          alt="Mobile"
          className="mt-4 dark:invert"
          width={120}
          height={100}
          priority
        />
      </section>
      <section className="w-1/2">
        <div className="relative">
          {/* First Card */}
          <div className=" top-0 left-0 w-80 h-80 bg-navy-800 border border-navy-700 p-4 rounded-lg shadow-lg z-10 card-fly-left ">
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
                className="mt-4 dark:invert"
                width={200}
                height={100}
                priority
              />
            </div>
          </div>

          {/* Second Card */}
          <div className="absolute top-16 left-16 w-80 h-80 bg-navy-800 border border-navy-700 p-4 rounded-lg shadow-lg z-20 card-fly-right">
            <h3 className="text-4xl leading-10 font-switzer font-light">
              <span className="text-navy-300">Withdraw</span>Money
            </h3>
            <p className="font-switzer font-light text-sm mt-6">
              Access our cash out service leveraging on our robust agency network as well as
              alternative payment channels (Bank , ATM).
            </p>
            <div style={{ width: '400px', height: '250px' }}>
              <Image
                src="/PURCHASED.svg"
                alt="Mobile"
                className="mt-4 dark:invert"
                width={200}
                height={100}
                priority
              />
            </div>
          </div>

          {/* Third Card */}
          <div className="absolute top-32 left-32 w-80 p-8 h-80 bg-navy-800 border border-navy-700 rounded-lg shadow-lg z-30 card-fly-top">
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
                className="mt-4 dark:invert"
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

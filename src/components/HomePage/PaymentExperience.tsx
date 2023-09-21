'use client';
import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

interface Props {
  id?: number;
  title1?: string;
  img: string;
  title2?: string;
  description?: string;
}

const cardDetails = [
  {
    id: 1,
    title1: 'Send',
    title2: 'Money',
    img: '/PURCHASED.svg',
    description: ' Instant funds transfer to PocketMoni users and all banks in Nigeria',
    className:
      'top-0 left-0 w-80 h-80 bg-navy-800 border border-navy-700 p-4 rounded-lg shadow-lg z-10 transform translate-y-40',
  },
  {
    id: 2,
    title1: 'Withdraw',
    title2: 'Money',
    img: '/purchased2.svg',
    description:
      ' Access our cash out service leveraging on our robust agency network as well asalternative payment channels (Bank , ATM).',
    className:
      'absolute md:top-16 md:left-16 top-24 w-80 h-80 bg-navy-800 border border-navy-700 p-4 rounded-lg shadow-lg z-20 transform translate-y-40 ',
  },
  {
    id: 3,
    title1: 'Pay',
    title2: 'Bills',
    img: '/PURCHASED.svg',
    description:
      'With PocketMoni you can buy airtime and make payments for your everyday utility bills without hassle',
    className:
      'absolute md:top-32 md:left-32 top-48 w-80 p-8 h-80 bg-navy-800 border border-navy-700 rounded-lg shadow-lg z-30',
  },
];

const cardVariants: Variants = {
  offscreen: {
    y: 1700,
  },
  onscreen: {
    y: 5,
    rotate: 5,
    transition: {
      type: 'spring',
      bounce: 0.2,
      duration: 0.7,
    },
  },
};

const PaymentExperience = () => {
  const Card = ({ title1, title2, description, img }: Props) => {
    return (
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 'all' }}
      >
        {/* <div className="splash" style={{ background }} /> */}
        <motion.div className="card" variants={cardVariants}>
          <div>
            <h3 className="text-4xl leading-10 font-switzer font-light">
              <span className="text-navy-300"> {title1} </span> {title2}
            </h3>
            <p className="font-switzer font-light text-sm mt-6">{description}</p>
            <div>
              <Image
                src={img}
                alt="Mobile"
                className="mt-4 dark:invert"
                width={200}
                height={100}
                priority
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div className="container mx-auto md:flex md:justify-between md:mt-24 w-full md:mb-60 md:pl-20">
      <section className="md:w-1/2 md:mt-24">
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
          className="mt-4 dark:invert hidden md:block"
          width={120}
          height={100}
          priority
        />
      </section>
      <section className="md:w-1/2 md:mt-0 flex items-center justify-center">
        <div className="">
          {cardDetails.map((item) => (
            <Card
              id={item.id}
              img={item.img}
              title2={item.title2}
              title1={item.title1}
              key={item.description}
              description={item.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default PaymentExperience;

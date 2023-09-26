'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, Variants, useAnimation } from 'framer-motion';

interface DelayProps {
  delay?: number;
}

const Card1 = ({ delay }: DelayProps) => {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div variants={cardVariants} initial="hidden" animate="visible">
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
            className="mt-4"
            width={200}
            height={100}
            priority
          />
        </div>
      </div>
    </motion.div>
  );
};

const Card2 = ({ delay }: DelayProps) => {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div variants={cardVariants} initial="hidden" animate="visible">
      <div className="absolute md:top-16 md:left-16 top-24 w-80 h-80 bg-navy-800 border border-navy-700 p-4 rounded-lg shadow-lg z-20 card-fly-bottom">
        <h3 className="text-4xl leading-10 font-switzer font-light">
          <span className="text-navy-300">Withdraw</span>Money
        </h3>
        <p className="font-switzer font-light text-sm mt-6">
          Access our cash out service leveraging on our robust agency network as well as alternative
          payment channels (Bank , ATM).
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
    </motion.div>
  );
};

const Card3 = ({ delay }: DelayProps) => {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div variants={cardVariants} initial="hidden" animate="visible">
      <div className="absolute md:top-32 md:left-32 top-48 w-80 p-8 h-80 bg-navy-800 border border-navy-700 rounded-lg shadow-lg z-30 card-fly-bottom">
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
    </motion.div>
  );
};

const PaymentExperience = () => {
  const [showCards, setShowCards] = useState(false);
  const [showCard2, setShowCard2] = useState(false);
  const [showCard3, setShowCard3] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowCards(true);
        controls.start('visible');
      }
      if (window.scrollY > 1000) {
        setShowCard2(true);
        controls.start('visible');
      }
      if (window.scrollY > 1200) {
        setShowCard3(true);
        controls.start('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

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
          className="mt-4 hidden md:block"
          width={120}
          height={100}
          priority
        />
      </section>
      <section className="md:w-1/2 md:mt-0 mt-5 flex items-center justify-center">
        <div className="relative">
          {showCards && (
            <motion.div
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              <Card1 delay={0} />
            </motion.div>
          )}
          {showCard2 && (
            <motion.div
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              <Card2 delay={0.4} />
            </motion.div>
          )}

          {showCard3 && (
            <motion.div
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              <Card3 delay={0} />
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default PaymentExperience;

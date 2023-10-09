'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AgentTransaction = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 0,
      anchorPlacement: 'top-bottom',
    });
  }, []);
  return (
    <div className="container bg-gray py-5 m-3 md:bg-transparent rounded-lg mx-auto md:mt-20 md:mb-0 ">
      <div className="flex justify-evenly text-center">
        <section data-aos="fade-right">
          <h3 className="font-bold text-[25px] md:text-6xl font-switzer">N40B+</h3>
          <p className="font-light text-[10px] md:text-xl md:leading-10">Transactions processed</p>
        </section>
        <section data-aos="fade-right">
          <h3 className="font-bold text-[25px] md:text-6xl font-switzer">10K</h3>
          <p className="font-light text-[10px] md:text-xl md:leading-10">Agents</p>
        </section>
        <section data-aos="fade-right">
          <h3 className="font-bold text-[25px] md:text-6xl font-switzer">30K</h3>
          <p className="font-light text-[10px] md:text-xl md:leading-10">Active Parties</p>
        </section>
        <section data-aos="fade-left">
          <h3 className="font-bold text-[25px] md:text-6xl font-switzer">60k</h3>
          <p className="font-light text-[10px] md:text-xl md:leading-10">Downloads </p>
        </section>
      </div>
    </div>
  );
};

export default AgentTransaction;

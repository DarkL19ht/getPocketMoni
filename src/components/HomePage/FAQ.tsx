'use client';
import React, { useState } from 'react';
import UserData from '@/utils/UserData';
import AccordionItem from '../AccordionItem';

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);
  const [accordion1, setAccodion1] = useState<number | null>(null);

  const toggle = (index: number) => {
    if (open === index) {
      return setOpen(null);
    } else {
      setOpen(index);
    }
  };

  const toggleAll = () => {
    () => toggle(0);
    () => toggle(1);
    () => toggle(2);
    // toggle(3);
    // toggle(4);
    // toggle(5);
  };

  const Accordian = (index: number) => {
    if (accordion1 === index) {
      return setAccodion1(null);
    } else {
      setAccodion1(index);
    }
  };

  return (
    <div className="container mx-auto text-center md:mb-20 md:mt-36 mt-14">
      <h3 className="font-switzer text-[55px] font-bold mb-[56px] tracking-tighter">F.A.Q</h3>
      <div className="w-full md:flex md:justify-between gap-8">
        <section className="md:w-1/2">
          {UserData.accordionData.map((data, index) => {
            return (
              <AccordionItem
                key={index}
                open={index === open}
                title={data.title}
                description={data.description}
                toggle={() => toggle(index)}
              />
            );
          })}
          <div className="border-b border-gray2"></div>
        </section>
        <section className="md:w-1/2">
          {UserData.accordionData2.map((data, index) => {
            return (
              <AccordionItem
                key={index}
                open={index === accordion1}
                title={data.title}
                description={data.description}
                toggle={() => Accordian(index)}
              />
            );
          })}
          <div className="border-b border-gray2"></div>
        </section>
      </div>
    </div>
  );
};

export default FAQ;

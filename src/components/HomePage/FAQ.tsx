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

  const Accordian = (index: number) => {
    if (accordion1 === index) {
      return setAccodion1(null);
    } else {
      setAccodion1(index);
    }
  };

  return (
    <div className="container mx-auto text-center md:mb-20 md:mt-0 mt-14 dark:text-black">
      <h3 className="font-switzer text-7xl font-normal mb-">F.A.Q</h3>
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
        </section>
      </div>
    </div>
  );
};

export default FAQ;

import React from 'react';
import { AiOutlineMinus } from 'react-icons/ai';
import { BsPlus } from 'react-icons/bs';
import { BiMinus } from 'react-icons/bi';
import { Collapse } from 'react-collapse';

interface AccordionProps {
  title: string;
  description: string;
  open: boolean;
  toggle: () => void;
}

const AccordionItem = ({ title, description, open, toggle }: AccordionProps) => {
  return (
    <div className="pt-[10px]">
      <div className="border-t border-gray2"></div>
      <div
        className=" py-[25px] px-[50px] flex justify-between items-center cursor-pointer"
        onClick={toggle}
      >
        <p className="text-xl font-light"> {title} </p>
        <div className="text-[30px]">{open ? <BiMinus /> : <BsPlus />}</div>
      </div>
      <Collapse isOpened={open}>
        <div className="bg-white px-[50px] pb-[20px] text-justify">{description}</div>
      </Collapse>
      <div className="border-b border-gray2"></div>
    </div>
  );
};

export default AccordionItem;

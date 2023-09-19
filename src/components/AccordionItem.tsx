import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
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
        <p className="text-[22px] font-light"> {title} </p>
        <div className="text-[30px]">{open ? <AiOutlineMinus /> : <AiOutlinePlus />}</div>
      </div>
      <Collapse isOpened={open}>
        <div className="bg-white px-[50px] pb-[20px]"> {description} </div>
      </Collapse>
      <div className="border-b border-gray2"></div>
    </div>
  );
};

export default AccordionItem;

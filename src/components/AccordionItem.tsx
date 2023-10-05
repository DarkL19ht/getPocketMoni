import React from 'react';
import { AiOutlineMinus } from 'react-icons/ai';
import { BsPlus } from 'react-icons/bs';
import { BiMinus } from 'react-icons/bi';
import { Collapse } from 'react-collapse';
import Image from 'next/image';

interface AnswerProps {
  id: string;
  answer?: string;
  answer1?: string;
  answer2?: string;
  answer3?: string;
  answer4?: string;
}

interface AccordionProps {
  title: string;
  description: AnswerProps[];
  open: boolean;
  toggle: () => void;
}

const AccordionItem = ({ title, description, open, toggle }: AccordionProps) => {
  return (
    <div className="pt-[10px]">
      <div className="border-t border-gray2"></div>
      <div className="py-[32px] px-[50px] flex justify-between cursor-pointer" onClick={toggle}>
        <p className="text-xl font-light text-left"> {title} </p>
        <div className="text-[30px]">{open ? <BiMinus /> : <BsPlus />}</div>
      </div>
      <Collapse isOpened={open}>
        {/* <div className="bg-white px-[50px] pb-[20px] text-justify">{description}</div> */}
        {description.map((item) => {
          return (
            <div key={item.id}>
              <div className="bg-white px-[50px] pb-[20px] text-justify">{item.answer}</div>
              {item.answer1 && item.answer2 && (
                <section>
                  <div className="bg-white px-[50px] pb-[20px] text-justify flex gap-2">
                    <Image
                      src="/Checkbox.svg"
                      alt="Mobile"
                      width={30}
                      height={10}
                      priority
                      data-aos="fade-down"
                    />
                    <p data-aos="fade-left"> {item.answer1} </p>
                  </div>
                  <div className="bg-white px-[50px] pb-[20px] text-justify flex gap-2">
                    <Image
                      src="/Checkbox.svg"
                      alt="Mobile"
                      width={30}
                      height={10}
                      priority
                      data-aos="fade-down"
                    />
                    <p data-aos="fade-left"> {item.answer2}</p>
                  </div>
                  <div className="bg-white px-[50px] pb-[20px] text-justify flex gap-2">
                    <Image
                      src="/Checkbox.svg"
                      alt="Mobile"
                      width={30}
                      height={10}
                      priority
                      data-aos="fade-down"
                    />
                    <p data-aos="fade-left">{item.answer3}</p>
                  </div>
                  <div className="bg-white px-[50px] pb-[20px] text-justify flex gap-2">
                    <Image
                      src="/Checkbox.svg"
                      alt="Mobile"
                      width={30}
                      height={10}
                      priority
                      data-aos="fade-down"
                    />
                    <p data-aos="fade-left">{item.answer4}</p>
                  </div>
                </section>
              )}

              {/* <div className="bg-white px-[50px] pb-[20px] text-justify">{item.answer2}</div>
              <div className="bg-white px-[50px] pb-[20px] text-justify">{item.answer3}</div>
              <div className="bg-white px-[50px] pb-[20px] text-justify">{item.answer4}</div> */}
            </div>
          );
        })}
      </Collapse>
      <div className="border-b border-gray2"></div>
    </div>
  );
};

export default AccordionItem;

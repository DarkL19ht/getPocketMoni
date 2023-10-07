'use client';
import privacySections from '@/app/privacyPolicy/data';
import Image from 'next/image';
import { useState } from 'react';
import checkbox from '../../../public/Checkbox.svg';
import Link from 'next/link';

const PageTitle = () => {
  const [active, setActive] = useState('PrivacyPolicy');
  const handleCheck = (_id: string) => {
    setActive(_id);
  };
  return (
    <div className="fixed">
      {privacySections.map((data, index) => {
        let _id = data.title.replace(/ /g, '');
        return (
          <div className="flex justify-start items-start ">
            <Image
              src={checkbox}
              width={20}
              height={20}
              alt="checkbox"
              className={`${active == _id ? 'block' : 'hidden'}`}
            />
            <div className={`${active == _id ? 'hidden' : 'h-4 w-5'}`}></div>
            <ul className="align-middle h-full w-[50%] lg:w-full mt-1 ml-3">
              <Link
                href={`#${_id}`}
                onClick={() => {
                  handleCheck(_id);
                }}
              >
                <li key={index} className="mb-3">
                  {data.title}
                </li>
              </Link>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default PageTitle;

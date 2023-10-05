import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RiInstagramLine, RiLinkedinBoxFill, RiTwitterXFill } from 'react-icons/ri';
import { ImFacebook } from 'react-icons/im';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="w-full -mt-96 md:h-96 bg-navy-600 text-white md:text-justify text-center">
      <div className="md:flex md:justify-between p-16 font-switzer relative">
        <div className="absolute -mt-[155px] -ml-14">
          <Image
            src="/bg-wait.svg"
            alt="dial code"
            className="md:hidden"
            width={800}
            height={200}
            priority
          />
        </div>
        <section className="mt-6 pb-6 md:mt-0 items-center justify-center">
          <Image
            src="/logoEtr.svg"
            alt="Mobile"
            className="mb-4 ml-9 md:ml-0"
            width={200}
            height={10}
            priority
          />
          <div className="font-light text-[14px]">
            <p>Want to connect with us? </p>
            <p>Find us on social media.</p>
            <div className="flex space-x-5 mt-6 mb-10">
              <Link href="/" className="bg-[#FFFFFF0F] text-white rounded p-3 text-[21px]">
                <ImFacebook />
              </Link>
              <Link href="/" className="bg-[#FFFFFF0F] text-white rounded p-3 text-[21px]">
                <RiTwitterXFill />
              </Link>
              <Link href="/" className="bg-[#FFFFFF0F] text-white rounded p-3 text-[21px]">
                <RiInstagramLine />
              </Link>
              <Link href="/" className="bg-[#FFFFFF0F] text-white rounded p-3 text-[21px]">
                <RiLinkedinBoxFill />
              </Link>
            </div>
            <p>Copyright © {year}. PocketMoni All rights reserved.</p>
          </div>
        </section>
        <section className="pb-6">
          <h3 className="font-bold text-[21px]">About Us</h3>
          <div className="flex flex-col gap-5 md:mt-4 mt-2 font-light text-[14px]">
            <Link href="">Our Story</Link>
            <Link href="">Career</Link>
            <Link href="">Press</Link>
          </div>
        </section>
        <section className="pb-6">
          <h3 className="font-bold text-[21px]">Support</h3>
          <div className="flex flex-col gap-5 mt-4 font-light text-[14px]">
            <Link href="">FAQ</Link>
            <Link href="">Contact Us</Link>
            <Link href="">My PocketMoni</Link>
          </div>
        </section>
        <section className="pb-6">
          <h3 className="font-bold text-[21px]">Legal</h3>
          <div className="flex flex-col gap-5 mt-2 md:mt-4 font-light text-[14px]">
            <Link href="">Privacy Policy</Link>
            <Link href="">Terms and Condition</Link>
          </div>
        </section>
        <section className="">
          <h3 className="font-bold mb-4 text-[21px]">Address</h3>
          <div className="font-light text-[14px]">
            <p>4th & 5th Floor Fortune</p>
            <p>Towers, 27/29 Adeyemo</p>
            <p>Alakija Street, Victoria Island</p>
            <p>Lagos, Nigeria</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Footer;

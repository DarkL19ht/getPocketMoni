import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RiInstagramLine, RiTiktokLine, RiTwitterXFill } from 'react-icons/ri';
import { ImFacebook } from 'react-icons/im';

const Footer = () => {
  return (
    <div className="w-full -mt-96 md:h-96 bg-navy-600 text-white text-center">
      <div className="md:flex md:justify-between p-20 font-switzer relative">
        <div className="absolute inset-0 z-0 -mt-10">
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
            className="mb-4"
            width={200}
            height={10}
            priority
          />
          <div className="font-light">
            <p>Want to connect with us? </p>
            <p>Find us on social media.</p>
            <div className="flex justify-evenly mt-6">
              <Link href="/">
                <ImFacebook />
              </Link>
              <Link href="/">
                <RiTwitterXFill />
              </Link>
              <Link href="/">
                <RiInstagramLine />
              </Link>
              <Link href="/">
                <RiTiktokLine />
              </Link>
            </div>
          </div>
        </section>
        <section className="pb-6">
          <h3 className="font-bold text-2xl">Products</h3>
          <div className="flex flex-col gap-5 md:mt-4 mt-2 font-light">
            <Link href="">Discover</Link>
            <Link href="">Safety</Link>
            <Link href="">Support</Link>
            <Link href="">Careers</Link>
          </div>
        </section>
        <section className="pb-6">
          <h3 className="font-bold text-2xl">Resources</h3>
          <div className="flex flex-col gap-5 mt-4  font-light">
            <Link href="">Team</Link>
            <Link href="">Contact Us</Link>
            <Link href="">Our Story</Link>
            <Link href="">Media Kit</Link>
          </div>
        </section>
        <section className="pb-6">
          <h3 className="font-bold text-2xl">Company</h3>
          <div className="flex flex-col gap-5 mt-2 md:mt-4 font-light">
            <Link href="">Team</Link>
            <Link href="">Contact Us</Link>
            <Link href="">Our Story</Link>
            <Link href="">Media Kit</Link>
          </div>
        </section>
        <section className="">
          <h3 className="font-bold mb-4 text-2xl">Company</h3>
          <div className="font-light">
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

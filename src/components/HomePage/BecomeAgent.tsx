import React from 'react';
import Image from 'next/image';
import AgentGroup from '../../assets/images/agent-group.png';
import ButtonWithIcon from '../ButtonWithIcon';
import { BsFillBellFill } from 'react-icons/bs';
import Link from 'next/link';

const BecomeAgent = () => {
  return (
    <div className="container mx-auto md:flex md:justify-between md:mt-24 w-full md:mb-40 md:pl-20">
      <section className="hidden md:block md:w-1/2 ">
        <Image src={AgentGroup} alt="Group Agent Picture" />
      </section>
      <section className="md:w-1/2 text-center md:text-left">
        <h3 className="md:text-6xl text-4xl leading-10 font-switzer font-normal">
          Become an <span className="text-navy-300">agent</span>
        </h3>
        <p className="md:mt-14 mt-8 font-light md:text-xl text-lg">
          PocketMoni enables wealth creation. We have created an eco-system which ensures a decent
          income for our agents to run profitable businesses.
        </p>
        <div className="flex gap-3 md:mt-10">
          <Image
            src="/Checkboxtick.svg"
            alt="Mobile"
            className="mt-4"
            width={30}
            height={10}
            priority
          />
          <p className="text-sm font-light mt-10">
            <span className="font-bold"> Earn quick cash</span> PocketMoni empowers its agents to
            make extra income by profiling and activation on the POS scheme.
          </p>
        </div>
        <div className="flex gap-3">
          <Image
            src="/Checkboxtick.svg"
            alt="Mobile"
            className="mt-4"
            width={30}
            height={10}
            priority
          />
          <p className="text-sm font-light mt-10">
            <span className="font-bold"> Agent Support</span> Guaranteed 24/7 support for all agent
            inquiries and dispute resolutions.
          </p>
        </div>
        <div className="flex gap-3 mb-10">
          <Image
            src="/Checkboxtick.svg"
            alt="Mobile"
            className="mt-4"
            width={30}
            height={10}
            priority
          />
          <p className="text-sm font-light mt-10">
            <span className="font-bold">Flexible Pricing</span> We offer competitive rates and
            provide exclusive pricing to super agent networks.
          </p>
        </div>
        <div className="flex items-center justify-center md:justify-start">
          <Link href="/">
            <ButtonWithIcon
              className="bg-navy-400 text-white w-40"
              hoverEffect="hover:bg-red-300"
              icon={<BsFillBellFill />}
            >
              Join Waitlist
            </ButtonWithIcon>
          </Link>
        </div>
      </section>
      <section className="md:hidden md:w-1/2 mt-10">
        <Image src={AgentGroup} alt="Group Agent Picture" />
      </section>
    </div>
  );
};

export default BecomeAgent;

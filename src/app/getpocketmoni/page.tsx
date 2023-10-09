import React from 'react';
import GetPKMHero from '../components/screens/GetPocketMoni/GetPKMHero';
import HowToRegister from '../components/screens/GetPocketMoni/HowToRegister';
import FAQ from '@/components/HomePage/FAQ';
import JoinWaitlistFoot from '@/components/HomePage/JoinWaitlistFoot';
import Footer from '@/components/Footer';

const GetPocketMoni = () => {
  return (
    <div>
      <GetPKMHero />
      <HowToRegister />
      <FAQ />
      <JoinWaitlistFoot />
      <Footer />
    </div>
  );
};

export default GetPocketMoni;

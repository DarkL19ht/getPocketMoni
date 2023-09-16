import React from 'react';

const HeroSection = () => {
  return (
    <div className="container mx-auto text-center h-48 pt-9">
      <button className="font-itim coming_soon">Coming Soon!</button>
      <p className="font-switzer font-light text-5xl md:text-8xl -mt-6">
        {' '}
        Send Money and Pay Bills Easily
      </p>
      <p className="text-sm font-light leading-9 text-center md:text-lg">
        Pocketmoni provides you access to send and receive money instantly, pay bills conveniently
        wherever you are.
      </p>
    </div>
  );
};

export default HeroSection;

import React from 'react';

const TransAgent = () => {
  return (
    <div className="container bg-gray md:bg-transparent rounded-lg mx-auto md:-mt-24 mb-14 md:mb-0 ">
      <div className="flex justify-evenly text-center">
        <section>
          <h3 className="font-bold text-3xl md:text-6xl font-switzer">N40B+</h3>
          <p className="font-light text-sm md:text-lg md:leading-10">Transactions processed</p>
        </section>
        <section>
          <h3 className="font-bold text-3xl md:text-6xl font-switzer">99.6%</h3>
          <p className="font-light text-sm md:text-lg md:leading-10">Uptime service</p>
        </section>
        <section>
          <h3 className="font-bold text-3xl md:text-6xl font-switzer">6796</h3>
          <p className="font-light text-sm md:text-lg md:leading-10">Agents Nationwide</p>
        </section>
      </div>
    </div>
  );
};

export default TransAgent;

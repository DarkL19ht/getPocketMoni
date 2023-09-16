import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-cover">
      <Image
        src="/page_not_found.svg"
        alt="Vercel Logo"
        className="dark:invert"
        width={500}
        height={100}
        priority
      />
      {/* <h1 className="text-4xl font-bold text-gray-800 mb-4">Page Not Found</h1> */}
      <p className="text-gray-600 mb-8 pt-10 font-switzer font-light leading-loose text-4xl">
        The page you are looking for does not exist.
      </p>
      <Link href="/">
        <button className="text-white text-lg bg-navy-600 p-5 rounded font-switzer font-light">
          Go back to home
        </button>
      </Link>
    </div>
  );
};

export default NotFoundPage;

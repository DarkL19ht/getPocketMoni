// components/Navbar.js
'use client'; // This is a client component
import Image from 'next/image';
// components/Navbar.js
import { useState } from 'react';
import Link from 'next/link';
import Button from './Button';
import ButtonWithIcon from './ButtonWithIcon';
import privacySections from '@/utils/PrivacyPolicyData';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen1, setDropdownOpen1] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleDropdown1 = () => {
    setDropdownOpen1(!dropdownOpen1);
  };

  let _id = privacySections[0].title.replace(/ /g, '');

  return (
    <nav className="bg-white p-4" id={_id}>
      <div className="container mx-auto flex justify-between items-center relative">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image src="/logo.svg" alt="PocketMoni Logo" width={120} height={50} priority />
          </Link>
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-4 pl-6">
            {/* ... Menu items ... */}
            <li className="relative group">
              <a href="#" className="flex" onClick={toggleDropdown}>
                About
                <span className="ml-2 transform transition-transform">
                  {dropdownOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 inline-block transform rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-6 w-8 inline-block transform"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </span>
              </a>
              {/* Dropdown Menu */}
              <ul
                className={`absolute left-0 mt-2 w-[150px] pl-6 space-y-2 bg-white text-black shadow-lg  ${
                  dropdownOpen ? 'block' : 'hidden'
                }`}
              >
                <li className="">
                  <Link href="/" className="block py-2 ">
                    Our Story
                  </Link>
                </li>
                <li>
                  <a href="#" className="block py-2">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="block py-2">
                    Agent
                  </a>
                </li>
                <li>
                  <a href="#" className="block pb-5 pt-1">
                    Press
                  </a>
                </li>
              </ul>
            </li>
            <li className="relative group pl-6">
              <a href="#" className="flex" onClick={toggleDropdown1}>
                Support
                <span className="ml-2 transform transition-transform">
                  {dropdownOpen1 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 inline-block transform rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-6 w-8 inline-block transform"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-6 w-8 inline-block transform"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </svg>
                  )}
                </span>
              </a>
              {/* Dropdown Menu */}
              <ul
                className={`absolute left-0 mt-2 w-[150px] pl-6 pt-3 pb-3 space-y-2 bg-white text-black shadow-lg ${
                  dropdownOpen1 ? 'block' : 'hidden'
                }`}
              >
                <li>
                  <Link href="/privacypolicy" className="block py-2 ">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/" className="block py-2 ">
                    Terms
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {/* Mobile Menu Button (Hamburger) */}
        <div className="flex justify-end items-end md:ml-0 ml-56">
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-black focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="hidden md:block space-x-4">
          <div className="flex gap-3">
            <Link href="/">
              <ButtonWithIcon
                className="bg-navy-400 text-white w-40"
                hoverEffect="hover:border-black hover:border-b-4 hover:border-r-4"
              >
                Get PocketMoni
              </ButtonWithIcon>
            </Link>
            <ButtonWithIcon
              className="bg-navy-100 w-40 text-navy-200"
              hoverEffect="hover:border-black hover:border-b-4 hover:border-r-4"
            >
              Become an Agent
            </ButtonWithIcon>
          </div>

          {/* <Button label="Get PocketMoni" style="bg-navy-600" text="text-white" width="w-40" />
          <Button label=" Become an Agent" style="bg-navy-100" text="text-navy-200" width="w-40" /> */}
        </div>
        {mobileMenuOpen && (
          <div className="">
            <div className="space-x-4 absolute top-10 left-0 pt-8 pb-8 pr-2 pl-2 bg-white shadow-2xl">
              <Button label="Get PocketMoni" style="bg-navy-400" text="text-white" width="w-40" />
              <Button
                label=" Become an Agent"
                style="bg-navy-100"
                text="text-navy-200"
                width="w-40"
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

// components/Navbar.js
// import React, { useState } from 'react';

// const Navbar = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!mobileMenuOpen);
//   };

//   return (
//     <nav className="bg-blue-500 p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <a href="#" className="text-white text-2xl font-semibold">
//           My Website
//         </a>
//         <div className="md:hidden">
//           <button
//             onClick={toggleMobileMenu}
//             className="text-white focus:outline-none"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               ></path>
//             </svg>
//           </button>
//         </div>

//         <ul className="hidden md:flex space-x-4">
//           <li>
//             <a href="#" className="text-white">
//               Home
//             </a>
//           </li>
//           <li>
//             <a href="#" className="text-white">
//               About
//             </a>
//           </li>
//           <li className="relative group">
//             <a href="#" className="text-white group-hover:text-yellow-300">
//               Services
//             </a>
//             <ul className="absolute left-0 hidden mt-2 space-y-2 bg-blue-500 text-white group-hover:block">
//               <li>
//                 <a href="#" className="block px-4 py-2">
//                   Service 1
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="block px-4 py-2">
//                   Service 2
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="block px-4 py-2">
//                   Service 3
//                 </a>
//               </li>
//             </ul>
//           </li>
//           <li>
//             <a href="#" className="text-white">
//               Contact
//             </a>
//           </li>
//         </ul>
//       </div>

//       <div
//         className={`${
//           mobileMenuOpen ? 'block' : 'hidden'
//         } md:hidden`}
//       >
//         <ul className="mt-2 space-y-2 bg-blue-500 text-white">
//           <li>
//             <a href="#" className="block px-4 py-2">
//               Home
//             </a>
//           </li>
//           <li>
//             <a href="#" className="block px-4 py-2">
//               About
//             </a>
//           </li>
//           <li className="relative group">
//             <a
//               href="#"
//               className="block px-4 py-2 group-hover:text-yellow-300"
//             >
//               Services
//             </a>
//             <ul className="absolute left-0 hidden space-y-2 bg-blue-500 text-white group-hover:block">
//               <li>
//                 <a href="#" className="block px-4 py-2">
//                   Service 1
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="block px-4 py-2">
//                   Service 2
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="block px-4 py-2">
//                   Service 3
//                 </a>
//               </li>
//             </ul>
//           </li>
//           <li>
//             <a href="#" className="block px-4 py-2">
//               Contact
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

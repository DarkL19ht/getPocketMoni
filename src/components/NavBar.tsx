// components/Navbar.js
'use client'; // This is a client component
import Image from 'next/image';
// components/Navbar.js
import { useState } from 'react';
import Button from './Button';

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

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex justify-between items-center">
          <Image
            src="/logo.svg"
            alt="PocketMoni Logo"
            className="dark:invert"
            width={200}
            height={50}
            priority
          />
          {/* Mobile Menu Button (Hamburger) */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-black focus:outline-none">
              {/* ... Hamburger icon code ... */}
            </button>
          </div>
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-4 pl-6">
            {/* ... Menu items ... */}
            <li className="relative group">
              <a
                href="#"
                className={`text-black ${dropdownOpen ? 'text-yellow-300' : ''}`}
                onClick={toggleDropdown}
              >
                About Us
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
                      className="h-6 w-8 inline-block transform"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.99977 8.40031C5.64977 8.40031 5.29977 8.26531 5.03477 8.00031L1.77477 4.74031C1.62977 4.59531 1.62977 4.35531 1.77477 4.21031C1.91977 4.06531 2.15977 4.06531 2.30477 4.21031L5.56477 7.47031C5.80477 7.71031 6.19477 7.71031 6.43477 7.47031L9.69477 4.21031C9.83977 4.06531 10.0798 4.06531 10.2248 4.21031C10.3698 4.35531 10.3698 4.59531 10.2248 4.74031L6.96477 8.00031C6.69977 8.26531 6.34977 8.40031 5.99977 8.40031Z"
                        fill="#292D32"
                      />
                    </svg>
                  )}
                </span>
              </a>
              {/* Dropdown Menu */}
              <ul
                className={`absolute left-0 mt-2 pr-20 pl-6 space-y-2 bg-blue-500 text-black shadow-lg  ${
                  dropdownOpen ? 'block' : 'hidden'
                }`}
              >
                <li>
                  <a href="#" className="block py-2 w-10">
                    Our Story
                  </a>
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
                  <a href="#" className="block py-2">
                    Press
                  </a>
                </li>
              </ul>
            </li>
            <li className="relative group pl-6">
              <a
                href="#"
                className={`text-black ${dropdownOpen ? 'text-yellow-300' : ''}`}
                onClick={toggleDropdown1}
              >
                Suport
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
                      <path
                        d="M5.99977 8.40031C5.64977 8.40031 5.29977 8.26531 5.03477 8.00031L1.77477 4.74031C1.62977 4.59531 1.62977 4.35531 1.77477 4.21031C1.91977 4.06531 2.15977 4.06531 2.30477 4.21031L5.56477 7.47031C5.80477 7.71031 6.19477 7.71031 6.43477 7.47031L9.69477 4.21031C9.83977 4.06531 10.0798 4.06531 10.2248 4.21031C10.3698 4.35531 10.3698 4.59531 10.2248 4.74031L6.96477 8.00031C6.69977 8.26531 6.34977 8.40031 5.99977 8.40031Z"
                        fill="#292D32"
                      />
                    </svg>
                  )}
                </span>
              </a>
              {/* Dropdown Menu */}
              <ul
                className={`absolute left-0 mt-2 space-y-2 bg-blue-500 text-black shadow-lg ${
                  dropdownOpen1 ? 'block' : 'hidden'
                }`}
              >
                <li>
                  <a href="#" className="block px-4 py-2">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2">
                    Home
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="flex gap-3">
          <Button label="Get PocketMoni" style="bg-navy-600" text="text-white" />
          <Button label=" Become an Agent" style="bg-navy-100" text="text-navy-200" />
        </div>
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

// import React, { useEffect, useRef } from 'react';

// const CardContainer: React.FC = ({ children }) => {
//   const containerRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const options = {
//       root: null,
//       rootMargin: '0px',
//       threshold: 1,
//     };

//     const callback: IntersectionObserverCallback = (entries, observer) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('in-view');
//         } else {
//           entry.target.classList.remove('in-view');
//         }
//       });
//     };

//     const observer = new IntersectionObserver(callback, options);

//     if (containerRef.current) {
//       observer.observe(containerRef.current);
//     }

//     return () => {
//       if (containerRef.current) {
//         observer.unobserve(containerRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div ref={containerRef} className="">
//       <div className="">{children}</div>
//     </div>
//   );
// };

// export default CardContainer;

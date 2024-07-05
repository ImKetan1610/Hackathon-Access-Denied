// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Nav = ({ browse }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav
//       className={`absolute flex justify-between w-screen m-0 px-2 pt-2 m-0 bg-gradient-to-b ${
//         browse ? "from-white" : "from-black"
//       } z-10`}
//     >
//       {browse ? (
//         <img
//           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPJLxhgeByiMgFkOUYRQGUtA9LO2dB_x3Hwg&s"
//           alt="logo.jpg"
//           className="rounded-full w-10 pb-3 shadow-white text-left"
//         />
//       ) : (
//         <>
//           <div className="container mx-auto flex justify-between items-center">
//             <img
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPJLxhgeByiMgFkOUYRQGUtA9LO2dB_x3Hwg&s"
//               alt="logo.jpg"
//               className="rounded-full w-10 pb-3 shadow-white text-left"
//             />
//             <div className="md:hidden">
//               <button onClick={toggleMenu} className="text-white">
//                 <svg
//                   className="w-6 h-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d={!isOpen && "M4 6h16M4 12h16m-7 6h7"}
//                   ></path>
//                 </svg>
//               </button>
//             </div>
//             <div
//               className={`${
//                 isOpen ? "block" : "hidden"
//               } md:flex md:items-center w-full md:w-auto`}
//             >
//               {isOpen && (
//                 <div className="absolute top-0 right-0 p-4">
//                   <button onClick={toggleMenu} className="text-white">
//                     <svg
//                       className="w-6 h-6"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M6 18L18 6M6 6l12 12"
//                       ></path>
//                     </svg>
//                   </button>
//                 </div>
//               )}
//               <ul className="flex flex-col md:flex-row md:space-x-6 text-white mt-8 md:mt-0">
//                 <li>
//                   <Link
//                     to="/home"
//                     className="block py-2 px-4 hover:bg-gray-700 rounded"
//                   >
//                     Home
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/about"
//                     className="block py-2 px-4 hover:bg-gray-700 rounded"
//                   >
//                     About
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/chat"
//                     className="block py-2 px-4 hover:bg-gray-700 rounded"
//                   >
//                     Chat
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/contact"
//                     className="block py-2 px-4 hover:bg-gray-700 rounded"
//                   >
//                     Contact
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </>
//       )}
//     </nav>
//   );
// };

// export default Nav;
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = ({ browse }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`absolute flex justify-between w-screen m-0 px-2 pt-2 m-0 bg-gradient-to-b ${
        browse ? "" : "from-blue-900"
      } to-blue-500 z-10`}
    >
      {browse ? (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPJLxhgeByiMgFkOUYRQGUtA9LO2dB_x3Hwg&s"
          alt="logo.jpg"
          className="rounded-full w-10 pb-3 shadow-white text-left"
        />
      ) : (
        <>
          <div className="container mx-auto flex justify-between items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPJLxhgeByiMgFkOUYRQGUtA9LO2dB_x3Hwg&s"
              alt="logo.jpg"
              className="rounded-full w-10 pb-3 shadow-white text-left"
            />
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-white">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={!isOpen && "M4 6h16M4 12h16m-7 6h7"}
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className={`${
                isOpen ? "block" : "hidden"
              } md:flex md:items-center w-full md:w-auto`}
            >
              {isOpen && (
                <div className="absolute top-0 right-0 p-4">
                  <button onClick={toggleMenu} className="text-white">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </button>
                </div>
              )}
              <ul className="flex flex-col md:flex-row md:space-x-6 text-white mt-8 md:mt-0">
                <li>
                  <Link
                    to="/home"
                    className="block py-2 px-4 hover:bg-blue-700 rounded"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="block py-2 px-4 hover:bg-blue-700 rounded"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/chat"
                    className="block py-2 px-4 hover:bg-blue-700 rounded"
                  >
                    Chat
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="block py-2 px-4 hover:bg-blue-700 rounded"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Nav;

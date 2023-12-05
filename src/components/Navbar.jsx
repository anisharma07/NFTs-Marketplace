import { useState } from "react";
// import Parts from "./Parts";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import imgLogo from '../../public/logo.png';

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src="https://res.cloudinary.com/dvvgz11nl/image/upload/v1701807848/memeplace_logo_vfcss5.png" alt="memeplace" className="w-[124px]" />
      {/* <Parts /> */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-[500] cursor-pointer text-[16px] text-white hover:text-dimWhite mr-10`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        <li className="text-white bg-purple-700 hover:bg-purple-900 py-2 px-3 rounded-[20px] font-poppins font-medium cursor-pointer text-[16px]">
          <a href="#">Connect Wallet</a>
        </li>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] mb-4 text-white text-dimWhite`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <li className="text-white bg-purple-700 hover:bg-purple-900 py-1 px-2 rounded-[25px] font-poppins font-medium cursor-pointer text-[16px]">
              <a href="#">Connect Wallet</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

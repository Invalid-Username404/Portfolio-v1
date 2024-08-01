import { useState } from "react";
import { Link } from "react-router-dom";

import { navLinks } from "./Constants";

import "/assets/Menu.svg";
import "/assets/Close.svg";

export const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`styles.paddingX w-full flex items-center py-5
      fixed top-0 z-50 bg-black 
      `}
    >
      <div
        className="w-full flex justify-between items-center
      max-w-7xl mx-auto
       "
      >
        <Link
          to="/"
          className="flex mx-2 items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src="/assets/Logo.svg"
            alt="logo"
            className="w-9 rounded-full
            bg-cyan-700 h-9 object-contain "
          />
          <p className=" hover:text-purple-500 text-gray-400 text-[20px] font-medium   cursor-pointer ">
            Mohamed Portfolio
          </p>
        </Link>
        <ul className="list-none mx-5 hidden sm:flex flex-row gap-10 ">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-purple-500" : "text-gray-400"
              } hover:text-purple-500 text-[20px] font-medium cursor-pointer `}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? "/assets/Close.svg" : "/assets/Menu.svg"}
            alt="menu"
            className="w-[27px] rounded-lg bg-yellow-400 h-[27px] object-contain cursor-pointer "
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute
        top-20 right-0 mx-3 my-2 min-w-[140px] z-50 rounded-xl
        `}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4 ">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-purple-500" : "text-gray-400"
                  } font-medium cursor-pointer text-[12px] `}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

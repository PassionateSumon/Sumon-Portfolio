import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [mobNavBar, setMobNavBar] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "projects",
    },
    {
      id: 4,
      link: "skills",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="flex justify-between items-center p-4 w-full h-20 text-white bg-black fixed ">
      <div className="text-5xl font-signature ml-2 cursor-pointer hover:text-orange-600">
        Sumon Mitra
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 text-gray-500 font-medium capitalize 
            cursor-pointer hover:scale-110 duration-200"
          >
            <Link to={link} smooth={true} duration={500} offset={-70}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setMobNavBar(!mobNavBar)}
        className="pr-4 cursor-pointer text-gray-500 z-10 md:hidden"
      >
        {!mobNavBar ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>

      {mobNavBar && (
        <ul
          className="flex flex-col justify-center items-center
      w-full h-screen absolute top-0 left-0 bg-gradient-to-b from-black to-cyan-950"
        >
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 py-7 font-medium cursor-pointer text-4xl capitalize text-gray-500"
            >
              <Link
                onClick={() => setMobNavBar(!mobNavBar)}
                to={link}
                smooth={true}
                duration={500}
                offset={-70}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;

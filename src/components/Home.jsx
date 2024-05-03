import React from "react";
import mypic from "../assets/MyPic.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-cyan-900"
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col
       justify-center items-center h-full px-4 md:flex-row"
      >
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white cursor-pointer">
            I am Sumon Mitra
          </h2>
          <p className="text-gray-500 py-4 max-w-md cursor-pointer">
            I am a student, currently pursuing Bachalor's degree in Computer
            Science and Engineering, have interest to learning technologies and
            I like to do DSA and Development as well.
          </p>

          <div>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              className="group text-white capitalize font-semibold w-fit flex items-center px-5 py-3 my-3 rounded-lg bg-gradient-to-r from-blue-900 via-sky-700 to bg-sky-500 cursor-pointer"
            >
              projects
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardDoubleArrowRight size={20} />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={mypic}
            alt="sumon_mitra"
            className="px-3 rounded-3xl mx-auto md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import cpp from "../assets/cpp.png";
import java from "../assets/java.png";
import python from "../assets/python.png";
import github from "../assets/github.png";

const Skills = () => {
  const techSkills = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React JS",
      style: "shadow-sky-300",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind CSS",
      style: "shadow-cyan-500",
    },
    {
      id: 6,
      src: cpp,
      title: "CPP",
      style: "shadow-blue-800",
      
    },
    {
      id: 7,
      src: java,
      title: "Java",
      style: "shadow-orange-500",
    },
    {
      id: 8,
      src: python,
      title: "PYTHON",
      style: "shadow-yellow-500",
    },
    {
      id: 9,
      src: github,
      title: "GITHUB",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="skills"
      className="w-full h-screen bg-gradient-to-b from-cyan-900 to-black"
    >
      <div className="max-w-screen-lg h-full w-full p-4 mx-auto text-white flex flex-col justify-center">
        <div className="pb-8">
          <p className="capitalize font-bold text-4xl border-b-4 border-gray-500 inline">
            skills
          </p>
        </div>

        <div
          className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 px-12 py-6 text-center sm:px-0 cursor-pointer"
        >
          {techSkills.map(({id, src, title, style}) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 rounded-lg py-2 ${style}`}>
              <img className="w-20 mx-auto" src={src} alt="tech_stack" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

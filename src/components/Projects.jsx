import React from "react";
import whiteboard from "../assets/projects/whiteboard.png";
import playBeatz from "../assets/projects/playBeatz.png";
import storeHai from "../assets/projects/storeHai.png";
import popNowShow from "../assets/projects/popNowShow.png";

const Projects = () => {
  const projectList = [
    {
      id: 1,
      src: whiteboard,
      link_live: "https://letsdraw-five.vercel.app/",
      link_code: "https://github.com/PassionateSumon/letsDraw",
    },
    {
      id: 2,
      src: playBeatz,
      link_live: "https://git21221.github.io/PlayBeatz/",
      link_code: "https://github.com/Git21221/PlayBeatz",
    },
    {
      id: 3,
      src: storeHai,
      link_live: "https://e-commerce-kappa-mauve-96.vercel.app/",
      link_code: "https://github.com/PassionateSumon/E-Commerce_Learing",
    },
    {
      id: 4,
      src: popNowShow,
      link_live: "https://passionatesumon.github.io/PopNowShow/",
      link_code: "https://github.com/PassionateSumon/PopNowShow",
    },
  ];

  const handleClickLive = (id) => {
    const project = projectList.find((project) => project.id === id);
    if (project && project.link_live) {
      window.open(project.link_live, "_blank");
    }
  };

  const handleClickCode = (id) => {
    const project = projectList.find((project) => project.id === id);
    if (project && project.link_code) {
      window.open(project.link_code, "_blank");
    }
  };

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-cyan-900
        w-full text-white  md:h-screen"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center
        w-full h-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-b-gray-500 inline">
            Projects
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projectList.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-500 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md hover:scale-105 duration-200 cursor-pointer"
              />
              <div className="flex justify-around items-center">
                <button
                  onClick={() => handleClickLive(id)}
                  className="w-1/2 px-6 py-2 m-3 duration-200 hover:scale-105 "
                >
                  Live
                </button>
                <button
                  onClick={() => handleClickCode(id)}
                  className="w-1/2 px-6 py-2 m-3 duration-200 hover:scale-105 "
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

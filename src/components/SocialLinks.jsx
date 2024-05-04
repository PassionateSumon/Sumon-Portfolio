import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { GrDocumentPdf } from "react-icons/gr";

const SocialLinks = () => {
  const Links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/sumon-mitra-168891249/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/PassionateSumon",
    },
    {
      id: 3,
      child: (
        <>
          Mail
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:sumonmitra.21@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          LeetCode
          <SiLeetcode size={30} />
        </>
      ),
      href: "https://leetcode.com/u/i_am_sumon/",
    },
    {
      id: 5,
      child: (
        <>
          Resume
          <GrDocumentPdf size={30} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {Links.map(({ id, child, href, download, style }) => (
          <li key={id} className={`flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-5px] hover:rounded-md duration-300 ${style}`}>
            <a
              href={href}
              className="w-full flex justify-between items-center text-black"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;

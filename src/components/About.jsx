import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-auto bg-gradient-to-b from-cyan-900 to-black text-white">
      <div className="max-w-screen-lg p-4 flex flex-col justify-center mx-auto w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-b-gray-500 inline">About</p>
        </div>

        <p className="text-xl mt-10">
          I am a learner and also have interest to learn technologies. I love to do DSA and 
          Development both. I have solved 500+ DSA problems in LeetCode and other platforms.
          I am a 2* coder at CodeChef and in LeetCode contest, my highest rating is 1426. I've
          build projects like <b>Virtual Whiteboard, Web Music Platform</b> etc.  
        </p>
      </div>
    </div>
  );
};

export default About;

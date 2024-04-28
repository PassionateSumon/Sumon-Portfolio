import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-gradient-to-b from-black via-slate-900 to-cyan-800 text-white">
      <div className="flex flex-col justify-center h-full p-4 mx-auto max-w-screen-lg">
        <div className="pb-8">
          <p className="capitalize text-4xl border-b-4 border-gray-500 inline">
            contact
          </p>
          <p className="py-6 font-semibold">
            Fill the below form to connect with me
          </p>
        </div>

        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/pbqgvvnb" method="POST" className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white cursor-pointer focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="p-2 my-4 bg-transparent border-2 rounded-md text-white cursor-pointer focus:outline-none"
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Enter your message"
              className="p-2 border-2 bg-transparent text-white cursor-pointer rounded-md focus: outline-none"
            >
            </textarea>

            <button className="text-white bg-gradient-to-r from-slate-900 via-sky-700 to bg-sky-400 cursor-pointer px-6 py-3 mt-5 mx-auto flex items-center hover:scale-105 duration-300 font-bold rounded-md">
              Let's Connect
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

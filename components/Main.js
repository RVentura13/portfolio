import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1024px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let's build something legendary together
          </p>
          <h1 className="py-2 text-gray-700">
            Hi, I'm <span className="text-[#313fef]">Rony Ventura</span>
          </h1>
          <h1 className="py-1 text-gray-700">Web Developer</h1>
          <p className=" py-4 text-gray-600 max-w-[70%] m-auto">
            I'm a web developer specializing in building (and
            ocasionally designing) exceptional digital experiences. Currently,
            I'm focused on building responsive front-end web applications while
            learning back-end technologies.
          </p>
          <p className="uppercase p-8 text-gray-700 tracking-wider">
                  Contact me
                </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-150 text-3xl text-[#313fef]">
              <a
                href="https://www.linkedin.com/in/rony-ventura-0034b5211/"
                target="_blank"
                title="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>

            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-150 text-3xl text-[#313fef]">
              <a
                href="https://github.com/RVentura13"
                target="_blank"
                title="GitHub"
              >
                <FaGithub />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-150 text-3xl text-[#313fef]">
              <a
                href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#105;&#110;&#102;&#111;&#64;&#114;&#118;&#101;&#110;&#116;&#117;&#114;&#97;&#46;&#100;&#101;&#118;"
                target="_blank"
                title="Send mail"
              >
                <AiOutlineMail />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-150 text-3xl text-[#313fef]">
              <a
                href="assets/documents/cv.pdf"
                download="CV Rony Ventura"
                title="Download CV"
              >
                <BsFillPersonLinesFill />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

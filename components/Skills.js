import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-[#5651e5] text-xl tracking-widest uppercase">
          Skills
        </p>
        <h2 className="py-4 text-gray-700">What I Can Do</h2>
        <div className="grid grid-cols-1 mx-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-1 gap-6 justify-center items-center">
              <div className="flex flex-col justify-center items-center m-auto">
                <Image
                  src="/assets/skills/html.png"
                  alt="html"
                  width="64"
                  height="64"
                />
                <h3 className="my-4 text-gray-600">HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-1 gap-6 justify-center items-center">
              <div className="flex flex-col justify-center items-center m-auto">
                <Image
                  src="/assets/skills/css.png"
                  alt="html"
                  width="64"
                  height="64"
                />
                <h3 className="my-4 text-gray-600">CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-1 gap-6 justify-center items-center">
              <div className="flex flex-col justify-center items-center m-auto">
                <Image
                  src="/assets/skills/javascript.png"
                  alt="html"
                  width="64"
                  height="64"
                />
                <h3 className="my-4 text-gray-600">JavaScript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-1 gap-6 justify-center items-center">
              <div className="flex flex-col justify-center items-center m-auto">
                <Image
                  src="/assets/skills/node.png"
                  alt="html"
                  width="64"
                  height="64"
                />
                <h3 className="my-4 text-gray-600">Nodejs</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-1 gap-6 justify-center items-center">
              <div className="flex flex-col justify-center items-center m-auto">
                <Image
                  src="/assets/skills/react.png"
                  alt="html"
                  width="64"
                  height="64"
                />
                <h3 className="my-4 text-gray-600">React</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-1 gap-6 justify-center items-center">
              <div className="flex flex-col justify-center items-center m-auto">
                <Image
                  src="/assets/skills/nextjs.png"
                  alt="html"
                  width="64"
                  height="64"
                />
                <h3 className="my-4 text-gray-600">Nextjs</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-1 gap-6 justify-center items-center">
              <div className="flex flex-col justify-center items-center m-auto">
                <Image
                  src="/assets/skills/tailwind.png"
                  alt="html"
                  width="64"
                  height="64"
                />
                <h3 className="my-4 text-gray-600">TailwindCSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-1 gap-6 justify-center items-center">
              <div className="flex flex-col justify-center items-center m-auto">
                <Image
                  src="/assets/skills/github1.png"
                  alt="html"
                  width="64"
                  height="64"
                />
                <h3 className="my-4 text-gray-600">Github</h3>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Skills;

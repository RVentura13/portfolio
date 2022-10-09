import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="pt-10 text-[#5651e5] text-xl tracking-widest uppercase">
          Skills
        </p>
        <h2 className="py-4 text-gray-700">What I Can Do</h2>
        <div className="pt-10 grid grid-cols-2 mx-6 md:md-6 lg:mx-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="p-10 md:p-12 grid justify-center content-center shadow-md shadow-[#e44e23] rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid gap-4">
              <Image
                src="/assets/skills/html.png"
                alt="html"
                width="64"
                height="64"
              />
              <h3 className="text-center text-gray-600">HTML</h3>
            </div>
          </div>
          <div className="p-10 md:p-12 grid justify-center content-center shadow-md shadow-[#0176bc] rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid gap-4">
              <Image
                src="/assets/skills/css.png"
                alt="html"
                width="64"
                height="64"
              />
              <h3 className="text-center text-gray-600">CSS</h3>
            </div>
          </div>
          <div className="p-10 md:p-12 grid justify-center content-center shadow-md shadow-[#fed600] rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid gap-4">
              <Image
                src="/assets/skills/javascript.png"
                alt="html"
                width="64"
                height="64"
              />
              <h3 className="text-center text-gray-600">JavaScript</h3>
            </div>
          </div>

          <div className="p-10 md:p-12 grid justify-center content-center shadow-md shadow-[#8bc64b] rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid gap-4">
              <Image
                src="/assets/skills/node.png"
                alt="html"
                width="64"
                height="64"
              />
              <h3 className="text-center text-gray-600">Nodejs</h3>
            </div>
          </div>

          <div className="p-10 md:p-12 grid justify-center content-center shadow-md shadow-[#01d7fe] rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid gap-4">
              <Image
                src="/assets/skills/react.png"
                alt="html"
                width="64"
                height="64"
              />
              <h3 className="text-center text-gray-600">React</h3>
            </div>
          </div>
          <div className="p-10 md:p-12 grid justify-center content-center shadow-md shadow-[#000000] rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid gap-4">
              <Image
                src="/assets/skills/nextjs.png"
                alt="html"
                width="64"
                height="64"
              />
              <h3 className="text-center text-gray-600">Nextjs</h3>
            </div>
          </div>
          <div className="p-10 md:p-12 grid justify-center content-center shadow-md shadow-[#43a7b3] rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid gap-4">
              <Image
                src="/assets/skills/tailwind.png"
                alt="html"
                width="64"
                height="64"
              />
              <h3 className="text-center text-gray-600">TailwindCSS</h3>
            </div>
          </div>
          <div className="p-10 md:p-12 grid justify-center content-center shadow-md shadow-[#000000] rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid gap-4">
              <Image
                src="/assets/skills/github1.png"
                alt="html"
                width="64"
                height="64"
              />
              <h3 className="text-center text-gray-600">Github</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

import Image from "next/image";
import React from "react";
import imgHtml from "/public/assets/skills/html.png";
import imgCss from "/public/assets/skills/css.png";
import imgJavascript from "/public/assets/skills/javascript.png";
import imgNodejs from "/public/assets/skills/node.png";
import imgReact from "/public/assets/skills/react.png";
import imgNextjs from "/public/assets/skills/nextjs.png";
import imgTailwind from "/public/assets/skills/tailwind.png";
import imgGithub from "/public/assets/skills/github1.png";

const Skills = () => {
  return (
    <div id="skills" className="w-full md:h-screen p-4">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="pt-10 text-[#313fef] text-xl tracking-widest uppercase">
          Skills
        </p>
        <h2 className="py-4 text-gray-700">What I Can Do</h2>
        <div className="pt-2 grid grid-cols-2 mx-2 md:mx-6 lg:mx-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="p-10 md:p-12 grid justify-center content-center shadow-md shadow-[#e44e23] rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid gap-4">
              <Image
                src={imgHtml}
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
                src={imgCss}
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
                src={imgJavascript}
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
                src={imgNodejs}
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
                src={imgReact}
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
                src={imgNextjs}
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
                src={imgTailwind}
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
                src={imgGithub}
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

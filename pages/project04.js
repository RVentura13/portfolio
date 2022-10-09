import Image from "next/image";
import React from "react";
import imgProject04 from "../public/assets/projects/04.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const project04 = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={imgProject04}
          alt="Project"
        />
        <div className="text-white w-full top-[70%] left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] max-w-[1240px] p-2 absolute z-10">
          <h2>Project name</h2>
          <p className="">Language</p>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="uppercase text-[#5651e5] tracking-widest text-xl">
            Project
          </p>
          <h2 className="text-gray-700">Overview</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            itaque eaque eveniet beatae aliquid optio sint, quia hic animi
            consequatur blanditiis dolores iusto sequi tempora nam, corrupti
            quod magnam accusamus?
          </p>
          <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          <button className="px-8 py-2 mt-4">Code</button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center text-gray-700 font-bold pb-2">
              Technolgies
            </p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                TailwindCSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Next JS
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline text-gray-700 cursor-pointer"> Back </p>
        </Link>
      </div>
    </div>
  );
};

export default project04;

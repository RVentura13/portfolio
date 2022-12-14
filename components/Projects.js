import React from "react";
import ProjectItem from "./ProjectItem";
import Link from "next/link";
import proyect01Img from "../public/assets/projects/01.jpg";
import proyect02Img from "../public/assets/projects/02.jpg";
import proyect03Img from "../public/assets/projects/03.jpg";
import proyect04Img from "../public/assets/projects/04.jpg";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Projects = () => {
  return (
    <div id="projects" className="w-full md:h-screen p-4">
      <div className="max-w-[1240px] mx-auto py-16">
        <p className="uppercase pt-10 text-xl text-[#313fef] tracking-widest">
          Projects
        </p>
        <h2 className="py-4 text-gray-700">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Project 01"
            backgroundImg={proyect01Img}
            projectUrl="/project01"
          />
          <ProjectItem
            title="Project 02"
            backgroundImg={proyect02Img}
            projectUrl="/project02"
          />
          <ProjectItem
            title="Project 03"
            backgroundImg={proyect03Img}
            projectUrl="/project03"
          />

          <ProjectItem
            title="Project 04"
            backgroundImg={proyect04Img}
            projectUrl="/project04"
          />
        </div>
      </div>
      <div className="flex justify-center py-12">
        <Link href="/">
          <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-200 text-3xl text-[#313fef]">
            <HiOutlineChevronDoubleUp />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Projects;

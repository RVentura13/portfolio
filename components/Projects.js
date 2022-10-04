import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectItem from "./ProjectItem";
import proyect01Img from "/public/assets/projects/01.jpg";
import proyect02Img from "/public/assets/projects/02.jpg";
import proyect03Img from "/public/assets/projects/03.jpg";
import proyect04Img from "/public/assets/projects/04.jpg";

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className=" uppercase text-xl text-[#5651e5] tracking-widest">
          Projects
        </p>
        <h2 className="py-4 text-gray-700">What I've Built</h2>
        <div className="grid gird-cols-1 md:grid-cols-2 gap-8">
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
    </div>
  );
};

export default Projects;

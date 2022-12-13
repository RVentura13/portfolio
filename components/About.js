import React from "react";
import Image from "next/image";
import aboutImg from "/public/assets/about.jpg";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-4 flex items-center">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase tracking-widest text-[#313fef] text-xl">
            About
          </p>
          <h2 className="py-4 text-gray-700">Who I Am</h2>
          <p className="py-2 text-gray-600">
            // I am not your normal developer
          </p>
          <p className="py-2 text-gray-600">
            I specialize in building mobile responsive front-end UI applications
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript, and
            React, I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.
          </p>
          <p className="py-2 text-gray-600">
            I started web development in 2018 doing different university
            projects in different programming languages. I have developed
            different projects as a practice of my skills which I show the most
            important in this portfolio.
          </p>
          <p className="py-8 text-gray-600 underline cursor-pointer">
            <Link href="/#projects">Check out some of my latest projects.</Link>
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-lg shadow-gray-400 p-4 rounded-xl flex justify-center items-center hover:scale-105 ease-in duration-300">
          <Image className="rounded-xl" src={aboutImg} alt="About" />
        </div>
      </div>
    </div>
  );
};

export default About;

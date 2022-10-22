import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";

const Navbar = () => {
  const [nav, useNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === "/project01" ||
      router.asPath === "/project02" ||
      router.asPath === "/project03" ||
      router.asPath === "/project04"
    ) {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [router]);

  const handleNav = () => {
    useNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-24 shadow-xl z-[100]"
          : "fixed w-full h-24 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <div>
            <Image
              className="cursor-pointer"
              src="/assets/navLogo.svg"
              alt="Logo"
              width="70"
              height="70"
            />
          </div>
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:-translate-y-0.5 ease-in duration-150 hover:text-[#5651e5]">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:-translate-y-0.5 ease-in duration-150 hover:text-[#5651e5]">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:-translate-y-0.5 ease-in duration-150 hover:text-[#5651e5]">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:-translate-y-0.5 ease-in duration-150 hover:text-[#5651e5]">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:-translate-y-0.5 ease-in duration-150 hover:text-[#5651e5]">
                Contact
              </li>
            </Link>
          </ul>
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className="md:hidden"
          >
            <AiOutlineMenu size="25" />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? " md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full justify-between items-center">
              <Link href="/">
                <div>
                  <Image
                    onClick={handleNav}
                    className="cursor-pointer"
                    src="/assets/navLogo.svg"
                    alt="Logo"
                    width="70"
                    height="70"
                  />
                </div>
              </Link>
              <div
                onClick={handleNav}
                className="shadow-lg shadow-gray-400 p-3 cursor-pointer rounded-full hover:scale-110 ease-in duration-150"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="py-4 w-[85%] md:w-[90%]">
                Let's build something legendary together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={handleNav} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={handleNav} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={handleNav} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={handleNav} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={handleNav} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-32">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let's Connect
              </p>
              <div className="flex justify-between items-center my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-150 text-[#5651e5] text-3xl">
                  <a
                    href="https://www.linkedin.com/in/rony-ventura-0034b5211/"
                    target="_blank"
                    title="LinkedIn"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-150 text-[#5651e5] text-3xl">
                  <a
                    href="https://github.com/RVentura13"
                    target="_blank"
                    title="GitHub"
                  >
                    <FaGithub />
                  </a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-150 text-[#5651e5] text-3xl">
                  <a
                    href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#114;&#111;&#110;&#121;&#118;&#101;&#110;&#116;&#117;&#114;&#97;&#49;&#51;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;"
                    target="_blank"
                    title="Send mail"
                  >
                    <AiOutlineMail />
                  </a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-150 text-[#5651e5] text-3xl">
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
      </div>
    </div>
  );
};

export default Navbar;

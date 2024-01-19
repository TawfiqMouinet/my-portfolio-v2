import { MouseEvent, useEffect, useRef, useState } from "react";
import {
  FaReact,
  FaPython,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiNextui,
  SiTailwindcss,
  SiSupabase,
  SiFirebase,
  SiTypescript,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";

interface MouseCords {
  left: number;
  top: number;
}

export default function Home() {
  const [mousePos, setMousePos] = useState<MouseCords>({
    left: 0,
    top: 0,
  });
  const [windowHeight, setWindowHeight] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number>(985);
  useEffect(() => {
    if (windowWidth > 980) {
      const anchor: HTMLElement = document.getElementById("anchor")!;
      const rect: DOMRect = anchor?.getBoundingClientRect();
      const anchorX: number = rect.left + rect?.width / 2;
      const anchorY: number = rect.top + rect?.width / 2;
      const angleRad = angle(mousePos.left, mousePos.top, anchorX, anchorY);
      const eye1: HTMLElement = document.getElementById("eye1")!;
      const eye2: HTMLElement = document.getElementById("eye2")!;
      eye1.style.transform = `rotate(${90 + angleRad}rad)`;
      eye2.style.transform = `rotate(${90 + angleRad}rad)`;
    }
  }, [mousePos.left, mousePos.top, windowWidth]);

  function angle(cx: number, cy: number, ex: number, ey: number) {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    return rad;
  }

  function handleMouseMove(ev: MouseEvent) {
    setMousePos({ left: ev.pageX, top: ev.pageY });
  }

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    console.log("UseEffect Fired");
    function handleWindowResize() {
      setWindowHeight(window.innerHeight);
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowHeight, windowWidth]);

  if (windowWidth < 980) {
    return (
      <div className="flex flex-col items-center justify-center h-screen w-screen px-24">
        <p className="text-3xl md:text-5xl font-semibold text-white mb-4 text-center">
          For a better user experience, please visit the website in desktop view
        </p>
        <p className="text-xl font-base text-gray-400 text-center">
          Tawfiq Mouinet
        </p>
      </div>
    );
  }

  return (
    <main
      className="flex h-screen w-screen flex-col text-white bg-[#091010] scroll-smooth overflow-scroll"
      onMouseMove={(ev) => handleMouseMove(ev)}
    >
      <svg width="0" height="0">
        <linearGradient id="icons-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#9333ea" offset="0%" />
          <stop stopColor="#2564eb" offset="100%" />
        </linearGradient>
      </svg>
      <div
        className="bg-gradient-radial from-purple-800 to to-blue-800 w-10 h-10 rounded-full shadow-lg shadow-purple-800 opacity-50 cursor-none blur-xl z-10"
        style={{
          top: `${mousePos.top - 90}px`,
          left: `${mousePos.left - 90}px`,
          width: "180px",
          height: "180px",
          position: "absolute",
        }}
      ></div>
      <header className="top-0 bg-inherit border-white flex px-2 py-2 z-50 justify-between sticky h-24 w-screen ">
        <h1 className="text-3xl mt-2">Developed By Tawfiq</h1>
        <ul className="flex">
          <li>
            <a href="#about">
              <button className="bg-gradient-to-r bg-size-200 bg-pos-0 from-purple-900 via-purple-600 mr-8 to-blue-900 transition-all hover:bg-pos-100 hover:scale-105 hover:translate-y-1 duration-[350ms] px-3 py-2 rounded-md text-lg">
                About
              </button>
            </a>
            <a href="#projects">
              <button className="bg-gradient-to-r bg-size-200 bg-pos-0 from-purple-900 via-purple-600 mr-8 to-blue-900 transition-all hover:bg-pos-100 hover:scale-105 hover:translate-y-1 duration-[350ms] px-3 py-2 rounded-md text-lg">
                Projects
              </button>
            </a>
            <a href="#skills">
              <button className="bg-gradient-to-r bg-size-200 bg-pos-0 from-purple-900 via-purple-600 mr-8 to-blue-900 transition-all hover:bg-pos-100 hover:scale-105 hover:translate-y-1 duration-[350ms] px-3 py-2 rounded-md text-lg">
                Skills
              </button>
            </a>
          </li>
        </ul>
      </header>
      <div className="bg-inherit w-screen">
        <section
          id="about"
          className="text-6xl mt-10 h-screen w-screen relative z-20 cursor-none pt-20"
        >
          <h1 className="px-6 pt-3 mb-3 font-mono">
            Hi! I&apos;m Tawfiq Mouinet
          </h1>
          <h1 className="px-6 whitespace-nowrap overflow-hidden font-mono relative leading-[1.5]">
            <div>I am a</div>
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 block font-extrabold font-sans uppercase overflow-hidden left-60 absolute pl-2 animate-textslide shadow-lg shadow-purple-500">
              <div className="text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">
                Gamer
              </div>
              <div className="text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">
                Lifelong Learner
              </div>
              <div className="text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">
                Fullstack Developer
              </div>
            </div>
          </h1>

          <h2 className="text-4xl p-2 ml-4 mt-6 bg-gradient-to-r font-mono w-60 from-purple-800 bg-clip-text text-transparent to-blue-600 font-semibold ">
            About Me:
          </h2>
          <div className="flex flex-row flex-wrap">
            <p className="text-2xl w-3/5 ml-8 text-justify mt-5 font-mono">
              I am a budding, but passionate, fullstack web-developer who loves
              transforming ideas into fun and engaging online experiences. I am
              always eager to broaden my horizons and learn as much as I can, as
              quickly as I can!
            </p>
            <div
              onMouseMove={(ev) => handleMouseMove(ev)}
              className="relative w-[350px] h-[350px] left-20 bottom-10"
            >
              <img
                id="anchor"
                src="tm.png"
                alt="Wow, sir"
                className="w-[350px] absolute shadow-lg z-30 shadow-blue-800 mt-1 blur-md border-2 border-blue-800 rounded-full hover:shadow-2xl hover:shadow-purple-800 hover:border-purple-800 hover:scale-110 hover:blur-none hover:-translate-y-3 hover:z-10 duration-500 ease-in-out  transition-all "
              />
              <div id="eyes">
                <img
                  id="eye1"
                  src="3wina.png"
                  alt="wow, sir"
                  className="eye1"
                />
                <img
                  id="eye2"
                  src="3wina.png"
                  alt="wow, sir"
                  className="eye2"
                />
              </div>
            </div>
            <a
              href="https://github.com/TawfiqMouinet"
              target="_blank"
              className="cursor-none absolute bottom-3"
            >
              <FaGithub className="ml-96 mt-7 z-50 hover:scale-125 cursor-none hover:text-purple-800 hover:translate-y-1 transition-all duration-300" />
            </a>
          </div>
        </section>
        <div className="bg-inherit w-screen">
          <section
            id="projects"
            className="h-screen w-screen z-20 mt-10 pt-20 relative overflow-x-clip cursor-none"
          >
            <h2 className="text-4xl cursor-none p-2 ml-4 mt-6 bg-gradient-to-r font-mono mb-5 text-center from-purple-800 bg-clip-text text-transparent to-blue-600 font-semibold ">
              <a
                href="https://memento-learninglog.vercel.app"
                target="_blank"
                className="cursor-none"
              >
                Memento Learning Log
              </a>
            </h2>
            <div className="flex flex-row">
              <img
                src="memento0.png"
                alt="wow, sir"
                className="object-fill w-[55%] ml-3 self-start rounded-md flex-none shadow-md shadow-purple-800"
              />
              <p className="w-[45%] text-xl font-mono ml-3 text-justify mr-2 mt-24 ">
                Memento is a learning log web application that allows its users
                to log the topics they are interested in and to make journal
                entries as they learn about each of them. It was developed using
                Next.js 14, Tailwind CSS, Supabase, and NextUI.
              </p>
            </div>
          </section>
        </div>
        <div className="bg-inherit w-screen">
          <section className="h-screen z-20 relative flex-wrap flex flex-row pt-20 w-screen overflow-x-clip cursor-none">
            <img
              src="memento1.png"
              alt=""
              className="flex-none rounded-md self-start ml-3 w-[55%] shadow-md shadow-purple-800"
            />
            <p className="w-[40%] text-2xl font-mono text-justify ml-3 mt-10">
              You can track your learning journey while keeping your entries
              organized chronologically, alphabetically, or by number of
              entries.
            </p>
            <p className="text-2xl w-[40%] ml-72 font-mono text-justify">
              A simple, elegant, and intuitive user interface ensures high ease
              of use.
            </p>
            <img
              src="memento2.png"
              alt=""
              className="flex-none rounded-md self-start w-[30%] ml-4 shadow-md shadow-purple-800"
            />
          </section>
        </div>
        <div className="bg-inherit w-screen">
          <section
            id="skills"
            className="h-screen w-screen grid grid-flow-col grid-cols-3 grid-rows-2 z-20 pt-20 text-6xl relative"
          >
            <div>
              <h1 className="text-4xl font-bold ml-2 font-mono bg-gradient-to-b from-white to-slate-300 bg-clip-text text-transparent">
                Frameworks:
              </h1>
              <div className="flex flex-row my-3 ml-4 gap-x-4">
                <SiNextdotjs style={{ fill: "url(#icons-gradient)" }} />
                <FaReact style={{ fill: "url(#icons-gradient)" }} />
              </div>
            </div>
            <div>
              <h1 className="text-4xl font-bold ml-2 font-mono bg-gradient-to-b from-white to-slate-300 bg-clip-text text-transparent">
                UI Libraries:
              </h1>
              <div className="flex flex-row my-3 ml-4 gap-x-4">
                <SiNextui style={{ fill: "url(#icons-gradient)" }} />
                <SiTailwindcss style={{ fill: "url(#icons-gradient)" }} />
              </div>
            </div>
            <div>
              <h1 className="text-4xl font-bold ml-2 font-mono bg-gradient-to-b from-white to-slate-300 bg-clip-text text-transparent">
                Languages:
              </h1>
              <div className="flex flex-row my-3 w-2/3 ml-4 gap-x-4 flex-wrap">
                <IoLogoJavascript style={{ fill: "url(#icons-gradient)" }} />
                <BiLogoTypescript
                  className="text-7xl -mt-1"
                  style={{ fill: "url(#icons-gradient)" }}
                />
                <FaPython style={{ fill: "url(#icons-gradient)" }} />
                <FaHtml5 style={{ fill: "url(#icons-gradient)" }} />
                <FaCss3Alt style={{ fill: "url(#icons-gradient)" }} />
              </div>
            </div>
            <div>
              <h1 className="text-4xl font-bold ml-2 font-mono bg-gradient-to-b from-white to-slate-300 bg-clip-text text-transparent">
                Databases:
              </h1>
              <div className="flex flex-row my-3 ml-4 gap-x-4">
                <SiSupabase style={{ fill: "url(#icons-gradient)" }} />
                <BiLogoPostgresql style={{ fill: "url(#icons-gradient)" }} />
                <SiFirebase style={{ fill: "url(#icons-gradient)" }} />
              </div>
            </div>
            <div>
              <h1 className="text-4xl font-bold ml-2 font-mono bg-gradient-to-b from-white to-slate-300 bg-clip-text text-transparent">
                Version Control:
              </h1>
              <div className="flex flex-row my-3 ml-4 gap-x-4">
                <FaGitAlt style={{ fill: "url(#icons-gradient)" }} />
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

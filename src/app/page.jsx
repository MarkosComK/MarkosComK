"use client";
import Image from "next/image";
import { useState } from "react";
import { bg } from "./bg";

export default function home() {
  const [screen, setScreen] = useState(false);
  
  const handleScreen = () => {
    setScreen(!screen);
  }
  
  
  return (
    <section className="flex h-screen border border-green"> 
    <div className="lines z-10"></div>
    <div className="noise"></div>
    <div className="h-full w-1/2">
      <div className={`${screen ? "open": "close"} bg-charcoal custom-hover border-b border-green`} onClick={() => handleScreen()}>
        <span className={`${screen ? "-mt-20" : ""} absolute transition-all duration-500 ease-in-out`}>
          <h1 className="p-3">Markos Santos</h1>
          <p className="pl-3">Developer</p>
        </span>
        <div className="flex w-screen h-12 items-center justify-end">
          <Image className={`${screen ? "m-4" : "-mt-24" } transition-all duration-500 delay-500 z-50`} src={"/camera-cam.gif"} width={50} height={50}/>
        </div>
        <div className="absolute top-0 flex w-screen h-12 items-center justify-start">
          <div className={`${screen ? "m-4" : "-mt-24" } transition-all duration-500 delay-500 border-brown rounded-full w-4 h-4 bg-brown`}>
          </div>
          <p className={`${screen ? "m-1" : "-mt-24" } transition-all duration-500 delay-500`}>recording</p>
        </div>
        <div className={`${screen ? "flex" : "hidden" } absolute top-0 p-20 w-full h-full justify-center`}>
        <div>
          <div className="lines z-30"></div>
          <div className="noise"></div>
          <p className="relative z-50">
            From tinkering with tech to building beautiful interfaces, I'm a passionate front-end developer fueled by creativity.  A few years ago, my coding journey began with exploring the inner workings of computers.  But it was web development that truly sparked my passion.  It allows me to combine my artistic sensibilities (honed through digital art and design tools like Photoshop, Illustrator, and Figma) with my programming skills to craft user experiences that are both beautiful and intuitive.
          </p>
          <br />
          <p className="relative z-50">
            Front-end development feels like the perfect intersection where my talents can truly shine. It allows me to continuously learn and refine my skills, pushing me towards becoming a well-rounded developer.  If you're looking for a creative and enthusiastic front-end developer to bring your project to life, let's connect!
          </p>
        </div>
          <p className={`${screen ? "inline" : "" } text-[6px] top-1/2 left-1/2 w-[2220px] h-[964px] absolute text-center text-black -translate-x-1/2 -translate-y-1/2 -z-10`}>
          {/*bg - to add later*/}
          </p>
        </div>
      </div>
        <div className="absolute bottom-0 flex w-screen h-12 items-center justify-start z-20">
          <div className={`${screen ? "ml-6 mb-24" : "-ml-4" } transition-all duration-500 delay-700 w-1 h-24 bg-jade`}></div>
          <div className={`${screen ? "-ml-1" : "-mb-14" } transition-all duration-500 delay-700 w-24 h-1 bg-jade`}></div>
        </div>
      <p className="h-1/2 custom-hover">Developer</p>
    </div>
    <div className="flex flex-col w-1/2 h-full border-l border-green">
      <div className="flex w-full h-1/2 border-b border-green">
        <div className="w-1/2 custom-hover border-r border-green">teste3</div>
        <div className="w-1/2 custom-hover">teste4</div>
      </div>
      <div className="flex w-full h-1/2">
        <div className="w-1/2 custom-hover border-r border-green">teste5</div>
        <div className="w-1/2 custom-hover">teste6</div>
      </div>
    </div>
    </section>
  );
}

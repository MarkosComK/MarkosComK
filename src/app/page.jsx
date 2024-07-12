"use client";
import About from "./about/page";
import { useRef, useState } from "react";
import { bg } from "./bg";
import Noise from "./effects/noise";

export default function home() {
  const [screen, setScreen] = useState(false);
  const [mousePos, setMousePos] = useState({x: 0, y: 0});

  const handleScreen = () => {
    setScreen(!screen);
  }
  
  const handleMouse = (e) => {
    setMousePos({x: e.clientX, y: e.clientY});
  }
  
  return (
    <section className="flex h-screen border border-green" onMouseMove={handleMouse}>
      <div className={`h-6 w-4 absolute z-[100] bg-jade translate-x-3.5`} 
          style={{left: mousePos.x, top: mousePos.y}}>
    </div>
    <Noise />
    <div className="h-full w-1/2">
    <About screen={screen} handleScreen={handleScreen}/>
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

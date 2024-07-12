"use client";
import About from "./about/page";
import { useRef, useState } from "react";
import { bg } from "./bg";
import Noise from "./effects/noise";
import Cursor from "./effects/cursor";
import Contact from "./contact/Contact";

export default function home() {
  const [aboutDisplay, setAboutDisplay] = useState(false);
  const [contactDisplay, setContactDisplay] = useState(false);
  const [mousePos, setMousePos] = useState({x: 0, y: 0});

  function handleDisplay(value) {
    switch(value){
      case 1:
        aboutDisplay ? setAboutDisplay(false) : setAboutDisplay(true);
        break
      case 2:
        contactDisplay ? contactDisplay(false) : setContactDisplay(true);
        break
    }
  }
  
  const handleMouse = (e) => {
    setMousePos({x: e.clientX, y: e.clientY});
  }
  
  return (
    <section className="flex h-screen border border-green" onMouseMove={handleMouse}>
    <Cursor mousePos={mousePos}/>
    <Noise/>
    <div className="h-full w-1/2">
    <About display={aboutDisplay} handleDisplay={handleDisplay}/>
    <div className="absolute bottom-0 flex w-screen h-12 items-center justify-start z-20">
      <div className={`${screen ? "ml-6 mb-24" : "-ml-4" } transition-all duration-500 delay-700 w-1 h-24 bg-jade`}></div>
      <div className={`${screen ? "-ml-1" : "-mb-14" } transition-all duration-500 delay-700 w-24 h-1 bg-jade`}></div>
    </div>
    <Contact />
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

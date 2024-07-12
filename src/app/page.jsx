"use client";
import About from "./about/page";
import { useRef, useState } from "react";
import { bg } from "./bg";
import Noise from "./effects/noise";
import Cursor from "./effects/cursor";
import Contact from "./contact/Contact";
import LeftCorner from "./effects/leftcorner";

export default function home() {
  const [aboutDisplay, setAboutDisplay] = useState(false);
  const [contactDisplay, setContactDisplay] = useState(false);
  const [mousePos, setMousePos] = useState({x: 0, y: 0});

  const handleDisplay = (value) => {
    switch(value){
      case 1:
        setAboutDisplay(!aboutDisplay);
        break
      case 2:
        contactDisplay ? setContactDisplay(false) : setContactDisplay(true);
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
    <Contact display={contactDisplay} handleDisplay={handleDisplay}/>
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

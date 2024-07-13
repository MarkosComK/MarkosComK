"use client";
import About from "./about/page";
import { useRef, useState } from "react";
import { bg } from "./bg";
import Noise from "./effects/noise";
import Cursor from "./effects/cursor";
import Contact from "./contact/Contact";
import ContactButton from "./contact/ContactButton";
import LeftCorner from "./effects/leftcorner";

export default function home() {
  const [aboutDisplay, setAboutDisplay] = useState(false);
  const [contactDisplay, setContactDisplay] = useState(false);
  const [mousePos, setMousePos] = useState({x: 0, y: 0});

  const handleMouse = (e) => {
    setMousePos({x: e.clientX, y: e.clientY});
  }

  const contactButton = () => {
    setAboutDisplay(!aboutDisplay);
    setContactDisplay(!contactDisplay);
  }

  return (
    <div className="overflow-hidden relative">
    <Noise index={30}/>
      <section 
      className="border border-jade w-creen h-screen"
      onMouseMove={handleMouse}
      >
        <Cursor mousePos={mousePos} />
        <div
          className="grid grid-cols-2 grid-rows-4 w-full h-full lg:grid-cols-4 lg:grid-rows-2"
        >
          <div className="row-span-2 border w-full h-full lg:row-span-1 lg:col-span-2">
            <About display={aboutDisplay} setAboutDisplay={setAboutDisplay}/>
          </div>
          <div className="border">1</div>
          <div className="border">2</div>
          <div className="row-span-2 border w-full h-full lg:row-span-1 lg:col-span-2">
            <Contact display={contactDisplay} setContactDisplay={setContactDisplay}/>
          </div>
          <div className="border">3</div>
          <div className="border">4</div>
        </div>
      </section>
    </div>
  );
}

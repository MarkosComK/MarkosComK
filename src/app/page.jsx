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
      onMouseMove={handleMouse}>
        <Cursor mousePos={mousePos} />
      </section>
    </div>
  );
}

"use client";
import About from "./about/page";
import { useRef, useState } from "react";
import Cursor from "./effects/cursor";
import Contact from "./contact/Contact";
import ContactButton from "./contact/ContactButton";
import LeftCorner from "./effects/leftcorner";
import Video from "./video/video";
import Work from "./work/work";
import Resume from "./resume/Resume";

export default function home() {
  const [aboutDisplay, setAboutDisplay] = useState(false);
  const [contactDisplay, setContactDisplay] = useState(false);
  const [workDisplay, setWorkDisplay] = useState(false);
  const [resumeDisplay, setResumeDisplay] = useState(false);

  const [index, setIndex] = useState(1000);
  const [aboutIndex, setAboutIndex] = useState(0);
  const [contactIndex, setContactIndex] = useState(0);
  const [workIndex, setWorkIndex] = useState(0);
  const [resumeIndex, setResumeIndex] = useState(0);

  const [mousePos, setMousePos] = useState({x: 0, y: 0});

  const handleAboutIndex = () => {
    setAboutIndex(index);
    setIndex(index + 1);
  }

  const handleContactIndex = () => {
    setContactIndex(index);
    setIndex(index + 1);
  }

  const handleWorkIndex = () => {
    setWorkIndex(index);
    setIndex(index + 1);
  }

  const handleResumeIndex = () => {
    setResumeIndex(index);
    setIndex(index + 1);
  }

  const handleMouse = (e) => {
    setMousePos({x: e.clientX, y: e.clientY});
  }

  const contactButton = () => {
    setAboutDisplay(!aboutDisplay);
    setContactDisplay(!contactDisplay);
  }

  return (
    <div className="overflow-hidden relative">
      <section 
      className="border border-jade w-svw h-svh"
      onMouseMove={handleMouse}
      >
        <Cursor mousePos={mousePos} />
        <div
          className="grid grid-cols-2 grid-rows-4 w-full h-full lg:grid-cols-4 lg:grid-rows-2"
        >
          <div className="row-span-2 border lg:row-span-1 lg:col-span-2">
            <About display={aboutDisplay} setAboutDisplay={setAboutDisplay} index={aboutIndex} handleIndex={handleAboutIndex}/>
          </div>
          <div className="border flex items-center justify-center">
            <Work display={workDisplay} setWorkDisplay={setWorkDisplay} index={workIndex} handleIndex={handleWorkIndex}/>
          </div>
          <div className="border flex items-center justify-center">
            <Video />
          </div>
          <div className="row-span-2 border w-full h-full lg:row-span-1 lg:col-span-2">
            <Contact display={contactDisplay} setContactDisplay={setContactDisplay} index={contactIndex} handleIndex={handleContactIndex}/>
          </div>
          <div className="border flex items-center justify-center row-span-2 w-full h-full lg:row-span-1 col-span-2">
            <Resume />
          </div>
        </div>
        <ContactButton display={aboutDisplay} setContactDisplay={contactButton}/>
        <LeftCorner display={aboutDisplay}/>
      </section>
    </div>
  );
}

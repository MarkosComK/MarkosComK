import { useState } from "react";
import Noise from "../effects/noise";
import { IconContext } from "react-icons";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";

export default function Video() {
  const [videos, setVideos] = useState([
    'adventure-1.mp4',
    'adventure-2.mp4',
  ]);

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleIndex = (direction) => {
    const newIndex = direction === 'next' ? currentVideoIndex + 1 : currentVideoIndex - 1;
    const adjustedIndex = newIndex < 0 ? videos.length - 1 : newIndex % videos.length;
    setCurrentVideoIndex(adjustedIndex);
  }

  const currentVideo = videos[currentVideoIndex];

  return (
    <div className="w-full h-full relative border border-black">
        <div className="absolute z-10 w-full h-full flex justify-between">
          <div className="">
            <button className="p-5" onClick={() => handleIndex("prev")}>
              <IconContext.Provider value={{style: {height: "50px"}}}>
                <MdOutlineNavigateBefore style={{width: "50px"}}/>
              </IconContext.Provider>
            </button>
          </div>
          <div className="flex items-start">
            <button className="p-5" onClick={() => handleIndex("next")}>
              <IconContext.Provider value={{style: {height: "50px"}}}>
                <MdOutlineNavigateNext style={{width: "50px"}}/>
              </IconContext.Provider>
            </button>
          </div>
        </div>
        <video autoplay="autoplay" loop="loop" muted="muted" defaultMuted="muted" oncontextmenu="return false;"  preload="auto" id="myVideo" src={currentVideo} playsinline=""
        className="relative -z-10 right-0 bottom-0 w-full h-full green-filter object-cover opacity-35">
        </video> 
    <Noise />
    </div>
  )
}

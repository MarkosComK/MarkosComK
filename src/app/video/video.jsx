import { useState } from "react";
import Noise from "../effects/noise";

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
              HERE
            </button>
          </div>
          <div className="flex items-end">
            <button className="p-5" onClick={() => handleIndex("next")}>
              HERE
            </button>
          </div>
        </div>
        <video autoplay="" loop muted id="myVideo" src={currentVideo} 
        className="relative -z-10 right-0 bottom-0 w-full h-full green-filter object-cover opacity-35">
        </video> 
    <Noise />
    </div>
  )
}

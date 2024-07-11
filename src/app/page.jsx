"use client";
import Image from "next/image";
import { useState } from "react";

export default function home() {
  const [screen, setScreen] = useState(false);

  const handleScreen = () => {
    setScreen(!screen);
  }

  return (
    <section className="flex h-screen border border-green">
    <div className="h-full w-1/2">
      <div className={`${screen ? "open": "close"} bg-charcoal custom-hover border-b border-green`} onClick={() => handleScreen()}>
        <span className={`${screen ? "-mt-20" : ""} absolute transition-all duration-500 ease-in-out`}>
          <h1 className="p-3">Markos Santos</h1>
          <p className="pl-3">Developer</p>
        </span>
        <div className="flex w-screen h-12 items-center justify-end">
          <Image className={`${screen ? "m-4" : "-mt-24" } transition-all duration-500 delay-500`} src={"/camera-cam.gif"} width={50} height={50}/>
        </div>
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

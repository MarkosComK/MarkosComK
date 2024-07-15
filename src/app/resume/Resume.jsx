import Image from "next/image";
import Noise from "../effects/noise";
import { BsDownload } from "react-icons/bs";
import { IconContext } from "react-icons";

export default function Resume({ display}) {
  return (
      <div
        id="About"
        className=
        {
          `${display ? "overflow-y-scroll overflow-x-hidden left-0 top-0 w-svw h-svh": "custom-hover left-1/2 top-1/2 w-1/2 h-1/2"}
          transition-all duration-500 bg-charcoal border border-jade absolute z-20`
        }
        >
        <span className={`${display ? "-mt-20" : ""} absolute transition-all duration-500 ease-in-out w-full h-full`}>
          <h2 className="p-3 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] ">Resume</h2>
          <a download target="_blank" href={"/markos-resume.pdf"} className="w-full h-full flex items-center justify-center relative -top-10">
            <IconContext.Provider value={{style: {height: "50px"}}}>
                <BsDownload style={{width: "50px"}}/>
            </IconContext.Provider>
          </a>
        </span>
        <Noise />
        <div className={`${display ? "" : "-mt-24" } transition-all duration-500 fixed flex w-screen h-12 items-center justify-end `}>
        {
            /*
          <Image className={`${display ? "m-4" : "-mt-24" } relative transition-all duration-500 delay-500 z-50`} src={"/camera-cam.gif"} width={50} height={50}/>
            */
        }
        </div>
        {
            /*
        <div className={` ${display ? "" : "-mt-24" } transition-all duration-500 fixed flex w-screen h-12 items-center justify-start`}>
          <div className={`${display ? "m-4" : "-mt-24" } transition-all duration-500 delay-500 border-brown rounded-full w-4 h-4 bg-brown`}>
          </div>
          <p className={`${display ? "m-1" : "-mt-24" } transition-all duration-500 delay-500`}>recording</p>
        </div>
            */
        }
      </div>
  );
}
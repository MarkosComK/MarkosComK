import Image from "next/image";
import ContactButton from "../contact/ContactButton";
import Noise from "../effects/noise";
import LeftCorner from "../effects/leftcorner";

export default function About({ display, setAboutDisplay}) {
  return (
      <div id="About" className={`${display ? "open": "close custom-hover"} transition-all duration-500 bg-charcoal border-b border-green`} onClick={() => setAboutDisplay(!display)}>


        <span className={`${display ? "-mt-20" : ""} absolute transition-all duration-500 ease-in-out`}>
          <h1 className="p-3 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]" >Markos Santos</h1>
          <p className="pl-3 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">Creative Developer</p>
        </span>
        <div className="flex w-screen h-12 items-center justify-end">
          <Image className={`${display ? "m-4" : "-mt-24" } transition-all duration-500 delay-500 z-50`} src={"/camera-cam.gif"} width={50} height={50}/>
        </div>
        <div className="absolute top-0 flex w-screen h-12 items-center justify-start">
          <div className={`${display ? "m-4" : "-mt-24" } transition-all duration-500 delay-500 border-brown rounded-full w-4 h-4 bg-brown`}>
          </div>
          <p className={`${display ? "m-1" : "-mt-24" } transition-all duration-500 delay-500`}>recording</p>
        </div>
        <div className={`${display ? "flex" : "hidden" } absolute top-0 p-20 w-full h-full justify-center`}>
        <div>
          <Noise />
          <p className="relative z-50 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
            From tinkering with tech to building beautiful interfaces, I'm <span className="glitch" data-text="Markos">Markos</span> a passionate front-end developer fueled by creativity.  A few years ago, my coding journey began with exploring the inner workings of computers.  But it was web development that truly sparked my passion.  It allows me to combine my artistic sensibilities (honed through digital art and design tools like Photoshop, Illustrator, and Figma) with my programming skills to craft user experiences that are both beautiful and intuitive.
          </p>
          <br />
          <p className="relative z-50 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
            Front-end development feels like the perfect intersection where my talents can truly shine. It allows me to continuously learn and refine my skills, pushing me towards becoming a well-rounded developer.  If you're looking for a creative and enthusiastic front-end developer to bring your project to life, let's connect!
          </p>
        </div>
          <p className={`${display ? "inline" : "" } text-[6px] top-1/2 left-1/2 w-[2220px] h-[964px] absolute text-center text-black -translate-x-1/2 -translate-y-1/2 -z-10`}>
          {/*bg - to add later*/}
          </p>
        </div>
      </div>
  );
}

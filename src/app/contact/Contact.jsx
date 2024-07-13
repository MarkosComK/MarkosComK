import Noise from "../effects/noise";

export default function Contact({ display, setContactDisplay }) {
  return (
    <div className={`${display ? "open border-t border-r border-b" : "close custom-hover border-b"} transition-all duration-500 bottom-0 bg-charcoal`} onClick={() => setContactDisplay(!display)} id="contact">
    <Noise />
        <h2 className={`p-4`}>Contact</h2>
        <div className={`${display ? "" : "hidden" } flex flex-col h-[90%] justify-around p-4`}>
            <a
                className={`
                ${display ? "flex" : ""}
                delay-100 items-center justify-center border h-full m-2 z-10 hover:p-10 hover:animate-pulse
                transition-all hover:bg-jade hover:text-black`}
                href="mailto:markoscomks@gmail.com"
                >
                <p>
                    markoscomks@gmail.com
                </p>
            </a>
            <a
                className={`
                ${display ? "flex" : ""}
                delay-100 items-center justify-center border h-full m-2 z-10 hover:p-10 hover:animate-pulse
                transition-all hover:bg-jade hover:text-black`}
                
                >
                github.com/MarkosComK
            </a>
            <a
                className={`
                ${display ? "flex" : ""}
                delay-100 items-center justify-center border h-full m-2 z-10 hover:p-10 hover:animate-pulse
                transition-all hover:bg-jade hover:text-black`}
                
                >
                linkedin
            </a>
        </div>
    </div>
  )
}

import Noise from "../effects/noise";

export default function Contact({ display, setContactDisplay }) {
  return (
    <div className={`${display ? "open bottom-0" : "close custom-hover"} transition-all duration-500 bg-charcoal`} onClick={() => setContactDisplay(!display)} id="contact">
    {display ? <Noise /> : ""}
        <h2 className={`p-4`}>Contact</h2>
    </div>
  )
}



export default function ContactButton({ display, setContactDisplay }) {
  return (
    <div
    className={`${display ? "bottom-6 right-6" : "-bottom-12 -right-12" }
    transition-all duration-500 delay-500 absolute z-50 border
    `} onClick={() => setContactDisplay(true)}>
    <button className="w-full h-full hover:bg-jade hover:text-black p-2 transition-all duration-300">
      contact
    </button>
    </div>
  );
}



export default function ContactButton({ display, setContactDisplay }) {
  return (
    <button
    className={`${display ? "bottom-6 right-6" : "-bottom-6 -right-6" } transition-all duration-500 delay-1000 absolute z-50 `} onClick={() => setContactDisplay(true)}>
      contact
    </button>
  );
}

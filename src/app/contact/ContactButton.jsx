

export default function ContactButton({ display }) {
  return (
    <button
    className={`${display ? "bottom-6 right-6" : "-bottom-6 -right-6" } transition-all duration-500 delay-1000 absolute z-50 `}>
      contact
    </button>
  );
}

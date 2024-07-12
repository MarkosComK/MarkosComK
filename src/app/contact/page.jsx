

export default function ContactButton({ screen }) {
  return (
    <button
    className={`${screen ? "" : "-bottom-6 -right-6" } transition-all duration-500 delay-1000 absolute z-50 bottom-6 right-6`}>
      contact
    </button>
  );
}

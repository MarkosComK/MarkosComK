export default function Contact({ display, handleDisplay }) {
  return (
    <div className={`${display ? "h-screen" : "h-1/2 custom-hover" }`}>
        <h2 className={`p-4`}>Contact</h2>
    </div>
  )
}

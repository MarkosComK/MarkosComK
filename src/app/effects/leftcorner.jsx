export default function LeftCorner({ display }) {
  return (
    <div className="absolute bottom-0 flex w-screen h-12 items-center justify-start z-20">
      <div className={`${display ? "ml-6 mb-24" : "-ml-4" } transition-all duration-500 delay-700 w-1 h-24 bg-jade`}></div>
      <div className={`${display ? "-ml-1" : "-mb-14" } transition-all duration-500 delay-700 w-24 h-1 bg-jade`}></div>
    </div>
  )
}

export default function Cursor({ mousePos }) {
  return (
    <div 
    className={`lg:inline hidden h-6 w-4 absolute z-[10000] bg-jade translate-x-3.5 animate-pulse`} 
    style={{left: mousePos.x, top: mousePos.y}}>
    </div>
  )
}
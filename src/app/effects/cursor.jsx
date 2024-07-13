export default function Cursor({ mousePos }) {
  return (
    <div 
    className={`h-6 w-4 absolute z-[100] bg-jade translate-x-3.5 animate-pulse`} 
    style={{left: mousePos.x, top: mousePos.y}}>
    </div>
  )
}
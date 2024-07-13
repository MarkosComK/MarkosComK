export default function Cursor({ mousePos }) {
  return (
    <div 
    className={`hidden h-6 w-4 lg:absolute z-[100] bg-jade translate-x-3.5 animate-pulse`} 
    style={{left: mousePos.x, top: mousePos.y}}>
    </div>
  )
}
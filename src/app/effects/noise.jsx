
import Link from "next/link"

export default function Noise({ index }) {
  return (
    <div>
      <div className="lines" style={{zIndex: index}}></div>
      <div className="noise"></div>
    </div>
  );
}

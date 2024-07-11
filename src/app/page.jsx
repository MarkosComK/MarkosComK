import Link from "next/link"

export default function home() {
  return (
    <section className="flex h-screen border border-green">
    <div className="h-full w-1/2">
      <div className="h-1/2 hover:bg-orange border-b border-green">
        <span>
          <h1 className="p-3">Markos Santos</h1>
        </span>
      </div>
      <p className="h-1/2 hover:bg-orange">Developer</p>
    </div>
    <div className="flex flex-col w-1/2 h-full border-l border-green">
      <div className="flex w-full h-1/2 border-b border-green">
        <div className="w-1/2 hover:bg-orange border-r border-green">teste3</div>
        <div className="w-1/2 hover:bg-orange">teste4</div>
      </div>
      <div className="flex w-full h-1/2">
        <div className="w-1/2 hover:bg-orange border-r border-green">teste5</div>
        <div className="w-1/2 hover:bg-orange">teste6</div>
      </div>
    </div>
    </section>
  );
}

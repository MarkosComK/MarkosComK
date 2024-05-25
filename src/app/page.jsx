import Link from "next/link"

export default function home() {
  return (
    <main>
      <div>home page</div>
      <Link href="/misc">mist page</Link>
      <Link href="/work">work here</Link>
    </main>
  );
}

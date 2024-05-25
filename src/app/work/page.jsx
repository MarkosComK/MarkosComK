import Link from "next/link"

export default function work() {
  return (
    <main>
      <div>work page</div>
      <Link href="/">about page</Link>
      <Link href="/contact">contact page</Link>
    </main>
  );
}

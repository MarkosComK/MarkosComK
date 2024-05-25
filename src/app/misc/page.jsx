
import Link from "next/link"

export default function work() {
  return (
    <main>
      <div>work page</div>
      <Link href="/contact">contact page</Link>
      <Link href="/">home page</Link>
    </main>
  );
}

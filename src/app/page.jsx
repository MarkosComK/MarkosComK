import Link from "next/link"
import styles from "./home.module.css";

export default function home() {
  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <div>Dir / dir</div>
        <ul>
          <li>
            <Link href="/misc">mist page</Link>
          </li>
          <li>
            <Link href="/work">work here</Link>
          </li>
        </ul>
      </nav>
      <h1>home page</h1>
    </main>
  );
}

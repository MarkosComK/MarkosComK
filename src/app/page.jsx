import Link from "next/link"
import styles from "./home.module.css";

export default function home() {
  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <div>Dir / dir</div>
        <div>
          <div>May 26 2024</div>
          <ul className={styles.ul}>
            <li className={styles.left}>
              <Link href="/misc" className={styles.link}>◄</Link>
            </li>
            <li>
              <span>Chanel 00</span>
            </li>
            <li className={styles.right}>
              <Link href="/work" className={styles.link}>►</Link>
            </li>
          </ul>
        </div>
      </nav>
      <h1>home page</h1>
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

export default function Navbar() {
  return (
    <section className={styles.navbar}>
      <div className={styles.nav}>
        <Link href="#hero" className={`${styles.navEdge} ${styles.upArrow}`}>
            <Image src="/images/navbar-arrow.svg" width={22} height={22} alt="" />
        </Link>
        <Link href="#benefits" className={styles.navItem}>Benefits</Link>
        <Link href="#latest" className={styles.navItem}>Recent work</Link>
        <Link href="#sow" className={styles.navItem}>Scope of work</Link>
        <Link href="#pricing" className={styles.navItem}>Pricing</Link>
        <Link href="#faq" className={styles.navItem}>FAQs</Link>
        <Link href="" className={styles.navEdge}>Login</Link>
      </div>
    </section>
  );
}

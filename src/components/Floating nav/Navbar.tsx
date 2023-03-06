import Image from "next/image";
import Link from "next/link";
import AnimateIn from "../AnimateIn/AnimateIn";
import styles from "./styles.module.scss";

export default function Navbar() {
  return (
    <section className={styles.navbar}>
      <AnimateIn direction="up" delay={750}>
      <div className={styles.nav}>
        <Link href="#hero" scroll={false} className={`${styles.navEdge} ${styles.upArrow}`}>
            <Image src="/images/navbar-arrow.svg" width={22} height={22} alt="" />
        </Link>
        <Link href="#benefits" scroll={false} className={styles.navItem}>Benefits</Link>
        <Link href="#latest" scroll={false} className={styles.navItem}>Recent work</Link>
        <Link href="#sow" scroll={false} className={styles.navItem}>Scope of work</Link>
        <Link href="#pricing" scroll={false} className={styles.navItem}>Pricing</Link>
        <Link href="#faq" scroll={false} className={styles.navItem}>FAQs</Link>
        <Link href="" className={styles.navEdge}>Login</Link>
      </div>
      </AnimateIn>
    </section>
  );
}

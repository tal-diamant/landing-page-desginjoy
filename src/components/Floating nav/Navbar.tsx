import Image from "next/image";
import Link from "next/link";
import AnimateIn from "../AnimateIn/AnimateIn";
import { scrollTo } from "@/utils/scrollTo";
import styles from "./styles.module.scss";

export default function Navbar() {
  return (
    <section className={styles.navbar}>
      <AnimateIn direction="up" delay={750}>
      <div className={styles.nav}>
        <Link href="#-hero" onClick={() => scrollTo({id: 'hero'})} className={`${styles.navEdge} ${styles.upArrow}`}>
            <Image src="/images/navbar-arrow.svg" width={22} height={22} alt="" />
        </Link>
        <Link href="#-benefits" onClick={() => scrollTo({id: 'benefits'})} className={styles.navItem}>Benefits</Link>
        <Link href="#-latest" onClick={() => scrollTo({id: 'latest'})} className={styles.navItem}>Recent work</Link>
        <Link href="#-sow" onClick={() => scrollTo({id: 'sow'})} className={styles.navItem}>Scope of work</Link>
        <Link href="#-pricing" onClick={() => scrollTo({id: 'pricing'})} className={styles.navItem}>Pricing</Link>
        <Link href="#-faq" onClick={() => scrollTo({id: 'faq'})} className={styles.navItem}>FAQs</Link>
        <Link href="" className={styles.navEdge}>Login</Link>
      </div>
      </AnimateIn>
    </section>
  );
}

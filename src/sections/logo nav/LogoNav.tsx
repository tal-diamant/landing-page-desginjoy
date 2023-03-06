import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { scrollTo } from "@/utils/scrollTo";
import styles from "./styles.module.scss";

export default function LogoNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.actions}>
          <div className={styles.logoWrapper}>
              <Link href="">
                <Image src="/images/logo.svg" width={110} height={23} alt="" />
              </Link>
          </div>
          <div className={styles.hamburgerWrapper} onClick={() => setIsMenuOpen(current => !current)}>
            <div>
              <Image src="/images/hamburger-menu.svg" width={16} height={16} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.menuWrapper}>
          <div className={`${styles.menu} ${isMenuOpen? styles.open: ''}`}>
            <Link href="#-latest" onClick={() => scrollTo({id: 'latest'})}>Latest projects</Link>
            <Link href="#-pricing" onClick={() => scrollTo({id: 'pricing'})}>Pricing</Link>
            <Link href="#-faq" onClick={() => scrollTo({id: 'faq'})}>FAQs</Link>
            <Link href="">Login</Link>
          </div>
        </div>
      </div>

      <div className={styles.logonav}>
        <Link href="">
          <Image src="/images/logo.svg" width={128} height={26.4} alt="" />
        </Link>
      </div>
    </>
  );
}

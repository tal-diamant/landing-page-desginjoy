import Image from 'next/image';
import Link from 'next/link';
import ToTopButton from '@/components/Floating to top button/ToTopButton';
import { useState, useRef, useEffect } from 'react';
import { scrollTo } from '@/utils/scrollTo';
import styles from './styles.module.scss';

export default function LogoNav() {
  const [isToTopVisible, setIsToTopVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsToTopVisible(!entry.isIntersecting)
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    });

    if(navRef.current) {
      observer.observe(navRef.current);
    }

    return () => {
      observer.disconnect();
    }
  }, []);

  const scrollAndCloseMenu = (id: string) => {
    scrollTo({ id });
    setIsMenuOpen(false);
  };
  return (
    <>
      <div ref={navRef} className={styles.navbar} id="top">
        <div className={styles.actions}>
          <div className={styles.logoWrapper}>
            <Link href="">
              <Image src="/images/logo.svg" width={110} height={23} alt="" />
            </Link>
          </div>
          <div
            className={styles.hamburgerWrapper}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <div>
              <Image
                src="/images/hamburger-menu.svg"
                width={16}
                height={16}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className={styles.menuWrapper}>
          <div className={`${styles.menu} ${isMenuOpen ? styles.open : ''}`}>
            <Link href="#-latest" onClick={() => scrollAndCloseMenu('latest')}>
              Latest projects
            </Link>
            <Link
              href="#-pricing"
              onClick={() => scrollAndCloseMenu('pricing')}
            >
              Pricing
            </Link>
            <Link href="#-faq" onClick={() => scrollAndCloseMenu('faq')}>
              FAQs
            </Link>
            <Link href="">Login</Link>
          </div>
        </div>
      </div>

      <div className={styles.logonav}>
        <Link href="">
          <Image src="/images/logo.svg" width={128} height={26.4} alt="" />
        </Link>
      </div>

      {isToTopVisible && <ToTopButton />}
    </>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import AnimateIn from '../AnimateIn/AnimateIn';
import { scrollTo } from '@/utils/scrollTo';
import styles from './styles.module.scss';

export default function ToTopButton() {
  return (
    <div className={styles.floatButton}>
      <AnimateIn direction="up" delay={0}>
        <Link
          href="#-hero"
          onClick={() => scrollTo({ id: 'top' })}
          className={`${styles.button} ${styles.upArrow}`}
        >
          <Image src="/images/navbar-arrow.svg" width={22} height={22} alt="" />
        </Link>
      </AnimateIn>
    </div>
  );
}

import Image from "next/image";
import styles from "./styles.module.scss";

export default function Marquee() {
  return (
    <section className={styles.marquee}>
      <div className={styles.movingLogos}>
            <Image src="/images/marquee1.svg" width={47} height={20} alt="" />
            <Image src="/images/marquee2.svg" width={45} height={20} alt="" />
            <Image src="/images/marquee3.svg" width={50} height={20} alt="" />
            <Image src="/images/marquee4.svg" width={40} height={20} alt="" />
            <Image src="/images/marquee5.svg" width={42} height={20} alt="" />
            <Image src="/images/marquee6.svg" width={38} height={20} alt="" />
            <Image src="/images/marquee7.svg" width={63} height={20} alt="" />
            <Image src="/images/marquee8.svg" width={48} height={20} alt="" />
      </div>
      <div className={`${styles.movingLogos} ${styles.two}`}>
            <Image src="/images/marquee1.svg" width={47} height={20} alt="" />
            <Image src="/images/marquee2.svg" width={45} height={20} alt="" />
            <Image src="/images/marquee3.svg" width={50} height={20} alt="" />
            <Image src="/images/marquee4.svg" width={40} height={20} alt="" />
            <Image src="/images/marquee5.svg" width={42} height={20} alt="" />
            <Image src="/images/marquee6.svg" width={38} height={20} alt="" />
            <Image src="/images/marquee7.svg" width={63} height={20} alt="" />
            <Image src="/images/marquee8.svg" width={48} height={20} alt="" />
      </div>
    </section>
  );
}

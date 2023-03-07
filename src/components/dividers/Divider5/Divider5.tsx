import Image from "next/image";
import AnimateIn from "@/components/AnimateIn/AnimateIn";
import styles from "./styles.module.scss";

export default function Divider5() {
  return (
    <section className={styles.divider5}>
      <div className={styles.top}></div>
      <div className={styles.bottom}></div>
      <div className={styles.stroke}>
        <AnimateIn direction="down">
          <Image src={"/images/double-stroke.svg"} width={102} height={106} alt="" />
        </AnimateIn>
      </div>

      <div className={styles.imageLeft}>
        <AnimateIn direction="right">
          <Image src={"/images/doodle10.svg"} width={90} height={131} alt="" />
        </AnimateIn>
      </div>
      <div className={styles.imageRight}>
        <AnimateIn direction="left">
          <Image src={"/images/doodle11.svg"} width={100} height={80} alt="" />
        </AnimateIn>
      </div>
    </section>
  );
}
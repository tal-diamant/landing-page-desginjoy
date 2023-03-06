import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn/AnimateIn";
import styles from "./styles.module.scss";

export default function Divider6() {
  return (
    <section className={styles.divider6}>
      <div className={styles.top}></div>
      <div className={styles.bottom}></div>
      <div className={styles.stroke}>
        <AnimateIn direction="down">
          <Image src={"/images/double-stroke.svg"} width={102} height={106} alt="" />
        </AnimateIn>
      </div>

      <div className={styles.imageLeft}>
        <AnimateIn direction="right" positionOffset={2.4}>
          <Image src={"/images/doodle13.svg"} width={70} height={114} alt="" />
        </AnimateIn>
      </div>

      <div className={styles.imageRight}>
        <AnimateIn direction="left">
          <Image src={"/images/doodle14.svg"} width={60} height={84} alt="" />
        </AnimateIn>
      </div>
    </section>
  );
}
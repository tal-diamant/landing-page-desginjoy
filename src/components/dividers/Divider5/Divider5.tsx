import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn/AnimateIn";
import styles from "./styles.module.scss";

export default function Divider5() {
  return (
    <section className={styles.divider5}>
      <div className={styles.top}></div>
      <div className={styles.bottom}></div>
      {/* <AnimateIn direction="down"> */}
      <Image src={"/images/double-stroke.svg"} className={styles.stroke} width={102} height={106} alt="" />
      {/* </AnimateIn> */}
      <AnimateIn direction="right">
      <Image src={"/images/doodle10.svg"} className={styles.imageLeft} width={90} height={131} alt="" />
      </AnimateIn>
      <AnimateIn direction="left">
      <Image src={"/images/doodle11.svg"} className={styles.imageRight} width={100} height={80} alt="" />
      </AnimateIn>
    </section>
  );
}
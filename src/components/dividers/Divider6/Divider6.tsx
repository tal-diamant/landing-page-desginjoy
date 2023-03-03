import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn/AnimateIn";
import styles from "./styles.module.scss";

export default function Divider6() {
  return (
    <section className={styles.divider6}>
      <div className={styles.top}></div>
      <div className={styles.bottom}></div>
      {/* <AnimateIn direction="down"> */}
      <Image src={"/images/double-stroke.svg"} className={styles.stroke} width={102} height={106} alt="" />
      {/* </AnimateIn> */}
      <AnimateIn direction="right">
      <Image src={"/images/doodle13.svg"} className={styles.imageLeft} width={70} height={114} alt="" />
      </AnimateIn>
      <AnimateIn direction="left">
      <Image src={"/images/doodle14.svg"} className={styles.imageRight} width={60} height={84} alt="" />
      </AnimateIn>
    </section>
  );
}
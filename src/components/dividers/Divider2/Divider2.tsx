import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn/AnimateIn";
import styles from "./styles.module.scss";

export default function Divider2() {
  return (
    <section className={styles.divider2}>
      <div className={styles.top}>
      <AnimateIn direction="right">
      <Image src={"/images/doodle6.svg"} className={styles.imageLeft} width={110} height={176} alt="" />
      </AnimateIn>
      {/* <Image src={"/images/doodle5.svg"} className={styles.imageRight} width={100} height={152} alt="" /> */}
      </div>
      <div className={styles.bottom}></div>
      {/* <AnimateIn> */}
      <Image src={"/images/short-stroke.svg"} className={styles.stroke} width={102} height={106} alt="" />
      {/* </AnimateIn> */}
    </section>
  );
}
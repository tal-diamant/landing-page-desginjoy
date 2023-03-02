import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

export default function Divider6() {
  return (
    <section className={styles.divider6}>
      <div className={styles.top}></div>
      <div className={styles.bottom}></div>
      <Image src={"/images/double-stroke.svg"} className={styles.stroke} width={102} height={106} alt="" />
      <Image src={"/images/doodle13.svg"} className={styles.imageLeft} width={70} height={114} alt="" />
      <Image src={"/images/doodle14.svg"} className={styles.imageRight} width={60} height={84} alt="" />
    </section>
  );
}
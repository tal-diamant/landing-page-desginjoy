import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

export default function Divider5() {
  return (
    <section className={styles.divider5}>
      <div className={styles.top}></div>
      <div className={styles.bottom}></div>
      <Image src={"/images/double-stroke.svg"} className={styles.stroke} width={102} height={106} alt="" />
      <Image src={"/images/doodle10.svg"} className={styles.imageLeft} width={90} height={131} alt="" />
      <Image src={"/images/doodle11.svg"} className={styles.imageRight} width={100} height={80} alt="" />
    </section>
  );
}
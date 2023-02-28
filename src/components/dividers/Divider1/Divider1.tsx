import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

export default function Divider() {
  return (
    <section className={styles.divider}>
      <div className={styles.top}>
      <Image src={"/images/doodle4.svg"} className={styles.imageLeft} width={80} height={134} alt="" />
      <Image src={"/images/doodle5.svg"} className={styles.imageRight} width={100} height={152} alt="" />
      </div>
      <div className={styles.bottom}></div>
      <Image src={"/images/divider-stroke.svg"} className={styles.stroke} width={15} height={150} alt="" />
    </section>
  );
}
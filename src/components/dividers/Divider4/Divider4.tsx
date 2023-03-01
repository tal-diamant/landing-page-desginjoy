import Image from "next/image";
import styles from "./styles.module.scss";

export default function Divider4() {
  return (
    <section className={styles.divider4}>
      <div className={styles.top}>
      {/* <Image src={"/images/doodle6.svg"} className={styles.imageLeft} width={110} height={176} alt="" /> */}
      {/* <Image src={"/images/doodle5.svg"} className={styles.imageRight} width={100} height={152} alt="" /> */}
      </div>
      <div className={styles.bottom}></div>
      <Image src={"/images/short-stroke.svg"} className={styles.stroke} width={102} height={106} alt="" />
    </section>
  );
}
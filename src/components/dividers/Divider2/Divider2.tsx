import Image from "next/image";
import AnimateIn from "@/components/AnimateIn/AnimateIn";
import styles from "./styles.module.scss";

export default function Divider2() {
  return (
    <section className={styles.divider2}>
      <div className={styles.top}>
      <div className={styles.imageLeft}>
        <AnimateIn direction="right">
          <Image src={"/images/doodle6.svg"} width={110} height={176} alt="" />
        </AnimateIn>
      </div>
      {/* <Image src={"/images/doodle5.svg"} className={styles.imageRight} width={100} height={152} alt="" /> */}
      </div>
      <div className={styles.bottom}></div>
      <div className={styles.stroke}>
        <AnimateIn direction="down">
          <Image src={"/images/short-stroke.svg"} width={102} height={106} alt="" />
        </AnimateIn>
      </div>
    </section>
  );
}
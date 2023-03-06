import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn/AnimateIn";
import styles from "./styles.module.scss";

export default function Divider() {
  return (
    <section className={styles.divider}>
      <div className={styles.top}>
        <div className={styles.imageLeft}>
          <AnimateIn direction="right">
            <Image src={"/images/doodle4.svg"} width={80} height={134} alt="" />
          </AnimateIn>
        </div>

        <div className={styles.imageRight}>
          <AnimateIn direction="left">
            <Image src={"/images/doodle5.svg"} width={100} height={152} alt="" />
          </AnimateIn>
        </div>
      </div>

      <div className={styles.bottom}></div>
      <div className={styles.stroke}>
        <AnimateIn direction="down">
          <Image src={"/images/divider-stroke.svg"} width={15} height={150} alt="" />
        </AnimateIn>
      </div>
    </section>
  );
}
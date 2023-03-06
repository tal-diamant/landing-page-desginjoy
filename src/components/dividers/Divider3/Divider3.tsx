import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn/AnimateIn";
import styles from "./styles.module.scss";

export default function Divider() {
  return (
    <section className={styles.divider}>
      <div className={styles.top}>
      {/* <Image src={"/images/doodle4.svg"} className={styles.imageLeft} width={80} height={134} alt="" /> */}
      <div className={styles.imageRight}>
        <AnimateIn direction="left">
          <Image src={"/images/doodle7.svg"} width={100} height={145} alt="" />
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
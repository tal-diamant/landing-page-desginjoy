import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn/AnimateIn";
import styles from "./styles.module.scss";

export default function White2() {
  return (
    <section className={styles.white2}>
      <div className={styles.container}>
        <AnimateIn>
        <div className={styles.funky}>
          <Image src="/images/doodle8.svg" className={styles.funkyImage} width={128} height={108} alt="" />
          <div className={styles.splash}>
            <h3>Funky Scribbbles</h3>
            <p>A collection of funky vectorized scribbbles to spice up your design projects.</p>
            <div>
                <Link href="">Check it out</Link>
            </div>
          </div>
          <div className={styles.logos}>
            <Image src="/images/google.svg" width={80} height={26} alt="" />
            <Image src="/images/invision.svg" width={76} height={26} alt="" />
            <Image src="/images/legalzoom.svg" width={99} height={26} alt="" />
            <Image src="/images/verizon.svg" width={90} height={20} alt="" />
            <Image src="/images/jpmorgan.svg" width={88} height={18} alt="" />
            <Image src="/images/freelancer.svg" width={107} height={26} alt="" />
          </div>
        </div>
        </AnimateIn>
      </div>
    </section>
  );
}
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn/AnimateIn";
import styles from "./styles.module.scss";

export default function Benefits() {
  return (
    <section className={styles.benefits} id="benefits">
      <div className={styles.container}>
        <AnimateIn>
        <div className={styles.splash}>
          <Image src="/images/sparkies.svg" width={90} height={66} alt="" />
          <h2>Membership benefits</h2>
          <p>
            Perks so good you'll never need to go anywhere else for your design.
            Seriously.
          </p>
          <div>
            <Link href="#pricing-grid" scroll={false}>See plans</Link>
          </div>
        </div>
        </AnimateIn>

        <AnimateIn>
        <div className={styles.benefitsArea}>
          <div className={styles.benefit}>
            <Image src="/images/infinity.svg" width={100} height={100} alt="" />
            <h3>Design board</h3>
            <p>Add as many design requests to your board as you'd like.</p>
          </div>

          <div className={styles.benefit}>
            <Image src="/images/infinity.svg" width={100} height={100} alt="" />
            <h3>Design board</h3>
            <p>Add as many design requests to your board as you'd like.</p>
          </div>

          <div className={styles.benefit}>
            <Image src="/images/infinity.svg" width={100} height={100} alt="" />
            <h3>Design board</h3>
            <p>Add as many design requests to your board as you'd like.</p>
          </div>

          <div className={styles.benefit}>
            <Image src="/images/infinity.svg" width={100} height={100} alt="" />
            <h3>Design board</h3>
            <p>Add as many design requests to your board as you'd like.</p>
          </div>

          <div className={styles.benefit}>
            <Image src="/images/infinity.svg" width={100} height={100} alt="" />
            <h3>Design board</h3>
            <p>Add as many design requests to your board as you'd like.</p>
          </div>

          <div className={styles.benefit}>
            <Image src="/images/infinity.svg" width={100} height={100} alt="" />
            <h3>Design board</h3>
            <p>Add as many design requests to your board as you'd like.</p>
          </div>
        </div>
        </AnimateIn>
      </div>
    </section>
  );
}

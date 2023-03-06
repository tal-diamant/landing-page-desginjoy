import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn/AnimateIn";
import { scrollTo } from "@/utils/scrollTo";
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
            <Link href="#-pricing" onClick={() => scrollTo({id: 'pricing'})}>See plans</Link>
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
            <Image src="/images/benefits-lightning.svg" width={100} height={100} alt="" />
            <h3>Lightning fast delivery</h3>
            <p>Get your design one at a time in just a few days on average.</p>
          </div>

          <div className={styles.benefit}>
            <Image src="/images/benefits-money.svg" width={100} height={100} alt="" />
            <h3>Fixed monthly rate</h3>
            <p>No surprises here! Pay the same fixed price each month.</p>
          </div>

          <div className={styles.benefit}>
            <Image src="/images/benefits-painter.svg" width={100} height={100} alt="" />
            <h3>Top-notch quality</h3>
            <p>Insane design quality at your fingertips whenever you need it.</p>
          </div>

          <div className={styles.benefit}>
            <Image src="/images/benefits-scale.svg" width={100} height={100} alt="" />
            <h3>Flexible and scalable</h3>
            <p>Scale up or down as needed, and pause or cancel at anytime.</p>
          </div>

          <div className={styles.benefit}>
            <Image src="/images/benefits-fingerprint.svg" width={100} height={100} alt="" />
            <h3>Unique and all yours</h3>
            <p>Each of your designs is made especially for you and is 100% yours.</p>
          </div>
        </div>
        </AnimateIn>
      </div>
    </section>
  );
}

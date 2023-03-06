import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn/AnimateIn";
import styles from "./styles.module.scss";

export default function Hero() {
    return (
        <section className={styles.hero} id="hero">
            <div className={styles.container}>
                <AnimateIn>
                <h1 className={styles.heading}>A design agency with a twist</h1>
                <p className={styles.paragraph}>Design subscriptions to scale your business.</p>
                <div className={styles.heroButton}>
                    <Link href="#pricing-grid" scroll={false}>
                        See plans
                    </Link>
                </div>
                <div className={styles.guarantee}>
                    <span>Designs you'll{' '}</span>
                    <Image src="/images/heart.svg" width={18} height={16} alt="" />
                    <span>, guaranteed</span>
                </div>
                </AnimateIn>
            </div>
            <div className={`${styles.doodle} ${styles.doodleLeft}`}>
              <AnimateIn direction="right">
              <Image src="/images/hero-left.svg" width={64} height={128} alt="" />
              </AnimateIn>
            </div>
            <div className={`${styles.doodle} ${styles.doodleRight}`}>
            <AnimateIn direction="left">
            <Image src="/images/hero-right.svg" width={115} height={214} alt="" />
            </AnimateIn>
            </div>
        </section>
    )
}
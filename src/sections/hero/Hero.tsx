import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <h1 className={styles.heading}>A design agency with a twist</h1>
                <p className={styles.paragraph}>Design subscriptions to scale your business.</p>
                <div className={styles.heroButton}>
                    <Link href="#id">
                        See plans
                    </Link>
                </div>
                <div className={styles.guarantee}>
                    <span>Designs you'll{' '}</span>
                    <Image src="/images/heart.svg" width={18} height={16} alt="" />
                    <span>, guaranteed</span>
                </div>
            </div>
            <Image src="/images/hero-left.svg" className={`${styles.doodle} ${styles.doodleLeft}`} width={64} height={128} alt="" />
            <Image src="/images/hero-right.svg" className={`${styles.doodle} ${styles.doodleRight}`} width={115} height={214} alt="" />
        </section>
    )
}
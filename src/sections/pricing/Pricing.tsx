import Image from "next/image";
import Link from "next/link";
import PricingColumn from "@/components/pricing column/PricingColumn";
import { columnData2 } from "@/components/pricing column/data";
import styles from "./styles.module.scss";

export default function Pricing() {
  return (
    <section className={styles.pricing}>
      <div className={styles.container}>
        <div className={styles.splash}>
            <h2>Memberships levels</h2>
            <p>Choose a plan that's right for you.</p>
            <Image src="/images/doodle12.svg" width={288} height={46} alt="" />
        </div>
        <div className={styles.pricingGrid}>
          
          <div className={styles.col}>
            <div className={styles.colTop}>
              <div className={styles.topTop}>
                <h3>Monthly</h3>
                <p>No minimum commitment. Pause or cancel anytime.</p>
              </div>
              <div className={styles.topBottom}>
                <span>$4,995/m</span>
                <p>Pause or cancel anytime</p>
                <div className={styles.button}>
                    <Link href="">Get started</Link>
                </div>
                <div>
                    <Link href="">Book a call</Link>
                </div>
              </div>
              <div className={styles.popular}>Most Popular</div>
              <Image src="/images/scratch-marks.svg" className={styles.scratch} width={20} height={24} alt="" />
            </div>

            <div className={styles.colBottom}>
                <h4>What's included:</h4>
                <ul>
                    <li>Unlimited requests</li>
                    <li>Unlimited brands</li>
                    <li>Unlimited users</li>
                    <li>Unlimited stock photos via Shutterstock</li>
                    <li>Pause or cancel anytime</li>
                </ul>
            </div>
          </div>

          <PricingColumn data={columnData2} />

          <div className={styles.col}></div>
          <div className={styles.col}></div>
          <div className={styles.col}></div>
        </div>
      </div>
    </section>
  );
}
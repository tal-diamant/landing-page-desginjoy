import Image from "next/image";
import Link from "next/link";
import PricingColumn from "@/components/pricing column/PricingColumn";
import { columnData, columnData2, columnData3 } from "@/components/pricing column/data";
import AnimateIn from "@/components/AnimateIn/AnimateIn";
import styles from "./styles.module.scss";

export default function Pricing() {
  return (
    <section className={styles.pricing} id="pricing">
      <div className={styles.container}>
        <AnimateIn>
        <div className={styles.splash}>
            <h2>Memberships levels</h2>
            <p>Choose a plan that's right for you.</p>
            <Image src="/images/doodle12.svg" width={288} height={46} alt="" />
        </div>
        </AnimateIn>

        <AnimateIn>
        <div className={styles.pricingGrid} id="pricing-grid">
          
          <PricingColumn data={columnData} />
          <PricingColumn data={columnData2} />
          <PricingColumn data={columnData3} />

          <div className={styles.rightCol}>
            <div className={`${styles.section} ${styles.top}`}>
              <Image src="/images/monitor-mirror.svg" width={158} height={111} alt="" />
              <h3>Book a call</h3>
              <p>Learn more about how DesignJoy works and how it can help you.</p>
              <Link href="">Book a call</Link>
            </div>
            <div className={`${styles.section} ${styles.bottom}`}>
              <Image src="/images/holding-money.svg" width={247} height={111} alt="" />
              <h3>Refer a friend & earn</h3>
              <p>Earn 5% monthly recurring commissions for each referral.</p>
              <Link href="">Join now</Link>
            </div>
          </div>
        </div>
        
        <div className={styles.addOn}>
          <div className={styles.badge}>ADD-ON</div>
          <h2>Webflow development</h2>
          <p>Get a better website faster with Webflow development. Requires a design subscription.</p>
          <span>$999/m</span>
        </div>
        </AnimateIn>
      </div>
    </section>
  );
}
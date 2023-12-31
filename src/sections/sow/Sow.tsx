import Image from "next/image";
import AnimateIn from "@/components/AnimateIn/AnimateIn"
import styles from "./styles.module.scss";

export default function Sow() {
  return (
    <section className={styles.sow} id="sow">
      <div className={styles.container}>
        <AnimateIn>
        <h2>Apps, websites, logos & more.</h2>
        </AnimateIn>
        <div className={styles.scope}>
          <AnimateIn>
          <div className={styles.grid}>
            <div className={styles.col}>
                <span>Websites</span>
                <span>Mobile apps</span>
                <span>Logos & branding</span>
                <span>Design systems</span>
                <span>SAAS</span>
                <span>Wireframes</span>
                <span>Stationery</span>
                <span>Pitch decks</span>
            </div>
            <div className={styles.col}>
                <span>Slide decks</span>
                <span>Direct mail</span>
                <span>Infographics</span>
                <span>Brochures</span>
                <span>Signage</span>
                <span>Brand guides</span>
                <span>Social media graphics</span>
                <span>Billboards</span>
            </div>
            <div className={styles.col}>
                <span>Trade show banners</span>
                <span>Email graphics</span>
                <span>Resumes</span>
                <span>Business cards</span>
                <span>Packaging</span>
                <span>Blog graphics</span>
                <span>Digital ads</span>
                <span>Icons</span>
            </div>
          </div>
          </AnimateIn>

          <div className={styles.doodle}>
            <AnimateIn direction="right">
              <Image src="/images/doodle9.svg" width={100} height={131} alt="" />
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}

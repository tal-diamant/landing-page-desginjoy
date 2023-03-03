import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn/AnimateIn";
import styles from "./styles.module.scss";

export default function Latest() {
  return (
    <section className={styles.latest} id="latest">
      <div className={styles.container}>
        <AnimateIn>
        <div className={styles.recentWork}>
          <h2>Recent work</h2>
          <p>Award winning designs, and nothing less.</p>
          <Link href="">View recent work</Link>
        </div>
        </AnimateIn>

        <div className={styles.images}>
          <AnimateIn>
          <Image
            src="/images/latest-image1.jpg"
            width={288}
            height={288}
            alt=""
          />
          </AnimateIn>
          <AnimateIn>
          <Image
            src="/images/latest-image2.jpg"
            width={288}
            height={288}
            alt=""
          />
          </AnimateIn>
          <AnimateIn>
          <Image
            src="/images/latest-image3.jpg"
            width={288}
            height={288}
            alt=""
          />
          </AnimateIn>
          <AnimateIn>
          <Image
            src="/images/latest-image4.jpg"
            width={288}
            height={288}
            alt=""
          />
          </AnimateIn>
        </div>

        <AnimateIn>
        <div className={styles.logos}>
          <h3>Designs commonly featured by</h3>
          <div className={styles.featuredIn}>
            <Image src="/images/dribbble-logo.svg" width={96} height={24} alt="" />
            <Image src="/images/lapa-logo.svg" width={85} height={28} alt="" />
            <Image src="/images/awwwards-logo.svg" width={114} height={18} alt="" />
            <Image src="/images/product-hunt-logo.svg" width={120} height={28} alt="" />
          </div>
        </div>
        </AnimateIn>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

export default function White1() {
  return (
    <section className={styles.white1}>
      <div className={styles.container}>
        {/* part 1 */}
        <div className={styles.headingAndSupport}>
          <h2>We didn't reinvent the wheel, just design</h2>
          <p>
            Design as you know it is out the door. Design as you want it just
            arrived.
          </p>
        </div>

        {/* part 2 */}
        <div className={styles.items}>
          {/* item 1 */}
          <div className={styles.item}>
            <div className={styles.itemImage}>
              <Image
                src="/images/envelope.svg"
                width={100}
                height={100}
                alt=""
              />
            </div>
            <p className={styles.itemText}>
              Subscribe to a plan & request as many designs as you'd like.
            </p>
          </div>

          {/* item 2 */}
          <div className={styles.item}>
            <div className={styles.itemImage}>
              <Image
                src="/images/diamond.svg"
                width={80}
                height={80}
                alt=""
              />
            </div>
            <p className={styles.itemText}>
              Receive your design within a few business days on average, Monday
              to Friday.
            </p>
          </div>

          {/* item 3 */}
          <div className={styles.item}>
            <div className={styles.itemImage}>
              <Image
                src="/images/spinning-arrow.svg"
                width={88}
                height={88}
                alt=""
              />
            </div>
            <p className={styles.itemText}>
              We'll revise the designs until you're 100% satisfied.
            </p>
          </div>
        </div>

        {/* part 3 */}
        <div className={styles.quote}>
            <div className={styles.content}>
                <Image src="/images/red-quotes.svg" className={styles.redQuotes} width={35} height={30} alt="" />
                <p>Designjoy shows that they know the art of subtlety.</p>    
                <Image src="/images/webflow.svg" className={styles.webflow} width={110} height={28} alt="" />    
            </div>
            <Image src="/images/6-lines.svg" className={styles.doodle1} width={60} height={38} alt="" />
            <Image src="/images/doodle3.svg" className={styles.doodle2} width={120} height={81} alt="" />
        </div>
      </div>
    </section>
  );
}

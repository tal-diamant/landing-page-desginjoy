import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn/AnimateIn";
import { scrollTo } from "@/utils/scrollTo";
import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <section className={styles.footer}>
      <div className={styles.container}>
        <AnimateIn>
        <div className={styles.splash}>
            <h2>See if Designjoy is right for you. (It totally is.)</h2>
            <p>Get a guided tour through Designjoy, and find out how you and your team can change the way you source design, forever.</p>
            <Link href="#-pricing" onClick={() => scrollTo({id: 'pricing'})}>Get started</Link>
        </div>
        </AnimateIn>

        <AnimateIn>
        <div className={styles.logos}>
            <Image src="/images/marquee7.svg" width={165} height={24} alt="" />
            <Image src="/images/marquee3.svg" width={118} height={26} alt="" />
            <Image src="/images/marquee5.svg" width={129} height={23} alt="" />
            <Image src="/images/marquee4.svg" width={77} height={26} alt="" />
            <Image src="/images/marquee2.svg" width={104} height={26} alt="" />
            <Image src="/images/marquee8.svg" width={155} height={26} alt="" />
        </div>
        </AnimateIn>

        <AnimateIn>
        <div className={styles.bottom}>
            <div className={styles.leftCol}>
                <Link href="#-hero" onClick={() => scrollTo({id: 'hero'})}>
                    <Image src="/images/logo-white.svg" className={styles.logo} width={150} height={31} alt="" />
                </Link>
                <div className={styles.hq}>
                    <Image src="/images/arizona.svg" width={40} height={38} alt="" />
                    <p>Designjoy is headquartered in Phoenix, Arizona.</p>
                </div>
            </div>
            <div className={styles.rightCol}>
                <div className={styles.left}>
                    <Link href="#-latest" onClick={() => scrollTo({id: 'latest'})}>Latest projects</Link>
                    <Link href="#-pricing" onClick={() => scrollTo({id: 'pricing'})}>Pricing</Link>
                    <Link href="" scroll={false}>FAQs</Link>
                    <Link href="" scroll={false}>Contact</Link>
                </div>
                <div className={styles.right}>
                    <Link href="" scroll={false}>Client login</Link>
                    <Link href="#-pricing" onClick={() => scrollTo({id: 'pricing'})}>Get started</Link>
                    <Link href="" scroll={false}>Terms & conditions</Link>
                    <Link href="" scroll={false}>Privacy policy</Link>
                </div>
            </div>
        </div>
        </AnimateIn>
      </div>
      <Image src="/images/doodle15.svg" className={styles.doodle} width={100} height={100} alt="" />
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn/AnimateIn";
import styles from "./styles.module.scss";

export default function ProjectsLine() {
    return (
        <section className={styles.projectsLine}>
            <div className={styles.container}>
                <Image src="/images/cog-wheel.svg" width={103} height={104} alt="" />
            </div>
            <AnimateIn>
            <div className={styles.imageSlider}>
                <Image src="/images/slider1.jpg" width={200} height={200} alt="" />
                <Image src="/images/slider2.jpg" width={200} height={200} alt="" />
                <Image src="/images/slider3.jpg" width={200} height={200} alt="" />
                <Image src="/images/slider4.jpg" width={200} height={200} alt="" />
                <Image src="/images/slider5.jpg" width={200} height={200} alt="" />
            </div>
            </AnimateIn>
        </section>
    )
}
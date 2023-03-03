import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Parallax } from 'react-scroll-parallax';
import AnimateIn from "@/components/AnimateIn/AnimateIn";
import styles from "./styles.module.scss";
import { Console } from "console";

export default function ProjectsLine() {
    const cogWheelRef = useRef(null);

    const rotateCogWheel = (progress: number) => {
        const cw = cogWheelRef.current as HTMLImageElement | null;
        if(cw) {
            cw.style.setProperty('--rotate', progress * 40 +'deg' );
        }
    }

    return (
        <section className={styles.projectsLine}>
            <div className={styles.container}>
                <Parallax onProgressChange={(progress) => rotateCogWheel(progress)}>
                <Image ref={cogWheelRef} src="/images/cog-wheel.svg" width={103} height={104} alt="" />
                </Parallax>
            </div>
            <AnimateIn>
            <Parallax translateX={['0px', '-380px']}>
            <div className={styles.imageSlider}>
                <Image src="/images/slider1.jpg" width={200} height={200} alt="" />
                <Image src="/images/slider2.jpg" width={200} height={200} alt="" />
                <Image src="/images/slider3.jpg" width={200} height={200} alt="" />
                <Image src="/images/slider4.jpg" width={200} height={200} alt="" />
                <Image src="/images/slider5.jpg" width={200} height={200} alt="" />
            </div>
            </Parallax>
            </AnimateIn>
        </section>
    )
}
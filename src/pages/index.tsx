import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import LogoNav from "@/sections/logo nav/LogoNav";
import Hero from "@/sections/hero/Hero";
import ProjectsLine from "@/sections/projects line/ProjectsLine";
import Marquee from "@/sections/marquee/Marquee";
import White1 from "@/sections/white 1/White1";
import Divider1 from "@/components/dividers/Divider1/Divider1";
import Gray from "@/sections/Gray/Gray";
import Divider2 from "@/components/dividers/Divider2/Divider2";
import Benefits from "@/sections/benefits/Benefits";

import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Design Joy</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <LogoNav />
        <Hero />
        <ProjectsLine />
        <Marquee />
        <White1 />
        <Divider1 />
        <Gray />
        <Divider2 />
        <Benefits />
        {/* divider */}
        {/* latest */}
        {/* divider */}
        {/* white 2 */}
        {/* sow */}
        {/* divider */}
        {/* pricing */}
        {/* divider */}
        {/* faq */}
        {/* footer */}
        {/* cookies */}
        {/* floating nav */}
      </main>
    </>
  );
}

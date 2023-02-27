import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import LogoNav from '@/sections/logo nav/LogoNav';
import Hero from "@/sections/hero/Hero";
import ProjectsLine from "@/sections/projects line/ProjectsLine";
import Marquee from '@/sections/marquee/Marquee';

import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

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
        {/* white 1 */}
        {/* divider */}
        {/* grey */}
        {/* divider */}
        {/* benefits */}
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
  )
}

import React from "react";
import Image from "next/image";
import Link from "next/link";

// import { Parallax, ParallaxLayer } from "@react-spring/web";
import { useParallax, Parallax } from "react-scroll-parallax";
import styles from "@/styles/Home.module.css";
import flag1 from "../public/flags/bj.svg";
import flag2 from "../public/flags/dm.svg";
import flag3 from "../public/flags/fj.svg";
import flag4 from "../public/flags/gi.svg";
import flag5 from "../public/flags/gy.svg";
import flag6 from "../public/flags/im.svg";
import flag7 from "../public/flags/in.svg";
import flag8 from "../public/flags/jo.svg";
import flag9 from "../public/flags/la.svg";
import flag10 from "../public/flags/lt.svg";
import flag11 from "../public/flags/nl.svg";
import flag12 from "../public/flags/pt.svg";
import flag13 from "../public/flags/us.svg";

export default function IndexPageParallax() {

  function getRandomArbitrary(min:number, max:number) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  return (
    <>
      <div className="main">
        <Parallax
          className={styles.flag1}
          speed={getRandomArbitrary(-50, 50)}
        >
          <Image src={flag1} alt={"flag1"}></Image>
        </Parallax>
        <Parallax className={styles.flag2} speed={getRandomArbitrary(-50, 50)}
        >
          <Image src={flag2} alt={"flag2"}></Image>
        </Parallax>
        <Parallax className={styles.flag3} speed={getRandomArbitrary(-50, 50)}>
          <Image src={flag3} alt={"flag3"}></Image>
        </Parallax>
        <Parallax className={styles.flag4} speed={getRandomArbitrary(-50, 50)}>
          <Image src={flag4} alt={"flag4"}></Image>
        </Parallax>
        <Parallax className={styles.flag5} speed={getRandomArbitrary(-50, 50)}>
          <Image src={flag5} alt={"flag5"}></Image>
        </Parallax>
        <Parallax className={styles.flag6} speed={getRandomArbitrary(-50, 50)}>
          <Image src={flag6} alt={"flag6"}></Image>
        </Parallax>
        <Parallax className={styles.flag7} speed={getRandomArbitrary(-50, 50)}>
          <Image src={flag7} alt={"flag7"}></Image>
        </Parallax>
        <Parallax className={styles.flag8} speed={getRandomArbitrary(-50, 50)}>
          <Image src={flag8} alt={"flag8"}></Image>
        </Parallax>
        <Parallax className={styles.flag9} speed={getRandomArbitrary(-50, 50)}>
          <Image src={flag9} alt={"flag9"}></Image>
        </Parallax>
        <Parallax className={styles.flag10} speed={getRandomArbitrary(-50, 50)}>
          <Image src={flag10} alt={"flag10"}></Image>
        </Parallax>
        <Parallax className={styles.flag11} speed={getRandomArbitrary(-50, 50)}>
          <Image src={flag11} alt={"flag11"}></Image>
        </Parallax>
        <Parallax className={styles.flag12} speed={getRandomArbitrary(-50, 50)}>
          <Image src={flag12} alt={"flag12"}></Image>
        </Parallax>
        <Parallax className={styles.flag13} speed={getRandomArbitrary(-50, 50)}>
          <Image src={flag13} alt={"flag13"}></Image>
        </Parallax>
        <Parallax
          className={styles.lastText}
          speed={getRandomArbitrary(-50, 50)}
        >
          <div>
            <h1>This is the end...is it?</h1>
            <span>Welcome to Where in the world</span>
            <Link href="/search">Enter</Link>
          </div>
        </Parallax>
      </div>
    </>
  );
}

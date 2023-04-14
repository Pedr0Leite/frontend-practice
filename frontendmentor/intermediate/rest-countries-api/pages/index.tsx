import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import IndexPageParallax from "@/components/IndexPageParallax";

import { ParallaxProvider } from "react-scroll-parallax";

export default function Home() {
  return (
    <>
      <Head>
        <title>REST Countries API</title>
        <meta name="description" content="REST Countries API" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ParallaxProvider>
        <IndexPageParallax />
      </ParallaxProvider>
    </>
  );
}

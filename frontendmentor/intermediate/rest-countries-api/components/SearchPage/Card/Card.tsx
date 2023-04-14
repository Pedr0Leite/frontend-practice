import React from "react";
import Image from "next/image";
import styles from "@/styles/Search.module.css";

import data from "../../../public/data.json";

interface CardInterface {
    svg: string,
    name: string,
    population: string,
    region: string,
    capital: string
}

export default function Card({svg, name, population, region, capital}:CardInterface) {

  return (
    <div className={styles.mainCard}>
      <Image width="265" height="150" alt="flag" src={svg} />
      <div className={styles.countryInfo}>
        <span className={styles.title}>{name}</span>
        <span><span className={styles.subTitle}>Population:</span> <span className={styles.info}>{population}</span></span>
        <span><span className={styles.subTitle}>Region:</span> <span className={styles.info}>{region}</span></span>
        <span><span className={styles.subTitle}>Capital:</span> <span className={styles.info}>{capital}</span></span>
      </div>
    </div>
  );
}

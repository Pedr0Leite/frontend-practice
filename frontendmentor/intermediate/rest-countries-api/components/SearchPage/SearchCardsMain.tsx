import React from "react";
import Card from "./Card/Card";
import styles from "@/styles/Search.module.css";
import Link from "next/link";

interface SearchDataInterface {
  data: Array<Object>;
}

export default function SearchCardsMain({ data }: SearchDataInterface) {
  return (
    <div className={styles.mainCardDiv}>
      {data && data.map((_country: any) => (
      <Link href={`/search/${_country.name.common}`} className={styles.linkCard}>
        <Card
          svg={_country.flags.svg}
          capital={_country.capital[0]}
          name={_country.name.official}
          population={_country.population}
          region={_country.region}
          key={_country.flag}
        />
        </Link>
      ))}
    </div>
  );
}
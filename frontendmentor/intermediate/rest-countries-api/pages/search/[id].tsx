import React from 'react';
import styles from "@/styles/SpecificCountryPage.module.css";


// //Runs at build time - PATHS
export const getStaticPaths = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,flag,region,subregion,population,capital,languages,idd,borders,currencies,tld");
    const data = await res.json();
  
    const paths = data.map((_country: any) => {
      return {
        params: { id: _country.name.common.toString() },
      };
    });
  
    return {
      paths: paths,
      fallback: false, //fallback pages
    };
  };
  
  export const getStaticProps = async (context: any) => {
    const id = context.params.id;
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${id}`
    );
    const data = await res.json();
  
    return {
      props: { specificCountry: data},
    };
  };

  interface specificCountryInterface {
    specificCountry:any
  }

export default function SpecificCountryPage({specificCountry}:specificCountryInterface) {
  return (
    <div className={styles.specificCountryMainDiv}>
        <button>Back</button>
        <div className={styles.specificCountryImg}>IMG HERE</div>
        <div className={styles.specificCountryTitle}>Title</div>
        <ul>
            <li>Native Name:</li>
            <li>Population:</li>
            <li>Region:</li>
            <li>Sub Region:</li>
            <li>Capital:</li>
        </ul>

        <ul>
            <li>Top Level Domain:</li>
            <li>Currencies: </li>
            <li>Languages</li>
        </ul>

        <div>Border Countries: </div>
    </div>
  )
}

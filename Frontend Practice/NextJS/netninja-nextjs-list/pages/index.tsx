import Link from "next/link";
import styles from "../styles/Home.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          officia voluptates, ipsam voluptatem laudantium deserunt similique
          beatae molestiae distinctio mollitia. Modi consectetur dignissimos
          aliquam placeat quia autem illo, aliquid minus!
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          officia voluptates, ipsam voluptatem laudantium deserunt similique
          beatae molestiae distinctio mollitia. Modi consectetur dignissimos
          aliquam placeat quia autem illo, aliquid minus!
        </p>
        <Link className={styles.btn} href="/users">
          See Users Listing
        </Link>
      </div>
    </>
  );
}

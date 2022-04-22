import Head from "next/head";
import Image from "next/image";
import Featured from "../components/Featured";
import HeroMessage from "../components/HeroMessage";
import Services from "../components/Services";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Joseph Walker Catering</title>
        <meta name="description" content="Treat yourself!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <HeroMessage />
      <Services />
    </div>
  );
}

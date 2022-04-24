import Head from "next/head";
import Hero from "../components/Hero";
import HeroMessage from "../components/HeroMessage";
import MeetTheChef from "../components/MeetTheChef";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Joseph Walker Catering</title>
        <meta name="description" content="Treat yourself!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <MeetTheChef />
      <HeroMessage />
    </div>
  );
}

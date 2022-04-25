import Head from "next/head";
import Hero from "../components/Hero";
import HeroMessage from "../components/HeroMessage";
import MeetTheChef from "../components/MeetTheChef";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width " />
        <title>Joseph Walker Catering</title>
      </Head>
      <Hero />
      <MeetTheChef />
      <HeroMessage />
    </div>
  );
}

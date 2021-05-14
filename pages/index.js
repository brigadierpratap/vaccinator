import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vaccinator</title>
        <meta
          name="description"
          content="Dynamic vaccine slot availabilty nptifier"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Vaccine Notifier</a>
        </h1>
        <div className={styles.alert_link}>
          {" "}
          Set up an&nbsp;
          <Link href="/add-alert">
            <a className={"alert_link_inner"}>Alert</a>
          </Link>
        </div>
        <div className={styles.maintext}>
          Not getting slots for vaccine, get notified for available slots in
          your area.
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

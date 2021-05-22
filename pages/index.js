import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import NavbarComp from "../Component/Navbar";

export default function Home() {
  return (
    <div
      style={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}
    >
      <Head>
        <title>Vaccinator</title>
        <meta
          name="description"
          content="Dynamic vaccine slot availabilty nptifier"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarComp />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="/add-alert">Vaccine Notifier</a>
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
        <div style={{ marginTop: "3%", textAlign: "center" }}>
          If you want to contribute to this project visit{" "}
          <a
            href="https://github.com/brigadierpratap/vaccinator"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <span>Created with &#10084;&#65039; &nbsp;by </span>
        <span>
          {" "}
          <a
            href="https://github.com/brigadierpratap"
            target="_blank"
            rel="noopener noreferrer"
          >
            &nbsp; Pawan Singh
          </a>
          <span> &nbsp;and</span>
          <a
            href="https://www.linkedin.com/in/gauravsengar"
            target="_blank"
            rel="noopener noreferrer"
          >
            &nbsp; Gaurav Singh
          </a>
        </span>
      </footer>
    </div>
  );
}

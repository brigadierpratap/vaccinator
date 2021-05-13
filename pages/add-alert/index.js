import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

export default function AddAlert() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Dynamic vaccine slot availabilty nptifier"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} style={{ width: "100%" }}>
        <form onSubmit={e => e.preventDefault()} className="form">
          <div className="form_header">Enter Your Details</div>
          <div
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <label>Name </label>
            <input style={{ color: "#4e9fd9" }} type="text" required />
            <label>Email </label>
            <input type="email" style={{ color: "teal" }} required />
            <label>Pin Code </label>
            <input type="number" style={{ color: "#d44ae0" }} required />
          </div>
        </form>
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

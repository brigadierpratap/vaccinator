import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/Home.module.css";

function AddAlert(props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [age, setAge] = useState(true);
  const [resp, setResp] = useState("");
  const handleChange = e => {
    e.preventDefault();
    if (e.target.name === "email") setEmail(e.target.value);
    else if (e.target.name === "name") setName(e.target.value);
    else if (e.target.name === "pinCode") setPinCode(e.target.value);
    else if (e.target.name === "age") setAge(e.target.checked);
    setResp("");
    return;
  };
  const handleSubmit = async e => {
    e.preventDefault();
    const obj = { email: email, name: name, pinCode: pinCode, age: age };
    console.log(props);
    /* await fetch(process.env.API_URL + "/postUser", {
      method: "POST",

      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => res.json())
      .then(data => {
        if (data.status === 1) {
          setEmail("");
          setName("");
          setPinCode("");
          setAge(true);
          setResp("Submitted Successfully! Keep checking your email.");
        } else {
          const e = new Error("Failure");
          throw e;
        }
      })
      .catch(err => {
        setResp("Error! Try again");
      }); */
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Add Details</title>
        <meta
          name="description"
          content="Dynamic vaccine slot availabilty nptifier"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} style={{ width: "100%" }}>
        {/*         <Navbar />
         */}{" "}
        <form onSubmit={handleSubmit} className="form">
          <div className="form_header">Enter Your Details</div>
          <div
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <label>Name </label>
            <input
              value={name}
              onChange={handleChange}
              name="name"
              style={{ color: "#4e9fd9" }}
              type="text"
              required
            />
            <label>Email </label>
            <input
              value={email}
              onChange={handleChange}
              name="email"
              type="email"
              style={{ color: "teal" }}
              required
            />
            <label>Pin Code </label>
            <input
              value={pinCode}
              onChange={handleChange}
              name="pinCode"
              type="number"
              style={{ color: "#d44ae0" }}
              required
            />
            <label htmlFor="age">
              <input
                type="checkbox"
                id="age"
                name="age"
                checked={age}
                onChange={handleChange}
              />{" "}
              Age limit 45+
            </label>
          </div>
          <button type="submit">Submit</button>
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

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(
    "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=821115&date=14-05-2021",
    {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "user-agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
      },
    }
  );
  console.log(res.status);
  const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}

export default AddAlert;

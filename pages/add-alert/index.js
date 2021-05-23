import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import NavbarComp from "../../Component/Navbar";
import styles from "../../styles/Home.module.css";

function AddAlert(props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [age, setAge] = useState(true);
  const [resp, setResp] = useState("");
  const [modal, setmodal] = useState(false);
  const [modEmail, setModEmail] = useState("");
  const handleChange = e => {
    if (e.target.name === "email") setEmail(e.target.value);
    else if (e.target.name === "name") setName(e.target.value);
    else if (e.target.name === "pinCode") {
      if (
        isNaN(Number(e.target.value)) ||
        String(e.target.value).length > 6 ||
        String(e.target.value).length < 6
      ) {
        setResp("Invalid Pin Code");
        setPinCode(e.target.value);
        return;
      }
      setPinCode(e.target.value);
    } else if (e.target.name === "age") {
      setAge(e.target.checked);
      console.log(age);
    }
    setResp("");
    return;
  };
  const handleSubmit = async e => {
    e.preventDefault();
    const obj = { email: email, name: name, pinCode: pinCode, age: age };
    await fetch(process.env.API_URL + "/postUser", {
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
          const e = new Error(data.message);
          throw e;
        }
      })
      .catch(err => {
        setResp(
          err.message.indexOf("email_1 dup key") >= 0
            ? "EmailId already exists!"
            : err.message.indexOf("Invalid") >= 0
            ? err.message
            : "Try Again"
        );
      });
  };
  const unsubscribe = async email => {
    await fetch(process.env.API_URL + "/unsub", {
      method: "POST",

      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => res.json())
      .then(data => {
        if (data.status === 1) {
          window.alert("Unsubscribed!");
          setModEmail("");
          setmodal(false);
        } else {
          window.alert("Try Again!");
          setModEmail("");
          setmodal(false);
        }
      })
      .catch(err => {
        console.log(err.message);
      });
  };
  return (
    <div>
      <Head>
        <title>Add Details</title>
        <meta
          name="description"
          content="Dynamic vaccine slot availabilty notifier"
        />
        <link rel="icon" href="/inj.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        // bootstrap CDN
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <NavbarComp />
      <main
        className={styles.main}
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1618675523007-d8ecac3ded75?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <form
          onSubmit={handleSubmit}
          className="form"
          style={{ paddingBottom: "2%" }}
        >
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
              />
              &nbsp;Age limit 45+ (check if true)
            </label>
          </div>
          <div className="form-feedback small mb-4" style={{ color: "red" }}>
            {resp}
          </div>
          <button type="submit">Submit</button>
          <div
            style={{ marginTop: "5%", color: "#0070f3", cursor: "pointer" }}
            onClick={() => {
              setmodal(!modal);
            }}
          >
            Unsubscribe from mailing list.
          </div>
        </form>
        {modal && (
          <div
            className="pop-ovr-cont"
            onClick={() => {
              setmodal(!modal);
              setModEmail("");
            }}
          >
            <div
              className="pop-inner"
              onClick={e => {
                e.stopPropagation();
              }}
            >
              <span>Enter your email</span>
              <input
                type="email"
                value={modEmail}
                onChange={e => {
                  setModEmail(e.target.value);
                }}
                onKeyPress={e => {
                  if (e.key === "Enter") {
                    unsubscribe(modEmail);
                  }
                }}
              />
              <button
                onClick={e => {
                  unsubscribe(modEmail);
                }}
              >
                Unsubscribe
              </button>
            </div>
          </div>
        )}
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

export default AddAlert;

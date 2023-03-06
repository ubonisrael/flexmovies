import { emailRegex } from "@/lib/emailregex";
import Head from "next/head";
import { useState } from "react";
import styles from "@/styles/Login.module.scss";
import Link from "next/link";
import signUp from "@/lib/signup";
import { useRouter } from "next/router";

export default function SignUpPage({ data }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState({ email: "", password: "" });

  const router = useRouter()

  const alertError = (type) => {
    if (type === "email") {
      setError({ ...error, email: "Please type in a valid email" });
    } else {
      setError({ ...error, password: "Password does not match" });
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    //check if email is in the correct format
    if (!emailRegex.test(email)) {
      alertError("email");
      return;
    }

    if (password !== password2) {
      alertError("password");
      return;
    }

    const { result, error } = await signUp(email, password);

    if (error) {
      //use toastify to alert user login attempt has failed
      alertError("pw");
      // then return
      return;
    }

    //redirect to home page
    router.push("/");
  };

  const backgroundImageUrl = `https://image.tmdb.org/t/p/original/${data.trendDay.results[0].poster_path}`;

  return (
    <>
      <Head>
        <title> Sign Up || Flexmovies </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section
        style={{ background: `url(${backgroundImageUrl})` }}
        className={styles.background}
      ></section>
      <section className={styles.login}>
        <article>
          <h1>Welcome to Flexmovies</h1>
          <form noValidate onSubmit={handleSignUp}>
            <h3>Sign Up</h3>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                className={styles.login_input}
                type="text"
                placeholder="Your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
              />
              <span>{error.email}</span>
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                className={styles.login_input}
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
              />
              <span>{error.password}</span>
            </div>
            <div>
              <label htmlFor="password">Confirm Password</label>
              <input
                id="password2"
                name="password"
                className={styles.login_input}
                type="password"
                value={password2}
                onChange={(e) => {
                  setPassword2(e.target.value);
                  setError("");
                }}
              />
              <span>{error.password}</span>
            </div>
            <article className={styles.loginbtn}>
            <button id="login-btn" type="submit">
              Sign Up
            </button>
            <p>
              Already have an account?{" "}
              <Link href="/login" className={styles.link}>Click here to Sign In</Link>
            </p>
            </article>
          </form>
        </article>
      </section>
    </>
  );
}
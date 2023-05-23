"use client";
import { useState } from "react";
import signIn from "@/lib/signin";
import Head from "next/head";
import { useRouter } from "next/router";
import { emailRegex } from "@/lib/emailregex";
import styles from "@/styles/Login.module.scss";
import Link from "next/link";
import { toast } from "react-toastify";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ email: "", password: "" });

  const router = useRouter();

  const alertError = (type) => {
    if (type === "email") {
      setError({ ...error, email: "Please type in a valid email" });
    } else {
      setError({ ...error, password: "Email or password incorrect" });
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    //check if email is in the correct format
    if (!emailRegex.test(email)) {
      alertError("email");
      return;
    }

    const { error } = await signIn(email, password);

    if (error) {
      //use toastify to alert user login attempt has failed
      toast.error("Error during login. Please try again.", {
        position: toast.POSITION.TOP_CENTER,
      });
      // then return
      return;
    }

    //redirect to home page
    router.push("/");
  };

  return (
    <>
      <Head>
        <title> Login || Flexmovies </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.login}>
        <article>
          <h1>Flexmovies</h1>
          <form noValidate onSubmit={handleLogin}>
          <h3>Sign in</h3>
            <div>
            <span>{error.password}</span>
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
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
            />
            </div>
            <article className={styles.loginbtn}>
            <button id="login-btn" type="submit" >
              Login
            </button>
            <p>
              
              <Link href="/emailSreset" className={styles.link}>Forgot Password?</Link>
            </p>
            <p>
              Do not have an account?{" "}
              <Link href="/signup" className={styles.link}>Click here to Sign Up</Link>
            </p>
            </article>
          </form>
        </article>
      </main>
    </>
  );
}

import React from "react";
import styles from "@/styles/Login.module.scss";
import { useState } from "react";
import signIn from "@/lib/signin";
import { emailRegex } from "@/lib/emailregex";
import { MdClose } from "react-icons/md";

const Login = ({toggle}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ email: "", password: "" });

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

    const error = await signIn(email.trim(), password.trim());

    if (error) {
      setError({ ...error, password: error });
      return
    }

    //close modal
    toggle()
  };

  return (
    <>
      <section className={styles.login}>
      <section className={styles.loginContainer}>
      <button onClick={toggle} className={styles.closeBtn}>
          <MdClose />
        </button>
        <article className={styles.formContainer}>
          <form noValidate onSubmit={handleLogin}>
            <h2>Sign in</h2>
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
              <button id="login-btn" type="submit">
                Login
              </button>
              <p className={styles.link} onClick={() => toggle('reset')}>
                  Forgot Password?
              </p>
              <p className={styles.link} onClick={() => toggle('signup')}>
                Do not have an account? Click here to Sign Up
              </p>
            </article>
          </form>
        </article>
      </section>
      </section>
    </>
  );
};

export default Login;

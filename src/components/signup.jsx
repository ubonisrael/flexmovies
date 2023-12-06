import React from "react";
import { emailRegex } from "@/lib/emailregex";
import { useState } from "react";
import styles from "@/styles/Login.module.scss";
import signUp from "@/lib/signup";
import { MdClose } from "react-icons/md";

const Signup = ({toggle}) => {
  const [email, setEmail] = useState("");
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [alert, setAlert] = useState({ email: "", password: "", verify: "", username: ""});

  const alertMsg = (type) => {
    if (type === "email") {
      setAlert({ ...alert, email: "Please type in a valid email" });
    }  else if (type === "password") {
      setAlert({ ...alert, password: "Password does not match" });
    } else if (type === "username") {
      setAlert({ ...alert, username: "Please fill in a username!" });
    } else {
      setAlert({
        ...alert,
        password: "Password must have atleast 6 characters",
      });
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    //check if username is filled in
    if (!username.trim()) {
      alertMsg("username");
      return;
    }

    //check if email is in the correct format
    if (!emailRegex.test(email)) {
      alertMsg("email");
      return;
    }

    //check if password is atleast 6 characters
    if (password.trim().length < 6) {
      alertMsg("pw length");
      return;
    }

    //check if password matches
    if (password.trim() !== password2.trim()) {
      alertMsg("password");
      return;
    }

    const error = await signUp(
      email.trim(),
      password.trim(),
      username.trim()
    );

    if (error) {
      setAlert({ ...alert, email: error });
      return
    };

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
        <h2 className={styles.title}>Sign up</h2>
          <form noValidate onSubmit={handleSignUp}>
            <p className={styles.verify}>{alert.verify}</p>
            <div>
              <label htmlFor="username">Username</label>
              <input
                id="username"
                name="username"
                className={styles.login_input}
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => {
                  setName(e.target.value);
                  setAlert("");
                }}
              />
              <span>{alert.username}</span>
            </div>
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
                  setAlert("");
                }}
              />
              <span>{alert.email}</span>
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
                  setAlert("");
                }}
              />
              <span>{alert.password}</span>
            </div>
            <div>
              <label htmlFor="password2">Confirm Password</label>
              <input
                id="password2"
                name="password2"
                className={styles.login_input}
                type="password"
                value={password2}
                onChange={(e) => {
                  setPassword2(e.target.value);
                  setAlert("");
                }}
              />
              <span>{alert.password}</span>
            </div>
            <article className={styles.loginbtn}>
              <button id="login-btn" type="submit">
                Sign Up
              </button>
              <p className={styles.link} onClick={() => toggle('login')}>
                Already have an account? Click here to Sign In
              </p>
            </article>
          </form>
        </article>
      </section>
      </section>
    </>
  );
};

export default Signup;

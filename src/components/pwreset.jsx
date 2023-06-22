import React from 'react'
import { useState } from "react";
import { emailRegex } from "@/lib/emailregex";
import styles from "@/styles/Login.module.scss";
import { MdClose } from 'react-icons/md';
import resetPassword from '@/lib/resetPassword';

const PasswordReset = ({toggle}) => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState('');
  
    const alertError = (type) => {
      if (type === "email") setError("Please type in a valid email");
    };
  
    const handleResetEmail = async (e) => {
      e.preventDefault();
  
      //check if email is in the correct format
      if (!emailRegex.test(email)) {
        alertError("email");
        return;
      }
  
      const err = await resetPassword(email.trim()); //
  
      if (err) {
        setError(err);
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
            <form noValidate onSubmit={handleResetEmail}>
            <h2>Forgot Password</h2>
              <div>
              <p>Input your email and click to send an email reset link to your mail.</p>
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
              <span>{error}</span>
              </div>
              <div>
              </div>
              <article className={styles.loginbtn}>
              <button id="login-btn" type="submit" >
                Send
              </button>
              <p className={styles.link} onClick={() => toggle('login')}>
                  Already have an account? Click here to Sign In
                </p>
              <p className={styles.link}onClick={() => toggle('signup')}>
                Do not have an account? Click here to Sign Up
              </p>
              </article>
            </form>
          </article>
        </section>
        </section>
      </>
    );
}

export default PasswordReset
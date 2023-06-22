import React, { useState } from "react";
import styles from "@/styles/Userpage.module.scss";
import { MdClose } from "react-icons/md";
import passwordChange from "@/lib/passwordchange";

const PasswordChange = ({ email, toggle }) => {
  const [oldPassword, setOldPw] = useState("");
  const [newPassword, setNewPw] = useState({ one: "", two: "" });
  const [oldError, setOldError] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e, val) => {
    if (val === "one") {
      setNewPw({ ...newPassword, one: e.target.value });
      setError("");
    } else {
      setNewPw({ ...newPassword, two: e.target.value });
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (oldPassword.trim() == "") {
      setOldError("Please input password!");
      return;
    }

    if (newPassword.one.trim() == "" || newPassword.two.trim() == "") {
      setError("Please input password!");
      return;
    }

    if (newPassword.one !== newPassword.two) {
      setError("Passwords do not match!");
      return;
    }

    if (newPassword.one.trim().length < 8) {
      setError("Password must be greater than 8 characters!");
      return;
    }

    if (newPassword.one) {
      if (newPassword.one === newPassword.two) {
        await passwordChange(email, oldPassword, newPassword.one);
        toggle()
      }
    }
  };

  return (
    <section className={styles.userEdit}>
      <section className={styles.editFormWrapper}>
        <button onClick={toggle} className={styles.closeBtn}>
          <MdClose />
        </button>
        <form noValidate className={styles.editForm}>
          <h3>Change Password</h3>
          <article>
            <label htmlFor="oldPasssword" className={styles.passwordLabel}>
              Old Password
              <input
                id="oldPassword"
                name="oldPassword"
                type="password"
                className={styles.passwordInput}
                value={oldPassword}
                onChange={(e) => {
                  setOldPw(e.target.value);
                  setOldError("");
                }}
              />
              <span className={styles.errorMsg}>{oldError}</span>
            </label>
            <label htmlFor="NewPasswordOne" className={styles.passwordLabel}>
              New Password
              <input
                id="NewPasswordOne"
                name="NewPasswordOne"
                type="password"
                className={styles.passwordInput}
                value={newPassword.one}
                onChange={(e) => handleChange(e, "one")}
              />
              <span className={styles.errorMsg}>{error}</span>
            </label>
            <label htmlFor="NewPasswordTwo" className={styles.passwordLabel}>
              Confirm Password
              <input
                id="NewPasswordTwo"
                name="NewPasswordTwo"
                type="password"
                className={styles.passwordInput}
                value={newPassword.two}
                onChange={(e) => handleChange(e, "two")}
              />
              <span className={styles.errorMsg}>{error}</span>
            </label>
            <button type="submit" onClick={handleSubmit}>
              Change
            </button>
          </article>
        </form>
      </section>
    </section>
  );
};

export default PasswordChange;

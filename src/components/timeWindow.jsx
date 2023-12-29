import React from 'react'
import styles from "@/styles/Collection.module.scss";

export const Timewindow = ({ checked, setCheckBox }) => {
  return (
    <div className={styles.switchButton}>
      <input
        className={styles.switchButtonCheckbox}
        name="window"
        type="checkbox"
        checked={checked}
        onChange={setCheckBox}
      ></input>
      <label className={styles.switchButtonLabel} htmlFor="window">
        <span className={styles.switchButtonLabelSpan}>Day</span>
      </label>
    </div>
  )
}

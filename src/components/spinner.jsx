import React from "react";
import styles from '@/styles/Spinner.module.scss'

const Spinner = () => {
  return (
      <div className={styles.lds_fb}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
  );
};

export default Spinner;

import React from "react";

import styles from "@/styles/Header.module.scss";
import Link from "next/link";
import { RiLogoutCircleRLine } from "react-icons/ri";
import LogOut from "@/lib/logout";

export const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href="/home">
          <p className={styles.links}>All</p>
        </Link>
        <Link href="/movie">
          <p className={styles.links}>Movies</p>
        </Link>
        <Link href="/tv">
          <p className={styles.links}>TV</p>
        </Link>
        <Link href="/user">
          <p className={styles.links}>My Page</p>
        </Link>
      </div>
      <div>
        <button className={styles.btn} onClick={LogOut}>
          Log Out   <RiLogoutCircleRLine />
        </button>
      </div>
    </div>
  );
};

import React from "react";
import styles from "@/styles/Header.module.scss";
import Link from "next/link";
import { RiLoginCircleLine, RiLogoutCircleRLine } from "react-icons/ri";
import LogOut from "@/lib/logout";
import { useAuth } from "@/context/AuthUserContext";
import { useRouter } from "next/router";

export const Header = () => {
  const { user } = useAuth();
  const router = useRouter()

  const handleLogIn = () => router.push('/login')

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
        {user ? <Link href="/user">
          <p className={styles.links}>My Page</p>
        </Link> : null}
      </div>
      <div>
        {user ? <button className={styles.btn} onClick={LogOut}>
          Log Out   <RiLogoutCircleRLine />
        </button>: <button className={styles.btn} onClick={handleLogIn}>
          Log in   <RiLoginCircleLine />
        </button>}
        
      </div>
    </div>
  );
};

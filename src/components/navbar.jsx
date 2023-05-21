import React, { useEffect } from "react";
import styles from "@/styles/Navbar.module.scss";
import Link from "next/link";
import LogOut from "@/lib/logout";
import { SearchBar } from "./searchbar";
import { RiLogoutCircleRLine, RiLoginCircleLine } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { useAuth } from "@/context/AuthUserContext";
import { useRouter } from "next/router";

export const Navbar = ({nav, toggleNav}) => {
  const {user} = useAuth()

  const router = useRouter();

  const handleLogin = () => router.push("/login");

  // useEffect(() => {
  //   //
  // }, [nav])

  return (
    <div className={nav ? [styles.navbar, styles.showNav].join(' '): styles.navbar}>
      <button className={styles.closeMenu} onClick={toggleNav}>
        <AiOutlineClose />
        <span className="sr-only">close menu</span>
      </button>
      <SearchBar />
      <div>
        {user ? <button className={styles.btn} onClick={LogOut}>
          Sign Out <RiLogoutCircleRLine fontSize={24} />
        </button> : <button className={styles.btn} onClick={handleLogin}>
          Sign In <RiLoginCircleLine fontSize={24} />
        </button>}
      </div>
      <ul className={styles.navlist}>
        <li onClick={toggleNav}>
          <Link href="/">
          <p className={styles.links}>Home</p>
        </Link>
        </li>
        <li onClick={toggleNav}>
          <Link href="/movie">
          <p className={styles.links}>Movies</p>
        </Link>
        </li>
        <li onClick={toggleNav}>
          <Link href="/tv">
          <p className={styles.links}>TV</p>
        </Link>
        </li>
        <li onClick={toggleNav}>
          <Link href="/user">
          <p className={styles.links}>My Page</p>
        </Link>
        </li>
      </ul>
    </div>
  );
};

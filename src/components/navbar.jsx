import React, { useState } from "react";
import styles from "@/styles/Navbar.module.scss";
import Link from "next/link";
import LogOut from "@/lib/logout";
import { SearchBar } from "./searchBar";
import { RiLogoutCircleRLine, RiLoginCircleLine } from "react-icons/ri";
import { AiFillHome, AiOutlineClose } from "react-icons/ai";
import { IoMdTv } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { useAuth } from "@/context/AuthUserContext";
import { MdMovie } from "react-icons/md";
import Login from "./login";
import Signup from "./signUp";
import PasswordReset from "./passwordReset";

export const Navbar = ({ nav, toggleNav }) => {
  const [modal, setModal] = useState(null);

  const { user } = useAuth();

  const handleModal = (value) => {
    value === "login"
      ? setModal("login")
      : value === "signup"
      ? setModal("signup")
      : value === "reset"
      ? setModal("reset")
      : setModal("");
  };

  return (
    <>
      <div
        className={
          nav ? [styles.navbar, styles.showNav].join(" ") : styles.navbar
        }
      >
        <button className={styles.closeMenu} onClick={toggleNav}>
          <AiOutlineClose />
          <span className="sr-only">close menu</span>
        </button>
        <SearchBar />
        <ul className={styles.navlist}>
          <li onClick={toggleNav}>
            <Link href="/">
              <p className={styles.links}>
                <AiFillHome />
                <span className={styles.icon}>Home</span>
              </p>
            </Link>
          </li>
          <li onClick={toggleNav}>
            <Link href="/movie">
              <p className={styles.links}>
                <MdMovie />
                <span className={styles.icon}>Movies</span>
              </p>
            </Link>
          </li>
          <li onClick={toggleNav}>
            <Link href="/tv">
              <p className={styles.links}>
                <IoMdTv />
                <span className={styles.icon}>TV</span>
              </p>
            </Link>
          </li>
          {user ? (
            <li onClick={toggleNav}>
              <Link href="/user">
                <p className={styles.links}>
                  <FaUserAlt />
                  <span className={styles.icon}>My Page</span>
                </p>
              </Link>
            </li>
          ) : null}
          <li onClick={toggleNav}>
            {user ? (
              <p className={styles.links} onClick={LogOut}>
                <RiLogoutCircleRLine />
                <span className={styles.icon}>Sign Out</span>
              </p>
            ) : (
              <p className={styles.links} onClick={() => handleModal("login")}>
                <RiLoginCircleLine />
                <span className={styles.icon}>Sign In</span>
              </p>
            )}
          </li>
        </ul>
      </div>
      {modal === "login" && <Login toggle={handleModal} />}
      {modal === "signup" && <Signup toggle={handleModal} />}
      {modal === "reset" && <PasswordReset toggle={handleModal} />}
    </>
  );
};

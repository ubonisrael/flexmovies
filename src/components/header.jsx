import React, { useState } from "react";
import styles from "@/styles/Header.module.scss";
import { Navbar } from "./navbar";
import {AiOutlineMenu} from 'react-icons/ai'

export const Header = () => {
  const [nav, setNav] = useState(false)

  const toggleNav = () => {
    setNav(prev => !prev)
  }

  return (
      <header className={styles.header}>
        <h1 className={styles.title}>flexmovies</h1>
        <button className={styles.menuBtn} onClick={toggleNav}><AiOutlineMenu /><span className="sr-only">open menu</span></button>
        <Navbar nav={nav} toggleNav={toggleNav}/>
      </header>
  );
};

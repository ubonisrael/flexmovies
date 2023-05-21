import React from "react";
import styles from "@/styles/Footer.module.scss";
import Link from "next/link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <Link href="https://github.com/ubonisrael">
        <p>Developed by Ubonisrael Akpanudoh {currentYear}</p>
      </Link>
    </footer>
  );
};

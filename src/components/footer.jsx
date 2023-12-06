import React from "react";
import styles from "@/styles/Footer.module.scss";
import Link from "next/link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <Link href="https://ubonisrael-akpanudoh.vercel.app" target="_blank">
        <p>Developed with ❤️ by Ubonisrael Akpanudoh {currentYear}</p>
      </Link>
    </footer>
  );
};

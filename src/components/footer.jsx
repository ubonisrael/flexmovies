import React from "react";
import styles from "@/styles/Footer.module.scss";
import Link from "next/link";

export const Footer = () => (
  <footer className={styles.footer}>
    <Link href="https://ubonisrael-akpanudoh.vercel.app" target="_blank">
      <p>
        Developed with ❤️ by Ubonisrael Akpanudoh {new Date().getFullYear()}
      </p>
    </Link>
  </footer>
);

import Image from "next/image";
import { useState } from "react";
import styles from "@/styles/Card.module.scss";

export function ImageLoader({ path }) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <div className={styles.skeleton}></div>}
      <Image
        src={path}
        alt="movie image"
        fill
        sizes="(max-width: 400px) 100vw,
              (max-width: 300px) 50vw,
              (max-width: 200px) 33vw"
        onLoadingComplete={() => setLoading(false)}
      />
    </>
  );
}

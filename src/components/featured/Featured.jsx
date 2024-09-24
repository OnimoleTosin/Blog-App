import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import Link from "next/link";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, ONImole is here!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p2.png" alt="" fill  className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Simple Way to Inspire Your Inner Innovator</h1>
          <p className={styles.postDesc}>
           Whether you're an aspiring artist, a curious thinker, or simply lookig to add a touch of creativity to you routine, our journey together will remind you that creativity knows no bounds. Get ready to unlock a word of inovation and self-expression!
          </p>
          <Link href='/post' className={styles.button}>Read More..</Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;

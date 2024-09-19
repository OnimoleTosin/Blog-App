import React from "react";
import styles from "./menu.module.css";
import Image from "next/image";
import Link from "next/link";

const Menu = () => {
  return (
    <div className={styles.container}>

      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <div className={styles.items}>

        <Link href='/' className={styles.item}>
          <div className={styles.textContainer}>
            <span className={styles.category}>
              <span className={styles.travel}>
                Travel
              </span>
            </span>
            <h3 className={styles.postTitle}>
             A Journey Through Africa Nigeria Beauty: Exploring the Streets of Lagos
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>ONI Tee</span>
              <span className={styles.date}> - 15-10-24</span>

            </div>
          </div>
        </Link>

        <Link href='/' className={styles.item}>
          <div className={styles.textContainer}>
            <span className={styles.category}>
              <span className={styles.culture}>
                Culture
              </span>
            </span>
            <h3 className={styles.postTitle}>
            Navigating First Impressions: Introduce Yourself
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Ajibs Ken</span>
              <span className={styles.date}> - 12-09-24</span>
            </div>
          </div>
        </Link>

        <Link href='/' className={styles.item}>
          <div className={styles.textContainer}>
            <span className={styles.category}>
              <span className={styles.food}>
                Food
              </span>
            </span>
            <h3 className={styles.postTitle}>
             My Favorite Authentic Nigerian Jollof-Rice: Truely Amazing
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Feranmi John</span>
              <span className={styles.date}> - 11-09-24</span>
            </div>
          </div>
        </Link>

        <Link href='/' className={styles.item}>
          <div className={styles.textContainer}>
            <span className={styles.category}>
              <span className={styles.fashion}>
                Fashion
              </span>
            </span>
            <h3 className={styles.postTitle}>
            Fashion is Timeless and Flawless:Modern Philantropist Ajibs ken says
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Bayo Backend</span>
              <span className={styles.date}> - 07-05-24</span>
            </div>
          </div>
        </Link>
{/* 
        <Link href='/' className={styles.item}>
          <div className={styles.textContainer}>
            <span className={styles.category}>
              <span className={styles.coding}>
                Coding
              </span>
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>ONI Tee</span>
              <span className={styles.date}> - 15-10-24</span>
            </div>
          </div>
        </Link> */}
      </div>


      <h2 className={styles.subtitle}>Dscover By Topics</h2>
      <h1 className={styles.title}>Category</h1>
      <div className={styles.categoryList}>
        <Link
          href="/blog?cat=style"
          className={`${styles.categoryItem} ${styles.style}`}
        >
          Style
        </Link>
        <Link href="/blog" className={`${styles.categoryItem} ${styles.fashion}`}>
          Fashion
        </Link>
        <Link href="/blog" className={`${styles.categoryItem} ${styles.food}`}>
          Food
        </Link>
        <Link href="/blog" className={`${styles.categoryItem} ${styles.travel}`}>
          Travel
        </Link>
        <Link href="/blog" className={`${styles.categoryItem} ${styles.culture}`}>
          Culture
        </Link>
        <Link href="/blog" className={`${styles.categoryItem} ${styles.coding}`}>
          Coding
        </Link>
      </div>


      <h2 className={styles.subtitle}>Choosen By The Editor</h2>
      <h1 className={styles.title}>Editors Pick</h1>
      <div className={styles.items}>

        <Link href='/' className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src='/travel.png' alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={styles.category}>
              <span className={styles.travel}>
                Travel
              </span>
            </span>
            <h3 className={styles.postTitle}>
             A Journey Through Africa Nigeria Beauty: Exploring the Streets of Lagos
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>ONI Tee</span>
              <span className={styles.date}> - 15-10-24</span>

            </div>
          </div>
        </Link>

        <Link href='/' className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src='/culture.png' alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={styles.category}>
              <span className={styles.culture}>
                Culture
              </span>
            </span>
            <h3 className={styles.postTitle}>
            Navigating First Impressions: Introduce Yourself
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Ajibs Ken</span>
              <span className={styles.date}> - 12-09-24</span>
            </div>
          </div>
        </Link>

        <Link href='/' className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src='/food.png' alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={styles.category}>
              <span className={styles.food}>
                Food
              </span>
            </span>
            <h3 className={styles.postTitle}>
             My Favorite Authentic Nigerian Jollof-Rice: Truely Amazing
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Feranmi John</span>
              <span className={styles.date}> - 11-09-24</span>
            </div>
          </div>
        </Link>

        <Link href='/' className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src='/fashion.png' alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={styles.category}>
              <span className={styles.fashion}>
                Fashion
              </span>
            </span>
            <h3 className={styles.postTitle}>
            Fashion is Timeless and Flawless:Modern Philantropist Ajibs ken says
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Bayo Backend</span>
              <span className={styles.date}> - 07-05-24</span>
            </div>
          </div>
        </Link>

        {/* <Link href='/' className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src='/coding.png' alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={styles.category}>
              <span className={styles.coding}>
                Coding
              </span>
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>ONI Tee</span>
              <span className={styles.date}> - 15-10-24</span>
            </div>
          </div>
        </Link> */}
      </div>

    </div>
  );
};

export default Menu;

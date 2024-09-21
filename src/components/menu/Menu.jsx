"use client"

import { useState } from "react";
import styles from "./menu.module.css";
import Image from "next/image";
import Link from "next/link";
import Modal from '../modal/Modal'; // Import the modal component


const Menu = () => {
  const [selectedItem, setSelectedItem] = useState(null); // State to manage the selected item
  const [isModalOpen, setIsModalOpen] = useState(false);  // State to manage modal visibility

  const openModal = (item) => {
    setSelectedItem(item);  // Set the selected item when a link is clicked
    setIsModalOpen(true);   // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false);  // Close the modal
  };
  const hotItems = [
    {
      category: "Travel",
      title: "A Journey Through Africa Nigeria Beauty: Exploring the Streets of Lagos",
      username: "ONI Tee",
      date: "15-10-24",
    },
    {
      category: "Culture",
      title: "Navigating First Impressions: Introduce Yourself",
      username: "Ajibs Ken",
      date: "12-09-24",
    },
    {
      category: "Food",
      title: "My Favorite Authentic Nigerian Jollof-Rice: Truely Amazing",
      username: "Feranmi John",
      date: "11-09-24",
    },
    {
      category: "Fashion",
      title: "Fashion is Timeless and Flawless: Modern Philantropist Ajibs Ken says",
      username: "Bayo Backend",
      date: "07-05-24",
    },
  ];


  return (
    <div className={styles.container}>

      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <div className={styles.items}>

      {hotItems.map((item, index) => (
          <div key={index} className={styles.item} onClick={() => openModal(item)}>
            <div className={styles.textContainer}>
              <span className={styles.category}>
                <span className={styles[item.category.toLowerCase()]}>
                  {item.category}
                </span>
              </span>
              <h3 className={styles.postTitle}>{item.title}</h3>
              <div className={styles.detail}>
                <span className={styles.username}>{item.username}</span>
                <span className={styles.date}> - {item.date}</span>
              </div>
            </div>
          </div>
        ))}
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
      {isModalOpen && <Modal item={selectedItem} closeModal={closeModal} />} {/* Show modal when isModalOpen is true */}



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

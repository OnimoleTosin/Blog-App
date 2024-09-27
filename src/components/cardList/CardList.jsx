"use client";
import { useState } from 'react'; // Import useState
import Pagination from '../pagination/Pagination';
import styles from './cardList.module.css';
import Card from '../card/Card';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'; // Import icons

const CardList = ({ posts }) => { // Accept posts as prop
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Post</h1>
      <div className={styles.posts}>
        {posts.map((post, index) => (
          <div key={post.id} className={styles.coding}>
            <div className={styles.imageContainer}>
              <Image src={post.img} alt="" fill className={styles.image} />
            </div>

            <div className={styles.textContainer}>
              <div className={styles.details}>
                <span className={styles.date}>{post.date} - </span>
                <span className={styles.category}>{post.category}</span>
              </div>
              <Link href='/'>
                <h3>{post.title}</h3>
              </Link>
              <p className={styles.desc}>
                {expanded[index] ? post.fullText : post.desc}
              </p>

              <button onClick={() => toggleExpand(index)} className={styles.link}>
                {expanded[index] ? 'Show Less' : 'Read More'}
                {expanded[index] ? (
                  <FaChevronUp className={styles.icon} />
                ) : (
                  <FaChevronDown className={styles.icon} />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
      <Pagination/>
    </div>
  );
};

export default CardList;

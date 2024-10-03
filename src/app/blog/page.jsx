"use client";

import { useEffect, useState } from 'react';
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/Menu/Menu";
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import styles from '../blog/blogPage.module.css'

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(savedPosts);
  }, []);

  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}> Blogs </h1>
      <div className={styles.cardListContainer}>

        <div className={styles.my6}>
          {posts.length === 0 ? (
            <p className={styles.noPosts}>No blog posts yet.</p>
          ) : (
            <div className={styles.postContainer}>
              {posts.map((post, index) => (
                <div key={post.id} className={styles.post}>
                  <div className={styles.imageContainer}>
                    <Image src={post.image || "/default.png"} alt="" fill className={styles.image} />
                  </div>
                  <div className={styles.textContainer}>

                    <div className={styles.details}>
                      <span className={styles.date}>{post.date} - </span>
                      <span className={styles.category}>{post.category}</span>
                    </div>
                    <Link href={`/posts/${post.id}`}>
                      <h2 className={styles.title}>{post.title}</h2>
                    </Link>

                    <div className={styles.content}>
                      {expanded[index]
                        ? post.content
                        : `${post.content?.substring(0, 100) || ''}...`}
                    </div>
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
          )}
        </div>
      </div>
      <div className={styles.cardListContainer}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;

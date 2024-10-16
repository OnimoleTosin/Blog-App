// components/FashionPage.jsx
"use client";

import { useState } from "react";
import styles from "../fashion/fashion.module.css";


export const fashionPosts = [
    {
      id: 1,
      title: "The Ultimate Guide to Summer Fashion",
      author: "Jane Doe",
      date: "10.09.2024",
      img: "/summer-fashion.jpg",
      desc: "Explore the hottest trends for this summer with bright colors and flowing dresses...",
      fullText: "In this guide, we'll explore the hottest trends for this summer with bright colors, flowing dresses, and comfortable yet stylish shoes that will keep you cool and fashionable...",
    },
    {
      id: 2,
      title: "Top 10 Fashion Trends for Fall 2024",
      author: "John Smith",
      date: "02.10.2024",
      img: "/fall-fashion.jpg",
      desc: "This fall, get ready for bold patterns, cozy sweaters, and sustainable fashion...",
      fullText: "This fall, get ready for bold patterns, cozy sweaters, and sustainable fashion. In this article, we break down the top trends you must try this season...",
    },
    {
      id: 3,
      title: "How to Style High-Waisted Pants",
      author: "Emily Brown",
      date: "15.09.2024",
      img: "/high-waisted.jpg",
      desc: "High-waisted pants are in style, but how can you make them work for any occasion...",
      fullText: "High-waisted pants are versatile, allowing you to style them for work, a casual day out, or even a chic dinner date. Here's how you can style them perfectly for any occasion...",
    },
  ];
  

const FashionPage = () => {
  const [expanded, setExpanded] = useState({});
  const filteredPost = fashionPosts.filter(blog => blog.author === 'Emily Brown')

  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Fashion Articles</h1>
      <div className={styles.posts}>
        {fashionPosts.map((post, index) => (
          <div key={post.id} className={styles.post}>
            <img src={post.img} alt={post.title} className={styles.image} />
            <div className={styles.details}>
              <h2 className={styles.postTitle}>{post.title}</h2>
              <p className={styles.author}>By {post.author} - {post.date}</p>
              <p className={styles.desc}>
                {expanded[index] ? post.fullText : post.desc}
              </p>
              <button
                className={styles.toggleButton}
                onClick={() => toggleExpand(index)}
              >
                {expanded[index] ? "Show Less" : "Read More"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FashionPage;

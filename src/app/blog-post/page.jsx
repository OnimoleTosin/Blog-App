// pages/blog.js
"use client"

import { useState } from "react";
import blogPosts from "../../components/AllBlogs/index";
import styles from "../blog-post/blog-post.module.css";

const BlogPost = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "fashion", "food", "coding", "travels", "styles"];

  const filteredPosts =
    selectedCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className={styles.blogContainer}>
      <h1 className={styles.header}>Our Blog</h1>
      <div className={styles.filterContainer}>
        <select
          className={styles.dropdown}
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.postsGrid}>
        {filteredPosts.map((post) => (
          <div key={post.id} className={styles.postCard}>
            <img src={post.img} alt={post.title} className={styles.postImage} />
            <h2 className={styles.postTitle}>{post.title}</h2>
            <p className={styles.postDesc}>{post.desc}</p>
            <p className={styles.postAuthor}>{post.author} - {post.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPost;

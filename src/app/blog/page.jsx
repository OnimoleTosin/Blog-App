"use client";

import { useEffect, useState } from "react";
import CardList from "../../components/cardList/CardList";
import Menu from "../../components/Menu/Menu";
import Image from "next/image";
import Link from "next/link";
import { FaChevronUp, FaChevronDown, FaHeart, FaCommentAlt } from "react-icons/fa";
import styles from "../blog/blogPage.module.css";

const BlogPage = () => {


  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this post?")) {
      const updatedPosts = JSON.parse(localStorage.getItem('posts')).filter(
        (p) => p.id !== post.id
      );
      localStorage.setItem('posts', JSON.stringify(updatedPosts));
      router.push('/blog');
    }
  };


  const [posts, setPosts] = useState([]);
  const [expanded, setExpanded] = useState({});
  const [likes, setLikes] = useState({});
  const [comments, setComments] = useState({});

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    const savedLikes = JSON.parse(localStorage.getItem("likes")) || {};
    const savedComments = JSON.parse(localStorage.getItem("comments")) || {};
    setPosts(savedPosts);
    setLikes(savedLikes);
    setComments(savedComments);
  }, []);

  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const handleLike = (postId) => {
    const updatedLikes = { ...likes, [postId]: (likes[postId] || 0) + 0 };
    setLikes(updatedLikes);
    localStorage.setItem("likes", JSON.stringify(updatedLikes));
  };

  const capitalizeCategory = (category) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}> Blogs </h1>

      {/* "Create New Post" Button */}
      <div className={styles.createPostButtonContainer}>
        <Link href="/write">
          <button className={styles.createPostButton}>Create New Post</button>
        </Link>
      </div>

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
                      <span className={styles.category}>{capitalizeCategory(post.category)}</span>
                    </div>
                    <Link href={`/posts/${post.id}`}>
                      <h2 className={styles.title}>{post.title}</h2>
                    </Link>
                    <div className={styles.content}>
                      {expanded[index]
                        ? post.content
                        : `${post.content?.substring(0, 100) || ""}...`}
                    </div>

                    {/* Like and Comment buttons */}
                    <div className={styles.interactionButtons}>
                      <button onClick={() => handleLike(post.id)} className={styles.likeButton}>
                        <FaHeart className={styles.icon} />
                        {likes[post.id] || 0} Likes
                      </button>
                      <Link href={`/posts/${post.id}`}>
                        <button className={styles.commentButton}>
                          <FaCommentAlt className={styles.icon} />
                        </button>
                      </Link>
                    </div>

                    <button onClick={() => toggleExpand(index)} className={styles.link}>
                      {expanded[index] ? "Show Less" : "Read More"}
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

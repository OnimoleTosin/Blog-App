"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Use 'next/navigation' for app directory
import styles from '../PostDetails.module.css';
import Comments from "@/components/comments/Comments";
import Menu from "../../../components/menu/Menu";
import Image from 'next/image';

const PostDetails = () => {
  const router = useRouter();
  const [post, setPost] = useState(null);
  const [isReady, setIsReady] = useState(false); // State to check if router is ready

  // UseEffect to wait for the router to be ready
  useEffect(() => {
    if (!router) return;
    setIsReady(true); // Once the router is available, set ready to true
  }, [router]);

  useEffect(() => {
    if (!isReady) return;

    // Get post ID from the URL query once router is ready
    const id = parseInt(window.location.pathname.split('/').pop()); // Extract ID from URL
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    const post = savedPosts.find((post) => post.id === id); // Ensure IDs are compared as numbers
    setPost(post);
  }, [isReady]);

  if (!post) return <p>Post not found. Please check the URL.</p>; // Handle missing post

  const handleEdit = () => {
    const title = prompt("Edit Title", post.title);
    const content = prompt("Edit Content", post.content);
    const image = prompt("Edit Image", post.image);

    if (title !== null && content !== null) {
      const updatedPosts = JSON.parse(localStorage.getItem('posts')).map((p) =>
        p.id === post.id ? { ...p, title, content, image } : p
      );
      localStorage.setItem('posts', JSON.stringify(updatedPosts));
      setPost({ ...post, title, content, image });
    }
  };

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this post?")) {
      const updatedPosts = JSON.parse(localStorage.getItem('posts')).filter(
        (p) => p.id !== post.id
      );
      localStorage.setItem('posts', JSON.stringify(updatedPosts));
      router.push('/blog');
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}> {post.title}</h1>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.post}>
            <div className={styles.description}>{post.content}
            </div>
            <div className={styles.comment}>
              <Comments />
            </div>
          </div>
          <Menu />
        </div>
      </div>



      <div className={styles.buttons}>
          <button className={styles.editButton} onClick={handleEdit}>
            Edit
          </button>
          <button className={styles.deleteButton} onClick={handleDelete}>
            Delete
          </button>
        </div>  {/*
     <div className={styles.comment}>
        <Comments />
      </div>  */}
    </>
  );
};

export default PostDetails;

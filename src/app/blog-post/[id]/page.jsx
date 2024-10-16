"use client"
import { useRouter } from 'next/navigation';
import blogPosts from '../../../components/AllBlogs/index';
import styles from '../blog-post.module.css';

const BlogDetails = () => {
  const router = useRouter();
  const { id } = router.query; // Retrieve 'id' from the URL

  const post = blogPosts.find((post) => post.id === parseInt(id));

  if (!post) return <p>Post not found</p>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{post.title}</h1>
      <img src={post.img} alt={post.title} className={styles.image} />
      <p>{post.content}</p>
      <p>Written by {post.author} on {post.date}</p>
    </div>
  );
};

export default BlogDetails;


// src/app/posts/[id]/page.jsx

"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const PostPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (id) {
      const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
      const selectedPost = savedPosts.find((post) => post.id === Number(id));
      setPost(selectedPost);
    }
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      {/* Edit and Delete buttons here */}
    </div>
  );
};

export default PostPage;

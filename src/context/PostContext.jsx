"use client";  // Mark as client-side for client components

import { createContext, useState } from "react";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Easiest Way for React State Management.',
      category: 'CODING',
      date: '15.10.2024',
      desc: 'State Management is one of the most important concepts in React world...',
      fullText: 'State Management is one of the most important concepts in React world...',
      img: '/coding.png',
    },
    {
      id: 2,
      title: 'Some Things I Wish I Could Do Again.',
      category: 'STYLES',
      date: '15.10.2024',
      desc: 'For some reasons, my stupid ass keeps attracting girls...',
      fullText: 'For some reasons, my stupid ass keeps attracting girls...',
      img: '/style.png',
    },
  ]);

  const handlePublish = (newPost) => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  return (
    <PostContext.Provider value={{ posts, handlePublish }}>
      {children}
    </PostContext.Provider>
  );
};

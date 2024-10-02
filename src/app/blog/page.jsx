// src/pages/blog/page.jsx

"use client";

import { useEffect, useState } from 'react';
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/Menu/Menu";
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

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
    <div className="flex-col">
      <h1 className="text-white bg-orange-500 align-middle p-1.5 px-2.5 text-center capitalize">Blog</h1>
      
      {/* Display the posts like cards */}
      <div className="my-6">
        {posts.length === 0 ? (
          <p className="text-gray-500">No blog posts yet.</p>
        ) : (
          <div className="flex flex-col gap-10">
            {posts.map((post, index) => (
              <div key={post.id} className="flex gap-10 mb-6">
                <div className="relative w-1/2 h-64">
                  <Image src={post.image || "/default.png"} alt="" fill className="object-cover" />
                </div>
                <div className="flex-1 flex flex-col gap-6">
                  <div className="text-sm text-gray-500">{post.date} - {post.category}</div>
                  <Link href={`/posts/${post.id}`}>
                    <h2 className="text-red-600 font-bold cursor-pointer">{post.title}</h2>
                  </Link>
                  <p className="text-gray-700">
                    {expanded[index]
                      ? post.content
                      : `${post.content?.substring(0, 100) || ''}...`
                    }
                  </p>
                  <button onClick={() => toggleExpand(index)} className="text-crimson flex items-center gap-2">
                    {expanded[index] ? 'Show Less' : 'Read More'}
                    {expanded[index] ? (
                      <FaChevronUp className="text-sm" />
                    ) : (
                      <FaChevronDown className="text-sm" />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Display CardList and Menu components */}
      <div className="flex gap-10">
        <CardList />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;

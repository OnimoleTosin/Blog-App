"use client";

import Image from "next/image";
import styles from "./writePage.module.css";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css"
import { useRouter } from 'next/navigation';


const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');


  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    const newPost = { title, content, id: Date.now() };

    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    savedPosts.push(newPost);
    localStorage.setItem('posts', JSON.stringify(savedPosts));

    router.push('/blog');
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        className={styles.input}
      />
      <select className={styles.select}>
        <option value="style">style</option>
        <option value="fashion">fashion</option>
        <option value="food">food</option>
        <option value="culture">culture</option>
        <option value="travel">travel</option>
        <option value="coding">coding</option>
      </select>
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src="/plus.png" alt="" width={36} height={26} />
        </button>
        {open && (
          <div className={styles.add}>
            <input
              type="file"
              id="image"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
            <button className={styles.addButton}>
              <label htmlFor="image">
                <Image src="/image.png" alt="" width={16} height={16} />
              </label>
            </button>
            <button className={styles.addButton}>
              <Image src="/external.png" alt="" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/video.png" alt="" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={content}
          onChange={setContent}
          placeholder="Tell your story..."
        />
      </div>
      <button type="submit" className={styles.publish}
      >
        Publish
      </button>
      </form>

    </div>
  );
};

export default WritePage;

"use client";

import Image from "next/image";
import styles from "./writePage.module.css";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { useRouter } from 'next/navigation';

const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null); // State to hold the selected image
  const [category, setCategory] = useState(''); // To hold the category value

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    let imageBase64 = null;
    if (file) {
      imageBase64 = await convertToBase64(file); // Convert image to base64 string
    }

    const newPost = {
      title,
      content,
      category,
      image: imageBase64, // Store the base64 image in the post
      id: Date.now(),
      date: new Date().toLocaleDateString(),
    };

    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    savedPosts.push(newPost);
    localStorage.setItem('posts', JSON.stringify(savedPosts));

    router.push('/blog'); 
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.onerror = (error) => {
        reject(error);
      };
    });
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
        <select
          className={styles.select}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="style">Style</option>
          <option value="fashion">Fashion</option>
          <option value="food">Food</option>
          <option value="culture">Culture</option>
          <option value="travel">Travel</option>
          <option value="coding">Coding</option>
        </select>
        <div className={styles.editor}>
          <button
            className={styles.button}
            type="button"
            onClick={() => setOpen(!open)}
          >
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
              <label htmlFor="image" className={styles.addButton}>
                <Image src="/image.png" alt="" width={16} height={16} />
              </label>
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
        <button type="submit" className={styles.publish}>
          Publish
        </button>
      </form>
    </div>
  );
};

export default WritePage;

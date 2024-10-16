"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";

const Comments = () => {
    const [comments, setComments] = useState([
        {
            id: 1,
            username: "Ajibs Ken",
            date: "15.10.2024",
            desc: "This really spoke to me! Sometimes we just need to embrace failure as part of the journey. Great reminder to stay curious and keep pushing forward.",
            image: "/pk.jpg"
        },
        {
            id: 2,
            username: "Black Water",
            date: "14.10.2024",
            desc: "Incredible message! Innovation truly comes from stepping out of comfort zones and daring to think differently. Love the positivity!",
            image: "/pi.PNG"
        },
        {
            id: 3,
            username: "Christie",
            date: "13.10.2024",
            desc: "Such an inspiring read! I often forget that failure is just a lesson, not the end. Thanks for sharing this. That's why I'm so into you.",
            image: "/pc.jpg"
        },
        {
            id: 4,
            username: "Fareedah",
            date: "13.10.2024",
            desc: "Wow, this hit home! Curiosity is the key to growth. Time to start asking more 'why' and 'how'.",
            image: "/pf.JPG"
        },
        {
            id: 5,
            username: "Mi-Mi",
            date: "11.10.2024",
            desc: "Exactly what I needed today! Sometimes we just need a reminder that every challenge is an opportunity to innovate.",
            image: "/pm.jpg"
        }
    ]);

    const [newComment, setNewComment] = useState("");
    const status = "authenticated";

    const handleSendComment = () => {
        if (newComment.trim()) {
            const newCommentData = {
                id: comments.length + 1,
                username: "ONimole Sodiq Oluwatosin", // You can replace this with the authenticated user's username
                date: new Date().toLocaleDateString(),
                desc: newComment,
                image: "/p2.png" // Replace with the user's image or avatar
            };
            // Add new comment to the top of the list
            setComments([newCommentData, ...comments]);
            setNewComment(""); // Clear input after sending
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Comments</h1>
            {status === "authenticated" ? (
                <div className={styles.write}>
                    <textarea
                        placeholder="Write a comment..."
                        className={styles.input}
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                    />
                    <button className={styles.button} onClick={handleSendComment}>Send</button>
                </div>
            ) : (
                <Link href="/login">Login to write a comment</Link>
            )}

            <div className={styles.comments}>
                {comments.map((comment) => (
                    <div key={comment.id} className={styles.comment}>
                        <div className={styles.user}>
                            <Image
                                src={comment.image}
                                alt=""
                                width={50}
                                height={50}
                                className={styles.image}
                            />
                            <div className={styles.userInfo}>
                                <span className={styles.username}>{comment.username}</span>
                                <span className={styles.date}>{comment.date}</span>
                            </div>
                        </div>
                        <p className={styles.desc}>{comment.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Comments;

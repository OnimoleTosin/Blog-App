"use client";

import { useState } from "react";
import styles from '../travels/travels.module.css';

const foodsData = [
    {
        title: "Explore the Delicious Chicken Wings",
        image: "/chicken-wings.JPG",
        description: "A thrilling adventure across the majestic Alps.",
        author: "John Doe",
        date: "September 12, 2024",
    },
    {
        title: "Tropical Paradise in Bali",
        image: "/crispy.JPG",
        description: "Relax in the tropical paradise of Bali, Indonesia.",
        author: "Jane Smith",
        date: "August 30, 2024",
    },
];

const Foods = () => {
    const [expanded, setExpanded] = useState({});

    const toggleExpand = (index) => {
        setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Food Experties</h1>
            <div className={styles.travelsGrid}>
                {foodsData.map((travel, index) => (
                    <div key={index} className={styles.card}>
                        <img src={travel.image} alt={travel.title} className={styles.image} />
                        <h2 className={styles.cardTitle}>{travel.title}</h2>
                        <p className={styles.description}>{travel.description}</p>
                        <div className={styles.meta}>
                            <span>Posted by {travel.author}</span>
                            <span> | {travel.date}</span>
                        </div>
                        {/* <button
                            className={styles.toggleButton}
                            onClick={() => toggleExpand(index)}
                        >
                            {expanded[index] ? "Show Less" : "Read More"}
                        </button> */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Foods;

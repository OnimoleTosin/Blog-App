// pages/travels.js
import styles from '../travels/travels.module.css';

const travelsData = [
  {
    title: "Explore the Alps",
    image: "/mountain.jpeg",
    description: "A thrilling adventure across the majestic Alps.",
    author: "John Doe",
    date: "September 12, 2024",
  },
  {
    title: "Tropical Paradise in Bali",
    image: "/japan.jpeg",
    description: "Relax in the tropical paradise of Bali, Indonesia.",
    author: "Jane Smith",
    date: "August 30, 2024",
  },
  {
    title: "City Lights of New York",
    image: "/new-york.jpeg",
    description: "Discover the vibrant energy of New York City.",
    author: "Emily Davis",
    date: "July 21, 2024",
  },
];

const Travels = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Travel Destinations</h1>
      <div className={styles.travelsGrid}>
        {travelsData.map((travel, index) => (
          <div key={index} className={styles.card}>
            <img src={travel.image} alt={travel.title} className={styles.image} />
            <h2 className={styles.cardTitle}>{travel.title}</h2>
            <p className={styles.description}>{travel.description}</p>
            <div className={styles.meta}>
              <span>Posted by {travel.author}</span>
              <span> | {travel.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Travels;

import { useState } from 'react'; // Import useState
import Pagination from '../pagination/Pagination';
import styles from './cardList.module.css';
import Card from '../card/Card';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'; // Import icons

const CardList = () => {
  // State to manage expanded posts
  const [expanded, setExpanded] = useState({});

  // Function to toggle expand/collapse
  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const posts = [
    {
      id: 1,
      title: 'Easiest Way for React State Management.',
      category: 'CODING',
      date: '15.10.2024',
      desc: 'State Management is one of the most important concepts in React world...',
      fullText: 'State Management is one of the most important concepts in React world. React’s one-way data flow makes it crucial to properly manage state across components, especially for larger applications. There are different ways to manage state, including Context API, Redux, Zustand, and more. Each has its strengths and is suited to different kinds of projects.',
      img: '/coding.png',
    },
    {
      id: 2,
      title: 'Some Things I Wish I Could Do Again.',
      category: 'STYLES',
      date: '15.10.2024',
      desc: 'For some reasons, my stupid ass keeps attracting girls that are so into me but...',
      fullText: 'For some reasons, my stupid ass keeps attracting girls that are so into me but they always end up being wrong for me, or me being wrong for them. Maybe it’s karma, maybe it’s my choices. Who knows? But life is one continuous learning journey...',
      img: '/style.png',
    },
    {
      id: 3,
      title: 'What Nobody Tells You About Taking a Career Break.',
      category: 'CODING',
      date: '15.10.2024',
      desc: 'Once we’ve learned how to do something, we become "unconsciously compet"...',
      fullText: 'Once we’ve learned how to do something, we become "unconsciously competent." Taking a break, though, makes us question those skills again. The real trick is learning how to maintain that confidence while giving yourself permission to rest and recharge. The fear is real, but so is the growth you experience afterward.',
      img: '/coding.png',
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Post</h1>
      <div className={styles.posts}>
        {posts.map((post, index) => (
          <div key={post.id} className={styles.coding}>
            <div className={styles.imageContainer}>
              <Image src={post.img} alt="" fill className={styles.image} />
            </div>

            <div className={styles.textContainer}>
              <div className={styles.details}>
                <span className={styles.date}>{post.date} - </span>
                <span className={styles.category}>{post.category}</span>
              </div>
              <Link href='/'>
                <h3>{post.title}</h3>
              </Link>
              <p className={styles.desc}>
                {expanded[index] ? post.fullText : post.desc}
              </p>

              {/* Toggle between "Read More" and "Show Less" */}
              <button onClick={() => toggleExpand(index)} className={styles.link}>
                {expanded[index] ? 'Show Less' : 'Read More'}
                {expanded[index] ? (
                  <FaChevronUp className={styles.icon} />
                ) : (
                  <FaChevronDown className={styles.icon} />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;

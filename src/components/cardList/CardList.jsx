import Pagination from '../pagination/Pagination'
import styles from './cardList.module.css'
import Card from '../card/Card'
import Image from 'next/image'
import Link from 'next/link'


const CardList = () => {
  return (
    <div className={styles.container} >
      <h1 className={styles.title}>Recent Post</h1>
      <div className={styles.posts}>
        <Card />

        <div className={styles.coding}>
          <div className={styles.imageContainer}>
            <Image src="/coding.png" alt="" fill className={styles.image} />
          </div>

          <div className={styles.textContainer}>
            <div className={styles.details}>
              <span className={styles.date}>15.10.2024 - </span>
              <span className={styles.category}>CODING</span>
            </div>
            <Link href='/'>
              <h3>Easiest Way for React State Management.</h3>
            </Link>
            <p className={styles.desc}>
              State Management is one of the most important concepts in React world...
            </p>
            <Link href='/' className={styles.link}>Read More</Link>
          </div>
        </div>

         <div className={styles.coding}>
          <div className={styles.imageContainer}>
            <Image src="/style.png" alt="" fill className={styles.image} />
          </div>

          <div className={styles.textContainer}>
            <div className={styles.details}>
              <span className={styles.date}>15.10.2024 - </span>
              <span className={styles.category}>STYLES</span>
            </div>
            <Link href='/'>
              <h3>Some Things I Wish I Could Do Again.</h3>
            </Link>
            <p className={styles.desc}>
             For some reasons, my stupid ass keeps attracting girls that are so into me but...
            </p>
            <Link href='/' className={styles.link}>Read More</Link>
          </div>
        </div>

        <div className={styles.coding}>
          <div className={styles.imageContainer}>
            <Image src="/coding.png" alt="" fill className={styles.image} />
          </div>

          <div className={styles.textContainer}>
            <div className={styles.details}>
              <span className={styles.date}>15.10.2024 - </span>
              <span className={styles.category}>CODING</span>
            </div>
            <Link href='/'>
              <h3>What Nobody Tells You About Taking a Career Break.</h3>
            </Link>
            <p className={styles.desc}>
              Once we've learned how to do something, we become 'unconsciously compet'...
            </p>
            <Link href='/' className={styles.link}>Read More</Link>
          </div>
        </div>

      </div>
      <Pagination />
    </div>
  )
}

export default CardList

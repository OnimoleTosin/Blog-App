import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Card = () => {
    return (
        <div className={styles.container}>

            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.image} />
            </div>

            <div className={styles.textContainer}>
                <div className={styles.details}>
                    <span className={styles.date}>15.10.2024 - </span>
                    <span className={styles.category}>CULTURE</span>
                </div>
                <Link href='/'>
                    <h3>Lorem gufyuf dolor sit amet alim consectetur adipisicing elit.</h3>
                </Link>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Cupiditate, quam nisi magni ea laborum inventore voluptatum
                    laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
                    quisquam! Harum unde sit culpa debitis.
                </p>
                <Link href='/' className={styles.link}>Read More</Link>

            </div>
        </div>


    )
}

export default Card

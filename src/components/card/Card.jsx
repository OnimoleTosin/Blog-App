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
                    <h3>New Visual Feature is a Game Changer.</h3>
                </Link>
                <p className={styles.desc}>
                    Apple just revealed a new feature in their new released product that catapults the minds of...
                </p>
                <Link href='/' className={styles.link}>Read More</Link>

            </div>
        </div>


    )
}

export default Card

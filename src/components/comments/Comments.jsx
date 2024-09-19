"use client";

import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";


const Comments = () => {
    const status = "authenticated"


    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Comments</h1>
            {status === "authenticated" ? (
                <div className={styles.write}>
                    <textarea placeholder="write a comment..." className={styles.input}
                    />
                    <button className={styles.button} >Send </button>
                </div>
            ) : (
                <Link href="/login">Login to write a comment</Link>
            )}
            <div className={styles.comments}>

            <div className={styles.comment} >
                    <div className={styles.user}>
                        <div className={styles.user}>
                            <Image src='/pk.jpg' alt="" width={50} height={50} className={styles.image} />
                            <div className={styles.userInfo}>
                                <span className={styles.username}>Ajibs Ken</span>
                                <span className={styles.date}>15.10.2024</span>
                            </div>
                        </div>
                    </div>
                    <p className={styles.desc}>"This really spoke to me! Sometimes we just need to embrace failure as part of the journey. Great reminder to stay curious and keep pushing forward.</p>
                </div>

                <div className={styles.comment} >
                    <div className={styles.user}>
                        <div className={styles.user}>
                            <Image src='/pi.PNG' alt="" width={50} height={50} className={styles.image} />
                            <div className={styles.userInfo}>
                                <span className={styles.username}>Black Water</span>
                                <span className={styles.date}>14.10.2024</span>
                            </div>
                        </div>
                    </div>
                    <p className={styles.desc}>Incredible message! Innovation truly comes from stepping out of comfort zones and daring to think differently. Love the positivity!</p>
                </div>

                <div className={styles.comment} >
                    <div className={styles.user}>
                        <div className={styles.user}>
                            <Image src='/pc.jpg' alt="" width={50} height={50} className={styles.image} />
                            <div className={styles.userInfo}>
                                <span className={styles.username}>Christie</span>
                                <span className={styles.date}>13.10.2024</span>
                            </div>
                        </div>
                    </div>
                    <p className={styles.desc}>Such an inspiring read! I often forget that failure is just a lesson, not the end. Thanks for sharing this.
                        That's why i'm so into you.
                    </p>
                </div>

                <div className={styles.comment} >
                    <div className={styles.user}>
                        <div className={styles.user}>
                            <Image src='/pf.JPG' alt="" width={50} height={50} className={styles.image} />
                            <div className={styles.userInfo}>
                                <span className={styles.username}>Fareedah</span>
                                <span className={styles.date}>13.10.2024</span>
                            </div>
                        </div>
                    </div>
                    <p className={styles.desc}>Wow, this hit home! Curiosity is the key to growth. Time to start asking more 'why' and 'how'.</p>
                </div>

                <div className={styles.comment} >
                    <div className={styles.user}>
                        <div className={styles.user}>
                            <Image src='/pm.jpg' alt="" width={50} height={50} className={styles.image} />
                            <div className={styles.userInfo}>
                                <span className={styles.username}>Mi-Mi</span>
                                <span className={styles.date}>11.10.2024</span>
                            </div>
                        </div>
                    </div>
                    <p className={styles.desc}>Exactly what I needed today! Sometimes we just need a reminder that every challenge is an opportunity to innovate</p>
                </div>
            </div>
        </div>
    );
};

export default Comments;

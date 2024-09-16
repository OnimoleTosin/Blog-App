// import Link from 'next/link'
// import styles from './comments.module.css'

// const Comments = () => {
//     const status ="authenticated"

//   return (

//     <div className={styles.container}>
//       <h1 className={styles.title}>Comments</h1>
//       {status === "authenticated" ? (
//         <div  className={styles.write}>
//           <textarea placeholder="write a comment ..." className={styles.ink}></textarea>
//           <button className={styles.button}>Send</button>
//         </div>
//       ) : (
//         <>
//           <Link href="/login" className={styles.link}>
//             Login to Write a comment
//           </Link>
//         </> 
//       )}    
//       </div>
//   )
// }

// export default Comments


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
                    // onChange={(e) => setDesc(e.target.value)}
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
                            <Image src='/p1.jpeg' alt="" width={50} height={50} className={styles.image} />
                            <div className={styles.userInfo}>
                                <span className={styles.username}>ONImole</span>
                                <span className={styles.date}>15.10.2024</span>
                            </div>
                        </div>
                    </div>
                    <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Enim necessitatibus similique aspernatur obcaecati veritatis. Aperiam cum porro sequi, totam minima consequuntur, aspernatur deleniti vero repellendus dorales.</p>
                </div>

                <div className={styles.comment} >
                    <div className={styles.user}>
                        <div className={styles.user}>
                            <Image src='/p1.jpeg' alt="" width={50} height={50} className={styles.image} />
                            <div className={styles.userInfo}>
                                <span className={styles.username}>ONImole</span>
                                <span className={styles.date}>15.10.2024</span>
                            </div>
                        </div>
                    </div>
                    <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Enim necessitatibus similique aspernatur obcaecati veritatis. Aperiam cum porro sequi, totam minima consequuntur, aspernatur deleniti vero repellendus dorales.</p>
                </div>

                <div className={styles.comment} >
                    <div className={styles.user}>
                        <div className={styles.user}>
                            <Image src='/p1.jpeg' alt="" width={50} height={50} className={styles.image} />
                            <div className={styles.userInfo}>
                                <span className={styles.username}>ONImole</span>
                                <span className={styles.date}>15.10.2024</span>
                            </div>
                        </div>
                    </div>
                    <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Enim necessitatibus similique aspernatur obcaecati veritatis. Aperiam cum porro sequi, totam minima consequuntur, aspernatur deleniti vero repellendus dorales.</p>
                </div>

                <div className={styles.comment} >
                    <div className={styles.user}>
                        <div className={styles.user}>
                            <Image src='/p1.jpeg' alt="" width={50} height={50} className={styles.image} />
                            <div className={styles.userInfo}>
                                <span className={styles.username}>ONImole</span>
                                <span className={styles.date}>15.10.2024</span>
                            </div>
                        </div>
                    </div>
                    <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Enim necessitatibus similique aspernatur obcaecati veritatis. Aperiam cum porro sequi, totam minima consequuntur, aspernatur deleniti vero repellendus dorales.</p>
                </div>

                <div className={styles.comment} >
                    <div className={styles.user}>
                        <div className={styles.user}>
                            <Image src='/p1.jpeg' alt="" width={50} height={50} className={styles.image} />
                            <div className={styles.userInfo}>
                                <span className={styles.username}>ONImole</span>
                                <span className={styles.date}>15.10.2024</span>
                            </div>
                        </div>
                    </div>
                    <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Enim necessitatibus similique aspernatur obcaecati veritatis. Aperiam cum porro sequi, totam minima consequuntur, aspernatur deleniti vero repellendus dorales.</p>
                </div>
            </div>
        </div>
    );
};

export default Comments;

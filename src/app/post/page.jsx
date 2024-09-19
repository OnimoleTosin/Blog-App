import Comments from "@/components/comments/Comments";
import Menu from "../../components/menu/Menu";
import styles from "./post.module.css";
import Image from "next/image";



const PostPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}> Way to Inspire Your Inner Innovator.</h1>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                            <Image src="/p2.png" alt="" fill className={styles.avatar} />
                        </div>
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>ONImole Sodiq</span>
                            <span className={styles.date}>19.10.2024</span>
                        </div>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image src="/work3.jpg" alt="" fill className={styles.image} />
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description}>
                        <p>
                        Inspiring your inner innovator begins with embracing curiosity and fostering a mindset of continuous learning. Don’t be afraid to ask “why” and “how” when you encounter challenges. Innovators push boundaries, think differently, and turn obstacles into opportunities. Be willing to take risks, learn from failures, and view each setback as a lesson toward something better. Surround yourself with diverse perspectives, collaborate, and always seek creative solutions. Innovation thrives when you believe in the possibility of change and dare to explore the unknown with passion and perseverance.
                        </p>
                    </div>
                    <div className={styles.comment}>
                        <Comments/>
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    );
};

export default PostPage;

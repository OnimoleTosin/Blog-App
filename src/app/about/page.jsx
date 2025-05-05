// pages/about.js
import styles from './about.module.css';

const About = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>About Us</h1>

            <section className={styles.section}>
                <h2 className={styles.subtitle}>Our Story</h2>
                <p className={styles.text}>
                    Welcome to <strong>ONI-blog</strong>! Our blog was created with the mission of bringing inspiring, informative, and insightful content to readers all over the world.
                    Whether you’re looking for tips on personal growth, the latest news, or deep dives into industry trends, we’ve got something for everyone.
                    What started as a small personal project has now grown into a full-fledged platform where creativity and curiosity meet.
                </p>
            </section>

            <section className={styles.section}>
                <h2 className={styles.subtitle}>Our Mission</h2>
                <p className={styles.text}>
                    Our mission is simple: to inspire and inform. We believe in the power of storytelling and the impact it can have on shaping perspectives, broadening horizons,
                    and sparking meaningful conversations. Every post on this blog is crafted with care, aiming to provide value to our readers, foster connection, and ignite curiosity.
                </p>
            </section>

            <section className={styles.section}>
                <h2 className={styles.subtitle}>Meet the Team</h2>

                <div className={styles.team}>
                    <div className={styles.member}>
                        <Image src="/p2.png" alt="Author 1" className={styles.image} />
                        <h3 className={styles.name}>Onimole Sodiq Oluwatosin</h3>
                        <p className={styles.role}>Senior Web Devloper</p>
                        <p className={styles.bio}>
                            ONImole is the visionary behind <strong>ONI-blog</strong>. With a background in journalism and a passion for storytelling,
                            he launched this platform to share his insights on life, growth, and everything in between. When he's not writing,
                            you’ll find him reading books or hiking in the mountains.
                        </p>
                    </div>

                    <div className={styles.member}>
                        <Image src="/pk.jpg" alt="Author 2" className={styles.image} />
                        <h3 className={styles.name}>Ajibise Abd-Mojiid Ifeoluwa</h3>
                        <p className={styles.role}>Content Strategist</p>
                        <p className={styles.bio}>
                            Mojiid is the mastermind behind our content calendar. With a keen eye for trending topics and evergreen content,
                            he ensures that our readers are always engaged with fresh, high-quality posts. Outside of work, he loves exploring local coffee shops and capturing moments with his camera.
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.subtitle}>Why We Blog</h2>
                <p className={styles.text}>
                    We believe that everyone has a story to tell. Our blog is not just a platform for sharing information, but a community where
                    voices are heard, ideas are exchanged, and new perspectives are explored. Blogging allows us to connect with people from all walks of life and bring value to their daily lives.
                </p>
            </section>

            <section className={styles.section}>
                <h2 className={styles.subtitle}>Join the Journey</h2>
                <p className={styles.text}>
                    We’re excited to have you with us on this journey! Whether you’re here to learn, grow, or just be entertained, we hope our blog brings a little something special to your day.
                    Feel free to browse our latest posts, leave comments, and join the conversation. Let’s grow together!
                </p>
            </section>
        </div>
    );
};

export default About;

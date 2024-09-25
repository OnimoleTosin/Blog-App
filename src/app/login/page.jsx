"use client";
import Image from "next/image";
import styles from "./loginPage.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
// import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { status } = "authenticated";

  // const router = useRouter();

  // if (status === "loading") {
  //   return <div className={styles.loading}>Loading...</div>;
  // }

  // if (status === "authenticated") {
  //   router.push("/")
  // }
  
  return (
    <div className={styles.container}>
       <div className={styles.formBox}>
                <h2 className={styles.title}>Login</h2>
                <form className={styles.form}>
                    <div className={styles.inputBox}>
                        <FontAwesomeIcon icon={faUser} className={styles.icon} />
                        <input type="text" required placeholder="Username" />
                    </div>
                    <div className={styles.inputBox}>
                        <FontAwesomeIcon icon={faLock} className={styles.icon} />
                        <input type="password" required placeholder="Password" />
                    </div>
                    <button className={styles.submitButton} type="submit">Login</button>
                    <p className={styles.switch}>
                        Don’t have an account? <Link href="/register">Register</Link>
                    </p>
                </form>
            </div>
      <div className={styles.wrapper}>
        <div className={styles.socialButton}>Sign in with Google
        <Image src='/google.png' width={24} height={24} marginLeft={5}/>
        </div>
        <div className={styles.socialButton}>Sign in with Github
        <Image src='/git.png' width={24} height={24} marginLeft={5}/>
        </div>
        <div className={styles.socialButton}>Sign in with Facebook
          <Image src='/facebook.png' width={24} height={24} marginLeft={5}/>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

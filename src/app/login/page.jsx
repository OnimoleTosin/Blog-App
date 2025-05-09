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

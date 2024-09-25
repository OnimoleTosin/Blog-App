// pages/register.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styles from '../register/register.module.css';
import Link from 'next/link';

const Register = () => {
    return (
        <div className={styles.container}>
            <div className={styles.formBox}>
                <h2 className={styles.title}>Register</h2>
                <form className={styles.form}>
                    <div className={styles.inputBox}>
                        <input type="text" required placeholder="Username" />
                    </div>
                    <div className={styles.inputBox}>
                        <input type="email" required placeholder="Email" />
                    </div>
                    <div className={styles.inputBox}>
                        <input type="password" required placeholder="Password" />
                    </div>
                    <button className={styles.submitButton} type="submit">Register</button>
                    <p className={styles.switch}>
                        Already have an account? <Link href="/login">Login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;

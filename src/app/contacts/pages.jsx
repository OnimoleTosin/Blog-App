// pages/page.jsx
import { useState } from 'react';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to API)
    console.log(formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.header}>Contact Us</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>Send Message</button>
      </form>
    </div>
  );
}

"use client";

import { useState } from 'react';
import styles from '../contact/contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [notification, setNotification] = useState(null);  // Notification state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate sending email (You can replace this with actual API call)
    console.log('Form submitted:', formData);

    // Show success notification
    setNotification('Email sent successfully!');

    // Reset form
    setFormData({ name: '', email: '', message: '' });

    // Hide the notification after 3 seconds
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.header}>Contact Us</h1>

      {/* Notification alert */}
      {notification && (
        <div className={styles.notification}>
          {notification}
        </div>
      )}

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="name">Name:</label>
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
          <label htmlFor="email">Email:</label>
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
          <label htmlFor="message">Message:</label>
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
};

export default Contact;

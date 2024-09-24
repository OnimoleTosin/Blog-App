import React, { useEffect, useRef } from 'react';
import styles from './modal.module.css'; // Add your modal styling here
import Link from 'next/link';

const Modal = ({ item, closeModal }) => {
  const modalRef = useRef();

  // Close modal if clicked outside of it
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal(); // Close modal when clicking outside of the modal
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [closeModal]);

  if (!item) return null; // Return null if no item is passed

  return (
    <Link href='/travels' className={styles.container}>
    <div className={styles.modalOverlay}>
      <div ref={modalRef} className={styles.modal}>
        <button className={styles.closeButton} onClick={closeModal}>X</button>
        <h2 className={styles.modalTitle}>{item.title}</h2>
        <p className={styles.modalDescription}><strong>Description:</strong> {item.modalDescription} </p>
        <p className={styles.modalCategory}><strong>Category:</strong> {item.category}</p>
        <p className={styles.modalUsername}><strong>Author:</strong> {item.username}</p>
        <p className={styles.modalDate}><strong>Date:</strong> {item.date}</p>
      </div>
    </div>
    </Link>
  );
};

export default Modal;

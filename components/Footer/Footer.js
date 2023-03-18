import React from 'react';
import styles from './Footer.module.css'; // Import the CSS module

const Footer = () => {
  return <footer className={styles.footer}>HealMedic Pharmacy &copy; {new Date().getFullYear()}</footer>;
};

export default Footer;

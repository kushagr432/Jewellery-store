import React from 'react';
import bannerimg from '../Images/jewel3.jpg';
import styles from './Products.module.css';
export default function Banner() {
  return (
    <div className={styles.bannercont}>
    <img id={styles.bannerimg} src={bannerimg} alt="Banner" />
    <p>GET THE BEST OFFER</p>
    <a href="https://wa.me/919541626055?text=Hello%20I%20would%20like%20to%20know%20more%20about%20your%20services" target="_blank" rel="noreferrer">
      <button id={styles.button}>Contact Us</button>
    </a>
  </div>
  )
}

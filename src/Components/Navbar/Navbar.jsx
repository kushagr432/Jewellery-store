import React from 'react';
import styles from '../Navbar/Navbar.module.css';

export default function Navbar({ scrollToSection }) {
return (
    <div className={styles.parent}>
      
    <h1 className={styles.heading}>Jainsons</h1>
      
    <div className={styles.second}>
        <ul className={styles.list}>
        <li className={styles.listelement} onClick={() => scrollToSection('header')}>Home</li>
        <li className={styles.listelement} onClick={() => scrollToSection('categories')}>Categories</li>
        <li className={styles.listelement} onClick={() => scrollToSection('products')}>Products</li> 
        <li className={styles.listelement} onClick={() => scrollToSection('banner')}>Contact</li> 
        </ul>
    </div>
    <a href="https://wa.me/919541626055?text=Hello%20I%20would%20like%20to%20know%20more%20about%20your%20services" target="_blank" rel="noreferrer">
        <button className={styles.button}>Talk With Us</button>
    </a>
    </div>
);
}

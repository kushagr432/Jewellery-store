import React from 'react';
import { Link } from 'react-router-dom';
import FaceImage from '../Images/socials/facebook.png';
import InstaImage from '../Images/socials/instagram.png';
import linkImage from '../Images/socials/linkedin.png';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <>
    <div className={styles.column}>

    <div className={styles.parent}>
    <h1 className={styles.heading}>Jainsons</h1>
    <div className={styles.second}>
    <ul className={styles.list}>
        <li className={styles.listelement}>Collections</li>
        <li className={styles.listelement}>Location</li>
        <li className={styles.listelement}>Careers</li> 
        <li className={styles.listelement}>Affiliates</li> 
    </ul>
    </div>
    <div className={styles.socialcont}>
    <ul className={styles.socials}>
            <li className={styles.socialelement}>
            <Link to="/"  aria-current="page">
            <img src={InstaImage}  alt="Insta" />
        </Link>
            </li>
            <li className={styles.socialelement}>
            <Link to="/"  aria-current="page">
            <img src={linkImage}  alt="Link" />
        </Link>
            </li>
            <li className={styles.socialelement}> 
            <Link to="/"   aria-current="page">
            <img  src={FaceImage}  alt="F" />
        </Link>
            </li>
        </ul>
    </div>
    
    </div>
    <div className={styles.secondlist}>
    <ul className={styles.list2}>
        <li className={styles.listelement2}>@2024 Jainsons</li>
        <li className={styles.listelement2}>Terms&Conditions</li>
        <li className={styles.listelement2}>Privacy Policy</li> 
        <li className={styles.listelement2}>Accessibility</li> 
    </ul>
    </div>
    <div className={styles.socialcont2} >
    <ul className={styles.socials}>
            <li className={styles.socialelement}>
            <Link to="/"  aria-current="page">
            <img src={InstaImage}  alt="Insta" />
        </Link>
            </li>
            <li className={styles.socialelement}>
            <Link to="/"  aria-current="page">
            <img src={linkImage}  alt="Link" />
        </Link>
            </li>
            <li className={styles.socialelement}> 
            <Link to="/"   aria-current="page">
            <img  src={FaceImage}  alt="F" />
        </Link>
            </li>
        </ul>
    </div>
    </div>
    </>
)
}

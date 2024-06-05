import React, { useEffect, useState } from 'react';
import slideImg1 from '../Images/jewel2.jpg';
import slideImg2 from '../Images/jewel4.jpg';
import slideImg3 from '../Images/jewel5.jpg';
import slideImg4 from '../Images/jewel6.jpg';
import styles from './Header.module.css';
import HeaderContent from './HeaderContent';

const images = [slideImg1, slideImg2, slideImg3, slideImg4];

export default function Header() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.parent}>
      {/* <div className={styles.heading1}>
        <div className={styles.headingcont1}>
          <h1 className={styles.heading}>JEWELRY FOR</h1>
        </div>
        <div className={styles.headingcont2}>
          <h1 className={styles.heading} id={styles.heading2}>ALL YOUR BEAUTY</h1>
        </div>
      </div> */}
      <div className={styles.image1}>
        {images.map((image, index) => (
          <img
            key={index}
            className={`${styles.image} ${currentImageIndex === index ? styles.fadeIn : styles.fadeOut}`}
            src={image}
            alt={`slide-${index}`}
          />
        ))}
        <div className={styles.imgfooter}>
        <p id={styles.footerelement}>Maximize your beauty with quality jewelry from us</p>
        <p id={styles.shoptext}>Shop now</p>
    </div>
    </div>
<HeaderContent/>
    </div>
  );
}

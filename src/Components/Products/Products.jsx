import React, { useEffect, useRef } from 'react';
import product1 from '../Images/Products/product1.jpeg';
import product10 from '../Images/Products/product10.jpeg';
import product11 from '../Images/Products/product11.jpeg';
import product2 from '../Images/Products/product2.jpeg';
import product3 from '../Images/Products/product3.jpeg';
import product4 from '../Images/Products/product4.jpeg';
import product5 from '../Images/Products/product5.jpeg';
import product6 from '../Images/Products/product6.jpeg';
import product7 from '../Images/Products/product7.jpeg';
import product8 from '../Images/Products/product8.jpeg';
import product9 from '../Images/Products/product9.jpeg';

import styles from './Products.module.css';

export default function Products() {
const gridRef = useRef(null);

useEffect(() => {
    const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
        }
        });
    },
    { threshold: 0.1 }
    );

    const elements = gridRef.current.querySelectorAll(`.${styles.gridelement}, #${styles.heading}, #${styles.heading2}`);
    elements.forEach((el) => observer.observe(el));

    return () => {
    elements.forEach((el) => observer.unobserve(el));
    };
}, []);

return (
    <>
    <div className={styles.grid} ref={gridRef}>
        <div>
        <h1 id={styles.heading}>OUR BEST PRODUCTS</h1>
        <div className={styles.cont2}>
            <p id={styles.heading2}>We highly Recommend it because it's our best choice for you</p>
        </div>
        </div>
        <div className={styles.gridelement}>
        <img src={product1} alt="bracelet" />
        <p className={styles.imghead}>ALMOND PEARLS PENDANT &nbsp; &nbsp; ₹3000</p>
        </div>
        <div className={styles.gridelement}>
        <img src={product2} alt="bracelet" />
        <p className={styles.imghead}>RED PEARLS NECKLACE &nbsp; &nbsp; ₹6000</p>
        </div>
        <div className={styles.gridelement}>
        <img src={product3} alt="bracelet" />
        <p className={styles.imghead}>GREEN OBOX BRACELET &nbsp; &nbsp; ₹2000</p>
        </div>
        <div className={styles.gridelement}>
        <img src={product4} alt="bracelet" />
        <p className={styles.imghead}>FLOWER EARINGS 3SET &nbsp; &nbsp; ₹1500</p>
        </div>
        <div className={styles.gridelement}>
        <img src={product5} alt="bracelet" />
        <p className={styles.imghead}>OCEAN BLUE STONE BRACELET &nbsp; &nbsp; ₹2000</p>
        </div>
        <div className={styles.gridelement}>
        <img src={product6} alt="bracelet" />
        <p className={styles.imghead}>ROYAL PINK STONE NECKLACE &nbsp; &nbsp; ₹3000</p>
        </div>
        <div className={styles.gridelement}>
          <img src={product7} alt="bracelet" />
          <p className={styles.imghead}>SILVER BROAD BRACELET &nbsp; &nbsp; ₹1000</p>
        </div>
        <div className={styles.gridelement}>
          <img src={product8} alt="bracelet" />
          <p className={styles.imghead}>THIN SILVER RINGS 3SET &nbsp; &nbsp; ₹2000</p>
        </div>
        <div className={styles.gridelement}>
          <img src={product9} alt="bracelet" />
          <p className={styles.imghead}>SILVER PAYAL WITH STONES &nbsp; &nbsp; ₹3000</p>
        </div>
        <div className={styles.gridelement}>
          <img src={product10} alt="bracelet" />
          <p className={styles.imghead}>ROYAL GREEN STONE NECKLACE &nbsp; &nbsp; ₹6000</p>
        </div>
        <div className={styles.gridelement}>
          <img src={product11} alt="bracelet" />
          <p className={styles.imghead}>ROSE GOLD PLUS DIAMOND RING &nbsp; &nbsp; ₹10000</p>
        </div>
    </div>
    
    </>
  );
}

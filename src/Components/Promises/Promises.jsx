import React, { useEffect, useRef } from 'react';
import pro1 from '../Images/Promises/certified.png';
import pro2 from '../Images/Promises/commercialization.png';
import pro3 from '../Images/Promises/deal.png';
import pro4 from '../Images/Promises/free-shipping.png';
import pro5 from '../Images/Promises/refund.png';
import pro6 from '../Images/Promises/store.png';
import styles from './Promises.module.css';

export default function Promises() {
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

    const elements = gridRef.current.querySelectorAll(`.${styles.gridelement}`);
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.headcont}>
        <h1 id={styles.heading}>Our Promises</h1>
      </div>
      <div className={styles.grid} ref={gridRef}>
        <div className={styles.gridelement}>
          <img src={pro1} alt="Certified Jewelry" />
          <p>100% Certified jewelry</p>
        </div>
        <div className={styles.gridelement}>
          <img src={pro2} alt="Refund" />
          <p>100% Refund</p>
        </div>
        <div className={styles.gridelement}>
          <img src={pro3} alt="Buy & Exchange" />
          <p>Lifetime Buy & Exchange</p>
        </div>
        <div className={styles.gridelement}>
          <img src={pro4} alt="Free Shipping" />
          <p>Free Shipping and Insurance</p>
        </div>
        <div className={styles.gridelement}>
          <img src={pro5} alt="Try at Home" />
          <p>Try at Home</p>
        </div>
        <div className={styles.gridelement}>
          <img src={pro6} alt="Physical Store" />
          <p>Physical Store Near You</p>
        </div>
      </div>
    </div>
  );
}

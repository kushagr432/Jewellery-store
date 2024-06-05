import React, { useEffect, useRef } from 'react';
import NeckImg from '../Images/Heading.jpeg';
import bracletImg from '../Images/bracelet.jpeg';
import EarImg from '../Images/earing.jpeg';
import ringImg from '../Images/ring.jpeg';
import styles from './Category.module.css';

export default function Category() {
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

    const elements = gridRef.current.querySelectorAll(`.${styles.container}`);
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className={styles.container} ref={gridRef}>
      <div className={styles.gridelement}>
        <img src={bracletImg} alt="bracelet" />
        <p>BRACELETS</p>
      </div>
      <div className={styles.gridelement}>
        <img src={ringImg} alt="bracelet" />
        <p>RINGS</p>
      </div>
      <div className={styles.gridelement}>
        <img src={NeckImg} alt="bracelet" />
        <p>NECKLACE</p>
      </div>
      <div className={styles.gridelement}>
        <img src={EarImg} alt="bracelet" />
        <p>EARINGS</p>
      </div>
    </div>
  );
}

import React, { useEffect, useRef } from 'react';
import styles from './Header.module.css';

export default function HeaderContent() {
  const contentRef = useRef(null);

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

    const currentRef = contentRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className={styles.contentcont} ref={contentRef}>
      <div className={styles.content}>
        WE MAKE THE BEST JEWELRY BY EXPERTS WHO HAVE DECADES OF EXPERIENCE IN THE FIELD
      </div>
    </div>
  );
}

import React, { useRef } from 'react';
import Category from './Category/Category';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import styles from './Home.module.css';
import Navbar from './Navbar/Navbar';
import Banner from './Products/Banner';
import Products from './Products/Products';
import Promises from './Promises/Promises';

export default function Home() {
const headerRef = useRef(null);
const categoryRef = useRef(null);
const productsRef = useRef(null);
const bannerRef = useRef(null);


const scrollToSection = (section) => {
    switch (section) {
    case 'header':
        headerRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
    case 'categories':
        categoryRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
    case 'products':
        productsRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
    
    case 'banner':
        bannerRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
    
    default:
        break;
    }
};

return (
    <div className={styles.parent}>
    <div className={styles.nav}>
        <Navbar scrollToSection={scrollToSection} />
    </div>
    <div ref={headerRef}>
        <Header />
    </div>
    <div ref={categoryRef} style={{ marginTop: '5vh' }}>
        <Category />
    </div>
    <div ref={productsRef}>
        <Products />
    </div>
    <div >
        <Promises />
    </div>
    <div ref={bannerRef}>
        <Banner />
    </div>
    <div style={{ marginTop: '15vh', paddingBottom: '10vh' }}>
        <Footer />
    </div>
    </div>
);
}

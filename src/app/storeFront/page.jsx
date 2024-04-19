'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './page.module.css';
import Button from '@mui/material/Button';

export default function Page() {

    const [screenWidth, setScreenWidth] = useState(0);
    const chunkSize= 3;
    const [displayAmount, setDisplayAmount] = useState(2.4);

    const products = [
        { id: 1, name: 'Calendar', description: 'Upload your own photo for a custom calendar.', price: 15, imageLoaded: true },
        { id: 2, name: 'Coffee Mugs', description: 'Upload your own photo for a custom coffee mug.', price: 30, imageLoaded: true },
        { id: 3, name: 'Place Mats', description: 'Upload your own photo for a custom place mat.', price: 20, imageLoad: false },
        { id: 4, name: 'Product 4', description: 'Product 4 description', price: 69.99, imageLoad: false },
        { id: 5, name: 'Product 5', description: 'Product 5 description', price: 69.99, imageLoad: false },
    ];

    useEffect(() => {
        function handleResize() {
            const screenWidth = window.innerWidth;

            if (screenWidth > 1100) {
                //setChunkSize(2);
                setDisplayAmount(2.4);
            } else if (screenWidth > 843) {
                //setChunkSize(1);
                setDisplayAmount(1.9);
            } else {
                
                setDisplayAmount(.9);
            }

            setScreenWidth(screenWidth);
        }

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    function chunkArray(array, chunkSize) {
        const chunks = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            chunks.push(array.slice(i, i + chunkSize));
        }
        return chunks;
    }
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: displayAmount,
        slidesToScroll: 1,
    };

    return (
        <main className={styles.main}>
            <div className={styles.header}>
                {/* <h1 className={styles.title}>Welcome to Bob&apos;s Bazaar of Wonders!</h1> */}
            </div>
            <div className={styles.siteDescription}>
                <p>
                    At Company Name here, we transform your brand identity into tangible experiences.
                    With our expertise in custom branding, we take pride in turning everyday items into powerful
                    marketing tools. Whether you&apos;re a small business looking to make a big impact or a large corporation
                    seeking to reinforce brand loyalty, we&apos;ve got you covered.
                </p>

            </div>
            <div className={styles.siteDescription}>
                <p>
                    Each product is available for customization. Simply upload your logo, image, or text, and we&apos;ll take care of the rest.
                    bulk orders are available for all products. simply order in batches of 10 or 50 to receive a discount.
                </p>
            </div>

            {chunkArray(products, chunkSize).map((rowProducts, rowIndex) => (
                <div key={rowIndex} className={styles.productRow}>

                    <Slider
                        {...settings}
                        key={rowIndex}
                        dots
                        style={{ width: '80%', margin: 'auto', marginTop: '40px' }}
                    infinite
                    speed={500}
                    slidesToShow={displayAmount}
                    slidesToScroll={1}                    

                    >

                        {rowProducts.map(product => (
                            <div key={product.id} className={styles.productContainer}>
                                <div key={product.id} className={styles.product}>
                                    <h2>{product.name}</h2>
                                    <p className={styles.description}>{product.description}</p>
                                    <p>${product.price}</p>
                                    {/* Ternary operator to conditionally render image source */}
                                    {product.imageLoaded ? (
                                        <Image
                                            className={styles.productImage}
                                            src={`/product${product.id}.png`}
                                            alt={product.name}
                                            width="225"
                                            height="150"
                                        />
                                    ) : (
                                        <Image
                                            className={styles.productImage}
                                            src="/placeHolder.png"
                                            alt={product.name}
                                            width="225"
                                            height="150"
                                        />
                                    )}
                                    <Button variant="outlined">Add to Cart</Button>
                                </div>
                            </div>
                        ))}

                    </Slider>
                </div>
            ))}
            <footer className={styles.footer}>
                <div className={styles.footerDiv} >
                    <p>1234 Main Street</p>
                    <p>City, State, 12345</p>
                    <p>Phone: 123-456-7890</p>
                    <p>Email: Company@comapny.com</p>
                </div>
                <div className={styles.footerDiv}>
                    <p><Link href="/follow">Follow Us:</Link></p>
                    <p><Link href="/facebook">Facebook</Link></p>
                    <p><Link href="/instagram">Instagram</Link></p>
                    <p><Link href="/twitter">Twitter</Link></p>

                </div>
                <div className={styles.footerDiv}>
                    <p><Link href="/about">About Us</Link></p>
                    <p><Link href="/contact">Contact Us</Link></p>
                    <p><Link href="/products">Products</Link></p>
                    <p><Link href="/cart">Cart</Link></p>
                </div>

            </footer>

        </main>
    );
}

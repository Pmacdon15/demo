'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';


export default function Page() {
    const [chunkSize, setChunkSize] = useState(3);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const products = [
        { id: 1, name: 'Calendar', description: 'Upload your own phot for a custom calendar.', price: 15 },
        { id: 2, name: 'Coffee Mugs', description: 'Upload your own phot for a custom coffee mug.', price: 30 },
        { id: 3, name: 'Place Mats', description: 'Upload your own phot for a custom place matendar', price: 20 },
        { id: 4, name: 'Product 4', description: 'Product 4 description', price: 69.99 },
    ];

    useEffect(() => {
        function handleResize() {
            // Calculate chunk size based on screen width
            const screenWidth = window.innerWidth;

            if (screenWidth < 800) { // Example breakpoint for small screens
                setChunkSize(1); // Set chunk size to 1 for small screens
            } else if (screenWidth < 1200) { // Example breakpoint for medium screens
                setChunkSize(2); // Set chunk size to 2 for medium screens
            } else {
                setChunkSize(3); // Default chunk size for larger screens
            }
            setScreenWidth(screenWidth); // Update screenWidth state
        }

        // Initial call to set chunk size based on current screen width
        handleResize();

        // Event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up event listener
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

    function tryRequire(path) {
        try {
            return require(path);
        } catch (err) {
            return null;
        }
    }

    return (
        <main className={styles.main}>
            <h1 className={styles.title}>Welcome to Bob's Bazaar of Wonders!</h1>
            <div className={styles.siteDescription} >
                <p>Are you tired of the mundane? Yearning for a touch of whimsy in your life? Well, look no further!
                    At Bob's Bazaar of Wonders, we're not just your average online shop; we're purveyors of the extraordinary,
                    the eccentric, and the downright delightful.
                </p>
                <p>Step into a world where each click unlocks a treasure trove of curiosities.
                    From our enchanted collection of goods, handpicked by the ever-curious Bob himself,
                    to the wonders that await around every virtual corner, your journey through our
                    digital emporium promises to be nothing short of magical.
                </p>
            </div>

            {chunkArray(products, chunkSize).map((rowProducts, rowIndex) => (
                <div key={rowIndex} className={styles.productRow}>
                    {rowProducts.map(product => {
                        const fileName = `public/product${product.id}.png`;
                        console.log('fileName', fileName);
                        // Check if the image file exists
                        const imgSrc = tryRequire(fileName) || 'placeholder.svg';
                        console.log('imgSrc', imgSrc);
                        return (
                            <div key={product.id} className={styles.product}>
                                <h2>{product.name}</h2>
                                <p className={styles.description} >{product.description}</p>
                                <p>${product.price}</p>
                                <Image className={styles.productImage} src={imgSrc} alt={fileName} width="225" height="150" />
                                <button>Add to Cart</button>
                            </div>
                        );
                    })}
                </div>
            ))}

        </main>
    );
}
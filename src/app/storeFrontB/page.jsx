'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './page.module.css';


export default function Page() {
    const [chunkSize, setChunkSize] = useState(3);
    const [screenWidth, setScreenWidth] = useState(0);

    const products = [
        { id: 1, name: 'Calendar', description: 'Upload your own photo for a custom calendar.', price: 15 , imageLoaded: true},
        { id: 2, name: 'Coffee Mugs', description: 'Upload your own photo for a custom coffee mug.', price: 30, imageLoaded: true},
        { id: 3, name: 'Place Mats', description: 'Upload your own photo for a custom place mat.', price: 20 , imageLoad:false },
        { id: 4, name: 'Product 4', description: 'Product 4 description', price: 69.99 , imageLoad:false},
        { id: 4, name: 'Product 4', description: 'Product 4 description', price: 69.99 , imageLoad:false},
    ];

    useEffect(() => {
        function handleResize() {
            const screenWidth = window.innerWidth;

            if (screenWidth < 800) {
                setChunkSize(1);
            } else if (screenWidth < 1200) {
                setChunkSize(2);
            } else {
                setChunkSize(3);
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

  
    return (
        <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Bob&apos;s Bazaar of Wonders!</h1>
        <div className={styles.siteDescription}>
            <p>Are you tired of the mundane? Yearning for a touch of whimsy in your life? Well, look no further!
                At Bob&apos;s Bazaar of Wonders, we&apos;re not just your average online shop; we&apos;re purveyors of the extraordinary,
                the eccentric, and the downright delightful.
            </p>
            </div>
            <div className={styles.siteDescription}>
            <p>Step into a world where each click unlocks a treasure trove of curiosities.
                From our enchanted collection of goods, handpicked by the ever-curious Bob himself,
                to the wonders that await around every virtual corner, your journey through our
                digital emporium promises to be nothing short of magical.
            </p>
        </div>
    
        
            <div  className={styles.productRow}>
                {products.map(product => {
                    let imgSrc = `/product${product.id}.png`; // Static import                       
                    return (
                        <div key={product.id} className={styles.product}>
                            <h2>{product.name}</h2>
                            <p className={styles.description}>{product.description}</p>
                            <p>${product.price}</p>
                            {/* Ternary operator to conditionally render image source */}
                            {product.imageLoaded ? (
                                <Image
                                    className={styles.productImage}
                                    src={imgSrc}
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
                            <button>Add to Cart</button>
                        </div>
                    );
                })}
            </div>
        
    
    </main>
    
    );
}

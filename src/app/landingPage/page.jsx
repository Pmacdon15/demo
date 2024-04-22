'use client';
import styles from './page.module.css';
import TextField from '@mui/material/TextField';
import Label from '@mui/material/FormLabel';
import Button from '@mui/material/Button';

import { useState, useEffect } from 'react';
import Image from 'next/image';


export default function Page() {

    return (
        <main className={styles.main}>
            <div className={styles.leftSide}>
                <h1 className={styles.title}>Widget Corporate Capital </h1>

                <div className={styles.companyDescription}>
                    <p>

                        Widget Corporate Capital fuels innovation and growth, powering ideas with strategic investments.
                        Our support goes beyond funding, offering expertise and resources for success. We want to
                        hear from you—let&apos;s build the future together.
                    </p>
                    <p>
                        At Widget Corporate Capital, we understand the vital role of funding in driving
                        business success. We offer more than just financial support; we provide a network of
                        expertise and strategic insights. Reach out to us—let&apos;s fuel your next venture.
                    </p>
                    <p>
                        Capital is the key to unlocking innovation, and at Widget Corporate Capital, we&apos;re here to
                        support visionary ideas. Let&apos;s collaborate and create something extraordinary. Get in touch—we
                        want to hear from you.
                    </p>
                </div>
            </div>
            <div className={styles.rightSide}>

                <form >
                    <h2 className={styles.title} >Reach Out we want to hear from you!!</h2>
                    <Label htmlFor="name">Full Name</Label>
                    <TextField id="fullName" type="text" required />
                    <Label htmlFor="email">Email</Label>
                    <TextField id="email" type="email" required />
                    <Label htmlFor="message">What type of Widget are you interested in?</Label>
                    <TextField id="message" type="text" required />
                    <Button variant="contained" color="primary" type="submit">Submit</Button>
                </form>

                <Image className={styles.logo} src="/widget.png" alt="logo" width="300" height="300" />
            </div>
        </main>
    );
}
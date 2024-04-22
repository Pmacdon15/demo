"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Label from "@mui/material/FormLabel";
import Button from "@mui/material/Button";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <h1 className={styles.title}>Design Demo</h1>       
       
          <Button
            className={styles.demoButton}
            variant="contained"
            color="primary"
            onClick={() => router.push("/landingPage")}
          >
            Landing Page
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => router.push("/storeFront")}
          >
            Store Front
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => router.push("/storeFrontB")}
          >
            Store Front B
          </Button>
   
      </div>
    </main>
  );
}

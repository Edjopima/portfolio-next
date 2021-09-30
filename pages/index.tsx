import React from 'react';
import styles from './HomePage.module.css'
import Button from '../components/Button/Button';
import Link from 'next/link';
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1,transition: { duration: 0.6 }}} 
      exit={{ opacity: 0 }} 
      className={styles.homePage}
    >
      <div className={styles.leftBox}>
        <h1>Let's make your</h1>
        <span>electronic engineer, iot</span>
        <Link href='/projects/iot'>
          <Button
            color='blue'
            type='primary'
          >
              <p>electronic and iot projects</p>
          </Button>
        </Link>
      </div>
      <div className={styles.rightBox}>
        <h1>projects alive</h1>
        <span>and fullstack developer</span>
        <Link href='/projects/web'>
        <Button
          color='white'
          type='primary'
        >
            <p>web and mobile projects</p>
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}

export default HomePage;
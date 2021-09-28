import React from 'react';
import styles from './HomePage.module.css'
import Button from '../components/Button/Button';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.leftBox}>
        <h1>Let's make your</h1>
        <span>electronic engineer, iot</span>
        <Button
          color='blue'
          type='primary'
        >
          <Link href='/projects/iot'>
            <p>electronic and iot projects</p>
          </Link>
        </Button>
      </div>
      <div className={styles.rightBox}>
        <h1>projects alive</h1>
        <span>and fullstack developer</span>
        <Button
          color='white'
          type='primary'
        >
          <Link href='/projects/web'>
            <p>web and mobile projects</p>
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default HomePage;
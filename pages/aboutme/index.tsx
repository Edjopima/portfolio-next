import React from 'react';
import Button from '../../components/Button/Button';
import Link from 'next/link';
import Image from 'next/image'
import styles from '../HomePage.module.css';
import profilePic from '../../public/images/profile.jpg' 
import { motion } from 'framer-motion';

const AboutMe = () => {
  const text = "I'm an electronic engineer, pasionate for technology, the automation and the Internet of Things. I have experience with Javascript using NodeJS, ReactJS, React Native and Electron JS; also, i have worked with Python, C and C++ in Electronics and Internet of Things projects using Microcontrollers like arduino, PIC and single boards computers like raspberry pi.";
  return (
    <motion.div 
      className={styles.homePage}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1,transition: { duration: 0.6 }}} 
    >
      <div className={`${styles.leftBox} ${styles.aboutMeBox}`}>
        <h1>HI, I'M <strong>EDUARDO PIÑA</strong></h1>
        <p>{text}</p>
        <div className={styles.aboutMe__buttonContainer}>
          <Link href='/'>
            <Button
              color='blue'
              type='primary'
            >
                PROJECTS
            </Button>        
          </Link>
          <Link href='/contact'>
            <Button
              color='blue'
              type='secondary'
            >
                Contact me
            </Button>        
          </Link>
        </div>
      </div>
      <div className={`${styles.rightBox} ${styles.aboutMe__imageContainer}`}>
        <div className={styles.aboutMe__imageBox}>
          <Image src={profilePic} height={400} width={400} className={styles.aboutMe__image} layout='responsive' />
        </div>
      </div>
    </motion.div>
  );
}

export default AboutMe;
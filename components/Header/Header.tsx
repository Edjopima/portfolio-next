import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

const Header : React.FC = () => {
  const router = useRouter();

  const setHeaderOptions = (route:string) => {
    switch (route) {
      case '/aboutme':
        return [
          {
            name: 'projects',
            route:'/',
          },
          {
            name:'contact',
            route:'/contact',
          },
        ];
      case '/contact':
        return [
          {
            name: 'projects',
            route:'/',
          },
          {
            name:'about me',
            route:'/aboutme',
          },
        ];
      default:
        return [
          {
            name: 'about me',
            route:'/aboutme',
          },
          {
            name:'contact',
            route:'/contact',
          },
        ];
    }
  }


  const headerOptions = setHeaderOptions(router.pathname);

  const leftColor = (router.query.type==='web' && !router.query.id)?'blue':'white'
  const rightColor = (router.query.type==='iot' && !router.query.id)|| router.pathname === '/contact'?'white':'blue'

  return (
    <motion.header 
      className={styles.header}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1,transition: { duration: 0.6 }}} 
      exit={{ opacity: 0 }}
    >
      <div className={`${styles.header__left} ${styles[leftColor]} `}>
        <Link href="/" >
          <span className={styles.title}>Eduardo Piña</span>
        </Link>
      </div>
      <div className={`${styles.header__right} ${styles[rightColor]}`}>
        {headerOptions.map((option, index) =>
          <Link key={index} href={option.route}>
            <span className={styles.header__item}>{option.name}</span>
          </Link>
        )}
      </div>
    </motion.header>
  );
}

export default Header;
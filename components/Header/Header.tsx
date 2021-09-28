import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import { useRouter } from 'next/router';

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

  return (
    <header className={styles.header}>
      <div className={styles.header__left}>
        <Link href="/" >
          <span className={styles.title}>Eduardo Piña</span>
        </Link>
      </div>
      <div className={styles.header__right}>
        {headerOptions.map((option, index) =>
          <Link key={index} href={option.route}>
            <span className={styles.header__item}>{option.name}</span>
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
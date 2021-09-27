import React from 'react';
import styles from './index.module.css'
import { useRouter } from 'next/router';

const Footer: React.FC = () => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <div className={styles.footer}>
      <p className="footer__text">Developed by Eduardo Piña, 2021</p>
    </div>
  );
}

export default Footer;
import React from 'react';
import styles from './Footer.module.css'
import { useRouter } from 'next/router';

const Footer: React.FC = () => {
  const router = useRouter();
  return (
    <div className={`${styles.footer} ${styles[(router.query.type==='web' && !router.query.id)? 'white':'blue']}`}>
      <p className="footer__text">Developed by Eduardo Piña, 2021</p>
    </div>
  );
}

export default Footer;
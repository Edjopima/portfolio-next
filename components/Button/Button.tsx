import React, {FC} from 'react';
import styles from './Button.module.css';

interface Props {
  onClick?: () => void;
  children: JSX.Element | string;
  color: string;
  type: string;
}

const Button: FC<Props> = ({onClick, children, color, type}) => {
  return (
    <button onClick={onClick} className={`${styles[type]} ${styles[color]}`}>
      {children}
    </button>
  );
}

export default Button;
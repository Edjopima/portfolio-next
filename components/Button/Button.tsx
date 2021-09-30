import React, {FC} from 'react';
import styles from './Button.module.css';

interface Props {
  onClick?: () => void;
  children: JSX.Element | string;
  color: string;
  type: string;
  disabled?: boolean;
}

const Button: FC<Props> = ({onClick, children, color, type, disabled}) => {
  return (
    <button onClick={onClick} className={`${styles[type]} ${styles[color]}`} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
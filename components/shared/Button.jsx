import React from 'react';
import styles from 'styles/components/Button.module.scss';

function Button({ children, bgWhite, ...props }) {
  return (
    <button
      {...props}
      className={`btn ${styles.button} ${bgWhite ? styles.bg_white : ''}`}
    >
      {children}
    </button>
  );
}

export default Button;

import React from 'react';
import styles from './MainFooter.module.css';

const MainFooter = ({ children }) => (
  <div className={styles.container}>
    {children}
  </div>
);

export default MainFooter;
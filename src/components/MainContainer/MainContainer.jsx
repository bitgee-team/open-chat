import React from 'react';
import styles from './MainContainer.module.css';

const MainContainer = ({ children }) => (
  <div className={styles.container}>
    {children}
  </div>
);

export default MainContainer;
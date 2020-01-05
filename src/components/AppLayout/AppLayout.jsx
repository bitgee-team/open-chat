import React from 'react';
import styles from './AppLayout.module.css';

const AppLayout = ({ leftPanel, children }) => (
  <div className={styles.container}>
    <div className={styles.leftPanel}>
      {leftPanel}
    </div>
    <div className={styles.main}>
      {children}
    </div>
  </div>
);

export default AppLayout;
import React from 'react';
import styles from './ChatListContainer.module.css';

const ChatListContainer = ({ children }) => (
  <div className={styles.content}>
    {children}
  </div>
);

export default ChatListContainer;
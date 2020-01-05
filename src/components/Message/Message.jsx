import React from 'react';
import styles from './Message.module.css';

const Message = ({ text, own }) => (
  <div className={`${styles.container} ${own ? styles.own : ''}`}>{text}</div>
);

export default Message;
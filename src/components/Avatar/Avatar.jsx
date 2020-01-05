import React from 'react';
import styles from './Avatar.module.css';

const Avatar = ({ url }) => (
  <div
    className={styles.avatar}
    style={{ backgroundImage: `url(${url})` }}
  />
);

export default Avatar;
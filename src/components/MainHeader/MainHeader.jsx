import React from 'react';
import Avatar from 'components/Avatar';
import styles from './MainHeader.module.css';

const MainHeader = ({ name, avatar }) => (
  <div className={styles.container}>
    <Avatar url={avatar} />
    <div className={styles.name}>{name}</div>
  </div>
);

export default MainHeader;
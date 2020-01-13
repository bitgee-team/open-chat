import React from 'react';
import Avatar from 'components/Avatar';
import { NavLink } from 'react-router-dom';
import styles from './ChatListItem.module.css';


const ChatListItem = ({ name, lastDate, lastMessage, avatar, username }) => (
  <NavLink
    to={username}
    className={styles.container}
    activeClassName={styles.active}
  >
    <Avatar url={avatar} />
    <div className={styles.content}>
      <div className={styles.contentHeader}>
        <div className={styles.name}>{name}</div>
        <div className={styles.last_date}>{lastDate}</div>
      </div>
      <div className={styles.last_message}>{lastMessage}</div>
    </div>
  </NavLink>
);

export default ChatListItem;
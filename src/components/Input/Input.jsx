import React from 'react';
import styles from './Input.module.css';

const Input = ({ onSubmit, placeholder, onChange }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const message = e.target.children[0].value;
    e.target.children[0].value = '';
    if (!onSubmit) return null;
    onSubmit(message);
  }

  const handleOnchange = (e) => {
    const message = e.target.value;
    if (!onChange) return null;
    onChange(message);
  }
  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <input type="text" placeholder={placeholder} onChange={handleOnchange}/>
    </form>
  );
};

export default Input;
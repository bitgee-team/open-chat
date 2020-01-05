import React from 'react';
import './styles.scss';

const ImageProfile = ({ url }) => (
  <div className="circle" style={{ backgroundImage: `url(${url})`}}/>
);

export default ImageProfile;

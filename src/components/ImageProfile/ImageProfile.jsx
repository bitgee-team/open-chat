import React from 'react';
import './styles.css'

const ImageProfile = ({ url }) => (
  <div className="circle" style={{ backgroundImage: `url(${url})`}}/>
);

export default ImageProfile;

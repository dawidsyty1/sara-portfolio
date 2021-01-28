import React from 'react';
import { NavLink } from 'react-router-dom';

const Image = ({url, file, alt}) => (
  <div className="image fit">
    <NavLink to={url} ><img src={file}  alt={alt} /></NavLink>
  </div>
);

export default Image;
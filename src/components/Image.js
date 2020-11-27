import React from 'react';
import { NavLink } from 'react-router-dom';

const Image = ({url, name}) => (
  <div className="image fit">
    <NavLink to={url} ><img src={process.env.PUBLIC_URL + `/images/${name}.jpg`}  alt="" /></NavLink>
  </div>
);

export default Image;
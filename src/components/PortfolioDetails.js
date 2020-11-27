import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { usePortfolioContext } from '../containers/portfolioContext';


const PortfolioDetails = ({ match }) => {
  const { slug } = match.params;
  const { getElementBySlug, nextSlug, previousSlug} = usePortfolioContext();

  const imageRef = useRef(null);
  const [vertial, setVertical ] = useState(false);
  const { index, item } = getElementBySlug(slug);

  const isVertial = () => imageRef.current ? imageRef.current.clientHeight > 900 : false;

  useEffect(_=> setVertical(isVertial()), [imageRef, slug])

  return (
    <div id="preview" className={vertial ? "vertical" : ''}>
      <div className="inner">
        <div className="image fit">
          <img ref={imageRef} src={process.env.PUBLIC_URL + `/images/${item.imageName}.jpg`} alt="" />
        </div>
        <div className="content">
          <header>
            <h2>{item.title}</h2>
          </header>
          <p>{item.description_p1}</p>
          <p>{item.description_p1}</p>
        </div>
      </div>
      <NavLink to={previousSlug(index)} ><span className="fa fa-chevron-left nav previous"></span></NavLink>
      <NavLink to={nextSlug(index)} ><span className="fa fa-chevron-right nav next"></span></NavLink>
    </div>
  )
};


export default PortfolioDetails;
import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { portfolio } from '../containers/portfolioContext';


const PortfolioDetails = ({ match }) => {
  const { slug } = match.params;
  const imageRef = useRef(null);
  const [vertial, setVertical ] = useState(false);
  const index = portfolio.findIndex(element => element.slug === slug);
  const item = index !== -1 ? portfolio[index] : portfolio[0];
  const isVertial = () => imageRef.current ? imageRef.current.clientHeight > 900 : false;

  const nextSlug = () => portfolio.length > index + 1 ? portfolio[index + 1].slug : portfolio[0].slug;
  const previousSlug = () => index - 1 >= 0 ? portfolio[index - 1].slug : portfolio[portfolio.length - 1].slug;

  useEffect(_=> setVertical(isVertial()), [imageRef, slug])

  return (
    <div id="preview" class={vertial ? "vertical" : ''}>
      <div class="inner">
        <div class="image fit">
          <img ref={imageRef} src={process.env.PUBLIC_URL + `/images/${item.imageName}.jpg`} alt="" />
        </div>
        <div class="content">
          <header>
            <h2>{item.title}</h2>
          </header>
          <p>{item.description_p1}</p>
          <p>{item.description_p1}</p>
        </div>
      </div>
      <NavLink to={previousSlug} ><span class="fa fa-chevron-left nav previous"></span></NavLink>
      <NavLink to={nextSlug()} ><span class="fa fa-chevron-right nav next"></span></NavLink>
    </div>
  )
};


export default PortfolioDetails;
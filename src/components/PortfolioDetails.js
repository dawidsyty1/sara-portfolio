import React from 'react';
import { NavLink } from 'react-router-dom';
import { usePortfolioContext } from '../containers/portfolioContext';
import PortfolioItem from './PortfolioItem';


const PortfolioDetails = ({ match }) => {
  const { slug } = match.params;
  const { getElementBySlug, nextSlug, previousSlug } = usePortfolioContext();
  const { index, items } = getElementBySlug(slug);
  const pSlug = previousSlug(index);
  const nSlug = nextSlug(index);

  if (items) {
    return (
      <div id="preview">
        {items?.map((item) => (<PortfolioItem {...item}/>))}
        {slug !== pSlug
          && (
            <NavLink to={pSlug} ><span className="fa fa-chevron-left nav previous"></span></NavLink>
          )}
        {slug !== nSlug
          && (
            <NavLink to={nSlug} ><span className="fa fa-chevron-right nav next"></span></NavLink>
          )}

      </div>
    )
  } else {
    return '';
  }
};


export default PortfolioDetails;

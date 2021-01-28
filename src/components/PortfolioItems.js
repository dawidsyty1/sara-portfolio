import React from 'react';
import Image from './Image';
import { usePortfolioContext } from '../containers/portfolioContext';

const PortfolioItems = () => {
  const { portfolio } = usePortfolioContext();

  return (
    <div id="main">
      <div className="inner">
        <div className="columns">
          {portfolio.map(object => {
            return object.items.map(item => {
              const { image } = item;
              return image ? (<Image url={object.slug} file={image.file} alt={image.title} />): '';
            })
          })}
        </div>
      </div>
    </div>
  );
}

export default PortfolioItems;
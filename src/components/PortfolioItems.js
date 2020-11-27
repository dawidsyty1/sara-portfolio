import React from 'react';
import Image from './Image';
import { portfolio } from '../containers/portfolioContext';


const PortfolioItems = () => (
  <div id="main">
    <div class="inner">
      <div class="columns">
        {portfolio.map(item => (<Image url={item.slug} name={item.imageName} />))}
      </div>
    </div>
  </div>
);


export default PortfolioItems;
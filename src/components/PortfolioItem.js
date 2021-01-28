import React from 'react';

const PortfolioItem = ({ image, title, body }) => (  
  <div id="inner">
        <div className="content">

    {image && (
      <div className="image fit">
        <img src={image.file} alt={image.name} />
      </div>
    )}
      {title && (
        <header>
          <h2>{title}</h2>
        </header>
      )}
      {body && (
        <p dangerouslySetInnerHTML={{ __html: body }} />
      )}
    </div>
  </div>
)


export default PortfolioItem;

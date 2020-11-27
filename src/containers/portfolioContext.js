import React from 'react';

export const portfolio = [
  { 
    imageName: 'pic01', slug: 'pic01', vertical: true, title: 'Test title pic01', description_p1: 'Test pic01'
  },
  { 
    imageName: 'pic02', slug: 'pic02', vertical: true, title: 'Test title pic02', description_p1: 'Test pic02'
  },
  { 
    imageName: 'pic03', slug: 'pic03', vertical: true, title: 'Test title pic03', description_p1: 'Test pic03'
  },
  { 
    imageName: 'pic04', slug: 'pic04', vertical: true, title: 'Test title pic04', description_p1: 'Test pic04'
  },
  { 
    imageName: 'pic05', slug: 'pic05', vertical: true, title: 'Test title pic05', description_p1: 'Test pic05'
  },
  { 
    imageName: 'pic06', slug: 'pic06', vertical: true, title: 'Test title pic06', description_p1: 'Test pic06'
  },
  { 
    imageName: 'pic07', slug: 'pic07', vertical: true, title: 'Test title pic07', description_p1: 'Test pic07'
  },
  { 
    imageName: 'pic08', slug: 'pic08', vertical: true, title: 'Test title pic08', description_p1: 'Test pic08'
  },
  { 
    imageName: 'pic09', slug: 'pic09', vertical: true, title: 'Test title pic09', description_p1: 'Test pic09'
  },
  { 
    imageName: 'pic10', slug: 'pic10', vertical: true, title: 'Test title pic10', description_p1: 'Test pic10'
  },
  { 
    imageName: 'pic11', slug: 'pic11', vertical: true, title: 'Test title pic11', description_p1: 'Test pic11'
  },
  { 
    imageName: 'pic12', slug: 'pic12', vertical: true, title: 'Test title pic12', description_p1: 'Test pic12'
  },
  { 
    imageName: 'pic13', slug: 'pic13', vertical: true, title: 'Test title pic13', description_p1: 'Test pic13'
  },
  { 
    imageName: 'pic14', slug: 'pic14', vertical: true, title: 'Test title pic14', description_p1: 'Test pic14'
  },
  { 
    imageName: 'pic15', slug: 'pic15', vertical: true, title: 'Test title pic15', description_p1: 'Test pic15'
  },
  { 
    imageName: 'pic16', slug: 'pic16', vertical: true, title: 'Test title pic16', description_p1: 'Test pic16'
  },
];


const PortfolioContext = React.createContext();

const PortfolioProvider = PortfolioContext.Provider;
export const usePortfolioContext = () => React.useContext(PortfolioContext);

const PortfolioContextProvider = ({ children }) => {
  const getElementBySlug = (slug) => {
    const index = portfolio.findIndex(element => element.slug === slug);
    let element = { index: 0, item: portfolio[0] };

    if (index !== -1) {
      element = { index, item: portfolio[index]}
    }

    return element
  }

  const nextSlug = (index) => (portfolio.length > index + 1 ? portfolio[index + 1].slug : portfolio[0].slug);
  const previousSlug = (index) => (index - 1 >= 0 ? portfolio[index - 1].slug : portfolio[portfolio.length - 1].slug);

  return (
    <PortfolioProvider
      value={{
        getElementBySlug,
        nextSlug,
        previousSlug,
      }}>
       {children}
    </PortfolioProvider>
  )
}
export default PortfolioContextProvider;
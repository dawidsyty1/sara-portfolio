import React, { useEffect } from 'react';
import { getPortfolio } from '../apollo/client'

export const portfolio = [
  { 
    imageName: 'sukienka-1', slug: 'sukienka-1', vertical: true, title: 'Test title pic01', description_p1: 'Test pic01'
  },
  { 
    imageName: 'sukienka-3', slug: 'sukienka-3', vertical: true, title: 'Test title pic03', description_p1: 'Test pic03'
  },
  { 
    imageName: 'sukienka-4', slug: 'sukienka-4', vertical: true, title: 'Test title pic04', description_p1: 'Test pic04'
  },
  { 
    imageName: 'sukienka-5', slug: 'sukienka-5', vertical: true, title: 'Test title pic05', description_p1: 'Test pic05'
  },
  { 
    imageName: 'zestaw-1', slug: 'zestaw-1', vertical: true, title: 'Test title pic06', description_p1: 'Test pic06'
  },
  { 
    imageName: 'zestaw-2', slug: 'zestaw-2', vertical: true, title: 'Test title pic07', description_p1: 'Test pic07'
  },
  { 
    imageName: 'zestaw-3', slug: 'zestaw-3', vertical: true, title: 'Test title pic08', description_p1: 'Test pic08'
  },
  { 
    imageName: 'zestaw-4', slug: 'zestaw-4', vertical: true, title: 'Test title pic09', description_p1: 'Test pic09'
  },
  { 
    imageName: 'zestaw-5', slug: 'zestaw-5', vertical: true, title: 'Test title pic10', description_p1: 'Test pic10'
  },
  { 
    imageName: 'zestaw-6', slug: 'zestaw-6', vertical: true, title: 'Test title pic11', description_p1: 'Test pic11'
  },
  { 
    imageName: 'zestaw-7', slug: 'zestaw-7', vertical: true, title: 'Test title pic12', description_p1: 'Test pic12'
  },
  { 
    imageName: 'zestaw-8', slug: 'zestaw-8', vertical: true, title: 'Test title pic13', description_p1: 'Test pic13'
  },
  { 
    imageName: 'zestaw-9', slug: 'zestaw-9', vertical: true, title: 'Test title pic14', description_p1: 'Test pic14'
  },
  { 
    imageName: 'zestaw-10', slug: 'zestaw-10', vertical: true, title: 'Test title pic15', description_p1: 'Test pic15'
  },
  { 
    imageName: 'leginsy-1', slug: 'leginsy-1', vertical: true, title: 'Test title leginsy-1', description_p1: 'Test pic16'
  },
  { 
    imageName: 'sukienka-2', slug: 'sukienka-2', vertical: true, title: 'Test title pic02', description_p1: 'Test pic02'
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

  useEffect(()=> {
    getPortfolio((portfolios) => {
      console.log('portfolios', portfolios)
    })
  }, [])

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
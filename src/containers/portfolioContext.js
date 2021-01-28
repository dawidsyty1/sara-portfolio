import React, { useEffect, useState } from 'react';
import { getPortfolio } from '../apollo/client'

const PortfolioContext = React.createContext();

const PortfolioProvider = PortfolioContext.Provider;
export const usePortfolioContext = () => React.useContext(PortfolioContext);

const PortfolioContextProvider = ({ children }) => {
  const [portfolio, setPortfolio] = useState([])

  const getElementBySlug = (slug) => {
    const index = portfolio.findIndex(element => element.slug === slug);
    let element = { index: 0, items: portfolio[0].items };

    if (index !== -1) {
      element = { index, items: portfolio[index].items}
    }

    return element;
  }

  useEffect(()=> {
    getPortfolio((items) => {
      setPortfolio(items);
    })
  }, [])

  const nextSlug = (index) =>  (portfolio.length > index + 1 ? portfolio[index + 1].slug : portfolio[0].slug);
  const previousSlug = (index) => (index - 1 >= 0 ? portfolio[index - 1].slug : portfolio[portfolio.length - 1].slug);

  return (
    <PortfolioProvider
      value={{
        getElementBySlug,
        nextSlug,
        previousSlug,
        portfolio,
      }}>
       {children}
    </PortfolioProvider>
  )
}
export default PortfolioContextProvider;
import React from 'react';
import ApolloClient from 'apollo-boost';
import { getApolloContext } from '@apollo/react-hooks';
import { getPortfolioQuery } from './queries';


export const client = new ApolloClient({
  uri: 'http://192.168.176.2:8000/api/graphiql/',
  // rejectUnauthorized: false,
});


export const useApolloContext = () => React.useContext(getApolloContext());


export const getPortfolio = (callback) => {
  client.query({
    query: getPortfolioQuery,
    fetchPolicy: 'no-cache',
  })
    .then((result) => {
      const { portfolio } = result.data;
      callback(portfolio);
    })
    .catch(result => console.log('ERROR!!!:', result));
}
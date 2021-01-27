import gql from "graphql-tag";

export const getPortfolioQuery = gql`
  query {
    portfolio{
      id
      seo {
        seo
      }
      items
    }
  }
`;
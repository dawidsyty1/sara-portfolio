import gql from "graphql-tag";

export const getPortfolioQuery = gql`
{
  portfolio {
    id
    slug
    items {
      ... on ImageBlock {
        image {
          id
          title
          file
        }
      }
      ... on TitleBlock {
        title
      }
      ... on BodyBlock {
        body
      }
    }
    seo {
      id
      seo
    }
  }
}
`;
import gql from "graphql-tag";

export const SNIPPITS_QUERY = gql`
  query {
    snippits {
      id
      name
      type
      language
      framework
      code
      notes
      companion
      keywords
      reference
      createdAt
      author {
        id
        name
      }
    }
  }
`;

import gql from "graphql-tag";

export const SNIPPITS_QUERY_SIMPLE = gql`
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

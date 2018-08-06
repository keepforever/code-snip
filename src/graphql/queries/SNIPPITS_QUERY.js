import gql from "graphql-tag";

export const SNIPPITS_QUERY = gql`
  query($orderBy: SnippitOrderByInput) {
    snippits(orderBy: $orderBy) {
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

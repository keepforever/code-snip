import gql from "graphql-tag";

export const SNIPPITS_QUERY = gql`
  query feedSnipps {
    snippits {
      id
      name
      language
      reference
    }
  }
`;

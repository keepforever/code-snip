import gql from "graphql-tag";

export const ME_QUERY = gql`
  query {
    me {
      name
      id
      email
      snippits {
        id
        name
        notes
        language
        framework
        code
        type
        author {
          id
          name
        }
        companion
        keywords
        createdAt
        reference
      }
    }
  }
`;

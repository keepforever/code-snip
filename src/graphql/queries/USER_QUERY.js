import gql from "graphql-tag";

export const USER_QUERY = gql`
  query ($id: ID!)  {
    users(where: { id: $id }) {
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

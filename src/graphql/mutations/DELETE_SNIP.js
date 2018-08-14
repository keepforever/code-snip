import gql from "graphql-tag";

export const DELETE_SNIP = gql`
  mutation($id: ID!) {
    deleteSnippit(where: { id: $id }) {
      __typename
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
    }
  }
`;

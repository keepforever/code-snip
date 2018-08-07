import gql from "graphql-tag";

export const SPECIFIC_USERS_SNIPPITS_QUERY = gql`
  query($orderBy: SnippitOrderByInput, $id: ID!) {
    snippits(
      orderBy: $orderBy,
      where: { author: { id:$id } }
    ) {
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

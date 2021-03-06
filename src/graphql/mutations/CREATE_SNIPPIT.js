import gql from "graphql-tag";

export const CREATE_SNIPPIT = gql`
  mutation(
    $author: ID!
    $name: String!
    $language: String!
    $code: String!
    $type: String!
    $framework: String!
    $notes: String!
    $companion: [String!]!
    $keywords: [String!]!
    $reference: [String!]!
  ) {
    createSnippit(
      data: {
        author: { connect: { id: $author } },
        name: $name,
        language: $language,
        code: $code,
        type: $type,
        framework: $framework,
        notes: $notes,
        companion: { set: $companion },
        keywords: { set: $keywords },
        reference: { set: $reference },
      }
    ) {
      id
      name
      language
      code
      type
      notes
      framework
      companion
      keywords
      reference
      createdAt
      author{
        id
        name
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
        }
      }
    }
  }
`;
//

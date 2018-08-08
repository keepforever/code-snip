import gql from "graphql-tag";

export const LOGIN_MUTATION = gql`
  mutation ($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      payload {
        token
        user {
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
      error {
        msg
        field
      }
    }
  }
`;

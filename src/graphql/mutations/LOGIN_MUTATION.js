import gql from "graphql-tag";

export const LOGIN_MUTATION = gql `
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      payload {
        token
        user {
          name
          id
        }
      }
      error {
        field
        msg
      }
    }
  }
`;

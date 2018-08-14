import gql from "graphql-tag";

export const REFRESH_TOKEN_MUTATION = gql`
  mutation {
    refreshToken {
      token
      userId
    }
  }
`;

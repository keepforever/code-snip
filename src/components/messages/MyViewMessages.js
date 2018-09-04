import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { clearLog } from "../../utils";

// note, this is written with typescript and thus has some weird syntax
// this file is 'where most of the magic happens'
export const viewMessagesQuery = gql`
  query ViewMessagesQuery {
    messages {
      id
      text
      createdAt
      author {
        id
        email
      }
    }
  }
`;

// use this constant as document in subscribeToMore
export const newMessageSubscription = gql`
  subscription messageSub {
    message {
      id
      text
      createdAt
      author {
        id
        name
      }
    }
  }
`;


class MyViewMessages extends React.PureComponent {
  render() {
    const { children, listingId } = this.props;
    return (
      <Query
        query={viewMessagesQuery}
        // no vars, no filter yet.
        // variables={{ listingId }}
      >
        {({ data, loading, subscribeToMore }) => {
          let messages = [];

          if (data && data.messages) {
            messages = data.messages;
          }

          return children({
            messages,
            loading,
            subscribe: () =>
              subscribeToMore({
                document: newMessageSubscription,
                //variables: { }, // no vars yet
                updateQuery: (prev, { subscriptionData }) => {
                  clearLog("prev", prev);
                  clearLog("subscriptionData", subscriptionData);

                  if (!subscriptionData.data) {
                    return prev;
                  }

                  //return prev;
                  clearLog('return Aggrigate', {
                    ...prev,
                    messages: [
                      ...prev.messages,
                      subscriptionData.data.message
                    ]
                  })

                  // update prev with new data
                  return {
                    ...prev,
                    messages: [
                      ...prev.messages,
                      subscriptionData.data.message
                    ]
                  };
                }
              })
          });
        }}
      </Query>
    );
  }
}

export default MyViewMessages

import React, { Component } from "react";
// graphql dependencies
import gql from "graphql-tag";
import { graphql, compose } from "react-apollo";
//import Q's and M's
import { SNIPPITS_QUERY } from "../graphql/queries/SNIPPITS_QUERY";
import { DELETE_OFFER } from "../graphql/mutations/DELETE_OFFER";
// redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectSpecificSnippit } from "../store/actions/snippit";
// utils
import { clearLog } from "../utils";
// locals
import MySearchInput from "../components/MySearchInput";
import OuterSpace from "../components/outer-space";
// material-ui
import Paper from "@material-ui/core/Paper";

const defaultState = {
  values: {
    search: ""
  }
};

class SearchSnippits extends React.Component {
  state = defaultState;

  navToSpecificSnippit = snip => {
    console.log("SearchSnippits navToSpecificSnippit()", snip);
    this.props.selectSnippitAction(snip);
    //this.props.navigation.navigate('SpecificOffer');
  };

  deleteSnippit = id => {
    const { variables } = this.props.listSnippits;

    this.props.deleteSnippit({
      variables: {
        id
      },
      update: store => {
        const data = store.readQuery({ query: SNIPPITS_QUERY, variables });
        data.snippitsConnection.edges = data.snippitsConnection.edges.filter(
          s => s.node.id !== id
        );
        store.writeQuery({ query: SNIPPITS_QUERY, data, variables });
      }
    });
  };

  editSnippit = id => {
    clearLog("SearchSnippits editSnippit()", id);
  };

  // for search bar text entry
  onChangeText = (key, value) => {
    this.setState(state => ({
      values: {
        ...state.values,
        [key]: value
      }
    }));
    // refetch the query as we type
    this.props.listSnippits.refetch({
      where: {
        name_contains: value
      },
      after: null
    });
  };

  render() {
    // for sorting, graphql give you 'refetch' on the data object (here, the
    // data object is named 'listOffers' because, in the compose config, we
    // named the different Q's and M's )
    // 'variables', also on listOffers, allows us to keep track of the params
    // we are sending to a given query. Here we will use to toggle between sorting
    // by text or title
    // const {
    //   listSnippits: {
    //     snippitsConnection = {pageInfo: {}, edges: []},
    //     refetch,
    //     variables,
    //     fetchMore,
    //     loading,
    //   },
    //   userId, specificSnippit
    // } = this.props

    const {
      listSnippits: { loading, snippits },
      userId,
      specificSnippit
    } = this.props;

    const {
      values: { search }
    } = this.state;
    //clearLog('SEARCH_SNIPPITS props', this.props)
    clearLog("LOADING", loading);

    let snippitsMap = {}; // to help address keys error in lue of adding random number
    let snipMeta = [];
    if (loading) {
      return null;
    } else {
      clearLog("loading completed", this.props);
      snipMeta = [...snippits];
    }
    return (
      <div>
        {snipMeta.map((snip, index) => {
          return (
            <Paper key={snip.id}>
              <div>{snip.name}</div>
            </Paper>
          );
        })}
        <MySearchInput onSearchTextChange={this.onChangeText} />
        <OuterSpace />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userId: state.user.userId,
    specificSnippit: state.snippit.specificSnippit
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { selectSnippitAction: selectSpecificSnippit },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  compose(
    graphql(SNIPPITS_QUERY, {
      options: {
        fetchPolicy: "cache-and-network",
        variables: {
          orderBy: "createdAt_ASC"
        }
      },
      name: "listSnippits"
    })
  )(SearchSnippits)
);

import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
// main routes
import LandingPage from './components/LandingPage'
import Home from './pages/Home';
import AddSnip from './pages/AddSnip';
import DataViz from './pages/DataViz';
import SearchSnippits from './pages/SearchSnippits';
// redux
import { incrementCounter } from "./store/actions/counter";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// graphql dependencies
//import gql from "graphql-tag";
import { graphql, compose } from "react-apollo";
//import Q's and M's
import { SNIPPITS_QUERY } from "./graphql/queries/SNIPPITS_QUERY";
//import { DELETE_OFFER } from "../graphql/mutations/DELETE_OFFER";
// utils
import { clearLog } from "./utils";
// locals
import Portal from './components/portals/portalTemplate'


const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />
  },
  {
    path: "/add-snip",
    exact: true,
    main: () => <AddSnip />
  },
  {
    path: "/data-viz",
    exact: true,
    main: () => <DataViz />
  },
  {
    path: "/search-snips",
    exact: true,
    main: () => <SearchSnippits />
  },
  // {
  //   path: "/about",
  //   exact: true,
  //   main: () => <About />
  // },
  // {
  //   path: "/blog",
  //   exact: true,
  //   main: () => <Blog />
  // },
  // {
  //   path: "/music",
  //   exact: true,
  //   main: () => <Music />
  // },
  // {
  //   path: "/cheeks",
  //   exact: true,
  //   main: () => <Cheeks />
  // }
]

class Routes extends Component {

  render () {

  if(false) {
    return (
        <Portal>
          <LandingPage togglePortal={this.togglePortal} />
        </Portal>
    )
  }

  return (
      <Switch>
        {routes.map((route, index) => {
          return (
            <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            );
        })}
      </Switch>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.counter.count,
    user: state.user.userId,
    snipp: state.snippit.snippits
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      incrementCounterAction: incrementCounter
    },
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
  )(Routes)
);

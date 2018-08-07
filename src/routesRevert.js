import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { withRouter } from "react-router";
import { connect } from "react-redux";
// main routes
import Home from "./pages/Home";
import AddSnip from "./pages/AddSnip";
import DataViz from "./pages/DataViz";
import SearchSnippits from "./pages/SearchSnippits";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />,
    protected: false
  },
  {
    path: "/add-snip",
    exact: true,
    main: () => <AddSnip />,
    protected: true
  },
  {
    path: "/data-viz",
    exact: true,
    main: () => <DataViz />,
    protected: true
  },
  {
    path: "/search-snips",
    exact: true,
    main: () => <SearchSnippits />,
    protected: true
  }
];

const Routes = props => {
  console.log("routs props", props);
  return (
    <Switch>
      {routes.map((route, index) => {
        if (route.protected) {
          return (
            <Route
              exact
              key={index}
              path={route.path}
              render={() =>
                props.shouldShowLanding ? <Redirect to="/" /> : <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
                />
              }
            />
          );
        } else {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          );
        }
      })}
    </Switch>
  );
};

const mapStateToProps = state => {
  return {
    ctr: state.counter.count,
    user: state.user.userInfo,
    snipp: state.snippit.snippits,
    shouldShowLanding: state.landingPage.showLandingPage
  };
};

export default withRouter(connect(mapStateToProps)(Routes));

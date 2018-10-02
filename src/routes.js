import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { withRouter } from "react-router";
import { connect } from "react-redux";
// main routes
// import Home from "./pages/Home";
import Home from "./pages/home/";
// import AddSnip from "./pages/AddSnip";
import AddSnip from "./pages/addSnip/";
import DataViz from "./pages/DataViz";
//import SearchSnippits from "./pages/SearchSnippits";
import SearchSnippits from "./pages/searchSnippits/";
// import LandingPage from './pages/LandingPage'
import LandingPage from './pages/landingPage/'
// import SignUpPage from "./pages/SignUpPage";
import SignUpPage from "./pages/signUpPage/";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />,
    protected: true
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
  },
  {
    path: "/login",
    exact: true,
    main: () => <LandingPage />,
    protected: false
  },
  {
    path: "/signup",
    exact: true,
    main: () => <SignUpPage />,
    protected: false
  }
];

const Routes = props => {
  //console.log("routs props", props);
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
                props.shouldShowLanding ? <Redirect to="/login" /> : <Route
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

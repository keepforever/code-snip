import React from 'react';
import {Route, Switch} from 'react-router-dom';

// main routes
import Home from './pages/Home';

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />
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



const Routes = ( props ) => {
  return(
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
  )
};

export default Routes;

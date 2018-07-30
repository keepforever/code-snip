import React, { Component } from "react";
import { createStore } from "redux";
import { BrowserRouter } from "react-router-dom";
import reducer from "./store/reducer";
import { Provider } from "react-redux";

import Layout from "./components/Layout";
import Routes from "./routes";
// reducer
// Redux Store
const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <Routes />
          </Layout>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

//
// <Switch>
//     <Route exact path="/" component={Home}/>
//     <Route path="/about" component={About}/>
//     <Route path="/blog" component={Blog}/>
//     <Route path="/music" component={Music}/>
// </Switch>

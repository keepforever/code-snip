import React, { Component } from "react";
import { createStore } from "redux";
import { BrowserRouter } from "react-router-dom";
import reducer from "./store/reducer";
import { Provider } from "react-redux";

import Layout from "./components/Layout";
import Routes from "./routes";

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import purple from '@material-ui/core/colors/purple';
import orange from '@material-ui/core/colors/orange';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: orange[200], // same as '#FFCC80',
      main: '#FB8C00', // same as orange[600]
      dark: red[400],
      contrastText: 'rgb(0,0,0)'
    },
    secondary: {
      main: orange[200]
    }
  }
})

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <MuiThemeProvider theme={theme}>
            <Layout>
              <Routes />
            </Layout>
          </MuiThemeProvider>
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

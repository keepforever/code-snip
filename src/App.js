import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/reducers";
//my custom components
import Layout from "./components/Layout";
import Routes from "./routes";
//apollo stuff
import { ApolloProvider } from "react-apollo";
import { ApolloClient, InMemoryCache } from "apollo-client-preset";
import { createUploadLink } from "apollo-upload-client";
//To pass Auth token in Header
import { setContext } from "apollo-link-context";
//material-ui
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import amber from '@material-ui/core/colors/amber';
import lightBlue from '@material-ui/core/colors/lightBlue';
import deepOrange from '@material-ui/core/colors/deepOrange';


const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: deepOrange,
    secondary: lightBlue,
    error: amber,
    contrastThreshold: 99,
    tonalOffset: 0.9,
  },
});

// apollo
const authLink = setContext(async (_, { headers }) => {
  const token = localStorage.getItem("snarfToken");
  console.log('token from authLink', token)
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ""
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(
    createUploadLink({
      uri: "https://itm-adv-server-zhbmcqazrj.now.sh"
    })
  ),
  cache: new InMemoryCache()
});

const store = createStore(rootReducer);

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <MuiThemeProvider theme={theme}>
            <ApolloProvider client={client}>
              <Layout>
                <Routes />
              </Layout>
            </ApolloProvider>
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

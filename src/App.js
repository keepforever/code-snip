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

// util
//import { clearLog } from "./utils";

//apollo
const authLink = setContext(async (_, { headers }) => {
  //const token = await AsyncStorage.getItem(TOKEN_KEY);
  // hard coded temporarily
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjamtjOW16dDI4dHM3MGIxMmYwdzdxaDdnIiwiZXhwaXJlc0luIjoiN2QiLCJpYXQiOjE1MzMyMzU4MjV9.V8opCDwDdC8KT0SFyVt5Q3ZdXtgyGecEMc0xo35Ltrc";
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

//clearLog("src/App.js, Client: ", client.link.request)

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#e65100"
    },
    secondary: {
      main: "#ffea00"
    }
  }
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

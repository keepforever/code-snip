import React, { Component } from "react";
//material-ui
import AppBar from "@material-ui/core/AppBar";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ArchiveIcon from "@material-ui/icons/Archive";
// REDUX
import { incrementCounter } from "../store/actions/counter";
import { toggleLandingPage } from "../store/actions/landingPage";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// graphql dependencies
//import gql from "graphql-tag";
import { graphql, compose } from "react-apollo";
//import Q's and M's
import { SNIPPITS_QUERY } from "../graphql/queries/SNIPPITS_QUERY";
import { SPECIFIC_USERS_SNIPPITS_QUERY } from "../graphql/queries/SPECIFIC_USERS_SNIPPITS_QUERY";
// locals
import Portal from "../components/portals/portalTemplate";
import {
  ContainerAlpha,
  HideDivWhenSmall,
  ShowDivWhenSmall
} from "../components/styled";
import SnipListItem from "../components/snip-list-item/SnipListItem";
import HomeHelpPage from "./help/HomeHelpPage";
// utils
import { clearLog } from "../utils";
import fileDownload from "js-file-download";

class Home extends Component {
  state = {
    age: "",
    currency: "EUR",
    showPortal: false,
    showHelp: false
  };

  handleChange = name => event => {
    // console.log('name', name)
    // console.log('value', event.target.value)
    this.setState({
      [name]: event.target.value
    });
  };

  togglePortal = () => {
    this.props.toggleLandingPageAction();
  };

  toggleHelp = () => {
    this.setState(prevState => {
      return {
        showHelp: !prevState.showHelp
      };
    });
  };

  counterChangeHandler = () => {
    //clearLog("counter");
    this.props.onIncrementCounter();
  };

  downloadSnippitLibrary = snippits => {
    const snippitDownload = JSON.stringify(snippits);
    fileDownload(snippitDownload, "your_snip_lib.json");
  };

  render() {
    const {
      listSnippits: { loading, snippits },
      listSpecificUserSnippits: { snippits: newSnippits, loading: newLoading }
      //userId,
      //specificSnippit
    } = this.props;
    //clearLog('HomeProps', this.props)

    if (loading || newLoading) {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: 400
          }}
        >
          <CircularProgress thickness={7} />;
        </div>
      );
    }

    if (this.state.showHelp) {
      return (
        <Portal>
          <HomeHelpPage toggleHelp={this.toggleHelp} />
        </Portal>
      );
    }
    // clearLog("snippits from Home", snippits);
    // clearLog("newSnippits from Home", newSnippits);
    // clearLog("this.props.user HOME", this.props.user);
    return (
      <ContainerAlpha>
        <AppBar position="static" color="default">
          <div style={styles.headerContainer}>
            <Typography variant="title" color="secondary">
              Your Snips
            </Typography>
            <Button
              onClick={() => this.downloadSnippitLibrary(snippits)}
              color="secondary"
            >
              <HideDivWhenSmall>
                <ArchiveIcon />
              </HideDivWhenSmall>
              <ShowDivWhenSmall>Download Snip Library</ShowDivWhenSmall>
            </Button>
            <Typography variant="body2" color="secondary">
              <div style={{ cursor: "pointer" }} onClick={this.toggleHelp}>
                help
              </div>
            </Typography>
          </div>
        </AppBar>
        <div className="container">
          {newSnippits.map((item, index) => {
            const { snipSoup } = this.props.user;
            const itemsSoup = snipSoup.filter(el => {
              return el.id === item.id;
            });
            return (
              <React.Fragment key={index}>
                <SnipListItem soup={itemsSoup[0].bagOfWords} snip={item} />
              </React.Fragment>
            );
          })}
        </div>
      </ContainerAlpha>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.counter.count,
    user: state.user.userInfo,
    snipp: state.snippit.snippits,
    shouldShowLanding: state.landingPage.showLandingPage
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      incrementCounterAction: incrementCounter,
      toggleLandingPageAction: toggleLandingPage
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
          orderBy: "createdAt_DESC"
        }
      },
      name: "listSnippits"
    }),
    graphql(SPECIFIC_USERS_SNIPPITS_QUERY, {
      options: props => ({
        fetchPolicy: "cache-and-network",
        variables: {
          id: props.user.meta.id,
          orderBy: "createdAt_DESC"
        }
      }),
      name: "listSpecificUserSnippits"
    })
  )(Home)
);

const styles = {
  button: {
    width: 200,
    backgroundColor: "black"
  },
  headerContainer: {
    height: 50,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    margin: "20 0"
  }
};

import React, { Component } from "react";
//material-ui
import AppBar from "@material-ui/core/AppBar";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ArchiveIcon from "@material-ui/icons/Archive";
// REDUX
import { incrementCounter } from "../store/actions/counter";
import { setUserInfo } from "../store/actions/user";
import { toggleLandingPage } from "../store/actions/landingPage";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// graphql dependencies
import { graphql, compose } from "react-apollo";
//import Q's and M's
import { SNIPPITS_QUERY } from "../graphql/queries/SNIPPITS_QUERY";
import { SPECIFIC_USERS_SNIPPITS_QUERY } from "../graphql/queries/SPECIFIC_USERS_SNIPPITS_QUERY";
import { DELETE_SNIP } from "../graphql/mutations/DELETE_SNIP";
import { SNIPPITS_QUERY_SIMPLE } from "../graphql/queries/SNIPPITS_QUERY_SIMPLE";
// locals
import Portal from "../components/portals/portalTemplate";
import HomePageSnippitList from '../components/HomePageSnippitList';
import {
  ContainerAlpha,
  HideDivWhenSmall,
  ShowDivWhenSmall
} from "../components/styled";
import HomeHelpPage from "./help/HomeHelpPage";
import ConfirmDeletePage from "./deleteSnip/ConfirmDeletePage";
// utils
import { clearLog } from "../utils";
import fileDownload from "js-file-download";

const defaultState = {
  showPortal: false,
  showHelp: false,
  showConfirmDelete: false,
  idToDelete: '',
  deleteSnipConfirmed: false,
};

class Home extends Component {
  state = {
    showPortal: false,
    showHelp: false,
    showConfirmDelete: false,
    idToDelete: '',
    deleteSnipConfirmed: false,
  };

  handleChange = name => event => {
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

  handleConfirmDelete = async () => {
    const { idToDelete } = this.state
    //clearLog('handleConfirmDelete id: ', idToDelete)

    let response;
    response = await this.props.deleteSnippitMutation({
      variables: {
        id: idToDelete,
      },
    });
    // updates data in query to remove newly deleted list item
    this.props.listSpecificUserSnippits.refetch()

    this.setState({
      ...defaultState
    })
  }

  handleAbortDelete = async (id) => {
    this.setState({
      ...defaultState
    })
  }

  handleDelSnippo = (id) => {
    this.setState(prevState => {
      return {
        showConfirmDelete: !prevState.showConfirmDelete,
        idToDelete: id
      };
    });
  }

  render() {
    const {
      listSnippits: { loading, snippits },
      listSpecificUserSnippits: { snippits: newSnippits, loading: newLoading },
      deleteSnippitMutation,
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

    if (this.state.showConfirmDelete) {
      return (
        <Portal>
          <ConfirmDeletePage
            confirm={this.handleConfirmDelete}
            abort={this.handleAbortDelete}
          />
        </Portal>
      );
    }
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
              <ShowDivWhenSmall>
                Download Snip Library
              </ShowDivWhenSmall>
            </Button>
            <Typography variant="body2" color="secondary">
              <div style={{ cursor: "pointer" }} onClick={this.toggleHelp}>
                help
              </div>
            </Typography>
          </div>
        </AppBar>
        <HomePageSnippitList
          soup={this.props.user.snipSoup}
          snips={newSnippits}
          delSnippo={this.handleDelSnippo}
        />
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
      toggleLandingPageAction: toggleLandingPage,
      setUserInfoAction: setUserInfo
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
    graphql(SNIPPITS_QUERY_SIMPLE, {
      options: props => ({
        variables: {
          orderBy: "createdAt_DESC"
        },
        fetchPolicy: "cache-and-network"
      }),
      name: "snippitsQuery"
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
    }),
    graphql(DELETE_SNIP, {
      options: props => ({
        fetchPolicy: "cache-and-network",
      }),
      name: "deleteSnippitMutation"
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

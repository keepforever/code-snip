import React, { Component } from "react";
//material-ui
import TextField from "@material-ui/core/TextField";
import AppBar from "@material-ui/core/AppBar";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// REDUX
import { incrementCounter } from "../store/actions/counter";
import { toggleLandingPage } from "../store/actions/landingPage";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// graphql dependencies

//import { DELETE_OFFER } from "../graphql/mutations/DELETE_OFFER";
// utils
import { clearLog, processSnipsForSearch } from "../utils";
// locals
import Portal from '../components/portals/portalTemplate'
import { ContainerAlpha, ModalContainer, WelcomeContainer } from "../components/styled";
import SnipListItem from "../components/snip-list-item/SnipListItem";
import LandingPage from '../components/landing/LandingPage'


class Search extends Component {

  state = {
    search: '',
  };

  handleTextChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    //clearLog('HOME PROPS', this.props)
    const {  user: { snips },  } = this.props;
    const { search } = this.state

    const processedSnips = processSnipsForSearch(snips)

    let match = [];
    if(search.length > 1) {
      processedSnips.forEach((item, index) => {
        const bagToString = item.bagOfWords.join(" ")
        if (bagToString.includes(search.trim())) {
          match.push(index)
        }
      })
    }


    console.log('match', match)

    clearLog('processedSnips', processedSnips)

    return (
      <ContainerAlpha>
        <div>
          <AppBar position="static" color="default">
            <TextField
              fullWidth
              id="multiline-flexible"
              label="Snarf your snips..."
              multiline
              rowsMax="1"
              value={search}
              onChange={this.handleTextChange("search")}
              margin="normal"
            />
          </AppBar>
        </div>
        <div className="container">
          {match.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <SnipListItem snip={snips[item]} />
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
      toggleLandingPageAction: toggleLandingPage,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Search)


const styles = {
  button: {
    width: 200,
    backgroundColor: "black"
  },
  headerContainer: {
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "20 0"
  }
};

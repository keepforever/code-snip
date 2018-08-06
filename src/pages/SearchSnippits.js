import React, { Component } from "react";
//material-ui
import TextField from "@material-ui/core/TextField";
import AppBar from "@material-ui/core/AppBar";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
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
import { ContainerAlpha, ModalContainer, WelcomeContainer, SearchTextContainer } from "../components/styled";
import SnipListItem from "../components/snip-list-item/SnipListItem";
import LandingPage from '../components/landing/LandingPage'
import MyMaterialToolTip from "../components/tool-tips/MyMaterialToolTip";



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
    const {  user: { snips, snipSoup },  } = this.props;
    const { search } = this.state

    //const processedSnips = processSnipsForSearch(snips)

    let match = [];
    if(search.length > 1) {
      snipSoup.forEach((item, index) => {
        const bagToString = item.bagOfWords.join(" ")
        if (bagToString.includes(search.trim().toLowerCase())) {
          match.push(index)
        }
      })
    }

    clearLog('snipSoup', snipSoup)

    return (
      <ContainerAlpha>
        <AppBar position="static" color="default">
          <Typography variant="title" color="secondary">
            <div style={styles.container}>Search Snips</div>
          </Typography>
        </AppBar>

          <SearchTextContainer>
            <AppBar position="static" color="default">
              <TextField
                fullWidth
                id="multiline-flexible"
                label="Snarf for snips..."
                rowsMax="1"
                value={search}
                onChange={this.handleTextChange("search")}
                margin="normal"
              />
            </AppBar>
          </SearchTextContainer>
        <div className="container">
          {match.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <SnipListItem
                  soup={this.props.user.snipSoup[index].bagOfWords}
                  snip={snips[item]} />
              </React.Fragment>
            );
          })}
        </div>
          <div style={styles.container}>
          <MyMaterialToolTip tipKey="searchBarGuidance">
            <Typography variant="body2" color="secondary">
              help
            </Typography>
          </MyMaterialToolTip>
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
  },
  container: {
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "20 0"
  }
};

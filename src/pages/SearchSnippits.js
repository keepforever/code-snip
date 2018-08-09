import React, { Component } from "react";
//material-ui
import TextField from "@material-ui/core/TextField";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
// REDUX
import { incrementCounter } from "../store/actions/counter";
import { toggleLandingPage } from "../store/actions/landingPage";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
//locals
import { ContainerAlpha, SearchTextContainer } from "../components/styled";
import SnipListItem from "../components/snip-list-item/SnipListItem";
import SearchSnipHelpPage from './help/SearchSnipHelpPage'
import Portal from '../components/portals/portalTemplate'
// utils
import { clearLog } from '../utils'

class Search extends Component {

  state = {
    search: '',
    showHelp: false,
  };

  toggleHelp = () => {
    this.setState(prevState => {
      return {
        showHelp: !prevState.showHelp
      };
    });
  }

  handleTextChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    //clearLog('HOME PROPS', this.props)
    const {  user: { snips, snipSoup },  } = this.props;
    const { search } = this.state

    if(this.state.showHelp) {
      return (
        <Portal>
          <SearchSnipHelpPage  toggleHelp={this.toggleHelp}/>
        </Portal>
      )
    }

    //console.log('snips', snips)
    //console.log('soup', snipSoup)

    let match = [];
    if(search.length > 1) {
      snipSoup.forEach((item, index) => {
        const bagToString = item.bagOfWords.join(" ")
        if (bagToString.includes(search.trim().toLowerCase())) {
          match.push(index)
        }
      })
    }

    return (
      <ContainerAlpha>
        <AppBar position="static" color="default">
          <div style={styles.headerContainer} >
          <Typography variant="title" color="secondary">
              Search Snips
          </Typography>
          <Typography variant="body2" color="secondary">
              <div style={{cursor: 'pointer'}} onClick={this.toggleHelp}>
                help
              </div>
          </Typography>
        </div>
        </AppBar>
          <SearchTextContainer>
            <AppBar position="static" color="default">
              <TextField
                fullWidth
                autoFocus
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
          {match.map((matchIndex, index) => {
            return (
              <React.Fragment key={index}>
                <SnipListItem
                  soup={snipSoup[matchIndex].bagOfWords}
                  snip={snips[matchIndex]} />
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
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-around",
    margin: "20 0"
  },
  helpContainer: {
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "20 0",
    cursor: 'pointer'
  },
  container: {
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "20 0",
  }
};

import React, { Component } from "react";
//material-ui
import TextField from "@material-ui/core/TextField";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
// REDUX
import { incrementCounter } from "../../store/actions/counter";
import { toggleLandingPage } from "../../store/actions/landingPage";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
//locals
import SearchSnipsView from './searchSnipsView'
import { ContainerAlpha, SearchTextContainer } from "../../components/styled";
import SnipListItem from "../../components/snip-list-item/SnipListItem";
import SearchSnipHelpPage from '../help/SearchSnipHelpPage'
import Portal from '../../components/portals/portalTemplate'
// utils
import { clearLog } from '../../utils'
import { trimSearch } from './utils'

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

  handleTextChange = (fieldName, event) => {
    this.setState({
      [fieldName]: event.target.value
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
    //console.log('soup', '\n', JSON.stringify(snipSoup))

    let match = [];
    if(search.length > 1) {
      match = [...trimSearch(snipSoup, search)]
    }

    return (
      <SearchSnipsView
        toggleHelp={() => this.toggleHelp()}
        textChange={
          (fieldName, event) => this.handleTextChange(fieldName, event)
        }
        search={search}
        match={match}
        snipSoup={snipSoup}
        snips={snips}
      />
    )

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

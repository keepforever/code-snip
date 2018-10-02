import React, { Component } from "react";
//material-ui
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
//views
import AddSnipView from './addSnipView'
//locals
import AddSnipHelpPage from '../help/AddSnipHelpPage'
import Portal from '../../components/portals/portalTemplate'

class AddSnip extends Component {
  state = {
    showHelp: false,
  }

  toggleHelp = () => {
    this.setState(prevState => {
      return {
        showHelp: !prevState.showHelp
      };
    });
  }

  render() {

    if(this.state.showHelp) {
      return (
        <Portal>
          <AddSnipHelpPage
            toggleHelp={() => this.toggleHelp()}
          />
        </Portal>
      )
    }

    return (
      <AddSnipView
        toggleHelp={() => this.toggleHelp()}
      />
    )
  }
}

export default AddSnip;

import React, { Component } from "react";
//material-ui
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
//locals
import { KeepFormWidthDiv } from "../components/styled";
import MyForm from "../components/MyForm";
import AddSnipHelpPage from './help/AddSnipHelpPage'
import Portal from '../components/portals/portalTemplate'

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
          <AddSnipHelpPage  toggleHelp={this.toggleHelp}/>
        </Portal>
      )
    }

    return (
      <KeepFormWidthDiv>
        <div>
          <AppBar position="static" color="default">
            <div style={styles.headerContainer} >
            <Typography variant="title" color="secondary">
                Add Snippit
            </Typography>
            <Typography variant="body2" color="secondary">
                <div style={{cursor: 'pointer'}} onClick={this.toggleHelp}>
                  help
                </div>
            </Typography>
          </div>
          </AppBar>
        </div>
        <MyForm />
      </KeepFormWidthDiv>
    );
  }
}

export default AddSnip;

const styles = {
  container: {
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "20 0"
  },
  headerContainer: {
    height: 50,
    display: "flex",
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-around",
    margin: "20 0"
  }
}

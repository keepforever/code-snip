import React, { Component } from "react";
//material-ui
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
//locals
import {
  KeepFormWidthDiv,
  HeaderContainer,
  CursorDiv
} from "../../components/styled";
import MyForm from "../../components/MyForm";
import AddSnipHelpPage from '../help/AddSnipHelpPage'
import Portal from '../../components/portals/portalTemplate'

class AddSnip extends Component {

  render() {
    const { toggleHelp } = this.props

    return (
      <KeepFormWidthDiv>
          <AppBar position="static" color="default">
            <HeaderContainer  >
            <Typography variant="title" color="secondary">
                Add Snippit
            </Typography>
            <Typography variant="body2" color="secondary">
                <CursorDiv
                  onClick={
                    () => toggleHelp()
                }>
                  help
                </CursorDiv>
            </Typography>
          </HeaderContainer>
          </AppBar>
        <MyForm />
      </KeepFormWidthDiv>
    );
  }
}

export default AddSnip;

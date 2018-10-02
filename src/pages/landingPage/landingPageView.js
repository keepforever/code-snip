import React, { Component } from "react";
import { Redirect, NavLink } from "react-router-dom";
import { withRouter } from "react-router";
// material-ui
import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
// locals
import TitleBar from '../../components/TitleBar'
import LandingNavLink from './landingNavLink'
import {
  ModalContainer,
  WelcomeContainer,
  HelpContainer
} from "../../components/styled";
 import MoOutHelp from "../../components/MoOutHelp";
import {
  LandingMainContainer, LandingButtonContainer
} from './styled'
import OuterSpace from "../../components/outer-space";
import MyMaterialToolTip from "../../components/tool-tips/MyMaterialToolTip";
//utils
import { clearLog } from "../../utils";

const defaultState = {
  email: "",
  password: "",
  isSubmitting: false,
  redirectToReferrer: false
};

const snipSnarf = {
  root: {
    background: "black"
  },
  input: {
    color: "#0091EA"
  }
};

class LandingPageView extends Component {
  state = defaultState;

  render() {
    const {
      email, password, isSubmitting, textChange, loginSubmit, classes
    } = this.props

    return (
      <MoOutHelp>
        <LandingMainContainer >
          <TitleBar
            title="Snip Snarf"
          />
          <TextField
            fullWidth
            autoFocus
            id="email-input"
            label="Email..."
            value={email}
            onChange={(event) => {
              textChange("email", event)
            }}
            margin="normal"
            className={classes.root}
            InputProps={{
              className: classes.input
            }}
            InputLabelProps={{
              className: classes.input
            }}
          />
          <TextField
            fullWidth
            id="password-input"
            label="Password..."
            value={password}
            onChange={(event) => {
              textChange("password", event)
            }}
            margin="normal"
            className={classes.root}
            InputProps={{
              className: classes.input
            }}
            InputLabelProps={{
              className: classes.input
            }}
          />
          <LandingButtonContainer
            onClick={() => loginSubmit()}
          >
            <Button
              fullWidth
              color="secondary"
              variant="outlined"
              disabled={isSubmitting}
            >
              Login
            </Button>
          </LandingButtonContainer>
          <LandingNavLink />
        </LandingMainContainer>
      </MoOutHelp>
    );
  }
}

export default withRouter(withStyles(snipSnarf)(LandingPageView));

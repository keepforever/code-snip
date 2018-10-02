import React, { Component } from "react";
import { Redirect, NavLink } from "react-router-dom";
import { withRouter } from "react-router";
// material-ui
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
// locals
import SignUpNavLink from './signupNavLink';
import TitleBar from "../../components/TitleBar";
import MoOutHelp from "../../components/MoOutHelp";
import {
  ModalContainer,
  WelcomeContainer,
  HelpContainer
} from "../../components/styled";
import {
  SignUpButtonContainer, SignUpMainContainer
} from './styled'
import OuterSpace from "../../components/outer-space";
//utils
import { emailRegex, starterSnippitsArray } from "../../constants";
import { clearLog } from "../../utils";

// helper function to send multiple mutations async'sly
async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

const snipSnarf = {
  root: {
    background: "black"
  },
  input: {
    color: "#0091EA"
  }
};

class SignUpPageView extends Component {
  render() {
    const {
      classes, email, password, isSubmitting,
      textChange, signupSubmit, name
    } = this.props;

    return (
      <MoOutHelp>
        <SignUpMainContainer>
          <TitleBar title="Snip Snarf Sign Up" />
          <TextField
            fullWidth
            autoFocus
            id="name-input"
            label="Name..."
            value={name}
            onChange={event => {
              textChange("name", event);
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
            id="email-input"
            label="Email..."
            value={email}
            onChange={event => {
              textChange("email", event);
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
            onChange={event => {
              textChange("password", event);
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
          <SignUpButtonContainer
            onClick={() => signupSubmit()}
          >
            <Button
              color="secondary"
              disabled={isSubmitting}
              variant="outlined"
              fullWidth
            >
              SignUp
            </Button>
          </SignUpButtonContainer>

          <SignUpNavLink />

        </SignUpMainContainer>
      </MoOutHelp>
    );
  }
}

const styles = {
  main: {
    padding: 15,
    flexFlow: "column wrap",
    display: "flex",
    alignItems: "center"
  },
  welcomeText: {
    paddingBottom: 10
  },
  button: {
    width: "100%",
    backgroundColor: "black"
  }
};


export default withRouter(withStyles(snipSnarf)(SignUpPageView));

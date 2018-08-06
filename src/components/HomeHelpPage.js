import React, { Component } from "react";
import { ModalContainer, HelpContainer } from "./styled";
// material-ui
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
// locals
import OuterSpace from "./outer-space";
import { clearLog } from "../utils";
import { tipLibrary } from "../constants"

const defaultState = {
  email: "b@b.com"
};

const snipSnarf = {
  root: {
    background: "black"
  },
  input: {
    color: "#0091EA"
  }
};

class HomeHelp extends Component {
  state = defaultState;

  render() {
    const { togglePortal, classes } = this.props;
    const { email, password } = this.state;

    return (
      <ModalContainer>
        <OuterSpace>
          <HelpContainer>
            <div style={styles.main}>
              {tipLibrary.homeHelpText.map((t, index) => {
                return (
                  <div style={{marginBottom: 8}} key={index}>
                    <Typography variant="body2" color="secondary">
                      {index + 1}. {t}
                    </Typography>
                  </div>
                )
              })}
              <div onClick={this.props.toggleHelp}>
                <Button
                  color="secondary"
                  disabled={this.state.isSubmitting}
                  variant="raised"
                  fullWidth
                >
                  Back to App...
                </Button>
              </div>
            </div>
          </HelpContainer>
        </OuterSpace>
      </ModalContainer>
    );
  }
}

const styles = {
  main: {
    padding: 15
  },
  welcomeText: {
    paddingBottom: 10
  },
  button: {
    width: "100%",
    backgroundColor: "black"
  }
};

export default withStyles(snipSnarf)(HomeHelp);

import React, { Component } from "react";
// material-ui
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
// locals
import OuterSpace from "../../components/outer-space";
import { ModalContainer, HelpContainer } from "../../components/styled";
import { clearLog } from "../../utils";

const snipSnarf = {
  root: {
    background: "black"
  },
  input: {
    color: "#0091EA"
  }
};

class ConfirmDelete extends Component {

  render() {
    const { confirm, abort } = this.props;

    return (
      <ModalContainer>
        <OuterSpace>
          <HelpContainer>
            <div style={styles.main}>
              <div >
                <Typography variant="title" color="secondary">
                  Are you sure you want to delete this snip?
                </Typography>
              </div>
              <div style={{marginBottom: 15}} onClick={confirm}>
                <Button
                  color="secondary"
                  variant="raised"
                  fullWidth
                >
                  Yes, delete it
                </Button>
              </div>
              <div style={{marginBottom: 15}} onClick={abort}>
                <Button
                  color="secondary"
                  variant="raised"
                  fullWidth
                >
                  No, abort
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

export default withStyles(snipSnarf)(ConfirmDelete);

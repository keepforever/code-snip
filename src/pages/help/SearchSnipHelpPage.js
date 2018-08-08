import React, { Component } from "react";
import {  ModalContainer,  HelpContainer} from "../../components/styled";
// material-ui
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
// locals
import OuterSpace from "../../components/outer-space";
import { tipLibrary } from "../../constants"

const snipSnarf = {
  root: {
    background: "black"
  },
  input: {
    color: "#0091EA"
  }
};

class SearchSnipHelp extends Component {


  render() {
    const { toggleHelp } = this.props;

    return (
      <ModalContainer>
        <OuterSpace>
          <HelpContainer>
            <div style={styles.main}>
              <div style={{marginBottom: 15}} onClick={toggleHelp}>
                <Button
                  color="secondary"
                  variant="raised"
                  fullWidth
                >
                  Back to App
                </Button>
              </div>
              <div >
                <Typography variant="title" color="secondary">
                  About Search
                </Typography>
              </div>
              <br/>
              {tipLibrary.searchSnipHelpText.map((t, index) => {
                return (
                  <div style={{marginBottom: 12}} key={index}>
                    <Typography variant="body2" color="secondary">
                      {t}
                    </Typography>
                  </div>
                )
              })}
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

export default withStyles(snipSnarf)(SearchSnipHelp);

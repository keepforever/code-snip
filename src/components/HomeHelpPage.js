import React, { Component } from "react";
import { ModalContainer, HelpContainer } from "./styled";
// material-ui
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
// locals
import OuterSpace from "./outer-space";
import { clearLog } from "../utils";
import { tipLibrary, helpSnippitDemo } from "../constants"
import SnipListItem from './snip-list-item/SnipListItem'

const snipSnarf = {
  root: {
    background: "black"
  },
  input: {
    color: "#0091EA"
  }
};

class HomeHelp extends Component {

  render() {
    const { toggleHelp } = this.props;

    return (
      <ModalContainer>
        <OuterSpace>
          <HelpContainer>
            <div style={styles.main}>
              <div >
                <Typography variant="title" color="secondary">
                  This is a Snip
                </Typography>
              </div>
              <br />
              <SnipListItem
                soup={helpSnippitDemo.bagOfWords}
                snip={helpSnippitDemo} />
              <br/>
              {tipLibrary.homeHelpText.map((t, index) => {
                return (
                  <div style={{marginBottom: 12}} key={index}>
                    <Typography variant="body2" color="secondary">
                      {t}
                    </Typography>
                  </div>
                )
              })}
              <div onClick={toggleHelp}>
                <Button
                  color="secondary"
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

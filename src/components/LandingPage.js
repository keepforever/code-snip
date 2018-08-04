import React from "react";
import { ModalContainer, WelcomeContainer } from "./styled";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import OuterSpace from "./outer-space";

const LandingPage = props => {
  const { togglePortal } = props;
  return (
    <ModalContainer>
      <OuterSpace>
        <WelcomeContainer>
          <Paper
            component={() => {
              return (
                <div style={styles.main}>
                  <div style={styles.welcomeText}>
                    <Typography variant="title" color="secondary">
                      Welcome to
                    </Typography>
                  </div>
                  <div style={styles.welcomeText}>
                    <Typography variant="title" color="secondary">
                      <strong>Snip Snarf</strong>
                    </Typography>
                  </div>
                  <div style={styles.welcomeText}>
                    <Typography variant="body1" color="default">
                      Copy, paste, tag, catalogue and retrieve code snippits you use regularly based on the tags you add.
                    </Typography>
                  </div>
                  <div style={styles.button} onClick={togglePortal}>
                    <Button color="primary" variant="raised" fullWidth>
                      Enter
                    </Button>
                  </div>
                </div>
              );
            }}
          />
        </WelcomeContainer>
      </OuterSpace>
    </ModalContainer>
  );
};

export default LandingPage;

const styles = {
  main: {
    padding: 20
  },
  welcomeText: {
    paddingBottom: 15
  },
  button: {
    width: "100%",
    backgroundColor: "black"
  }
};

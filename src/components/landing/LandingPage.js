import React, { Component } from "react";
import { ModalContainer, WelcomeContainer } from "../styled";
// material-ui
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import OuterSpace from "../outer-space";
// REDUX
import { toggleLandingPage } from "../../store/actions/landingPage";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// graphql dependencies
import { graphql, compose } from "react-apollo";
//import Q's and M's
import { SNIPPITS_QUERY } from "../../graphql/queries/SNIPPITS_QUERY";
import { LOGIN_MUTATION } from "../../graphql/mutations/LOGIN_MUTATION";
import { clearLog } from "../../utils";
// locals


const defaultState = {
  email: "",
  password: "",
  isSubmitting: false
}

class LandingPage extends Component {
  state = {
    email: "",
    password: "",
    isSubmitting: false
  };
  togglePortal = () => {
    this.props.toggleLandingPageAction();
  };

  loginSubmit = async () => {
    // clearLog("state", this.state);
    if (this.state.isSubmitting) {
      return;
    }

    const { email, password } = this.state;

    this.setState({ isSubmitting: true });
    let response;
    try {
      response = await this.props.loginSubmitMutation({
        variables: {
          email,
          password
        },
      });
    } catch (error) {
      console.log(error);
      return;
    }
    clearLog("LOGIN_MUTATION response", response);
    this.setState({
      ...defaultState,
    });
  };

  handleTextChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { togglePortal } = this.props;
    const { email, password } = this.state;

    return (
      <ModalContainer>
        <OuterSpace>
          <WelcomeContainer>
            <div style={styles.main}>
              <div>
                <Typography variant="title" color="secondary">
                  Welcome to
                </Typography>
              </div>
              <div style={styles.welcomeText}>
                <Typography variant="title" color="secondary">
                  <strong>Snip Snarf</strong>
                </Typography>
              </div>
              <div >
                <Typography variant="body1" color="error">
                  Temp Login Creds: <br/> email =  b@b.com <br/> pw =  b
                </Typography>
              </div>
              <TextField
                fullWidth
                id="multiline-flexible"
                label="Email..."
                multiline
                rowsMax="1"
                value={email}
                onChange={this.handleTextChange("email")}
                margin="normal"
              />
              <TextField
                fullWidth
                id="multiline-flexible"
                label="Password..."
                multiline
                rowsMax="1"
                value={password}
                onChange={this.handleTextChange("password")}
                margin="normal"
              />
              <div style={styles.button} onClick={this.togglePortal}>
                <Button color="secondary" variant="raised" fullWidth>
                  Enter
                </Button>
              </div>
              <div style={styles.button} onClick={this.loginSubmit}>
                <Button
                  color="primary"
                  disabled={this.state.isSubmitting}
                  variant="raised"
                  fullWidth
                >
                  Login
                </Button>
              </div>
            </div>
          </WelcomeContainer>
        </OuterSpace>
      </ModalContainer>
    );
  }
}

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

const mapStateToProps = state => {
  return {
    ctr: state.counter.count,
    user: state.user.userId,
    snipp: state.snippit.snippits,
    shouldShowLanding: state.landingPage.showLandingPage
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      toggleLandingPageAction: toggleLandingPage
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  compose(
    graphql(SNIPPITS_QUERY, {
      options: {
        fetchPolicy: "cache-and-network",
        variables: {
          orderBy: "createdAt_ASC"
        }
      },
      name: "listSnippits"
    }),
    graphql(LOGIN_MUTATION, {
      options: { fetchPolicy: "cache-and-network" },
      name: "loginSubmitMutation"
    })
  )(LandingPage)
);

import React, { Component } from "react";
import { Redirect, NavLink } from "react-router-dom";
import { withRouter } from "react-router";
// material-ui
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withStyles } from '@material-ui/core/styles';
// REDUX
import { toggleLandingPage } from "../store/actions/landingPage";
import { setUserInfo } from "../store/actions/user";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// graphql dependencies
import { graphql, compose } from "react-apollo";
//import Q's and M's
import { SNIPPITS_QUERY } from "../graphql/queries/SNIPPITS_QUERY";
import { LOGIN_MUTATION } from "../graphql/mutations/LOGIN_MUTATION";
// locals
import { ModalContainer, WelcomeContainer, HelpContainer } from "../components/styled";
import OuterSpace from "../components/outer-space";
import MyMaterialToolTip from '../components/tool-tips/MyMaterialToolTip'
//utils
import { clearLog } from "../utils";


const defaultState = {
  email: "",
  password: "",
  isSubmitting: false,
  redirectToReferrer: false
}

const snipSnarf = {
  root: {
    background: "black"
  },
  input: {
    color: "#0091EA"
  }
};

class LandingPage extends Component {
  state = defaultState
  togglePortal = () => {
    this.props.toggleLandingPageAction();
  };

  loginSubmit = async () => {
    // clearLog("state", this.state);
    if (this.state.isSubmitting) {
      return;
    }

    const { email, password } = this.state;

    if(email.length === 0 || password.length === 0) {
      alert('cannot have email, name or passowrd be of lenth 0')
      this.setState({
        ...defaultState
      });
      return
    }

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
    //clearLog("LOGIN_MUTATION response", response.data.login.payload);
    if(!response.data.login.payload) {
      this.setState({
        ...defaultState,
      });
      alert('Sorry, try again')
      return
    }
    this.setState({
      ...defaultState,
    });
    this.props.setUserInfoAction(response.data.login.payload);
    this.props.toggleLandingPageAction();
    this.setState({
      redirectToReferrer: true
    })
  };

  handleTextChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;
    const { email, password, redirectToReferrer } = this.state;

    if(redirectToReferrer) {
      return (
        <Redirect to='/'/>
      )
    }

    return (
      <ModalContainer>
        <OuterSpace>
          <HelpContainer>
            <div style={styles.main}>
              <div>
                <Typography variant="title" color="secondary">
                  Welcome to
                </Typography>
              </div>
              <div style={styles.welcomeText}>
                <Typography variant="headline" color="secondary">
                  <strong>Snip Snarf</strong>
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
                id="multiline-flexible"
                label="Password..."
                multiline
                rowsMax="1"
                value={password}
                onChange={this.handleTextChange("password")}
                margin="normal"
                className={classes.root}
                InputProps={{
                  className: classes.input
                }}
                InputLabelProps={{
                  className: classes.input
                }}
              />
                <div style={styles.button} onClick={this.loginSubmit}>
                  <Button
                    color="secondary"
                    disabled={this.state.isSubmitting}
                    variant="outlined"
                    fullWidth
                  >
                    Login
                  </Button>
                </div>
                <NavLink to='/signup'>
                  <Button fullWidth color="secondary">
                    <Typography variant="button" color="inherit">
                      <div style={{marginTop: 25, color: 'white'}}>
                        New? Create Account...
                      </div>
                    </Typography>
                  </Button>
                </NavLink>
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
      toggleLandingPageAction: toggleLandingPage,
      setUserInfoAction: setUserInfo
    },
    dispatch
  );
};

const EnhancedLandingPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(
  compose(
    graphql(SNIPPITS_QUERY, {
      options: {
        fetchPolicy: "cache-and-network",
        variables: {
          orderBy: "createdAt_DESC"
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

export default withRouter(withStyles(snipSnarf)(EnhancedLandingPage));

// 
// <MyMaterialToolTip tipKey="loginButton">
// </MyMaterialToolTip>
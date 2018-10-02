import React, { Component } from "react";
import { Redirect, NavLink } from "react-router-dom";
import { withRouter } from "react-router";
// material-ui
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
// REDUX
import { toggleLandingPage } from "../../store/actions/landingPage";
import { setUserInfo } from "../../store/actions/user";
import { updateBOWAfterCreate } from "../../store/actions/snippit";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// graphql dependencies
import { graphql, compose } from "react-apollo";
//import Q's and M's
import { SIGNUP_MUTATION } from "../../graphql/mutations/SIGNUP_MUTATION";
import { CREATE_SNIPPIT } from "../../graphql/mutations/CREATE_SNIPPIT";
// locals
import SignUpPageView from "./signUpPageView";
import {
  ModalContainer,
  WelcomeContainer,
  HelpContainer
} from "../../components/styled";
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

const defaultState = {
  name: "",
  email: "",
  password: "",
  errors: {},
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

class SignUpPage extends Component {
  state = defaultState;

  handleTextChange = (fieldName, event) => {
    this.setState({
      [fieldName]: event.target.value
    });
  };

  signupSubmit = async () => {
    const { name, email, password } = this.state;

    if (name.length === 0 || email.length === 0 || password.length === 0) {
      alert("cannot have email, name or password be of lenth 0");
      this.setState({
        ...defaultState
      });
      return;
    }

    if (this.state.isSubmitting) {
      return;
    }

    // const isEmailValid = emailRegex.test(email)
    // if(!isEmailValid) {
    //   alert("Please Enter a Valid Email")
    //   this.setState({
    //     ...defaultState
    //   });
    //   return
    // }

    this.setState({ isSubmitting: true });
    let response;
    try {
      response = await this.props.createUser({
        variables: {
          name,
          email,
          password
        }
      });
    } catch (err) {
      clearLog("Error from SignUpPage", err);
      this.setState({
        isSubmitting: false
      });
      return;
    }
    // here we rename the destructured vars to avoid colision.
    // e.g. incoming var = name, renamed to newName
    const {
      token,
      user: { name: newName, email: newEmail, id: newId }
    } = response.data.signup;

    const setUserInfoWelcomePackage = {
      token: token,
      user: {
        email: newEmail,
        id: newId,
        name: newName,
        snippits: starterSnippitsArray
      }
    };
    localStorage.setItem("snarfToken", token);
    //  clearLog('setUserInfoWelcomePackage', setUserInfoWelcomePackage)
    this.props.setUserInfoAction(setUserInfoWelcomePackage);

    let seedResponse;

    await asyncForEach(starterSnippitsArray, async s => {
      seedResponse = await this.props.createSnippit({
        variables: {
          author: newId,
          name: s.name,
          language: s.language,
          code: s.code,
          type: s.type,
          framework: s.framework,
          notes: s.notes,
          companion: s.companion,
          keywords: s.keywords,
          reference: s.reference
        }
      });
      //clearLog(`seedResponse index: `, seedResponse)
      const bOWPayload = seedResponse.data.createSnippit.author.snippits;
      this.props.updateBOWAfterCreateAction(bOWPayload);
      //clearLog('snipp from store', this.props.snipp)
    });

    this.props.toggleLandingPageAction();
    this.setState({
      redirectToReferrer: true
    });
  };

  render() {
    const { classes } = this.props;
    const {
      name,
      email,
      password,
      redirectToReferrer,
      isSubmitting
    } = this.state;

    if (redirectToReferrer) {
      //console.log('inside redirect')
      return <Redirect to="/" />;
    }

    return (
      <SignUpPageView
        name={name}
        email={email}
        password={password}
        isSubmitting={isSubmitting}
        textChange={(fieldName, event) =>
          this.handleTextChange(fieldName, event)
        }
        signupSubmit={() => this.signupSubmit()}
      />
    );
  }
}

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
      setUserInfoAction: setUserInfo,
      updateBOWAfterCreateAction: updateBOWAfterCreate
    },
    dispatch
  );
};

const EnhancedSignUpPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(
  compose(
    graphql(SIGNUP_MUTATION, {
      options: { fetchPolicy: "cache-and-network" },
      name: "createUser"
    }),
    graphql(CREATE_SNIPPIT, {
      options: {
        fetchPolicy: "cache-and-network"
      },
      name: "createSnippit"
    })
  )(SignUpPage)
);

export default withRouter(withStyles(snipSnarf)(EnhancedSignUpPage));

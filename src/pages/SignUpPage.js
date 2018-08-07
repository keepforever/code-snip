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
import { updateBOWAfterCreate } from "../store/actions/snippit";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// graphql dependencies
import { graphql, compose } from "react-apollo";
//import Q's and M's
import { SNIPPITS_QUERY } from "../graphql/queries/SNIPPITS_QUERY";
import { SIGNUP_MUTATION } from "../graphql/mutations/SIGNUP_MUTATION";
import { CREATE_SNIPPIT } from "../graphql/mutations/CREATE_SNIPPIT";
// locals
import { ModalContainer, WelcomeContainer, HelpContainer } from "../components/styled";
import OuterSpace from "../components/outer-space";
//utils
import { emailRegex, starterSnippitsArray } from '../constants'
import { clearLog } from "../utils";

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}

const defaultState = {
  name: '',
  email: '',
  password: '',
  errors: {},
  isSubmitting: false,
  redirectToReferrer: false,
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
  state = defaultState

  // seedNewUser = async (info) => {
  //
  // }

  signupSubmit = async () => {
    const { name, email, password } = this.state;

    if(name.length === 0 || email.length === 0 || password.length === 0) {
      alert('cannot have email, name or passowrd be of lenth 0')
      this.setState({
        ...defaultState
      });
      return
    }

    if (this.state.isSubmitting) {
       return;
     }

     // const isEmailValid = emailRegex.test(email)
     // clearLog('isEmailValid', isEmailValid)
     //
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
       clearLog('Error from SignUpPage', err)
       this.setState({
         isSubmitting: false,
       });
       return;
     }
     // console.log('signup response.data', response.data)
     // console.log('signup response.data.signup', response.data.signup)
     // console.log('signup response.data.signup.token', response.data.signup.token)

     //const { token, user: { newId, newName, newEmail } } = response.data.signup
     // here we rename the destructured vars to avoid colision.
     // e.g. incoming var = name, renamed to newName
     const {
       token,
       user: {
         name: newName,
         email: newEmail,
         id: newId
       }
     } = response.data.signup

     const setUserInfoWelcomePackage = {
       token: token,
       user: {
         email: newEmail,
         id: newId,
         name: newName,
         snippits: starterSnippitsArray,
       }
     }
     clearLog('setUserInfoWelcomePackage', setUserInfoWelcomePackage)
     this.props.setUserInfoAction(setUserInfoWelcomePackage);

     let seedResponse;

    await asyncForEach(starterSnippitsArray, async (s) => {
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
      clearLog(`seedResponse index: `, seedResponse)
      const bOWPayload  = seedResponse.data.createSnippit.author.snippits
      this.props.updateBOWAfterCreateAction(bOWPayload)
      clearLog('snipp from store', this.props.snipp)
    })

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
      console.log('inside redirect')
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
                <Typography variant="title" color="primary">
                  Welcome to the Party!
                </Typography>
              </div>
              <div style={styles.welcomeText}>
                <Typography variant="headline" color="secondary">
                  <strong>Snip Snarf</strong>
                </Typography>
              </div>
              <div >
                <Typography variant="body2" color="secondary">
                  Signup
                </Typography>
              </div>
              <TextField
                fullWidth
                id="multiline-flexible"
                label="Enter Name"
                multiline
                rowsMax="1"
                value={this.state.name}
                onChange={this.handleTextChange("name")}
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
                label="Enter Email"
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
                label="Enter Password"
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
              <div style={styles.button} onClick={this.signupSubmit}>
                <Button
                  color="secondary"
                  disabled={this.state.isSubmitting}
                  variant="outlined"
                  fullWidth
                >
                  SignUp
                </Button>
              </div>
              <NavLink to='/login'>
                <Button fullWidth color="secondary">
                  <Typography variant="button" color="inherit">
                    <div style={{marginTop: 25, color: 'white'}}>
                      Have Account?  Sign in...
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
      setUserInfoAction: setUserInfo,
      updateBOWAfterCreateAction: updateBOWAfterCreate,
    },
    dispatch
  );
};

const EnhancedSignUpPage = connect(
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
    graphql(SIGNUP_MUTATION, {
      options: { fetchPolicy: "cache-and-network" },
      name: "createUser"
    }),
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

import React, { Component } from "react";
//material-ui
import AppBar from "@material-ui/core/AppBar";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// REDUX
import { incrementCounter } from "../store/actions/counter";
import { toggleLandingPage } from "../store/actions/landingPage";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// graphql dependencies
//import gql from "graphql-tag";
import { graphql, compose } from "react-apollo";
//import Q's and M's
import { SNIPPITS_QUERY } from "../graphql/queries/SNIPPITS_QUERY";
//import { DELETE_OFFER } from "../graphql/mutations/DELETE_OFFER";
// locals
import Portal from '../components/portals/portalTemplate'
import { ContainerAlpha, } from "../components/styled";
import SnipListItem from "../components/snip-list-item/SnipListItem";
import LandingPage from '../components/landing/LandingPage'
import HomeHelpPage from '../components/HomeHelpPage'
// utils
import { clearLog } from "../utils";


// TODO: ADD EXPORT DATA BUTTON SOMEWHERE

//import fileDownload  from 'js-file-download';
// const snippitDownload = JSON.stringify(snippits);
// fileDownload(snippitDownload, 'your-snips-history.json')

class Home extends Component {
  state = {
    age: "",
    currency: "EUR",
    showPortal: false,
    showHelp: false
  };

  handleChange = name => event => {
    // console.log('name', name)
    // console.log('value', event.target.value)
    this.setState({
      [name]: event.target.value
    });
  };

  togglePortal = () => {

    this.props.toggleLandingPageAction()
  };

  toggleHelp = () => {
    this.setState(prevState => {
      return {
        showHelp: !prevState.showHelp
      };
    });
  }

  counterChangeHandler = () => {
    clearLog("counter");
    this.props.onIncrementCounter();
  };

  render() {

    const {
      listSnippits: { loading, snippits },
      //userId,
      //specificSnippit
    } = this.props;
    clearLog('HomeProps', this.props)

    if (loading) {
      return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: 400}}>
          <CircularProgress thickness={7} />;
        </div>
      )
    }
    if(this.props.shouldShowLanding) {
      return (
        <Portal>
          <LandingPage togglePortal={this.togglePortal}/>
        </Portal>
      )
    }
    if(this.state.showHelp) {
      return (
        <Portal>
          <HomeHelpPage  toggleHelp={this.toggleHelp}/>
        </Portal>
      )
    }
    return (
      <ContainerAlpha>
          <AppBar position="static" color="default">
            <div style={styles.headerContainer} >
            <Typography variant="title" color="secondary">
                Your Snips
            </Typography>
            <Typography variant="body2" color="secondary">
                <div style={{cursor: 'pointer'}} onClick={this.toggleHelp}>
                  help
                </div>
            </Typography>
          </div>
          </AppBar>
        <div className="container">
          {snippits.map((item, index) => {
            const { snipSoup }  = this.props.user
            const itemsSoup = snipSoup.filter(el => {
              return (el.id === item.id)
            })

            return (
              <React.Fragment key={index}>
                <SnipListItem
                  soup={itemsSoup[0].bagOfWords}
                  snip={item} />
                {/* <SnipListItem
                  soup={this.props.user.snipSoup[index].bagOfWords}
                  snip={item} /> */}
              </React.Fragment>
            );
          })}
        </div>
        {/*
        <div
          style={styles.button}
          onClick={() => this.props.incrementCounterAction()}
        >
          <Button color="primary" variant="raised" fullWidth>
            Counter
          </Button>
        </div>
         <div onChange={() => this.counterChangeHandler(this.props.ctr)}>
          <Typography variant="subheading" color="secondary">
            Counter value: {ctr}
          </Typography>
        </div>
        <div style={styles.button} onClick={() => this.togglePortal()} >
          <Button color="primary" variant="raised" fullWidth>
            Portal
          </Button>
        </div> */}
      </ContainerAlpha>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.counter.count,
    user: state.user.userInfo,
    snipp: state.snippit.snippits,
    shouldShowLanding: state.landingPage.showLandingPage
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      incrementCounterAction: incrementCounter,
      toggleLandingPageAction: toggleLandingPage,
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
          orderBy: "createdAt_DESC"
        }
      },
      name: "listSnippits"
    })
  )(Home)
);

const styles = {
  button: {
    width: 200,
    backgroundColor: "black"
  },
  headerContainer: {
    height: 50,
    display: "flex",
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-around",
    margin: "20 0"
  }
};
//
//
// {this.state.showPortal && (
//   <Portal>
//     <ModalContainer>
//       <OuterSpace>
//         <WelcomeContainer>
//           <div style={styles.button} onClick={() => this.togglePortal()} >
//             <Button color="primary" variant="raised" fullWidth>
//               Portal
//             </Button>
//           </div>
//         </WelcomeContainer>
//       </OuterSpace>
//     </ModalContainer>
//   </Portal>
// )}

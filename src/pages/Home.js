import React, { Component } from "react";
import { ContainerAlpha } from "../components/styled";
import NewCodeBlockExpandable from '../components/newCodeBlockExpandable'
import CodeBlockExpandable from '../components/CodeBlockExpandable'
//material-ui
import purple from '@material-ui/core/colors/purple';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { codeString } from '../utils'
// REDUX
import { incrementCounter } from '../store/actions/counter';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
// graphql dependencies
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
//import Q's and M's
import { SNIPPITS_QUERY } from '../graphql/queries/SNIPPITS_QUERY';
import { DELETE_OFFER } from '../graphql/mutations/DELETE_OFFER';
// utils
import { clearLog } from '../utils';

class Home extends Component {
  state = {
    copied: false,
    name: 'Cat in the Hat',
    age: '',
    multiline: '',
    currency: 'EUR',
  };

  handleChange = name => event => {
    // console.log('name', name)
    // console.log('value', event.target.value)
    this.setState({
      [name]: event.target.value,
    });
  };

  onCopy = () => {
    this.setState({copied: true});
  };

  counterChangeHandler = () => {
    console.log("you did it");
    this.props.onIncrementCounter();
  };

  render() {

    const { multiline } = this.state;

    const {  ctr, user, snipp } = this.props


    const {
      listSnippits: { loading, snippits },
      userId,
      specificSnippit
    } = this.props

    let snipMeta = [];
    if(loading) {
      return <CircularProgress thickness={7} />
    } else {
      clearLog('HOME loading completed', this.props.listSnippits.snippits)
      snipMeta = [...snippits]
    }


    return (
      <ContainerAlpha>
        <Typography color="secondary" variant="headline">
          Hello home page
        </Typography>
        <Typography variant="title" color="secondary">
          React & Material-UI Sample Application
        </Typography>
        <div className="container">
          <div onChange={() => this.counterChangeHandler(this.props.ctr)}>
            <Typography variant="subheading" color='secondary'>
              Counter value: {this.props.ctr}
            </Typography>
          </div>
          <div
            style={styles.button}
            onClick={() => this.props.incrementCounterAction()}
            >
              <Button color="primary" variant="raised" fullWidth>
                Counter
              </Button>
          </div>
          {snippits.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <NewCodeBlockExpandable snip={item} />
              </React.Fragment>
            )
          })}
        </div>
      </ContainerAlpha>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.counter.count,
    user: state.user.userId,
    snipp: state.snippit.snippits

  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    incrementCounterAction: incrementCounter,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(compose(
  graphql(SNIPPITS_QUERY, {
    options: {
      fetchPolicy: "cache-and-network",
      variables: {
        orderBy: 'createdAt_ASC'
      }
    },
    name: "listSnippits"
  })
)(Home));

const styles = {
  button: {
    width: '100%',
    backgroundColor: 'black'
  }
};
//
//
// {codeString.map((item, index) => {
//   return (
//     <React.Fragment key={index}>
//       <CodeBlockExpandable snip={item} />
//     </React.Fragment>
//   )
// })}

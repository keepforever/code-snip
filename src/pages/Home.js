import React, { Component } from "react";
import { ContainerAlpha } from "../components/styled";
import SnipListItem from "../components/snip-list-item/SnipListItem";
//material-ui
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// REDUX
import { incrementCounter } from "../store/actions/counter";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// graphql dependencies
//import gql from "graphql-tag";
import { graphql, compose } from "react-apollo";
//import Q's and M's
import { SNIPPITS_QUERY } from "../graphql/queries/SNIPPITS_QUERY";
//import { DELETE_OFFER } from "../graphql/mutations/DELETE_OFFER";
// utils
import { clearLog } from "../utils";

class Home extends Component {
  state = {
    copied: false,
    age: "",
    currency: "EUR"
  };

  handleChange = name => event => {
    // console.log('name', name)
    // console.log('value', event.target.value)
    this.setState({
      [name]: event.target.value
    });
  };

  onCopy = () => {
    this.setState({ copied: true });
  };

  counterChangeHandler = () => {
    clearLog("counter");
    this.props.onIncrementCounter();
  };

  render() {
    const { ctr } = this.props;

    const {
      listSnippits: { loading, snippits },
      //userId,
      //specificSnippit
    } = this.props;

    if (loading) {
      return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: 400}}>
          <CircularProgress thickness={7} />;
        </div>
      )
    }

    return (
      <ContainerAlpha>
        <div className="container">
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
          {snippits.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <SnipListItem snip={item} />
              </React.Fragment>
            );
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
  return bindActionCreators(
    {
      incrementCounterAction: incrementCounter
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
    })
  )(Home)
);

const styles = {
  button: {
    width: "100%",
    backgroundColor: "black"
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

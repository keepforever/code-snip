import React, { Component } from "react";
import { ContainerAlpha } from "../components/styled";
//import CodeBlock from "../components/codeblock/CodeBlock";
import CodeBlockExpandable from '../components/CodeBlockExpandable'
//material-ui
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { codeString } from '../utils'
// REDUX
import { incrementCounter } from '../store/actions/counter';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";

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
    console.log('state multiline', multiline)
    const {  ctr, user, snipp } = this.props
    console.log('mapStateToProps HOME', ctr, user, snipp)


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
          {codeString.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <CodeBlockExpandable snip={item} />
                {/* <div style={{margin: 10}}>
                  <CodeBlock code={el}  />;
                </div> */}
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

export default connect( mapStateToProps, mapDispatchToProps)(Home);

const styles = {
  button: {
    width: '100%',
    backgroundColor: 'black'
  }
};

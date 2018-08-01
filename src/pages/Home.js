import React, { Component } from "react";
import { connect } from "react-redux";
import { ContainerAlpha, ExpansionHeaderDiv } from "../components/styled";
//import CodeBlock from "../components/codeblock/CodeBlock";
import CodeBlockExpandable from '../components/CodeBlockExpandable'
//material-ui
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

//copy-to-clipboard
import { CopyToClipboard } from 'react-copy-to-clipboard';

const codeString = [
  {
    meta: {
      language: 'javascript',
      uses: 'blah'
    },
    code: `
counterChangeHandler = () => {
  console.log("you did it")
  this.props.onIncrementCounter()
}`
  },
  {
    meta: {
      language: 'javascript',
      uses: 'blah'
    },
    code: `
    .App-header {
      background-color: #222;
      height: 150px;
      padding: 20px;
      color: white;
    }`
  },
];

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


    return (
      <ContainerAlpha>
        <h1>Home Page</h1>
        <Typography variant="title" color="inherit">
          React & Material-UI Sample Application
        </Typography>
        <div className="container">
          <p onChange={() => this.counterChangeHandler(this.props.ctr)}>
            Counter value: {this.props.ctr}
          </p>
          <div
            style={styles.button}
            onClick={() => this.props.onIncrementCounter()}
            >
              <Button color="secondary" variant="raised" fullWidth>
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
  return { ctr: state.counter };
};

// Todo: Outsource action types for typo resistance
const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: "INCREMENT", payload: 5 })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

const styles = {
  button: {
    width: '100%',
    backgroundColor: 'black'
  }
};


//material-ui
//
// <Button
//   variant="raised"
//   color="primary"
//   onClick={() => this.props.onIncrementCounter()}>
//   Counter
// </Button>

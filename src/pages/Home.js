import React, { Component } from "react";
import { connect } from "react-redux";
import { ContainerAlpha } from "../components/styled";
import CodeBlock from "../components/codeblock/CodeBlock";
//material-ui
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
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
        <TextField
          fullWidth
          id="multiline-flexible"
          label="Code Snippit"
          multiline
          rowsMax="20"
          value={this.state.multiline}
          onChange={this.handleChange('multiline')}
          margin="normal"
        />
        <section className="section">
          <h2>1. Button</h2>
          <CopyToClipboard onCopy={this.onCopy} text={this.state.multiline}>
            <button>Copy to clipboard with button</button>
          </CopyToClipboard>
        </section>
        <Button variant="outlined">
          Default
        </Button>
        <Typography variant="title" color="inherit">
          React & Material-UI Sample Application
        </Typography>
        <div className="container">
          <p onChange={() => this.counterChangeHandler(this.props.ctr)}>
            Counter value: {this.props.ctr}
          </p>
          <button
            style={styles.button}
            onClick={() => this.props.onIncrementCounter()}
          >
            COUNTER
          </button>
          {codeString.map((el, index) => {
            return (
              <div key={index} style={{margin: 10}}>
                <CodeBlock code={el}  />;
              </div>
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
    height: 75,
    width: 150
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


// onChangeText = (key, value) => {
//   console.log('key', key, 'value', value)
//   this.setState(state => ({
//     values: {
//       ...state.values,
//       [key]: value,
//     },
//   }));
// };

import React, { Component } from 'react';
import { connect } from 'react-redux';
// not imported correctly
// import { Button } from 'material-ui'
// styled components
import {ContainerAlpha } from '../components/styled'


class Home extends Component {
  state = {
      happy: true,
      value: null,
      multiline: ''
  }

  counterChangeHandler = () => {
    console.log("you did it")
    this.props.onIncrementCounter()
  }

  multilineChangeHandler = (text) => {
    this.setState({multiline: text})
    console.log(this.state.multiline)
  }

  render() {

    return (
      <ContainerAlpha>
        <h1>Home Page</h1>
        <div className='container'>
          <p onChange={() => this.counterChangeHandler(this.props.ctr)}>
          Counter value: {this.props.ctr}
          </p>
          <button
            style={styles.button}
            onClick={() => this.props.onIncrementCounter()}>
            COUNTER
          </button>

        </div>
      </ContainerAlpha>
    );
  }
}

const mapStateToProps = state => {
  return {ctr: state.counter};
}

// Todo: Outsource action types for typo resistance
const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({type: 'INCREMENT', payload: 5})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

const styles = {
  button: {
    height: 75,
    width: 150,
  }
}

//material-ui
//
// <Button
//   variant="raised"
//   color="primary"
//   onClick={() => this.props.onIncrementCounter()}>
//   Counter
// </Button>

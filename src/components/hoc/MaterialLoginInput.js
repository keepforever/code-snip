import React from 'react';
import TextField from '@material-ui/core/TextField';
import {clearLog } from '../../utils'

class MaterialLoginInput extends React.Component {

  state = {
    value: ``,
  }
  handleTextChange = name => event => {
    console.log('name: ', name)
    this.setState({
      [name]: event.target.value,
    });
    console.log('event target value: ', event.target.value)
    this.handleChange()
  };

  render() {
    const { value, inputType } = this.props
    return (
      <TextField
        fullWidth
        id="multiline-flexible"
        label={`${inputType}...`}
        multiline
        rowsMax="1"
        value={value}
        onChange={this.handleTextChange('value')}
        margin="normal"
      />
    );
  }
}

export default MaterialLoginInput;

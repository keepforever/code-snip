import React from 'react';
import TextField from '@material-ui/core/TextField';


class MyNameInput extends React.Component {

  state = {
    snipName: ``,
  }
  handleTextChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
    this.handleChange(event.target.value)
  };

  handleChange = value => {
    this.props.onChange("snipName", value);
  };

  render() {
    const { value } = this.props
    return (
      <TextField
        fullWidth
        id="multiline-flexible"
        label='Name your snippit'
        multiline
        rowsMax="1"
        value={value}
        onChange={this.handleTextChange('snipName')}
        margin="normal"
      />
    );
  }
}

export default MyNameInput;

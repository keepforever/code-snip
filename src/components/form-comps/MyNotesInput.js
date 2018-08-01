import React from 'react';
import TextField from '@material-ui/core/TextField';


class MyNotesInput extends React.Component {

  state = {
    multiline: ``,
  }
  handleTextChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
    this.handleChange(event.target.value)
  };

  handleChange = value => {
    //console.log('valueMap[value]', valueMap[value])
    //this.setState({ value });
    this.props.onChange("notes", value);
  };

  render() {
    const { value } = this.props
    return (
      <TextField
        fullWidth
        id="multiline-flexible"
        label="Notes about this snippit..."
        multiline
        rowsMax="100"
        value={value}
        onChange={this.handleTextChange('multiline')}
        margin="normal"
      />
    );
  }
}

export default MyNotesInput;

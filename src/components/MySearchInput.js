import React from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';


class MySearchInput extends React.Component {

  state = {
    searchText: ``,
  }
  handleTextChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
    this.handleChange(event.target.value)
  };

  handleChange = value => {
    this.props.onSearchTextChange("searchText", value);
  };

  render() {
    const { searchText } = this.state
    return (
      <Paper>
        <TextField
          autoFocus
          fullWidth
          id="multiline-flexible"
          label='Name your snippit'
          rowsMax="1"
          value={searchText}
          onChange={this.handleTextChange('snipName')}
          margin="normal"
        />
      </Paper>
    );
  }
}

export default MySearchInput;

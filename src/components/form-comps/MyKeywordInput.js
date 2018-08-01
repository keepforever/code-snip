import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Chip from '@material-ui/core/Chip';


const defaultState = {
  keywords: [],
  pendingKeyword: '',
}

class MyKeywordInput extends Component {

  state = defaultState

  addKeyword(keyword) {
    if (keyword.length === 0) {
      this.setState(state => ({
        ...state,
        pendingKeyword: ''
      }));
      return
    }
    const updatedkeywords = [
      ...this.state.keywords,
      keyword.trim()
    ]
    this.setState(state => ({
      ...state,
      keywords: updatedkeywords,
      pendingKeyword: ''
    }));
    this.props.onChange("keywords", updatedkeywords);
  }

  removeKeyword = (index) => {
    const currentkeywords = [...this.state.keywords]

    const updatedkeywords = currentkeywords.filter((c) => {
      return c !== currentkeywords[index]
    })

    this.setState(state => ({
      ...state,
      keywords: updatedkeywords,
      pendingKeyword: ''
    }));
  }

  handleChange = name => event => {
    // console.log('event,target,value, name', name)
    // console.log('event,target,value', event.target.value)
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    console.log('MyKeywordInput state', this.state)
    return (
      <div>
        <TextField
          id="name"
          label="Pending Keyword"
          value={this.state.pendingKeyword}
          onChange={this.handleChange('pendingKeyword')}
          margin="normal"
          onKeyPress={(ev) => {
            console.log(`Pressed keyCode ${ev.key}`);
            if (ev.key === 'Enter') {
              this.addKeyword(this.state.pendingKeyword)
              ev.preventDefault();
            }
          }}
        />
        <div
          onClick={() => this.addKeyword(this.state.pendingKeyword)}>
          <Button variant="outlined">
            Add Keyword
          </Button>
        </div>
        <h3>pending wants:</h3>
        {this.state.keywords.map((c, index) => {
          return (
            <Chip
              key={index}
              label={c}
              onDelete={() => this.removeKeyword(index)}
            />
          )
        })}
      </div>
    )
  }
}

export default MyKeywordInput

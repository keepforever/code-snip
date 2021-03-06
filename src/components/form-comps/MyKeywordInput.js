import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";

const defaultState = {
  keywords: [],
  pendingKeyword: "",
  shouldClear: false
};

class MyKeywordInput extends Component {
  state = defaultState;

  componentDidUpdate(prevProps, prevState, snapshot) {
    //console.log('prevState.shouldClear', prevState.shouldClear)
    //console.log('prevProps.shouldClear', prevProps.shouldClear)

    const flip = !prevState.shouldClear;

    if (prevProps.shouldClear !== prevState.shouldClear) {
      this.setState({
        keywords: [],
        shouldClear: flip
      });
    }
  }

  addKeyword(keyword) {
    if (keyword.length === 0) {
      this.setState(state => ({
        ...state,
        pendingKeyword: ""
      }));
      return;
    }
    const updatedkeywords = [...this.state.keywords, keyword.trim()];
    this.setState(state => ({
      ...state,
      keywords: updatedkeywords,
      pendingKeyword: ""
    }));
    this.props.onChange("keywords", updatedkeywords);
  }

  removeKeyword = index => {
    const currentkeywords = [...this.state.keywords];

    const updatedkeywords = currentkeywords.filter(c => {
      return c !== currentkeywords[index];
    });

    this.setState(state => ({
      ...state,
      keywords: updatedkeywords,
      pendingKeyword: ""
    }));
  };

  handleChange = name => event => {
    // console.log('event,target,value, name', name)
    // console.log('event,target,value', event.target.value)
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    //console.log('MyKeywordInput state', this.state)
    return (
      <div>
        <TextField
          id="name"
          label="Enter a keyword..."
          value={this.state.pendingKeyword}
          fullWidth
          onChange={this.handleChange("pendingKeyword")}
          margin="normal"
          onKeyPress={ev => {
            //console.log(`Pressed keyCode ${ev.key}`);
            if (ev.key === "Enter") {
              this.addKeyword(this.state.pendingKeyword);
              ev.preventDefault();
            }
          }}
        />
        <div onClick={() => this.addKeyword(this.state.pendingKeyword)}>
          <Button fullWidth color="secondary" variant="raised">
            Add Keyword
          </Button>
        </div>
        <div
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          {this.state.keywords.map((c, index) => {
            return (
              <div style={{ marginRight: 7, marginBotton: 7 }} key={index}>
                <Chip label={c} onDelete={() => this.removeKeyword(index)} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default MyKeywordInput;

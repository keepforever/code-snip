import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
//import Typography from "@material-ui/core/Typography";

const defaultState = {
  companions: [],
  pendingCompanion: "",
  shouldClear: false
};

class MyCompanionInput extends Component {
  state = defaultState;

  componentDidUpdate(prevProps, prevState, snapshot) {
    //console.log('prevState.shouldClear', prevState.shouldClear)
    //console.log('prevProps.shouldClear', prevProps.shouldClear)

    const flip = !prevState.shouldClear;

    if (prevProps.shouldClear !== prevState.shouldClear) {
      this.setState({
        companions: [],
        shouldClear: flip
      });
    }
  }

  addCompanion(companion) {
    if (companion.length === 0) {
      this.setState(state => ({
        ...state,
        pendingCompanion: ""
      }));
      return;
    }
    const updatedCompanions = [...this.state.companions, companion.trim()];
    this.setState(state => ({
      ...state,
      companions: updatedCompanions,
      pendingCompanion: ""
    }));
    this.props.onChange("companion", updatedCompanions);
  }

  removeCompanion = index => {
    const currentCompanions = [...this.state.companions];

    const updatedCompanions = currentCompanions.filter(c => {
      return c !== currentCompanions[index];
    });

    this.setState(state => ({
      ...state,
      companions: updatedCompanions,
      pendingCompanion: ""
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
    //console.log('MyCompanionInput state', this.state)
    return (
      <div>
        <TextField
          id="name"
          label="type here to add companion libs"
          fullWidth
          value={this.state.pendingCompanion}
          onChange={this.handleChange("pendingCompanion")}
          margin="normal"
          onKeyPress={ev => {
            console.log(`Pressed keyCode ${ev.key}`);
            if (ev.key === "Enter") {
              this.addCompanion(this.state.pendingCompanion);
              ev.preventDefault();
            }
          }}
        />
        <div onClick={() => this.addCompanion(this.state.pendingCompanion)}>
          <Button fullWidth color="primary" variant="raised">
            Add Companion
          </Button>
        </div>
        {this.state.companions.map((c, index) => {
          return (
            <Chip
              key={index}
              label={c}
              onDelete={() => this.removeCompanion(index)}
            />
          );
        })}
      </div>
    );
  }
}

export default MyCompanionInput;

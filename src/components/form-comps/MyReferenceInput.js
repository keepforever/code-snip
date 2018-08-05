import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
//import Typography from "@material-ui/core/Typography";

const defaultState = {
  references: [],
  pendingReference: "",
  shouldClear: false
};

class MyReferenceInput extends Component {
  state = defaultState;

  componentDidUpdate(prevProps, prevState, snapshot) {
    //console.log('prevState.shouldClear', prevState.shouldClear)
    //console.log('prevProps.shouldClear', prevProps.shouldClear)

    const flip = !prevState.shouldClear;

    if (prevProps.shouldClear !== prevState.shouldClear) {
      this.setState({
        references: [],
        shouldClear: flip
      });
    }
  }

  addReference(reference) {
    if (reference.length === 0) {
      this.setState(state => ({
        ...state,
        pendingReference: ""
      }));
      return;
    }
    const updatedReferences = [...this.state.references, reference.trim()];
    this.setState(state => ({
      ...state,
      references: updatedReferences,
      pendingReference: ""
    }));
    this.props.onChange("reference", updatedReferences);
  }

  removeReference = index => {
    const currentReferences = [...this.state.references];

    const updatedReferences = currentReferences.filter(c => {
      return c !== currentReferences[index];
    });

    this.setState(state => ({
      ...state,
      references: updatedReferences,
      pendingReference: ""
    }));
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    //console.log('MyReferenceInput state', this.state)

    return (
      <div>
        <TextField
          id="name"
          fullWidth
          label="add new reference..."
          value={this.state.pendingReference}
          onChange={this.handleChange("pendingReference")}
          margin="normal"
          onKeyPress={ev => {
            console.log(`Pressed keyCode ${ev.key}`);
            if (ev.key === "Enter") {
              this.addReference(this.state.pendingReference);
              ev.preventDefault();
            }
          }}
        />
        <div
          style={{ width: "100%" }}
          onClick={() => this.addReference(this.state.pendingReference)}
        >
          <Button fullWidth color="secondary" variant="raised">
            Add Reference
          </Button>
        </div>
        <div
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          {this.state.references.map((c, index) => {
            return (
              <div style={{ marginRight: 7, marginBotton: 7 }} key={index}>
                <Chip label={c} onDelete={() => this.removeReference(index)} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default MyReferenceInput;

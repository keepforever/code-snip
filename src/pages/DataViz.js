import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";

class DataViz extends Component {
  render() {
    console.log("data viz props", this.props);
    return (
      <div style={{ color: "white" }}>
        <AppBar position="static" color="default">
          <Typography variant="title" color="secondary">
            <div style={styles.container}>Data Viz</div>
          </Typography>
        </AppBar>
        <div style={{ padding: 20 }}>
          <Typography variant="headline" color="secondary">
            TODO:
            <br />
          </Typography>
          <Typography variant="title" color="secondary">
            This component is slated to house some data visualizations using
            D3.js library.
            <br />
            <br />
            Planning on writing a Machine Learning model to vectorize the
            bagOfWords extracted from each snips properties and try to group
            similar snippits based on the locations of each snippit in vector
            space after some sort of dimensionality reduction. Looking into
            adding TensorflowJS processing to my current server.
          </Typography>
        </div>
      </div>
    );
  }
}

export default DataViz;

const styles = {
  container: {
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "20 0"
  }
};

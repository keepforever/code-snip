import React, { Component } from 'react';
import Typography from "@material-ui/core/Typography";

class DataViz extends Component {

  render () {
    console.log('data viz props', this.props)
    return (
      <div style={{color: 'white', margin: 70}}>
        <Typography variant="title" color="inherit">
        TODO:
        </Typography>
        <Typography variant="body2" color="inherit">
          This component is slated to house some data visualizations using D3.js library.
          <br/>
          <br/>
           Planning on writing a Machine Learning model to vectorize the bagOfWords extracted from each snips properties and try to group similar snippits based on the locations of each snippit in vector space after some sort of dimensionality reduction. Looking into adding TensorflowJS processing to my current server.
        </Typography>
      </div>
    );
  }
}

export default DataViz

import React, { Component } from 'react';
import MyForm from '../components/MyForm'
import { ContainerAlpha } from "../components/styled";
import Typography from "@material-ui/core/Typography";

class AddSnip extends Component {

  render () {
    return (
      <ContainerAlpha>
        <Typography variant="title" color="secondary">
          Add A Snip
        </Typography>
        <MyForm />
      </ContainerAlpha>
    );
  }
}

export default AddSnip

import React, { Component } from 'react';
import MyForm from '../components/MyForm'
import { ContainerAlpha } from "../components/styled";

class AddSnip extends Component {

  render () {
    return (
      <ContainerAlpha>
        <h2>Add A Snippit</h2>
        <MyForm />
      </ContainerAlpha>

    );
  }
}

export default AddSnip

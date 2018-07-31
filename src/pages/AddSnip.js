import React, { Component } from 'react';
import MyForm from '../components/MyForm'
import { ContainerAlpha } from "../components/styled";

class AddSnip extends Component {

  render () {
    return (
      <ContainerAlpha>
        <h1>Hello AddSnip</h1>
        <MyForm />
      </ContainerAlpha>

    );
  }
}

export default AddSnip

import React from "react";
import { Backdrop } from "../styled";

const backdrop = props => {
  //console.log('backdrop props', props)
  return props.show ? <Backdrop onClick={props.clicked} /> : null;
};

export default backdrop;

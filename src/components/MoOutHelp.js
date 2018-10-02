import React from 'react';
import {
  ModalContainer,
  HelpContainer
} from "./styled";
import OuterSpace from "./outer-space";

const MoOutHelp = ( props ) => {
  return (
    <ModalContainer>
      <OuterSpace>
        <HelpContainer>
          {props.children}
        </HelpContainer>
      </OuterSpace>
    </ModalContainer>
  );
};

export default MoOutHelp;

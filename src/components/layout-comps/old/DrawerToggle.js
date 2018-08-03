import React from 'react';

import {DrawerToggleDiv} from '../../styled'

const drawerToggle = ( props ) => {
  return (
      <DrawerToggleDiv onClick={props.clicked}>
          <div></div>
          <div></div>
          <div></div>
      </DrawerToggleDiv>
  );
}


export default drawerToggle;

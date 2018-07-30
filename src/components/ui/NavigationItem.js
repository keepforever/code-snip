import React from "react";
import { Link } from "react-router-dom";
import {LinkContainer} from '../styled';

const NavigationItem = props => {
  const {  config: { route, display }  } = props;
  //clearLog('TOOLBAR_LINK route', route)
  //console.log('NavigationItem props', route, display)
  return (
    <LinkContainer>
      <Link style={{all: 'unset', }} to={route}>
        {display}
      </Link>
    </LinkContainer>
  );
};

export default NavigationItem;

//to="/counter

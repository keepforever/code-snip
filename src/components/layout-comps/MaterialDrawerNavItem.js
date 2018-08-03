import React from "react";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

const NavigationItem = props => {
  const {  config: { route, display }  } = props;
  //clearLog('TOOLBAR_LINK route', route)
  //console.log('NavigationItem props', route, display)
  return (

    <Link style={{all: 'unset', }} to={route}>
      <Button color="secondary">
        {display}
      </Button>
    </Link>

  );
};

export default NavigationItem;

//to="/counter

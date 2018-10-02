import React from 'react';
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
// material-ui
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const LandingNavLink = ( props ) => {

  return (
    <NavLink to="/signup">
      <Button fullWidth color="secondary">
        <Typography variant="button" color="inherit">
          <div style={{ marginTop: 25, color: "white" }}>
            New? Create Account...
          </div>
        </Typography>
      </Button>
    </NavLink>
  )
};

export default LandingNavLink;

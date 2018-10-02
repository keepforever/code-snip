import React from 'react';
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
// material-ui
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const SignUpNavLink = ( props ) => {

  return (
    <NavLink to="/login">
      <Button fullWidth color="secondary">
        <Typography variant="button" color="inherit">
          <div style={{ marginTop: 25, color: "white" }}>
            Have an Account? Login...
          </div>
        </Typography>
      </Button>
    </NavLink>
  )
};

export default SignUpNavLink;

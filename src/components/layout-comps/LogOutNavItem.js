import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router";

class LogoutNavItem extends Component {

  state = {
    shouldLogout: false
  }

  logOut = () => {
    localStorage.setItem("snarfToken", 'done-wit-dis');
    this.setState({
      shouldLogout: true
    })

    setTimeout(() => {
      this.setState({
        shouldLogout: false
      })
    }, 250 )
  }

  render() {
    const { shouldLogout } = this.state

    if(shouldLogout){
      return <Redirect to="/login" />;
    }
    return (
      <Button onClick={() => this.logOut() } color="inherit">
        <Typography variant="button" color="default">
          Log Out
        </Typography>
      </Button>
    )
  }
}

export default withRouter(LogoutNavItem)

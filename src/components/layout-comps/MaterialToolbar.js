import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MaterialNavItem from "./MaterialNavItem";
import { ToolbarLinks } from '../styled/toolbar'
import lightBlue from '@material-ui/core/colors/lightBlue';
import { LayoutContainer_B,  } from "../styled";

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar >
          <Typography variant="subheading" color="default" className={classes.flex}>
            Snip Snarf <small>by keepforever</small>
          </Typography>
          <LayoutContainer_B>
            <ToolbarLinks>
              {props.links.map((link, index) => {
                return <MaterialNavItem key={index} config={link} />;
              })}
            </ToolbarLinks>
          </LayoutContainer_B>
            <div onClick={props.drawerToggleClicked}>
              <IconButton
                className={classes.menuButton}
                color="secondary"
                aria-label="Menu"
                >
                  <MenuIcon />
                </IconButton>
              </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import Divider from '@material-ui/core/Divider';
import MaterialDrawerNavItem from './MaterialDrawerNavItem';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  paper: {
    color: '#ffc107'
  }
};

class TemporaryDrawer extends React.Component {

  render() {
    const { classes, links, open,  } = this.props;

    const sideDrawerListItems = (
      links.map((link, index) => {
        return (
          <ListItem key={index}>
            <MaterialDrawerNavItem  config={link} />
          </ListItem>
        )
      })
    )

    const sideList = (
      <div className={classes.list}>
        <br/>
        <br/>
        <List>{sideDrawerListItems}</List>

        {/* <List>{sideDrawerListItems}</List> */}
      </div>
    );

    return (
        <Drawer
          open={open}
          onClose={() => this.props.closed()}
          >
          <div
            tabIndex={0}
            role="button"
            onClick={() => this.props.closed()}
            onKeyDown={() => this.props.closed()}
            style={{backgroundColor: '#c85404', height: '100%', }}
          >
            {sideList}
          </div>
        </Drawer>
    );
  }
}


export default withStyles(styles)(TemporaryDrawer);

import React, { Component } from "react";
import { LayoutContainer_A,  } from "./styled";
import MaterialToolbar from "./layout-comps/MaterialToolbar";
import MaterialDrawer from "./layout-comps/MaterialDrawer";
import { links } from '../constants'
// portal

class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return {
        showSideDrawer: !prevState.showSideDrawer
      };
    });
  };

  render() {
    return (
      <React.Fragment>
        <MaterialToolbar
          links={links}
          drawerToggleClicked={this.sideDrawerToggleHandler}
        />
        <MaterialDrawer
          links={links}
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <LayoutContainer_A>
          <div style={styles.squash}>
            {this.props.children}
          </div>
        </LayoutContainer_A>
      </React.Fragment>
    );
  }
}

export default Layout;

const styles = {
  squish: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',

  },
  squash: {
    maxWidth: '600px',

  }
}

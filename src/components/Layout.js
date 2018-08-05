import React, { Component } from "react";
import { LayoutChildrenDiv } from "./styled";
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
        <div>{this.props.children}</div>
      </React.Fragment>
    );
  }
}

export default Layout;

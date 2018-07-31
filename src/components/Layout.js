import React, { Component } from "react";
import Toolbar from "./layout-comps/Toolbar";

//import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import SideDrawer from "./layout-comps/SideDrawer/SideDrawer";

import { LayoutChildrenDiv } from './styled'

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
      <div>
        <Toolbar
          links={links}
          drawerToggleClicked={this.sideDrawerToggleHandler}
        />
        <SideDrawer
          links={links}
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <LayoutChildrenDiv>{this.props.children}</LayoutChildrenDiv>
      </div>
    );
  }
}

export default Layout;

const links = [
  {
    name: "logo-home",
    route: "/",
    display: "KeepForever"
  },
  {
    name: "add-snip-page",
    route: "/add-snip",
    display: "Add Snip"
  },
  {
    name: "counter",
    route: "/code-edit",
    display: "Code Edit"
  }
];

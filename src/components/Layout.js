import React, { Component } from "react";
import { LayoutChildrenDiv } from './styled';
import MaterialToolbar from './layout-comps/MaterialToolbar';
import MaterialDrawer from './layout-comps/MaterialDrawer';

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
        {/* <Toolbar
          links={links}
          drawerToggleClicked={this.sideDrawerToggleHandler}
        /> */}
        <MaterialDrawer
          links={links}
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        {/* <SideDrawer
          links={links}
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        /> */}
        <LayoutChildrenDiv>{this.props.children}</LayoutChildrenDiv>
      </React.Fragment>
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
    name: "data-viz",
    route: "/data-viz",
    display: "Data Viz"
  },
  {
    name: "search-snip",
    route: "/search-snips",
    display: "Search Snips"
  }
];

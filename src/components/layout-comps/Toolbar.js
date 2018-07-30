import React from "react";

import NavigationItem from "../ui/NavigationItem";
import DrawerToggle from "./DrawerToggle";
import { ToolbarHeader, ToolbarLinks } from "../styled";

const toolbar = props => {
  //console.log('toolbar props', props)
  return (
    <ToolbarHeader>
      <ToolbarLinks>
        {props.links.map((link, index) => {
          return (
            <NavigationItem key={index} config={link} />
          )
        })}
      </ToolbarLinks>
      <DrawerToggle clicked={props.drawerToggleClicked} />
    </ToolbarHeader>
  );
};

export default toolbar;

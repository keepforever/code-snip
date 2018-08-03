import React from "react";
import "./SideDrawer.css";
import NavigationItem from "../../../ui/NavigationItem";
import Backdrop from "../../Backdrop";
import Aus from '../../../hoc/Aus';
import {LogoContainer} from '../../../styled'

const sideDrawer = props => {
  // to conditionally control side drawer classes
  //console.log("sideDrawer props, ", props);

  let attachedClasses = ["sidedrawer-sidedrawer", "sidedrawer-close"];
  if (props.open) {
    attachedClasses = ["sidedrawer-sidedrawer", "sidedrawer-open"];
  }
  // we use onClick in the div that contains our Nav items to close the
  // drawer whenever user clicks a link
  return (
    <Aus>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")} onClick={props.closed}>
        <LogoContainer>
          logo here
        </LogoContainer>
        {props.links.map((link, index) => {
          return <NavigationItem key={index} config={link} />
        })}
      </div>
    </Aus>
  );
};

export default sideDrawer;

//... want to conditionally assign classes hence it's a normal function body
// before we return JSX

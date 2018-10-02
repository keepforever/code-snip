import React, { Component } from "react";
//material-ui
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ArchiveIcon from "@material-ui/icons/Archive";
// locals
import Portal from "../../components/portals/portalTemplate";
import HomePageSnippitList from '../../components/HomePageSnippitList';
import {
  ContainerAlpha,
  HideDivWhenSmall,
  ShowDivWhenSmall,
  HeaderContainer,
  CursorDiv
} from "../../components/styled";
// utils
import { clearLog } from "../../utils";

class HomeView extends Component {

  render() {

    const {
      downloadSnippits, toggleHelp, soup, snips, delSnippo
    } = this.props

    return (
      <ContainerAlpha>
        <AppBar position="static" color="default">
          <HeaderContainer>
            <Typography variant="title" color="secondary">
              Your Snips
            </Typography>
            <Button
              onClick={() => downloadSnippits()}
              color="secondary"
            >
              <HideDivWhenSmall>
                <ArchiveIcon />
              </HideDivWhenSmall>
              <ShowDivWhenSmall>
                Download Snip Library
              </ShowDivWhenSmall>
            </Button>
            <Typography variant="body2" color="secondary">
              <CursorDiv
                onClick={toggleHelp}>
                help
              </CursorDiv>
            </Typography>
          </HeaderContainer>
        </AppBar>
        <HomePageSnippitList
          soup={soup}
          snips={snips}
          delSnippo={delSnippo}
        />
      </ContainerAlpha>
    );
  }
}

export default HomeView

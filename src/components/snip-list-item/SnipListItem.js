import React from "react";
//locals
import PanelSummary from './PanelSummary';
import PanelDetails from './PanelDetails';
// material-ui
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
// utils
//import { clearLog } from "../utils";


function newCodeBlockExpandable(props) {
  const { snip: {name, language, keywords, companion, reference, notes, code } } = props;

  //clearLog("NEW_CODE_BLOCK_EXPANDABLE", props);

  return (
    <div>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<div />}>
          <PanelSummary meta={{name, language, keywords}}/>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <PanelDetails meta={{companion, notes, code, name, reference}} />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

export default newCodeBlockExpandable;

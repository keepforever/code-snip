import React from "react";
//locals
import PanelSummary from './PanelSummary';
import PanelDetails from './PanelDetails';
// material-ui
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
// material ICONS
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// utils
import { clearLog } from "../../utils";


function newCodeBlockExpandable(props) {
  const { delSnippo, soup, snip: {id, framework, name, language, keywords, companion, reference, notes, code } } = props;

  //clearLog("SNIP_LIST_ITEM", props);

  return (
    <div>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon /> }>
          <PanelSummary
            delSnippo={delSnippo}
            meta={{id, soup, name, framework, language, keywords}}
          />
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <PanelDetails meta={{companion, notes, code, name, reference}} />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

export default newCodeBlockExpandable;

import React from "react";
import PropTypes from "prop-types";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import CodeBlock from "./codeblock/CodeBlock";

function CodeBlockExpandable(props) {
  const { classes, snip } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          className={classes.summaryMeta}
          expandIcon={<div />}
        >
          <div>snip meta</div>
          {/* <Typography className={classes.heading}>Expansion Panel 1</Typography> */}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <CodeBlock code={snip} />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

export default CodeBlockExpandable;

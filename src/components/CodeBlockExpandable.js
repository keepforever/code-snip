import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import CodeBlock from './codeblock/CodeBlock';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  summaryMeta: {
    backgroundImage: `linear-gradient(45deg, rgba(14, 37, 0, 0.9) 10%, rgba(53, 80, 38, 0.95))`,
    border: '1px solid black'
  },
  details: {
    backgroundImage: `linear-gradient(45deg, rgba(56, 154, 0, 0.9) 10%, rgba(53, 80, 38, 0.95))`
  }
});



function CodeBlockExpandable(props) {
  const { classes, snip } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary className={classes.summaryMeta} expandIcon={<div />}>
          <div >snip meta</div>
          {/* <Typography className={classes.heading}>Expansion Panel 1</Typography> */}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <CodeBlock code={snip} />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

CodeBlockExpandable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CodeBlockExpandable);

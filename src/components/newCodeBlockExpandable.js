import React from 'react';
import PropTypes from 'prop-types';
//locals
import CodeBlock from './codeblock/CodeBlock';
// material-ui
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import BugReportTwoTone from '@material-ui/icons/BugReportTwoTone';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
// utils
import {clearLog} from '../utils';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function newCodeBlockExpandable(props) {

  const { classes, snip } = props;

  clearLog('NEW_CODE_BLOCK_EXPANDABLE', props)

  return (
    <div >
      <ExpansionPanel>
        <ExpansionPanelSummary className={classes.summaryMeta} expandIcon={<div />}>
        <ListItem component={() => {
          return (
            <div style={{display: 'flex', width: '100%', flexDirection: 'column'}}>
              <Paper>
                <div style={{flexFlow: 'column wrap', backgroundImage:`linear-gradient(180deg, rgba(230, 81, 0, 0.1) 10%, rgba(230, 81, 0, 0.7))`}}>
                  <Paper>
                    <div style ={{padding: 10}}>
                      <Typography variant="title" color="secondary">
                        {snip.name}
                      </Typography>
                      <Typography variant="title" color="secondary" >
                        {snip.language}
                      </Typography>
                    </div>
                  </Paper>
                    <div style={{padding: 10, marginBottom: 5, display: 'flex', flexFlow: 'row wrap'}}>
                      {snip.keywords.map((k, index) => {
                        return (
                          <div style={{margin: 5, display: 'inline-block'}}>
                            <Chip className={classes.chippy} key={index} label={k} />
                          </div>
                        )
                      })}
                    </div>
                    <div style={{padding: 10, marginBottom: 5, display: 'flex', flexFlow: 'row wrap'}}>
                      {snip.keywords.map((k, index) => {
                        return (
                          <Chip className={classes.chippy} key={index} label={k} />
                        )
                      })}
                    </div>
                    <div>
                      {snip.companion.map((c, index) => {
                        return (
                          <div style={{margin: 18, display: 'inline-block'}}>
                            <Chip index={index} label={c} />
                          </div>
                        )
                      })}
                    </div>
                </div>
              </Paper>
            </div>
          )
        } }>

          <div className={classes.listMetaRight}>


          </div>
        </ListItem>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <div style={{width: '100%'}}>
          <Typography color="secondary" variant="subheading">
            {snip.name}
          </Typography>
          <CodeBlock code={snip.code} />
            <CopyToClipboard onCopy={()=> alert(`copied ${snip.name}!`)} text={snip.code}>
              <Button fullWidth color="primary" variant="raised">Copy</Button>
            </CopyToClipboard>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

newCodeBlockExpandable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(newCodeBlockExpandable);

const styles = theme => ({
  listMetaRight: {
    backgroundColor: 'blue',
    width: '100%',
    flexFlow: 'row-wrap'
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
    backgroundImage: `linear-gradient(45deg, rgba(56, 154, 0, 0.9) 10%, rgba(53, 80, 38, 0.95))`,
  }
});


//
// <Typography className={classes.heading}>Expansion Panel 1</Typography>

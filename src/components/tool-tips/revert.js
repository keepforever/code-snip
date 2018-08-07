import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from "@material-ui/core/Typography";
import { clearLog } from '../../utils'

const styles = (theme) => {
  //clearLog('theme', theme)
  return (
    {
      lightTooltip: {
        background: theme.palette.common.white,
        color: theme.palette.text.primary,
        boxShadow: theme.shadows[1],
        fontSize: 11,
      },
      arrowPopper: {
        '&[x-placement*="bottom"] $arrowArrow': {
          top: 0,
          left: 0,
          marginTop: '-0.9em',
          width: '3em',
          height: '1em',
          '&::before': {
            borderWidth: '0 1em 1em 1em',
            borderColor: `transparent transparent ${theme.palette.grey[700]} transparent`,
          },
        },
        '&[x-placement*="top"] $arrowArrow': {
          bottom: 0,
          left: 0,
          marginBottom: '-0.9em',
          width: '3em',
          height: '1em',
          '&::before': {
            borderWidth: '1em 1em 0 1em',
            borderColor: `${theme.palette.grey[700]} transparent transparent transparent`,
          },
        },
        '&[x-placement*="right"] $arrowArrow': {
          left: 0,
          marginLeft: '-0.9em',
          height: '3em',
          width: '1em',
          '&::before': {
            borderWidth: '1em 1em 1em 0',
            borderColor: `transparent ${theme.palette.grey[700]} transparent transparent`,
          },
        },
        '&[x-placement*="left"] $arrowArrow': {
          right: 0,
          marginRight: '-0.9em',
          height: '3em',
          width: '1em',
          '&::before': {
            borderWidth: '1em 0 1em 1em',
            borderColor: `transparent transparent transparent ${theme.palette.grey[700]}`,
          },
        },
      },
      arrowArrow: {
        position: 'absolute',
        fontSize: 7,
        width: '3em',
        height: '3em',
        '&::before': {
          content: '""',
          margin: 'auto',
          display: 'block',
          width: 0,
          height: 0,
          borderStyle: 'solid',
        },
      },
      button: {
        margin: theme.spacing.unit,
      },
      customWidth: {
        maxWidth: 300,
      },
})};

const tipLibrary = {
  loginButton: " 1. Send login mutation to GraphQL server 2. Server processes login, fetches user data from Prisma database. 3. Responds with auth token, user info, (snips, name, id, ), then saves to redux store.",
  expansionPanelSummary: "Click here for more details",
  copyToClipboardButton: "Snarf snip  to clipboard",
  addSnippitHelp: "Ok, here's the gist...",
  searchBarGuidance: "Scans every line of text you entered into or about a code snippit then returns exact or partial matches.  i.e. search = ' worl ' would match ' world ', but not ' wor ' ",

}

class CustomizedTooltips extends React.Component {
  state = {
    arrowRef: null,
  };

  handleArrowRef = node => {
    this.setState({
      arrowRef: node,
    });
  };

  render() {
    const { classes, tipKey } = this.props;

    return (
      <div>
        {/* <Tooltip title="Add">
          <Button className={classes.button}>Default</Button>
        </Tooltip>
        <Tooltip title="Add" classes={{ tooltip: classes.lightTooltip }}>
          <Button className={classes.button}>Light</Button>
        </Tooltip> */}
        <Tooltip
          classes={{
            popper: classes.arrowPopper,
            tooltip: classes.customWidth
          }}
          title={
            <React.Fragment>
              <Typography variant="body2" color="default">
                {tipLibrary[tipKey]}
              </Typography>
              <span className={classes.arrowArrow} ref={this.handleArrowRef} />
            </React.Fragment>
          }
          PopperProps={{
            popperOptions: {
              modifiers: {
                arrow: {
                  enabled: Boolean(this.state.arrowRef),
                  element: this.state.arrowRef,
                },
              },
            },
          }}
        >
          {this.props.children}
        </Tooltip>
      </div>
    );
  }
}

CustomizedTooltips.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTooltips);

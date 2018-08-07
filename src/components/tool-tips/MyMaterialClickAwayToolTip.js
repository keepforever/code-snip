import React from 'react';
import PropTypes from 'prop-types';
//material-ui
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from "@material-ui/core/Typography";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
//locals
import { clearLog } from '../../utils'
import { tipLibrary } from '../../constants'

const styles = (theme) => {
  clearLog('theme', theme)
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
          top: '50%',
          left: '50%',
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
        maxWidth: 600,
      },
})};


class MyMaterialClickAwayToolTip extends React.Component {
  state = {
    arrowRef: null,
    open: false
  };

  handleArrowRef = node => {
    this.setState({
      arrowRef: node,
    });
  };

  handleTooltipClose = () => {
    this.setState({ open: false });
  };

  handleTooltipOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes, tipKey } = this.props;
    const { open } = this.state;

    return (
      <div>
        <ClickAwayListener onClickAway={this.handleTooltipClose}>
             <div>
               <Tooltip
                 PopperProps={{
                   disablePortal: true,
                   popperOptions: {
                     modifiers: {
                       arrow: {
                         enabled: Boolean(this.state.arrowRef),
                         element: this.state.arrowRef,
                       },
                     },
                   },
                 }}
                 classes={{
                   popper: classes.arrowPopper,
                   tooltip: classes.customWidth
                 }}
                 onClose={this.handleTooltipClose}
                 open={open}
                 disableFocusListener
                 disableHoverListener
                 disableTouchListener
                 title={
                   <React.Fragment>
                     <Typography variant="body2" color="default">
                       {tipLibrary[tipKey]}
                     </Typography>
                     <span className={classes.arrowArrow} ref={this.handleArrowRef} />
                   </React.Fragment>
                 }
               >
                 <div onClick={this.handleTooltipOpen}>
                  {this.props.children}
                </div>
               </Tooltip>
             </div>
           </ClickAwayListener>
      </div>
    );
  }
}

MyMaterialClickAwayToolTip.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyMaterialClickAwayToolTip);

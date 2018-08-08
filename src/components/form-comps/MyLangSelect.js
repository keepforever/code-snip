import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {langValueMap} from '../../constants'

const styles = {
  root: {
    flexGrow: 1,
    marginTop: 5,
    marginBottom: 5
  },
};

class MyLangSelect extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    //console.log('valueMap[value]', valueMap[value])
    this.setState({ value });
    this.props.onChange("language", langValueMap[value]);
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          scrollable
          scrollButtons="auto"
        >
          {langValueMap.map((val, index) => {
            return <Tab
              label={val === "" ? 'none' : val}
              key={index} />;
          })}
        </Tabs>
      </Paper>
    );
  }
}

export default withStyles(styles)(MyLangSelect);

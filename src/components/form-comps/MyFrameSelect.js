import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const styles = {
  root: {
    flexGrow: 1,
    marginTop: 5,
    marginBottom: 5
  },
};

const valueMap = ["react", "react-native", "vue", "sage-maker"];

class MyFrameSelect extends React.Component {
  state = {
    value: 0,
    showNumber: 0
  };

  handleChange = (event, value) => {
    //console.log('valueMap[value]', valueMap[value])
    this.setState({ value });
    this.props.onChange("framework", valueMap[value]);
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
          {valueMap.map((val, index) => {
            return <Tab label={val} key={index} />;
          })}
        </Tabs>
      </Paper>
    );
  }
}

export default withStyles(styles)(MyFrameSelect);

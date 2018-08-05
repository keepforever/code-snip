import React from "react";
// material-ui
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
// locals
import MyMaterialToolTip from "../tool-tips/MyMaterialToolTip";
import RandomSummaryMeta from './RandomSummaryMeta'

const PanelSummary = props => {
  const { soup, name, language, keywords, framework } = props.meta;

  return (
    <Paper
      component={() => {
        return (
          <div style={styles.b_Container}>
            <Paper
              component={() => {
                return (
                  <MyMaterialToolTip tipKey="expansionPanelSummary">
                  <div style={styles.c_Container}>
                      <div style={styles.d_Container}>
                        <Typography variant="subheading" color="default">
                          {name}
                        </Typography>
                      </div>
                    <div style={styles.g_Container}>
                      <div style={styles.d_Container}>
                        <Typography variant="body2" color="secondary">
                          {framework}
                        </Typography>
                      </div>
                      <div style={styles.e_Container}>
                        <Typography variant="body1" color="error">
                          {language}
                        </Typography>
                      </div>
                    </div>
                  </div>
                </MyMaterialToolTip>
                );
              }}
            />
            <RandomSummaryMeta soup={soup} />
          </div>
        );
      }}
    />
  );
};

export default PanelSummary;

const styles = {
  a_Container: {
    display: "block",
    width: "100%",
    flexDirection: "column"
  },
  b_Container: {
    flexFlow: "row wrap",
    width: "100%",
    alignItems: "space-between",
    justifyContent: "space-between",
  },
  c_Container: {
    display: "flex",
    flexFlow: "row wrap",
    // padding: 10
  },
  d_Container: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-start"
  },
  e_Container: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-end",
    paddingRight: 2
  },
  f_Container: {
    paddingBottom: 7,
    marginLeft: 7,
    justifyContent: "stretch",
    alignItems: "stretch",
    display: "flex",
    flex: 1,
    flexFlow: "row wrap"
  },
  g_Container: {
    display: "flex",
    marginLeft: 10,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "space-between"
  }
};

//
// old chip display
// <div style={styles.f_Container}>
//   {keywords.map((k, index) => {
//     return (
//       <div key={index} style={{ margin: 3 }}>
//         <Chip label={k} />
//       </div>
//     );
//   })}
// </div>

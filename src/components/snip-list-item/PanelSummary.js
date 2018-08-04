import React from "react";
// material-ui
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";

const PanelSummary = props => {
  const { name, language, keywords, framework } = props.meta;
  return (
    <Paper
      component={() => {
        return (
          <div style={styles.b_Container}>
            <Paper
              component={() => {
                return (
                  <div style={styles.c_Container}>
                    <div style={styles.d_Container}>
                      <Typography variant="title" color="textPrimary">
                        {name}
                      </Typography>
                    </div>
                    <div style={styles.g_Container}>
                      <div style={styles.d_Container}>
                        <Typography variant="subheading" color="textPrimary">
                          {framework}
                        </Typography>
                      </div>
                      <div style={styles.e_Container}>
                        <Typography variant="body2" color="secondary">
                          {language}
                        </Typography>
                      </div>
                    </div>
                  </div>
                );
              }}
            />
            <div style={styles.f_Container}>
              {keywords.map((k, index) => {
                return (
                  <div key={index} style={{ margin: 3 }}>
                    <Chip label={k} />
                  </div>
                );
              })}
            </div>
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
    alignItems: 'space-between',
    justifyContent: 'space-between',
    backgroundImage: `linear-gradient(180deg, rgba(230, 81, 0, 0.1) 10%, rgba(230, 81, 0, 0.7))`
  },
  c_Container: {
    display: "flex",
    flexFlow: "row wrap",
    padding: 10
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
    backgroundImage: `linear-gradient(180deg, rgba(0, 81, 0, 0.1) 10%, rgba(0, 81, 0, 0.7))`,
    paddingBottom: 7,
    marginLeft: 7,
    justifyContent: "stretch",
    alignItems: "stretch",
    display: "flex",
    flex: 1,
    flexFlow: "row wrap"
  },
  g_Container: {
    display: 'flex',
    marginLeft: 10,
    flexDirection: "column",
    justifyContent: 'space-between',
    alignItems: 'space-between'
  }
};

import React from "react";
// material-ui
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";


const PanelSummary = props => {
  const { name, language, keywords } = props.meta;
  return (
    <ListItem
      component={() => {
        return (
          <div style={styles.a_Container}>
            <Paper>
              <div style={styles.b_Container}>
                <Paper
                  component={() => {
                    return (
                      <div style={styles.c_Container}>
                        <div style={styles.d_Container}>
                          <Typography variant="headline" color="textPrimary">
                            {name}
                          </Typography>
                        </div>
                        <div style={styles.e_Container} >
                          <Typography variant="subheading" color="secondary">
                            {language}
                          </Typography>
                        </div>
                      </div>
                    );
                  }}
                />
                <div style={styles.f_Container} >
                  {keywords.map((k, index) => {
                    return (
                      <div key={index} style={{ margin: 3}} >
                        <Chip label={k} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </Paper>
          </div>
        );
      }}
    />
  );
};

export default PanelSummary;

const styles = {
  a_Container: {
    display: "flex",
    width: "100%",
    flexDirection: "column"
  },
  b_Container: {
    flexFlow: "row wrap",
    width: "100%",
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
    justifyContent: "center"
  },
  e_Container: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-end",
    paddingRight: 20
  },
  f_Container: {
    paddingBottom: 7,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    display: "flex",
    flexFlow: "row wrap"
  }
};

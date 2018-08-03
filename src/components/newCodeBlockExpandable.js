import React from "react";
//locals
import CodeBlock from "./codeblock/CodeBlock";
// material-ui
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
// utils
//import { clearLog } from "../utils";
import { CopyToClipboard } from "react-copy-to-clipboard";

function newCodeBlockExpandable(props) {
  const { snip } = props;

  //clearLog("NEW_CODE_BLOCK_EXPANDABLE", props);

  return (
    <div>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<div />}>
          <ListItem
            component={() => {
              return (
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    flexDirection: "column"
                  }}
                >
                  <Paper>
                    <div
                      style={{
                        flexFlow: "row wrap",
                        width: "100%",
                        backgroundImage: `linear-gradient(180deg, rgba(230, 81, 0, 0.1) 10%, rgba(230, 81, 0, 0.7))`
                      }}
                    >
                      <Paper
                        component={() => {
                          return (
                            <div
                              style={{
                                display: "flex",
                                flexFlow: "row wrap",
                                padding: 10
                              }}
                            >
                              <div
                                style={{
                                  flex: 1,
                                  display: "flex",
                                  justifyContent: "center"
                                }}
                              >
                                <Typography
                                  variant="headline"
                                  color="textPrimary"
                                >
                                  {snip.name}
                                </Typography>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  flex: 1,
                                  justifyContent: "flex-end",
                                  paddingRight: 20
                                }}
                              >
                                <Typography
                                  variant="subheading"
                                  color="secondary"
                                >
                                  {snip.language}
                                </Typography>
                              </div>
                            </div>
                          );
                        }}
                      />
                      <div
                        style={{
                          paddingBottom: 7,
                          marginLeft: 20,
                          marginRight: 20,
                          justifyContent: "flex-start",
                          alignItems: "flex-start",
                          display: "flex",
                          flexFlow: "row wrap"
                        }}
                      >
                        {snip.keywords.map((k, index) => {
                          return (
                            <div
                              key={index}
                              style={{
                                margin: 3
                              }}
                            >
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
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div
            style={{
              width: "100%"
            }}
          >
            <Typography color="error" variant="subheading">
              Tangent
            </Typography>
            <div
              style={{
                marginRight: 7,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                display: "flex",
                flexFlow: "row wrap"
              }}
            >
              {snip.companion.map((c, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      marginRight: 13,
                      marginBottom: 8,
                      display: "inline-block"
                    }}
                  >
                    <Paper>
                      <Typography color="textSecondary" variant="body2">
                        {c}
                      </Typography>
                    </Paper>
                  </div>
                );
              })}
            </div>
            <Typography color="textPrimary" variant="body1">
              {snip.notes}
            </Typography>
            <CodeBlock code={snip.code} />
            <CopyToClipboard
              onCopy={() => alert(`copied ${snip.name}!`)}
              text={snip.code}
            >
              <Button fullWidth color="primary" variant="raised">
                Copy
              </Button>
            </CopyToClipboard>
            <div
              style={{
                margin: 15,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                display: "flex",
                flexFlow: "column wrap"
              }}
            >
              {snip.reference.map((k, index) => {
                return (
                  <div key={index} style={{ marginTop: 7 }}>
                    <Chip label={k} />
                  </div>
                );
              })}
            </div>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

//
// export default withStyles(styles)(newCodeBlockExpandable);
export default newCodeBlockExpandable;
//
// const classes = {
//   listMetaRight: {
//     backgroundColor: "blue",
//     width: "100%",
//     flexFlow: "row-wrap"
//   },
//   summaryMeta: {
//     backgroundImage: `linear-gradient(45deg, rgba(14, 37, 0, 0.9) 10%, rgba(53, 80, 38, 0.95))`,
//     border: "1px solid black"
//   },
//   details: {
//     backgroundImage: `linear-gradient(45deg, rgba(56, 154, 0, 0.9) 10%, rgba(53, 80, 38, 0.95))`
//   }
// };

//
// <Typography className={classes.heading}>Expansion Panel 1</Typography>

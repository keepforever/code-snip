import React from "react";
// locals
import CodeBlock from "./codeblock/CodeBlock";
// material-ui
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
// utils
import { CopyToClipboard } from "react-copy-to-clipboard";
import MyMaterialToolTip from "../tool-tips/MyMaterialToolTip";


const PanelDetails = props => {
  const { companion, notes, code, name, reference } = props.meta;
  return (
    <div style={{ width: "100%" }}>
      <Typography color="error" variant="subheading">
        Tangent
      </Typography>
      <div style={styles.a_Container}>
        {companion.map((c, index) => {
          return (
            <div key={index} style={styles.b_Container}>
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
        {notes}
      </Typography>
      <CodeBlock code={code} />
      <MyMaterialToolTip tipKey="copyToClipboardButton">
        <CopyToClipboard onCopy={() => alert(`Snarfed ${name}!`)} text={code}>
          <Button fullWidth color="primary" variant="raised">
            Copy
          </Button>
        </CopyToClipboard>
      </MyMaterialToolTip>
      <div style={styles.c_Container}>
        {reference.map((k, index) => {
          return (
            <div key={index} style={{ marginTop: 7 }}>
              <Chip label={k} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PanelDetails;

const styles = {
  a_Container: {
    marginRight: 7,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    display: "flex",
    flexFlow: "row wrap"
  },
  b_Container: {
    marginRight: 13,
    marginBottom: 8,
    display: "inline-block"
  },
  c_Container: {
    margin: 15,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    display: "flex",
    flexFlow: "column wrap"
  }
};

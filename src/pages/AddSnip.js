import React, { Component } from "react";
import MyForm from "../components/MyForm";
import { ContainerAlpha } from "../components/styled";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

class AddSnip extends Component {
  render() {
    return (
      <ContainerAlpha>
        <div>
          <AppBar position="static" color="default">
            <Typography variant="title" color="secondary">
              <div style={styles.container} >
                Add Snippit
              </div>
            </Typography>
          </AppBar>
        </div>
        <MyForm />
      </ContainerAlpha>
    );
  }
}

export default AddSnip;

const styles = {
  container: {
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "20 0"
  }
}

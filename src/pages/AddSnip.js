import React, { Component } from "react";
import MyForm from "../components/MyForm";
import { ContainerAlpha } from "../components/styled";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

class AddSnip extends Component {
  render() {
    return (
      <ContainerAlpha>
        <div>
          <AppBar position="static" color="default">
            <Typography variant="title" color="inherit">
              <div
                style={{
                  height: 50,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "20 0"
                }}
              >
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

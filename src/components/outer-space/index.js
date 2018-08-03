import React, { Component } from "react";
import "./outer-space.css";

class OuterSpace extends Component {
  render() {
    return (
      <div style={{ height: 500, width: 500 }} id="viewport">
        <div className="img" id="img-0" />
        <div className="img" id="img-1" />
        <div className="img" id="img-2" />
        <div className="img" id="img-3" />
        <div className="img" id="img-4" />
        <div className="img" id="img-5" />
        <div className="img" id="img-6" />
        <div className="img" id="img-7" />
        <div className="img" id="img-8" />
        <div className="img" id="img-9" />
      </div>
    );
  }
}

export default OuterSpace;

import React, { Component } from "react";
import "./outer-space.css";

class OuterSpace extends Component {
  render() {
    return (
      <div style={{ height: '100%', width: '100%' }} id="viewport">
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
        {this.props.children}
      </div>
    );
  }
}

export default OuterSpace;

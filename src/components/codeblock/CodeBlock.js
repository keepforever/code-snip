import React, { Component } from 'react';
import Highlight from 'react-highlight'
import './hilight.css'
//import Button from "@material-ui/core/Button";
//import { CopyToClipboard } from 'react-copy-to-clipboard';

class CodeBlock extends Component {

  // onCopy = () => {
  //   alert('COPIED!')
  // }

  render () {
    const {code} = this.props
    return (
      <div style={{width: '100%'}}>
        <Highlight language="javascript">
          {code}
        </Highlight>
      </div>
    );
  }
}

export default CodeBlock

// <CopyToClipboard onCopy={this.onCopy} text={this.state.value}>
//   <span>Copy to clipboard with span</span>
// </CopyToClipboard>

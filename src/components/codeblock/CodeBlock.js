import React, { Component } from 'react';
import Highlight from 'react-highlight'
import './hilight.css'

class CodeBlock extends Component {

  render () {
    const { code } = this.props
    return (
      <div>
        <Highlight language="python">
          {code}
        </Highlight>
      </div>
    );
  }
}

export default CodeBlock

import React, { Component } from "react";
import AceEditor from "react-ace";

import "brace/mode/javascript";
import "brace/theme/monokai";

class MyCodeInput extends Component {
  handleChange = value => {
    // this is going to call setFieldValue and manually update values.topcis
    this.props.onChange("code", value);
  };

  render() {
    const { value } = this.props;

    return (
      <div>
        <AceEditor
          width="100%"
          height="300px"
          wrapEnabled={true}
          mode="javascript"
          theme="monokai"
          name="blah2"
          onLoad={this.onLoad}
          onChange={this.handleChange}
          fontSize={18}
          showPrintMargin={true}
          showGutter={false}
          highlightActiveLine={false}
          value={value}
          setOptions={{
            showLineNumbers: true,
            tabSize: 2
          }}
        />
      </div>
    );
  }
}

export default MyCodeInput;

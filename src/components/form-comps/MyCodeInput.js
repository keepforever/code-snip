import React, { Component } from "react";
import AceEditor from "react-ace";
//import Typography from "@material-ui/core/Typography";

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

// 3rd party example code
// class MySelect extends React.Component {
//   handleChange = value => {
//     // this is going to call setFieldValue and manually update values.topcis
//     this.props.onChange("topics", value);
//   };
//
//   handleBlur = () => {
//     // this is going to call setFieldTouched and manually update touched.topcis
//     this.props.onBlur("topics", true);
//   };
//
//   render() {
//     return (
//       <div style={{ margin: "1rem 0" }}>
//         <label htmlFor="color">Topics (select at least 3) </label>
//         <Select
//           id="color"
//           options={options}
//           multi={true}
//           onChange={this.handleChange}
//           onBlur={this.handleBlur}
//           value={this.props.value}
//         />
//         {!!this.props.error &&
//           this.props.touched && (
//             <div style={{ color: "red", marginTop: ".5rem" }}>
//               {this.props.error}
//             </div>
//           )}
//       </div>
//     );
//   }
// }

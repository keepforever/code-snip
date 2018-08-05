import React, { Component } from "react";
// Formik
import { withFormik } from "formik";
// graphql
//import gql from "graphql-tag";
import { graphql, compose } from "react-apollo";
import { SNIPPITS_QUERY } from "../graphql/queries/SNIPPITS_QUERY";
import { CREATE_SNIPPIT } from "../graphql/mutations/CREATE_SNIPPIT";
// yup validation
import { object, string, array } from "yup";
// locals
import MyMaterialToolTip from "./tool-tips/MyMaterialToolTip";
import MyCodeInput from "./form-comps/MyCodeInput";
import MyTypeSelect from "./form-comps/MyTypeSelect";
import MyFrameSelect from "./form-comps/MyFrameSelect";
import MyLangSelect from "./form-comps/MyLangSelect";
import MyNotesInput from "./form-comps/MyNotesInput";
import MyKeywordInput from "./form-comps/MyKeywordInput";
import MyCompanionInput from "./form-comps/MyCompanionInput";
import MyReferenceInput from "./form-comps/MyReferenceInput";
import MyNameInput from "./form-comps/MyNameInput";
// utils
import DisplayFormikState from "./form-comps/DisplayFormikState";
import { clearLog } from "../utils";
// material-ui
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const formikEnhancer = withFormik({
  mapPropsToValues({
    snipName,
    snipType,
    language,
    framework,
    code,
    notes,
    companion,
    keywords,
    reference,
  }) {
    return {
      snipName: snipName || "",
      snipType: snipType || "boiler",
      language: language || "javascript",
      framework: framework || "react",
      code: code || "",
      notes: notes || "",
      companion: companion || [],
      keywords: keywords || [],
      reference: reference || []
    };
  },
  validationSchema: object().shape({
    snipName: string().required("You must name your snippit"),
    snipType: string().required("Type is required"),
    language: string().required("Language is required"),
    framework: string().required("Framework is required"),
    code: string().required("Code is required"),
    notes: string(),
    companion: array(),
    refrence: array(),
    keywords: array()
  }),
  async handleSubmit(values, { props, resetForm, setErrors, setSubmitting }) {
    clearLog("form submitted with values", values);
    clearLog("handleSubmit props", props);
    let response;
    response = await props.createSnippit({
      variables: {
        author: 'cjkc9mzt28ts70b12f0w7qh7g',
        name: values.snipName,
        language: values.language,
        code: values.code,
        type: values.snipType,
        framework: values.framework,
        notes: values.notes,
        companion: values.companion,
        keywords: values.keywords,
        reference: values.reference
      }
    });
    clearLog("response", response);
    resetForm();
  }
});

class MyForm extends Component {
  state = {
    clearChips: false
  };

  clearChips = () => {
    const flip = !this.state.clearChips;
    this.setState({ clearChips: flip });
  };

  render() {
    const {
      values,
      dirty,
      handleSubmit,
      handleReset,
      setFieldValue,
      isSubmitting
      //touched, errors, setFieldTouched, handleChange, handleBlur,
    } = this.props;

    //clearLog("MyForm props", this.props);

    return (
      <Paper>
        <div
          style={{
            paddingTop: 10,
            paddingLeft: "5%",
            paddingRight: "5%"
          }}
        >
          <MyMaterialToolTip tipKey="addSnippitHelp">
            <Typography variant="subheading" color="secondary">
              HELP
            </Typography>
          </MyMaterialToolTip>
          <form onSubmit={handleSubmit}>
            <Paper>
              <div
                style={{
                  marginTop: 8,
                  padding: 10,
                }}
              >
                <MyNameInput value={values.snipName} onChange={setFieldValue} />
              </div>
            </Paper>
            <Paper>
              <div
                style={{
                  padding: 10,
                }}
              >
                <MyTypeSelect
                  value={values.snipType}
                  onChange={setFieldValue}
                />
                <MyLangSelect
                  value={values.language}
                  onChange={setFieldValue}
                />
                <MyFrameSelect
                  value={values.framework}
                  onChange={setFieldValue}
                />
              </div>
            </Paper>
            <Paper>
              <div
                style={{
                  marginTop: 8,
                  padding: 10,
                }}
              >
                <MyCodeInput value={values.code} onChange={setFieldValue} />
              </div>
            </Paper>
            <Paper>
              <div
                style={{
                  marginTop: 8,
                  padding: 10,
                }}
              >
                <MyReferenceInput
                  onChange={setFieldValue}
                  shouldClear={this.state.clearChips}
                />
              </div>
            </Paper>
            <Paper>
              <div
                style={{
                  marginTop: 8,
                  padding: 10,
                }}
              >
                <MyKeywordInput
                  onChange={setFieldValue}
                  shouldClear={this.state.clearChips}
                />
              </div>
            </Paper>
            <Paper>
              <div
                style={{
                  marginTop: 8,
                  padding: 10,
                }}
              >
                <MyCompanionInput
                  onChange={setFieldValue}
                  shouldClear={this.state.clearChips}
                />
              </div>
            </Paper>
            <Paper>
              <div
                style={{
                  marginTop: 8,
                  padding: 10,
                }}
              >
                <MyNotesInput value={values.notes} onChange={setFieldValue} />
              </div>
            </Paper>
            <Paper>
              <div
                onClick={handleReset}
                style={{
                  marginTop: 8,
                  padding: 10
                }}
              >
                <Button
                  disabled={!dirty || isSubmitting}
                  fullWidth={true}
                  color="default"
                  variant="raised"
                >
                  Reset
                </Button>
              </div>
            </Paper>
            <Paper>
              <div
                onClick={() => this.clearChips()}
                style={{
                  marginTop: 8,
                  padding: 10
                }}
              >
                <Button
                  fullWidth={true}
                  type="submit"
                  color="primary"
                  variant="raised"
                >
                  Submit
                </Button>
              </div>
            </Paper>
          </form>
          {/* <div>
            <DisplayFormikState {...this.props} />
          </div> */}
        </div>
      </Paper>
    );
  }
}
// export default formikEnhancer(MyForm);
const Balls = formikEnhancer(MyForm);

export default compose(
  graphql(SNIPPITS_QUERY, {
    options: {
      fetchPolicy: "cache-and-network"
    },
    name: "snippitsQuery"
  }),
  graphql(CREATE_SNIPPIT, {
    options: {
      fetchPolicy: "cache-and-network"
    },
    name: "createSnippit"
  })
)(Balls);

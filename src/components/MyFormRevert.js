import React, { Component } from "react";
import { withFormik } from "formik";
import { object, string, array } from "yup";
// or import * as yup from 'yup' for more than just 'object' and 'string'
// attempting 3rd party input with formik
import MyCodeInput from "./form-comps/MyCodeInput";
import MyTypeSelect from "./form-comps/MyTypeSelect";
import MyFrameSelect from "./form-comps/MyFrameSelect";
import MyLangSelect from "./form-comps/MyLangSelect";
import MyNotesInput from "./form-comps/MyNotesInput";
import MyKeywordInput from "./form-comps/MyKeywordInput";
import MyCompanionInput from "./form-comps/MyCompanionInput";
import MyReferenceInput from "./form-comps/MyReferenceInput";
import MyNameInput from "./form-comps/MyNameInput";
// diagnostics for form input
import DisplayFormikState from "./form-comps/DisplayFormikState";
import { clearLog } from "../utils";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

// yup.mixed;
// yup.string;
// yup.number;
// yup.boolean; // also aliased as yup.bool
// yup.date;
// yup.object;
// yup.array;

// yup.reach;
// yup.addMethod;
// yup.ValidationError;

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
    password,
    newsletter,
    plan
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
  handleSubmit(values, { props, resetForm, setErrors, setSubmitting }) {
    alert("balls!");
    clearLog("handleSubmit props", props);
    resetForm();
  }
});

class MyForm extends Component {
  state = {
    clearChips: false
  };

  clearChips = () => {
    const flip = !this.state.clearChips;
    this.setState({
      clearChips: flip
    });
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
        <div style={{ paddingTop: 10, paddingLeft: "5%", paddingRight: "5%" }}>
          <form onSubmit={handleSubmit}>
            <Paper>
              <div
                style={{
                  marginTop: 8,
                  padding: 10,
                  backgroundImage: `linear-gradient(180deg, rgba(31, 31, 31, 0.1) 10%, #212121 70%`
                }}
              >
                <MyNameInput value={values.snipName} onChange={setFieldValue} />
              </div>
            </Paper>
            <Paper>
              <div
                style={{
                  padding: 10,
                  backgroundImage: `linear-gradient(180deg, rgba(31, 31, 31, 0.1) 10%, #212121 70%`
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
                  backgroundImage: `linear-gradient(180deg, rgba(31, 31, 31, 0.1) 10%, #212121 70%`
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
                  backgroundImage: `linear-gradient(180deg, rgba(31, 31, 31, 0.1) 10%, #212121 70%`
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
                  backgroundImage: `linear-gradient(180deg, rgba(31, 31, 31, 0.1) 10%, #212121 70%`
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
                  backgroundImage: `linear-gradient(180deg, rgba(31, 31, 31, 0.1) 10%, #212121 70%`
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
                  backgroundImage: `linear-gradient(180deg, rgba(31, 31, 31, 0.1) 10%, #212121 70%`
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
                  fullWidth
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
                  fullWidth
                  type="submit"
                  color="secondary"
                  variant="raised"
                >
                  Submit
                </Button>
              </div>
            </Paper>
          </form>
          <div>
            <DisplayFormikState {...this.props} />
          </div>
        </div>
      </Paper>
    );
  }
}

export default formikEnhancer(MyForm);

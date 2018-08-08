import React, { Component } from "react";
// Formik
import { withFormik } from "formik";
// graphql
import { graphql, compose } from "react-apollo";
import { SPECIFIC_USERS_SNIPPITS_QUERY } from "../graphql/queries/SPECIFIC_USERS_SNIPPITS_QUERY";
import { SNIPPITS_QUERY_SIMPLE } from "../graphql/queries/SNIPPITS_QUERY_SIMPLE";
import { CREATE_SNIPPIT } from "../graphql/mutations/CREATE_SNIPPIT";
// yup validation
import { object, string, array } from "yup";
// locals
import { FormInputDiv, FromOuterContainer } from "./styled";
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
//import DisplayFormikState from "./form-comps/DisplayFormikState";
import { clearLog } from "../utils";
// material-ui
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// REDUX
import { updateBOWAfterCreate } from "../store/actions/snippit";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

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
    reference
  }) {
    return {
      snipName: snipName || "",
      snipType: snipType || "",
      language: language || "",
      framework: framework || "",
      code: code || "",
      notes: notes || "",
      companion: companion || [],
      keywords: keywords || [],
      reference: reference || []
    };
  },
  validationSchema: object().shape({
    snipName: string().required("You must name your snippit"),
    snipType: string(),
    language: string(),
    framework: string(),
    code: string().required("Code is required"),
    notes: string(),
    companion: array(),
    refrence: array(),
    keywords: array()
  }),
  async handleSubmit(values, { props, resetForm, setErrors, setSubmitting }) {
    //clearLog("form submitted with values", values);
    //clearLog("handleSubmit props", props);
    const { variables } = props.snippitsQuery;

    let response;
    response = await props.createSnippit({
      variables: {
        author: props.user.meta.id,
        name: values.snipName,
        language: values.language,
        code: values.code,
        type: values.snipType,
        framework: values.framework,
        notes: values.notes,
        companion: values.companion,
        keywords: values.keywords,
        reference: values.reference
      },
      update: (store, { data: { createSnippit } }) => {
        clearLog("createSnippit", createSnippit);

        clearLog("MY_FORM store", store);

        const data = store.readQuery({ query: SNIPPITS_QUERY_SIMPLE });

        clearLog("MY_FORM data  2", data);

        data.snippits.push(createSnippit);

        clearLog("MY_FORM data  3", data);
        store.writeQuery({ query: SNIPPITS_QUERY_SIMPLE, data });
      }
    });
    //clearLog("response", response);
    props.updateBOWAfterCreateAction(
      response.data.createSnippit.author.snippits
    );
    resetForm();
  }
});

class MyForm extends Component {
  state = {
    clearChips: false,
    shouldShowMeta: false
  };

  clearChips = () => {
    const flip = !this.state.clearChips;
    this.setState({ clearChips: flip });
  };

  toggleShowMeta = () => {
    this.setState(prevState => {
      return {
        shouldShowMeta: !prevState.shouldShowMeta
      };
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

    const { shouldShowMeta } = this.state;

    return (
      <Paper>
        <FromOuterContainer>
          <MyMaterialToolTip tipKey="addSnippitHelp">
            <Typography variant="subheading" color="secondary">
              HELP
            </Typography>
          </MyMaterialToolTip>
          <form onSubmit={handleSubmit}>
            <Paper>
              <FormInputDiv>
                <MyNameInput value={values.snipName} onChange={setFieldValue} />
              </FormInputDiv>
            </Paper>
            <Paper>
              <FormInputDiv>
                <Typography variant="subheading" color="default">
                  CODE
                </Typography>
                <MyCodeInput value={values.code} onChange={setFieldValue} />
              </FormInputDiv>
            </Paper>
            <div>
              <FormInputDiv onClick={() => this.toggleShowMeta()}>
                <Button fullWidth={true} color="secondary" variant="raised">
                  Add Optional Metadata <ExpandMoreIcon />
                </Button>
              </FormInputDiv>
              {shouldShowMeta && (
                <div>
                  <Paper>
                    <FormInputDiv
                      style={{
                        padding: 10
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
                    </FormInputDiv>
                  </Paper>
                  <Paper>
                    <div>
                      <MyReferenceInput
                        onChange={setFieldValue}
                        shouldClear={this.state.clearChips}
                      />
                    </div>
                  </Paper>
                  <Paper>
                    <FormInputDiv>
                      <MyKeywordInput
                        onChange={setFieldValue}
                        shouldClear={this.state.clearChips}
                      />
                    </FormInputDiv>
                  </Paper>
                  <Paper>
                    <FormInputDiv>
                      <MyCompanionInput
                        onChange={setFieldValue}
                        shouldClear={this.state.clearChips}
                      />
                    </FormInputDiv>
                  </Paper>
                  <Paper>
                    <FormInputDiv>
                      <MyNotesInput
                        value={values.notes}
                        onChange={setFieldValue}
                      />
                    </FormInputDiv>
                  </Paper>
                </div>
              )}
              <Paper>
                <FormInputDiv onClick={handleReset}>
                  <Button
                    disabled={!dirty || isSubmitting}
                    fullWidth={true}
                    color="default"
                    variant="raised"
                  >
                    Reset
                  </Button>
                </FormInputDiv>
              </Paper>
              <Paper>
                <FormInputDiv onClick={() => this.clearChips()}>
                  <Button
                    fullWidth={true}
                    type="submit"
                    color="primary"
                    variant="raised"
                  >
                    Submit
                  </Button>
                </FormInputDiv>
              </Paper>
            </div>
          </form>
          {/* <div>
            <DisplayFormikState {...this.props} />
          </div> */}
        </FromOuterContainer>
      </Paper>
    );
  }
}
// export default formikEnhancer(MyForm);
const MyFormEnhanced = formikEnhancer(MyForm);

const mapStateToProps = state => {
  return {
    user: state.user.userInfo,
    snipp: state.snippit.snippits,
    shouldShowLanding: state.landingPage.showLandingPage
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      updateBOWAfterCreateAction: updateBOWAfterCreate
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  compose(
    graphql(SNIPPITS_QUERY_SIMPLE, {
      options: props => ({
        variables: {
          orderBy: "createdAt_DESC"
        },
        fetchPolicy: "cache-and-network"
      }),
      name: "snippitsQuery"
    }),
    graphql(CREATE_SNIPPIT, {
      options: {
        fetchPolicy: "cache-and-network"
      },
      name: "createSnippit"
    })
  )(MyFormEnhanced)
);

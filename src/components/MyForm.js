import React, {Component} from 'react'
import { withFormik } from 'formik'
import { object, string, array } from 'yup'
// or import * as yup from 'yup' for more than just 'object' and 'string'
// attempting 3rd party input with formik
import MyCodeInput from './form-comps/MyCodeInput'
import MyTypeSelect from './form-comps/MyTypeSelect'
import MyFrameSelect from './form-comps/MyFrameSelect'
import MyLangSelect from './form-comps/MyLangSelect'
import MyNotesInput from './form-comps/MyNotesInput'
import MyKeywordInput from './form-comps/MyKeywordInput'
import MyCompanionInput from './form-comps/MyCompanionInput'
import MyReferenceInput from './form-comps/MyReferenceInput'
import MyNameInput from './form-comps/MyNameInput'
// diagnostics for form input
import DisplayFormikState from './form-comps/DisplayFormikState'
import { clearLog } from '../utils'
import Paper from '@material-ui/core/Paper';
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
      snipName, snipType, language, framework, code, notes, companion,
      keywords, reference, password, newsletter, plan
    }) {
      return {
        snipName: snipName || '',
        snipType: snipType || 'boiler',
        language: language || 'javascript',
        framework: framework || 'react',
        code: code || '',
        notes: notes || '',
        companion: companion || [],
        keywords: keywords || [],
        reference: reference || [],
      }
    },
    validationSchema: object().shape({
      snipName: string().required('You must name your snippit'),
      snipType: string().required('Type is required'),
      language: string().required('Language is required'),
      framework: string().required('Framework is required'),
      code: string().required('Code is required'),
      notes: string(),
      companion: array(),
      refrence: array(),
      keywords: array(),
    }),
    handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
      setTimeout(() => {
        clearLog('submit form values', values)
        if(values.email === 'andrew@test.io') {
          setErrors({ email: 'That email is already taken' })
        } else {
          resetForm()
        }
        setSubmitting(false)
      }, 2000)
      alert('balls!')
      resetForm()
    }
  });

class MyForm extends Component {

  state = {
    clearChips: false
  }

  clearChips = () => {
    const flip = !this.state.clearChips
    this.setState({
      clearChips: flip
    })
  }

  render() {
    const {
      values, dirty, handleSubmit, handleReset, setFieldValue, isSubmitting,
       //touched, errors, setFieldTouched, handleChange, handleBlur,
    } = this.props;

    clearLog('MyForm props', this.props)

    return (
      <Paper >
        <div style={{backgroundColor: "#dd2c00", paddingTop: 10, paddingLeft: '5%', paddingRight: '5%'}}>
          <form  onSubmit={handleSubmit}>
            <Paper>
              <div
                onClick={handleReset}
                style={{marginTop: 8, padding: 10, backgroundColor: '#1b5e20'}}>
            <MyNameInput
              value={values.snipName}
              onChange={setFieldValue}
            />
              </div>
            </Paper>
            <Paper>
              <div style={{padding: 10, backgroundColor: '#1b5e20'}}>
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
              <div style={{marginTop: 8, padding: 10, backgroundColor: '#1b5e20'}}>
                <MyCodeInput
                  value={values.code}
                  onChange={setFieldValue}
                />
              </div>
            </Paper>
            <Paper>
              <div style={{marginTop: 8, padding: 10, backgroundColor: '#1b5e20'}}>
                <MyReferenceInput
                  onChange={setFieldValue}
                  shouldClear={this.state.clearChips}
                />
              </div>
            </Paper>
            <Paper>
              <div style={{marginTop: 8, padding: 10, backgroundColor: '#1b5e20'}}>
                <MyKeywordInput
                  onChange={setFieldValue}
                  shouldClear={this.state.clearChips}
                />
              </div>
            </Paper>
            <Paper>
              <div style={{marginTop: 8, padding: 10, backgroundColor: '#1b5e20'}}>
                <MyCompanionInput
                  onChange={setFieldValue}
                  shouldClear={this.state.clearChips}
                />
              </div>
            </Paper>
            <Paper>
              <div
                onClick={handleReset}
                style={{marginTop: 8, padding: 10, backgroundColor: '#1b5e20'}}>
            <MyNotesInput
              value={values.notes}
              onChange={setFieldValue}
            />
              </div>
            </Paper>
            <Paper>
              <div
                onClick={handleReset}
                style={{marginTop: 8, padding: 10, backgroundColor: '#1b5e20'}}>
                <Button
                  disabled={!dirty || isSubmitting}
                  fullWidth
                  color="primary"
                  variant="raised">
                  Reset
                </Button>
              </div>
            </Paper>
            <Paper>
              <div
                onClick={() => this.clearChips()}
                style={{marginTop: 8, padding: 10, backgroundColor: '#1b5e20'}}>
                <Button
                  fullWidth
                  type="submit"
                  color="primary"
                  variant="raised">
                  Submit
                </Button>
              </div>
            </Paper>
          </form>
          <div >
            <DisplayFormikState {...this.props} />
          </div>
        </div>
      </Paper>
    )
  }
}

export default formikEnhancer(MyForm);

//
// <Form>
//   <div>
//     { touched.email && errors.email && <p>{errors.email}</p> }
//     <Field type="email" name="email" placeholder="Email"/>
//   </div>
//   <div>
//     { touched.password && errors.password && <p>{errors.password}</p> }
//     <Field type="password" name="password" placeholder="Password"/>
//   </div>
//   <label>
//     <Field type="checkbox" name="newsletter" checked={values.newsletter}/>
//     Join our newsletter
//   </label>
//   <Field component="select" name="plan">
//     <option value="free">Free</option>
//     <option value="premium">Premium</option>
//   </Field>
//   <button disabled={isSubmitting}>Submit</button>
// </Form>

// export default withFormik({
//   mapPropsToValues({ email, password, newsletter, plan }) {
//     return {
//       email: email || '',
//       password: password || '',
//       newsletter: newsletter || false,
//       plan: plan || 'free'
//     }
//   },
//   validationSchema: object().shape({
//     email: string().email('Email not valid').required('Email is required'),
//     password: string().min(9, 'Password must be 9 characters or longer').required('Password is required')
//   }),
//   handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
//     setTimeout(() => {
//       if(values.email === 'andrew@test.io') {
//         setErrors({ email: 'That email is already taken' })
//       } else {
//         resetForm()
//       }
//       setSubmitting(false)
//     }, 2000)
//     alert('balls!')
//   }
// })(MyForm)

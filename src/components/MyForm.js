import React from 'react'
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
// diagnostics for form input
import DisplayFormikState from './form-comps/DisplayFormikState'
//
// yup.mixed;
// yup.string;
// yup.number;
// yup.boolean; // also aliased as yup.bool
// yup.date;
// yup.object;
// yup.array;
//
// yup.reach;
// yup.addMethod;
// yup.ValidationError;

const formikEnhancer = withFormik({
    mapPropsToValues({
      snipType, language, framework, code, notes, companion, keywords,
      reference, password, newsletter, plan
    }) {
      return {
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
      snipType: string().required('Type is required'),
      language: string().required('Language is required'),
      framework: string().required('Framework is required'),
      code: string().required('Code is required'),
      notes: string(),
      companion: array(),
    }),
    handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
      setTimeout(() => {
        if(values.email === 'andrew@test.io') {
          setErrors({ email: 'That email is already taken' })
        } else {
          resetForm()
        }
        setSubmitting(false)
      }, 2000)
      alert('balls!')
    }
  });


const MyForm = props => {
  const {
    values,
    //touched,
    dirty,
    //errors,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    setFieldValue,
    //setFieldTouched,
    isSubmitting
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="MyReferenceInput">Enter Reference Links</label>
      <MyReferenceInput
        onChange={setFieldValue}
      />
      <label htmlFor="MyKeywordInput">Enter Keywords</label>
      <MyKeywordInput
        onChange={setFieldValue}
      />
      <label htmlFor="MyCompanionInput">Enter Companion Libs</label>
      <MyCompanionInput
        onChange={setFieldValue}
      />
      <label htmlFor="MyTypeSelect">Selet Type</label>
      <MyTypeSelect
        value={values.snipType}
        onChange={setFieldValue}
      />
      <label htmlFor="MyLangSelect">Selet Language</label>
      <MyLangSelect
        value={values.language}
        onChange={setFieldValue}
      />
      <label htmlFor="MyFrameSelect">Selet Framework</label>
      <MyFrameSelect
        value={values.framework}
        onChange={setFieldValue}
      />
      <MyCodeInput
        value={values.code}
        onChange={setFieldValue}
      />
      <h3>Notes</h3>
      <MyNotesInput
        value={values.notes}
        onChange={setFieldValue}
      />
      <button
        type="button"
        className="outline"
        onClick={handleReset}
        disabled={!dirty || isSubmitting}
      >
        Reset
      </button>
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
      <DisplayFormikState {...props} />
      <label htmlFor="email" style={{ display: "block" }}>
        Email
      </label>
      <input
        id="email"
        placeholder="Enter your email"
        type="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </form>

  )
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

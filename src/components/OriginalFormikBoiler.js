import React from 'react'
import { render } from 'react-dom'
import { withFormik, Form, Field } from 'formik'
import { object, string } from 'yup'
// or import * as yup from 'yup' for more than just 'object' and 'string'
// attempting 3rd party input with formik

const OriginalFormikBoiler = ({
  values,
  errors,
  touched,
  isSubmitting
}) => (
  <Form>
    <div>
      { touched.email && errors.email && <p>{errors.email}</p> }
      <Field type="email" name="email" placeholder="Email"/>
    </div>
    <div>
      { touched.password && errors.password && <p>{errors.password}</p> }
      <Field type="password" name="password" placeholder="Password"/>
    </div>
    <label>
      <Field type="checkbox" name="newsletter" checked={values.newsletter}/>
      Join our newsletter
    </label>
    <Field component="select" name="plan">
      <option value="free">Free</option>
      <option value="premium">Premium</option>
    </Field>
    <button disabled={isSubmitting}>Submit</button>
  </Form>
)

export default withFormik({
  mapPropsToValues({ email, password, newsletter, plan }) {
    return {
      email: email || '',
      password: password || '',
      newsletter: newsletter || false,
      plan: plan || 'free'
    }
  },
  validationSchema: object().shape({
    email: string().email('Email not valid').required('Email is required'),
    password: string().min(9, 'Password must be 9 characters or longer').required('Password is required')
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
})(OriginalFormikBoiler)

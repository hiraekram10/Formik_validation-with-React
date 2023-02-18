import React from 'react'
import { useFormik } from 'formik';
import *as yup from "yup"

const BasicTwo = () => {
  // Third

  const validationSchema = yup.object({
    //npm i yup "library"
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required')
      //only strings accepted as an password
      .matches(/^[abcdefghijklmnopqrstuvwxyz]+$/, "'Is not in correct format"),
  });
  //first step
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("values", values);
    },
  })
  return (
    //second step
    <div>

      <form onSubmit={formik.handleSubmit}>
        <input
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
        // error={}
        // helperText={formik.touched.email && formik.errors.email}
        />
        {/* condition */}
        {
          (formik.touched.email && Boolean(formik.errors.email)) ?
            <span style={{ color: "red" }}>{formik.errors.email}</span> : null
        }


        <br />
        <input
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}

        />
        {
          (formik.touched.password && Boolean(formik.errors.password)) ?
            <span style={{ color: "red" }}>{formik.errors.password}</span> : null
        }

        <br />
        <button type="submit">Submit</button>
      </form>

    </div>
  )
}

export default BasicTwo
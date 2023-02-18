import React from 'react'
import './App.css'
import { Form, Field,Formik } from 'formik';

const Basic = () => {
  return (
    <div>
    <h1>Sign Up</h1>
    <Formik
     className = "formStyle"
      initialValues={{
        fname: 'hira',
        lname: '',
        email: '',
      }}
      onSubmit={(values) => {
        console.log("values",values)
      }}
    >
      <Form>
        <label htmlFor="fname">First Name</label>
        <Field id="firstName" name="fname" placeholder="Jane" />
       <br/>
        <label htmlFor="lastName">Last Name</label>
        <Field id="lastName" name="lname" placeholder="Doe" />
        <br/>
        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
        <br/>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
  )
}

export default Basic


import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextInput, SubmitButton, InputForm } from '../CheckoutElements';


const MainForm = () => {
    return (
        <Formik
        initialValues={{ firstName: '', lastName: '', email: '' }}
        validationSchema={Yup.object({
          divisionName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          personalId: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          email: Yup.string().email('Invalid email address').required('Required'),
          accountNum: Yup.number()
                .lessThan(245, 'You should be one of 245 generals')
                .required('required'),
            keyValidation: Yup.string()
            .required('required to pay')
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <InputForm>
          <label htmlFor="divisionName">Your Division</label>
          <TextInput name="divisionName" type="text" />
          <ErrorMessage name="divisionName" />
          <label htmlFor="personalId">Last Name</label>
          <TextInput name="personalId" type="text" />
          <ErrorMessage name="personalId" />
          <label htmlFor="email">Email Address</label>
          <TextInput name="email" type="email" />
          <ErrorMessage name="email" />
          <label htmlFor="accountNum">Personal Account</label>
          <TextInput name="accountNum" type="number" />
          <ErrorMessage name="accountNum" />
          <label htmlFor="keyValidation">Validation Key</label>
          <TextInput name="keyValidation" type="password" />
          <ErrorMessage name="keyValidation" />
          <SubmitButton type="submit">Submit</SubmitButton>
        </InputForm>
      </Formik>
    )
}

export default MainForm

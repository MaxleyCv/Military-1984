import React from 'react'
import { Formik, ErrorMessage, useField, Form } from 'formik';
import * as Yup from 'yup';
import { TextInput, SubmitButton, InputForm, ErrMessage } from '../checkout/CheckoutElements';
import '../checkout/components/MainForm.css';

import { useHistory } from 'react-router-dom';
import styled from 'styled-components';





const SchemValObjYupYux = Yup.object({
  Name: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  Surname: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  Password: Yup.string()
  .max(20, 'Must be 20 characters or less')
  .required('Required')
});

const RegisterPage = () => {
  let history = useHistory()
    return ( <MainDiv>
        <Formik
        initialValues={{ Name: '', Surname: '', email: '', Password: '',}}
        validationSchema={SchemValObjYupYux}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            localStorage.setItem('accounts', [])
            alert(values);
            resetForm();
            localStorage.setItem('isLogged', true)
            history.push("/");
            setSubmitting(false);
          }, 3000)
        }}
      >
        {props => (
        <Form class="InputForm">
          <CustomTextInput label="Name" name="Name" type="text" />
          <CustomTextInput label="Nikname" name="Surname" type="text"></CustomTextInput>
          <CustomTextInput label="Email Address" name="email" type="email"></CustomTextInput>
          <CustomTextInput label="Password" name="Password" type="password"></CustomTextInput>
          <SubmitButton type="submit"> {props.isSubmitting ? "Adding you...." : "Register"}</SubmitButton>
        </Form>)}
      </Formik>
    </MainDiv>);

}


const MainDiv = styled.div`
    position: absolute;
    top: 20rem;
`



const CustomTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name} className="bal">{label}</label>
      <TextInput {...field} {...props}></TextInput>
      {meta.touched && meta.error ? <ErrMessage> {meta.error}</ErrMessage> : null}
    </>
  );
};  


export default RegisterPage;

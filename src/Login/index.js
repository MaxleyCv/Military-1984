import React from 'react'
import { Formik, ErrorMessage, useField, Form } from 'formik';
import * as Yup from 'yup';
import { TextInput, SubmitButton, InputForm, ErrMessage } from '../checkout/CheckoutElements';
import '../checkout/components/MainForm.css';

import { useHistory } from 'react-router-dom';
import styled from 'styled-components';





const SchemValObjYupYux = Yup.object({
  Name: Yup.string()
    .required('Required'),
  Password: Yup.string()
  .max(20, 'Must be 20 characters or less')
  .required('Required'),
});

const LoginPage = () => {
  localStorage.setItem('isLogged', false);
  let history = useHistory();
    return ( <MainDiv>
        <Formik
        initialValues={{ Name: '', Password: '',}}
        validationSchema={SchemValObjYupYux}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            let users = JSON.parse(localStorage.getItem('users'))
            if (users == null){
              users = [];
            }
            let selected_users =  users.filter((us) => {if (us.Surname == values.Name && us.Password == values.Password) return true })
            if (selected_users[0]){
              localStorage.setItem('isLogged', true);
              alert("Successful login");
            }
            else {
              alert("wrong password or nickname")
            }
            alert(localStorage.getItem('isLogged'));
            history.push("/");
            setSubmitting(false);
            resetForm();
          }, 3000)
        }}
      >
        {props => (
        <Form class="InputForm">
          <CustomTextInput label="Nikname" name="Name" type="text"></CustomTextInput>
          <CustomTextInput label="Password" name="Password" type="password"></CustomTextInput>
          <SubmitButton type="submit"> {props.isSubmitting ? "Checking...." : "Log in"}</SubmitButton>
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


export default LoginPage;

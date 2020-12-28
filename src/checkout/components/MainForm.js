import React from 'react'
import { Formik, ErrorMessage, useField, Form } from 'formik';
import * as Yup from 'yup';
import { TextInput, SubmitButton, InputForm, ErrMessage } from '../CheckoutElements';
import './MainForm.css';
import {useDispatch} from 'react-redux';
import { clear } from '../../actions/ClearAction';
import { useHistory } from 'react-router-dom';


const SchemValObjYupYux = Yup.object({
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
    .matches(/[A-Z][0-9][A-Z]/),
});

const MainForm = () => {
  const dispatch = useDispatch();
  let history = useHistory()
    return (
        <Formik
        initialValues={{ divisionName: '', personalId: '', email: '', keyValidation: '', accountNum: '' }}
        validationSchema={SchemValObjYupYux}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
            history.push("checkout/success");
            setSubmitting(false);
            dispatch(clear());
          }, 3000)
        }}
      >
        {props => (
        <Form class="InputForm">
          <CustomTextInput label="Your Division" name="divisionName" type="text" />
          <CustomTextInput label="Personal Id" name="personalId" type="text"></CustomTextInput>
          <CustomTextInput label="Email Address" name="email" type="email"></CustomTextInput>
          <CustomTextInput label="Personal Account" name="accountNum" type="number" ></CustomTextInput>
          <CustomTextInput label="Validation Key" name="keyValidation" type="password"></CustomTextInput>
          <SubmitButton type="submit"> {props.isSubmitting ? "Submiting...." : "Submit"}</SubmitButton>
        </Form>)}
      </Formik>
    )
}



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


export default MainForm;
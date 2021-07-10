import { ErrorMessage, Form, Formik } from 'formik';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { Button, Header } from 'semantic-ui-react';
import MyTextInput from '../../app/common/form/MyTextInput';
import { useStore } from '../../app/stores/store';
import * as Yup from 'yup';
import ValidationError from '../errors/ValidationError';

const RegisterForm = () => {
  const { userStore } = useStore();
  const { register } = userStore;

  const [userFormValues] = useState({
    email: '',
    password: '',
    displayName: '',
    username: '',
    error: null,
  });

  return (
    <Formik
      initialValues={userFormValues}
      onSubmit={(values, { setErrors, setSubmitting }) => {
        register(values)
          .then(() => setSubmitting(false))
          .catch((error) => {
            setErrors({ error });
            setSubmitting(false);
          });
      }}
      validationSchema={Yup.object({
        displayName: Yup.string().required(),
        username: Yup.string().required(),
        email: Yup.string().required().email(),
        password: Yup.string().required(),
      })}>
      {({ handleSubmit, isSubmitting, errors, isValid, dirty }) => (
        <Form className='ui form error' onSubmit={handleSubmit} autoComplete='off'>
          <Header as='h2' content='Sign up to Eventify' color='teal' textAlign='center' />
          <MyTextInput name='displayName' placeholder='Display Name' />
          <MyTextInput name='username' placeholder='Username' />
          <MyTextInput name='email' placeholder='Email' />
          <MyTextInput name='password' placeholder='Password' type='password' />
          <ErrorMessage name='error' render={() => <ValidationError errors={errors.error} />} />
          <Button disabled={!isValid || !dirty || isSubmitting} loading={isSubmitting} positive content='Submit' type='submit' fluid />
        </Form>
      )}
    </Formik>
  );
};

export default observer(RegisterForm);

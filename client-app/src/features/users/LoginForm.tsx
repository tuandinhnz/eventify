import { ErrorMessage, Form, Formik } from 'formik';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { Button, Header, Label } from 'semantic-ui-react';
import MyTextInput from '../../app/common/form/MyTextInput';
import { useStore } from '../../app/stores/store';

const LoginForm = () => {
  const { userStore } = useStore();
  const { login } = userStore;

  const [userFormValues] = useState({
    email: '',
    password: '',
    error: null,
  });

  return (
    <Formik
      initialValues={userFormValues}
      onSubmit={(values, { setErrors, setSubmitting }) => {
        login(values)
          .then(() => setSubmitting(false))
          .catch((error) => {
            setErrors({ error: 'Invalid email or password' });
            setSubmitting(false);
          });
      }}>
      {({ handleSubmit, isSubmitting, errors }) => (
        <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
          <Header as='h2' content='Login to Eventify' color='teal' textAlign='center' />
          <MyTextInput name='email' placeholder='Email' />
          <MyTextInput name='password' placeholder='Password' type='password' />
          <ErrorMessage name='error' render={() => <Label style={{ marginBottom: 10 }} basic color='red' content={errors.error} />} />
          <Button loading={isSubmitting} positive content='Login' type='submit' fluid />
        </Form>
      )}
    </Formik>
  );
};

export default observer(LoginForm);

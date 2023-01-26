import React from 'react';
import { Formik, Form, Field } from 'formik';
import { signUp } from '../../api';

const SignUp = () => {

    const initialValues = {
        firstName: '',
        lastName: '',
        birthday: new Date(),
        email: '',
        password: ''
    }

    const submitHandler = (values, actions) => {
        signUp(values)
            .then(data => console.log(data))
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={submitHandler}
        >
            {(props) => (
                <Form>
                    <Field name='firstName' placeholder='firstName' />
                    <Field name='lastName' placeholder='lastName' />
                    <Field name='birthday' type="date" placeholder='birthday' />
                    <Field name="email" placeholder="Type your email" />
                    <Field name="password" placeholder="Type your password" />
                    <button type="submit">Send!</button>
                </Form>
            )}
        </Formik>
    );
}

export default SignUp;

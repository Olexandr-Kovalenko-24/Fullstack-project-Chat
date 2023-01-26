import React from 'react';
import { Formik, Form, Field } from 'formik';
import { signIn } from '../../api';

const SignIn = () => {

    const initialValues = {
        email: '',
        password: ''
    }

    const submitHandler = (values, actions) => {
        signIn(values)
            .then(data => console.log(data))
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={submitHandler}
        >
            {(props) => (
                <Form>
                    <Field name="email" placeholder="Type your email" />
                    <Field name="password" placeholder="Type your password" />
                    <button type="submit">Send!</button>
                </Form>
            )}
        </Formik>
    );
}

export default SignIn;

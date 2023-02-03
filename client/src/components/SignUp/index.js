import React from 'react';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import {registerUserAction} from '../../actions/actionCreators';

const SignUp = (props) => {

    const initialValues = {
        firstName: '',
        lastName: '',
        birthday: new Date(),
        email: '',
        password: ''
    }

    const submitHandler = (values, actions) => {
        props.sendRequest(values);
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={submitHandler}
        >
            {(formikProps) => (
                <Form>
                    <Field name='firstName' placeholder='firstName' />
                    <Field name='lastName' placeholder='lastName' />
                    <Field name='birthday' type="date" placeholder='birthday' />
                    <Field name="email" placeholder="Type your email" />
                    <Field name="password" placeholder="Type your password" />
                    {props.error && <div>{props.error}</div>}
                    <button type="submit">Send!</button>
                </Form>
            )}
        </Formik>
    );
}

const mapStateToProps = ({error}) => ({error})

const mapDispatchToProps = {
    sendRequest: registerUserAction
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

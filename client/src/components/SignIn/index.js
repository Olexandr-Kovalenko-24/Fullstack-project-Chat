import React from 'react';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import {loginUserAction} from '../../actions/actionCreators';

const SignIn = (props) => {

    const initialValues = {
        email: '',
        password: ''
    }

    const submitHandler = (values, actions) => {
        props.sendRequest(values)
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={submitHandler}
        >
            {(formikProps) => (
                <Form>
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
    sendRequest: loginUserAction
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

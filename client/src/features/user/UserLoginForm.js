import React from 'react';
import { FormGroup, Input, Label, Button, Col} from 'reactstrap';
import {Formik, Field, Form, ErrorMessage } from 'formik';
import {setCurrentUser} from './userSlice';
import { validateLogin } from '../../utils/validateLogin';
import { useSelector, useDispatch } from 'react-redux';


const UserLoginForm = () => {
    // const currentUser = useSelector(selectCurrentUser);
    const dispatch = useDispatch();

    const handleSubmit = (values, { resetForm }) => {
        console.log(values);
        console.log('JSON format: ', JSON.stringify(values));
        resetForm();
        const currentUser = {
            id: 21,
            username: values.email,
            password: values.password
        };
        // dispatch(setCurrentUser(currentUser));
    };
    return (
        <div className='content'>
        <div className='content-fluid'>
            <div className='lock-container login-container'>
            <div className="text-center loginForm">
                <main className="form-signin w-100 m-auto">   
                <img className="mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                <Formik
                    initialValues={{
                    email: "",
                    password: "",
                }}
                onSubmit={handleSubmit}
                validate={validateLogin}
                >
                    <Form>
                    <FormGroup row>
                        <Label htmlFor="email" md='2'>Email</Label>
                        <Col md='10'>
                        <Field type="email" name="email" id="email" placeholder="with a placeholder" />
                        <ErrorMessage name="email">
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="password" md='2'>Password</Label>
                        <Col md='10'>
                        <Field type="password" name="password" id="password" placeholder="password placeholder" />
                        <ErrorMessage name="password">
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Button className="btn login-submit" type='submit' color='primary'>Submit</Button><br></br>
                    </FormGroup>
                    <FormGroup row>
                        <a href="#" class="forgot-password">Forgot password?</a>
                    </FormGroup>
                    </Form>
                </Formik>
                </main>
            </div>
            </div>
        </div>
        </div>
        
    )
};

export default UserLoginForm
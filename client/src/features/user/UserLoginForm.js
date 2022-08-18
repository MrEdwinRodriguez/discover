import React from 'react';
import { FormGroup, Input, Label, Button, Col} from 'reactstrap';
import {Formik, Field, Form, ErrorMessage } from 'formik';
import {setCurrentUser, loginUser} from './userSlice';
import { validateLogin } from '../../utils/validateLogin';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router';


const UserLoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (values, { resetForm}) => {
        console.log(values);
        console.log('JSON format: ', JSON.stringify(values));
        resetForm();
        const currentUser = {
            id: "62f10696f32c6b32beaf59c3",
            username: 'testing@aol.com',
            password: 'password'
        };
        dispatch(loginUser(currentUser))
        .then(() => {
            console.log('line 25')
            navigate('/timeline')
        });
    };
    return (
        <div className='content landing'>
        <div className='content-fluid'>
            <div className='lock-container login-container'>
            <div className="text-center loginForm panel panel-default">
                <main className="form-signin">   
                {/* <img className="mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" /> */}
                <h1 className="h3">Sign In</h1>
                <Formik
                    initialValues={{
                    email: "",
                    password: "",
                }}
                onSubmit={handleSubmit}
                validate={validateLogin}
                >
                    <Form>
                        <div className="panel-body">
                    <FormGroup row>
                        <Col md='12'>
                        <Field type="email" name="email" id="email" placeholder="Email" className="form-control" />
                        <ErrorMessage name="email">
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md='12'>
                        <Field type="password" name="password" id="password" placeholder="Password" className="form-control" />
                        <ErrorMessage name="password">
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Button className="login-submit" type='submit' color='primary'>Submit</Button><br></br>
                    </FormGroup>
                    <FormGroup row>
                        <a href="#" class="forgot-password">Forgot password?</a>
                    </FormGroup>
                    </div>
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
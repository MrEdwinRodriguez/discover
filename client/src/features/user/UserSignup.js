import React from 'react';
// import {Form, FormGroup, Input, Label, Button} from 'reactstrap';
import { FormGroup, Input, Label, Button, Col} from 'reactstrap';
import {registerUser} from './userSlice';
import { useDispatch } from 'react-redux';
import {Formik, Field, Form, ErrorMessage } from 'formik';
import { validateSignup } from '../../utils/validateSignup';
const UserSignUp = () => {
	const dispatch = useDispatch();
	const handleSubmit = (values, { resetForm }) => {
			console.log(values);
			console.log('JSON format: ', JSON.stringify(values));
			const newUser = {
				username: 'testing@aol.com',
				password: 'password',
				first_name: 'Test',
				last_name: 'Person',
			};
			dispatch(registerUser(newUser));
			resetForm();
			};
  	return (
    	<div className='content landing'>
      		<div className='content-fluid'>
        		<div className='lock-container login-container'>
          			<div className="text-center panel panel-default signupForm">
           	 			<main className="form-signin w-100 m-auto">   
              				<h1 className="h3 sign-in">Sign Up</h1>
							<Formik
								initialValues={{
									firstName: "",
									lastName: "",
									email: "",
									password: "",
									password2: "",
							}}
							onSubmit={handleSubmit}
							validate={validateSignup}
							>
							<Form>
							<FormGroup row>
								<Col md='12'>
								<Field type="text" name="firstName" id="firstName" placeholder="First Name" className="form-control" />
								<ErrorMessage name="firstName">
									{(msg) => <p className='text-danger'>{msg}</p>}
								</ErrorMessage>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Col md='12'>
								<Field type="text" name="lastName" id="lastName" placeholder="Last Name" className="form-control" />
								<ErrorMessage name="lastName">
									{(msg) => <p className='text-danger'>{msg}</p>}
								</ErrorMessage>
								</Col>
							</FormGroup>
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
								<Col md='12'>
								<Field type="password" name="password2" id="password2" placeholder="Confirm Password" className="form-control" />
								<ErrorMessage name="password2">
									{(msg) => <p className='text-danger'>{msg}</p>}
								</ErrorMessage>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Button className="login-submit" type='submit' color='primary'>Submit</Button><br></br>
							</FormGroup>
							</Form>
              			</Formik>
            		</main>
          		</div>
        	</div>
      	</div>
    </div>
    
  )
}

export default UserSignUp
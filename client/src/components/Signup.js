import React from 'react';
// import {Form, FormGroup, Input, Label, Button} from 'reactstrap';
import { FormGroup, Input, Label, Button, Col} from 'reactstrap';
import {Formik, Field, Form, ErrorMessage } from 'formik';
import { validateSignup } from '../utils/validateSignup';
const Signup = () => {
const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    console.log('JSON format: ', JSON.stringify(values));
    resetForm();
    };
  	return (
    	<div className='content'>
      		<div className='content-fluid'>
        		<div className='lock-container login-container'>
          			<div className="text-center signupForm">
           	 			<main className="form-signin w-100 m-auto">   
              				<img className="mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
              				<h1 className="h3 mb-3 fw-normal">Sign Up</h1>
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
								<Label htmlFor="firstName" md='2'>First Name</Label>
								<Col md='10'>
								<Field type="text" name="firstName" id="firstName" placeholder="First Name" />
								<ErrorMessage name="firstName">
									{(msg) => <p className='text-danger'>{msg}</p>}
								</ErrorMessage>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label htmlFor="lastName" md='2'>Last Name</Label>
								<Col md='10'>
								<Field type="text" name="lastName" id="lastName" placeholder="Last Name" />
								<ErrorMessage name="lastName">
									{(msg) => <p className='text-danger'>{msg}</p>}
								</ErrorMessage>
								</Col>
							</FormGroup>
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
								<Label htmlFor="password2" md='2'>Confirm password2</Label>
								<Col md='10'>
								<Field type="password" name="password2" id="password2" placeholder="password placeholder" />
								<ErrorMessage name="password2">
									{(msg) => <p className='text-danger'>{msg}</p>}
								</ErrorMessage>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Button className="btn login-submit" type='submit' color='primary'>Submit</Button><br></br>
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

export default Signup
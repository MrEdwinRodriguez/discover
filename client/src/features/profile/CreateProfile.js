import React from 'react';
// import {Form, FormGroup, Input, Label, Button} from 'reactstrap';
import { FormGroup, Input, Label, Button, Col} from 'reactstrap';
import {registerUser} from './userSlice';
import { useDispatch } from 'react-redux';
import {Formik, Field, Form, ErrorMessage } from 'formik';
import { validateSignup } from '../../utils/validateSignup';
const CreateProfile = () => {
	const dispatch = useDispatch();
	const handleSubmit = (values, { resetForm }) => {
			console.log(values);
			console.log('JSON format: ', JSON.stringify(values));
			const newUser = {
                username: "sigmarican",
                country: 1,
                state: 12,
                city: 'Orlando',
                description: "You know me.",
			};
			dispatch(registerUser(newUser));
			resetForm();
			};
  	return (
    	<div className='content'>
      		<div className='content-fluid'>
        		<div className='lock-container login-container'>
          			<div className="text-center panel panel-default signupForm">
           	 			<main className="form-signin w-100 m-auto">   
              				<h1 className="h3 sign-in">Create Profile</h1>
							<Formik
								initialValues={{
									username: "",
									country: 1,
                                    state: "",
                                    city: "",
									description: "",
                                    
							}}
							onSubmit={handleSubmit}
							validate={validateSignup}
							>
							<Form>
							<FormGroup row>
								<Col md='12'>
								<Field type="text" name="userName" id="userName" placeholder="Nick Name/ Username" className="form-control" />
								<ErrorMessage name="userName">
									{(msg) => <p className='text-danger'>{msg}</p>}
								</ErrorMessage>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Col md='12'>
								<Field type="text" name="city" id="city" placeholder="City" className="form-control" />
								<ErrorMessage name="city">
									{(msg) => <p className='text-danger'>{msg}</p>}
								</ErrorMessage>
								</Col>
							</FormGroup>
                            <FormGroup row>
								<Col md='12'>
								<Field type="text" name="state" id="state" placeholder="State" className="form-control" />
								<ErrorMessage name="state">
									{(msg) => <p className='text-danger'>{msg}</p>}
								</ErrorMessage>
								</Col>
							</FormGroup>
                            <FormGroup row>
								<Col md='12'>
								<Field type="text" name="country" id="country" placeholder="Country" className="form-control" />
								<ErrorMessage name="country">
									{(msg) => <p className='text-danger'>{msg}</p>}
								</ErrorMessage>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Col md='12'>
								<Field type="text" name="description" id="description" placeholder="Talk about yourself" className="form-control" />
								<ErrorMessage name="description">
									{(msg) => <p className='text-danger'>{msg}</p>}
								</ErrorMessage>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Button className="login-submit" type='submit' color='primary'>Create Profile</Button><br></br>
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

export default CreateProfile
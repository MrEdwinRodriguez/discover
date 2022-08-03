import React from 'react';
import {Form, FormGroup, Input, Label, Button} from 'reactstrap';

const Signup = () => {
  return (
    <div className='content'>
      <div className='content-fluid'>
        <div className='lock-container login-container'>
          <div className="text-center loginForm">
            <main className="form-signin w-100 m-auto">   
              <img className="mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
              <h1 className="h3 mb-3 fw-normal">Sign Up</h1>
              <Form>
              <FormGroup>
                  <Label for="firstName">First Name</Label>
                  <Input type="text" name="firstName" id="firstName" placeholder="First Name" />
                </FormGroup>
                <FormGroup>
                  <Label for="lastName">Last Name</Label>
                  <Input type="text" name="lastName" id="lastName" placeholder="Last Name" />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                </FormGroup>
                <Button className="btn btn-primary login-submit">Submit</Button><br></br>
                <FormGroup>
                <a href="#" class="forgot-password">Forgot password?</a>
                </FormGroup>
              </Form>
            </main>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Signup
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import Navbars from './Navbars';
import { signUp } from './services/user.service';


const Register = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  // handle change
  const handleChange = (event, property) => {
    //dynamic setting the values
    setData({ ...data, [property]: event.target.value });
  };

  //reseting the form
  const resetData = () => {
    setData({
      username: "",
      email: "",
      password: ""
    });
  };

  //submit the form
  const submitForm = (event) => {
    event.preventDefault();

    if (error.isError) {
      toast.error("Please Fill all the necessary details ");
      setError({ ...error, isError: false })
      return;
    }

    console.log(data);
    //data validate

    //call server api for sending data
    signUp(data)
      .then((resp) => {
        console.log(resp);
        console.log("success log");
        toast.success("User is registered successfully !! user id " + resp.id);
        setData({
          username: "",
          email: "",
          password: ""
          
        });
      })
      .catch((error) => {
        console.log(error);
        console.log("Error log");
        toast.error("Something Went Wrong")
        //handle errors in proper way
        setError({
          errors: error,
          isError: true,
        });
      });
  };
  return (
    <section>
    <Navbars/>
    <div className='flex flex-row justify-evenly bg-sky-200 items-center'>
      <img
        className="w-80 h-100 flex"
        src="https://static.toiimg.com/photo/62414484.cms"
        alt="Your Company"
      />
      <Form className='w-80 mt-2  p-4 pb-0 border-solid border-2 border-indigo-600 m-2 ' onSubmit={submitForm}>

        <Form.Group className="mb-4" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" fullWidth
            onChange={(e) => handleChange(e, "username")}
            value={data.username}
            invalid={
              error.errors?.response?.data?.name ? true : false
            }
          />
        </Form.Group>
       
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" fullWidth
            onChange={(e) => handleChange(e, "email")}
            value={data.email}
            invalid={
              error.errors?.response?.data?.email ? true : false
            } />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" fullWidth
            onChange={(e) => handleChange(e, "password")}
            value={data.password}
            invalid={
              error.errors?.response?.data?.password ? true : false
            } />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" >
          Submit
        </Button>
        <Button
          onClick={resetData}
          color="secondary"
          type="reset"
          className="ms-2"
        >
          Reset
        </Button>
      </Form>
    </div>
    </section>
  )
}

export default Register
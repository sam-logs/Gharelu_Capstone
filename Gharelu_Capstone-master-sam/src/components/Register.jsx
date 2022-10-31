import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { signUp } from './services/user.service';

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    intrest: "",
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
      name: "",
      email: "",
      mobile: "",
      password: "",
      intrest: "",
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
          name: "",
          email: "",
          mobile: "",
          password: "",
          intrest: "",
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
    <div className='flex flex-row justify-evenly bg-sky-200 items-center'>
      <img
        className="w-80 h-100 flex"
        src="https://i.pinimg.com/originals/c0/6e/13/c06e1328d3bb16563d2f6a918921aeb0.png"
        alt="Your Company"
      />
      <Form className='w-80 mt-2  p-4 pb-0 border-solid border-2 border-indigo-600 m-2 ' onSubmit={submitForm}>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" fullWidth
            onChange={(e) => handleChange(e, "name")}
            value={data.name}
            invalid={
              error.errors?.response?.data?.name ? true : false
            }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control type="text" placeholder="Enter MobileNo." fullWidth
            onChange={(e) => handleChange(e, "mobile")}
            value={data.mobile}
            invalid={
              error.errors?.response?.data?.mobile ? true : false
            }
          />
        </Form.Group>
        <Form.Select aria-label="Default select example" fullWidth onChange={(e) => handleChange(e, "intrest")}
          value={data.intrest}
          invalid={
            error.errors?.response?.data?.about ? true : false
          } >
          <option>Choose Your Intrests </option>
          <option value="Flats">Flats</option>
          <option value="Hotels">Hotels</option>
          <option value="Pubs">Pubs</option>
          <option value="Betting">Betting</option>
          <option value="Casino">Casino</option>
          <option value="Racing">Racing</option>

        </Form.Select>
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
  )
}

export default Register
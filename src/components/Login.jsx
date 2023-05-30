import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import  userContext  from './userContext'
import { loginUser } from './services/user.service';
import { doLogin } from './auth';
import Navbars from './Navbars';




const Login = () => {
 const userContextData = useContext(userContext);

const navigate = useNavigate();

const [loginDetail, setLoginDetail] = useState({
  username: "",
  password: "",
});

const handleChange = (event, field) => {
  let actualValue = event.target.value;
  setLoginDetail({
    ...loginDetail,
    [field]: actualValue,
  });
};

const handleReset = () => {
  setLoginDetail({
    username: "",
    password: "",
  });
};

const handleFormSubmit = (event) => {
  event.preventDefault();
  //console.log(loginDetail);
  
  //validation
  if (
    loginDetail.username.trim() === "" ||
    loginDetail.password.trim() === ""
  ) {
    toast.error("Username or Password  is required !!");
    return;
  }

  //submit the data to server to generate token
  loginUser(loginDetail)
    .then((data) => {
      console.log(data)
      toast.success("login successfull")

      //local storage
      doLogin(data, () => {
        console.log("login detail is saved to localstorage");
        // userContextData.setUser({
        //   data: data.user,
        //   login: true,
        // });
        navigate("/home");
     });
    })
    .catch((error) => {
      console.log(error);
      if (error.response.status === 400 || error.response.status === 404) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Something went wrong  on sever !!");
      }
    });
};

  

  return (
    <section id='login' className='h-100'>
      {/* <Portfolio/> */}
      <Navbars/>
      {/* <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8"> */}
        <div className="w-full flex justify-center justify-items-center mt-5 min-h-full ">
          <div className=''>
            <img
              className="" style={{maxWidth: '800px', maxHeight: '700px'}}
              src="https://s01.sgp1.cdn.digitaloceanspaces.com/article/126893-oltgfwpczd-1567744532.jpg"
              alt="Gharelu"
            />
            
          </div>
          <div className='w-80 mt-2  p-4 pb-0 border-solid border-2 border-indigo-600 ml-8'>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
            <form className="mt-8 space-y-6"  method="POST" onSubmit={handleFormSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  UserName
                </label>
                <input
                  id="email-address"
                  name="username"
                  type="text"
                  autoComplete=""
                  required 
                  value={loginDetail.username}
                  onChange={(e) => handleChange(e,'username')}
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Username"
                />
                {/* {
                  emailError ? <span style={{ color: 'red', fontSize: '12px' }}>{emailError}</span> : ''
                } */}
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={loginDetail.password}
                  onChange={(e) => handleChange(e,'password')}
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
                {/* {
                  passwordError ? <span style={{ color: 'red', fontSize: '12px' }}>{passwordError}</span> : ''
                } */}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
              
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Sign in
              </button>
              <button onClick={handleReset} className='group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>Reset </button>
            </div>
          </form>
          </div>
          
        </div>
      {/* </div> */}

      
    </section>
  )
}

export default Login
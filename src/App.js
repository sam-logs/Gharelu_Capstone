import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Services from "./components/Services";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from './components/Register';
import "react-toastify/dist/ReactToastify.css";
import { createContext, useReducer } from 'react';
import { initialState, reducer } from './components/reducer/UseReducer';
import Success from './components/Success';
import ProfileInfo from './components/Profileinfo';

import Privateroute from './components/Privateroute';
import UserProvider from './UserProvider';
import Transport from './components/Transport';
 import Aminities from './components/Aminities';
import UpdateUser from './components/UpdateUser';



export const UserContext = createContext();
const Routing = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/home" exact element={<Home />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path='/' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/success' element={<Success />}></Route>
          <Route path='/profile-info/:userId' element={<ProfileInfo />} />
          <Route path='/user' element={<Privateroute />} />
          <Route path='/transport' element={<Transport/>}/>
          <Route path='/basic' element={<Aminities/>}/>
          <Route path='/update-user/:userId' element={<UpdateUser/>}/> 

        </Routes>
      </Router>
    </UserProvider>
  )
}


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (

    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <ToastContainer position="bottom-center" />
        <Routing />
      </UserContext.Provider>
    </>

  );
}

export default App;

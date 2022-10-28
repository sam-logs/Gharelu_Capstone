import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Services from "./components/Services";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import Login from "./components/Login";
import Home from "./components/Home";
import Navbars from "./components/Navbars";
import Register from './components/Register';
import "react-toastify/dist/ReactToastify.css";
import { createContext, useReducer } from 'react';
import { initialState, reducer } from './components/reducer/UseReducer';
import Success from './components/Success';
import ProfileInfo from './components/Profileinfo';
import Translator from './components/Translate'


export const UserContext = createContext();
const Routing = () => {
  return(
  <Router>
          <Routes>
            <Route path="/home" exact element={<Home />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path='/' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/success' element={<Success />}></Route>
             <Route path='/profile-info' element={<ProfileInfo/>}/>
             <Route path='/translator' element={<Translator/>}/>
          </Routes>
        </Router>
        )
}



function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  


  return (

    <>
      <UserContext.Provider value={{ state, dispatch }}>
      <ToastContainer position="bottom-center" />
        <Navbars />
        <Routing />
        
      </UserContext.Provider>
    </>

  );
}

export default App;

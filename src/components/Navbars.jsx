import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
//import userContext from './userContext'
import { isLoggedIn, getCurrentUserDetail } from './auth';
import { doLogout } from './auth';
import { CgProfile } from 'react-icons/cg'
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';



const Navbars = () => {
  // const userContextData = useContext(userContext)
  const [login, setLogin] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {

    setLogin(isLoggedIn())
    setUser(getCurrentUserDetail())

  }, [login])


  const logout = () => {
    doLogout(() => {
      //logged out
      setLogin(false)
      // userContextData.setUser({
      //     data: null,
      //     login: false
      // })

      window.location.href = '/success';
    })
  }



  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">BSRTC</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className='ml-auto'>
            {
              login && (
                <>
                  <Nav className="me-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                  </Nav>
                  <Nav.Link href="#portfolio">Varities</Nav.Link>
                  <NavDropdown title="Services" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/transport">Transport</NavDropdown.Item>
                    <NavDropdown.Item href="/translator"> Airlines</NavDropdown.Item>
                    <NavDropdown.Item href="/basic">Hotels</NavDropdown.Item>
                    <NavDropdown.Divider />
                  </NavDropdown>
                  <Dropdown>
                    <Dropdown.Toggle variant="info" id="dropdown-basic">
                      <CgProfile />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {/* <Dropdown.Item >{user.username}</Dropdown.Item> */}
                      <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                      {/* <Dropdown.Item ><Link to={`/profile-info/${user.id}`}>UserProfile</Link></Dropdown.Item> */}
                    </Dropdown.Menu>
                  </Dropdown>

                </>
              )
            }
            {
              !login && (
                <>
                  <Nav.Link href='/' >SignIn</Nav.Link>
                  <Nav.Link eventKey={2} href="/register">
                    Register
                  </Nav.Link>
                </>

              )
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbars